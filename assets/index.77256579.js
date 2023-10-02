import {c as me, u as le, L as Ye, P as Xe, d as $e, m as ye, e as Me} from "./request.894b30ad.js";
import {c as p, t as _, n as O, e as F, u as ze, O as he, Q as ge, R as Ee, S as Re, l as we, T as ue, U as G, p as J, V as k, w as Ce, j as De, x as K, W as Pe, X as Ze, A as ke, z as Ae, h as ve, m as de, H as Ne, I as He, N as We, f as _e} from "./index.8c2cf8d9.js";
import {d as ee, r as j, s as te, q as C, B as A, k as ce, x as Be, y as Fe, v as Le, c as P, z as re, G as xe} from "./index.f208d6e8.js";
import {I as Ue} from "./index.78c40c67.js";
const [Se,Q] = p("swipe")
  , je = {
    loop: _,
    width: O,
    height: O,
    vertical: Boolean,
    autoplay: F(0),
    duration: F(500),
    touchable: _,
    lazyRender: Boolean,
    initialSwipe: F(0),
    indicatorColor: String,
    showIndicators: _,
    stopPropagation: _
}
  , be = Symbol(Se);
var qe = ee({
    name: Se,
    props: je,
    emits: ["change", "dragStart", "dragEnd"],
    setup(e, {emit: d, slots: m}) {
        const t = j()
          , s = j()
          , o = te({
            rect: null,
            width: 0,
            height: 0,
            offset: 0,
            active: 0,
            swiping: !1
        });
        let y = !1;
        const h = me()
          , {children: b, linkChildren: r} = ze(be)
          , n = C(()=>b.length)
          , v = C(()=>o[e.vertical ? "height" : "width"])
          , w = C(()=>e.vertical ? h.deltaY.value : h.deltaX.value)
          , M = C(()=>o.rect ? (e.vertical ? o.rect.height : o.rect.width) - v.value * n.value : 0)
          , z = C(()=>v.value ? Math.ceil(Math.abs(M.value) / v.value) : n.value)
          , D = C(()=>n.value * v.value)
          , I = C(()=>(o.active + n.value) % n.value)
          , N = C(()=>{
            const i = e.vertical ? "vertical" : "horizontal";
            return h.direction.value === i
        }
        )
          , u = C(()=>{
            const i = {
                transitionDuration: `${o.swiping ? 0 : e.duration}ms`,
                transform: `translate ${e.vertical ? "Y" : "X"}(${o.offset}px)`
            };
            if (v.value) {
                const g = e.vertical ? "height" : "width"
                  , f = e.vertical ? "width" : "height";
                i[g] = `${D.value}px`,
                i[f] = e[f] ? `${e[f]}px` : ""
            }
            return i
        }
        )
          , E = i=>{
            const {active: g} = o;
            return i ? e.loop ? k(g + i, -1, n.value) : k(g + i, 0, z.value) : g
        }
          , S = (i,g=0)=>{
            let f = i * v.value;
            e.loop || (f = Math.min(f, -M.value));
            let $ = g - f;
            return e.loop || ($ = k($, M.value, 0)),
            $
        }
          , R = ({pace: i=0, offset: g=0, emitChange: f})=>{
            if (n.value <= 1)
                return;
            const {active: $} = o
              , X = E(i)
              , U = S(X, g);
            if (e.loop) {
                if (b[0] && U !== M.value) {
                    const ne = U < M.value;
                    b[0].setOffset(ne ? D.value : 0)
                }
                if (b[n.value - 1] && U !== 0) {
                    const ne = U > 0;
                    b[n.value - 1].setOffset(ne ? -D.value : 0)
                }
            }
            o.active = X,
            o.offset = U,
            f && X !== $ && d("change", I.value)
        }
          , H = ()=>{
            o.swiping = !0,
            o.active <= -1 ? R({
                pace: n.value
            }) : o.active >= n.value && R({
                pace: -n.value
            })
        }
          , ae = ()=>{
            H(),
            h.reset(),
            G(()=>{
                o.swiping = !1,
                R({
                    pace: -1,
                    emitChange: !0
                })
            }
            )
        }
          , q = ()=>{
            H(),
            h.reset(),
            G(()=>{
                o.swiping = !1,
                R({
                    pace: 1,
                    emitChange: !0
                })
            }
            )
        }
        ;
        let V;
        const W = ()=>clearTimeout(V)
          , B = ()=>{
            W(),
            +e.autoplay > 0 && n.value > 1 && (V = setTimeout(()=>{
                q(),
                B()
            }
            , +e.autoplay))
        }
          , a = (i=+e.initialSwipe)=>{
            if (!t.value)
                return;
            const g = ()=>{
                var f, $;
                if (!ue(t)) {
                    const X = {
                        width: t.value.offsetWidth,
                        height: t.value.offsetHeight
                    };
                    o.rect = X,
                    o.width = +((f = e.width) != null ? f : X.width),
                    o.height = +(($ = e.height) != null ? $ : X.height)
                }
                n.value && (i = Math.min(n.value - 1, i),
                i === -1 && (i = n.value - 1)),
                o.active = i,
                o.swiping = !0,
                o.offset = S(i),
                b.forEach(X=>{
                    X.setOffset(0)
                }
                ),
                B()
            }
            ;
            ue(t) ? re().then(g) : g()
        }
          , l = ()=>a(o.active);
        let c;
        const Y = i=>{
            !e.touchable || i.touches.length > 1 || (h.start(i),
            y = !1,
            c = Date.now(),
            W(),
            H())
        }
          , x = i=>{
            e.touchable && o.swiping && (h.move(i),
            N.value && (!e.loop && (o.active === 0 && w.value > 0 || o.active === n.value - 1 && w.value < 0) || (J(i, e.stopPropagation),
            R({
                offset: w.value
            }),
            y || (d("dragStart", {
                index: I.value
            }),
            y = !0))))
        }
          , Z = ()=>{
            if (!e.touchable || !o.swiping)
                return;
            const i = Date.now() - c
              , g = w.value / i;
            if ((Math.abs(g) > .25 || Math.abs(w.value) > v.value / 2) && N.value) {
                const $ = e.vertical ? h.offsetY.value : h.offsetX.value;
                let X = 0;
                e.loop ? X = $ > 0 ? w.value > 0 ? -1 : 1 : 0 : X = -Math[w.value > 0 ? "ceil" : "floor"](w.value / v.value),
                R({
                    pace: X,
                    emitChange: !0
                })
            } else
                w.value && R({
                    pace: 0
                });
            y = !1,
            o.swiping = !1,
            d("dragEnd", {
                index: I.value
            }),
            B()
        }
          , oe = (i,g={})=>{
            H(),
            h.reset(),
            G(()=>{
                let f;
                e.loop && i === n.value ? f = o.active === 0 ? 0 : i : f = i % n.value,
                g.immediate ? G(()=>{
                    o.swiping = !1
                }
                ) : o.swiping = !1,
                R({
                    pace: f - o.active,
                    emitChange: !0
                })
            }
            )
        }
          , ie = (i,g)=>{
            const f = g === I.value
              , $ = f ? {
                backgroundColor: e.indicatorColor
            } : void 0;
            return P("i", {
                style: $,
                class: Q("indicator", {
                    active: f
                })
            }, null)
        }
          , Ie = ()=>{
            if (m.indicator)
                return m.indicator({
                    active: I.value,
                    total: n.value
                });
            if (e.showIndicators && n.value > 1)
                return P("div", {
                    class: Q("indicators", {
                        vertical: e.vertical
                    })
                }, [Array(n.value).fill("").map(ie)])
        }
        ;
        return le({
            prev: ae,
            next: q,
            state: o,
            resize: l,
            swipeTo: oe
        }),
        r({
            size: v,
            props: e,
            count: n,
            activeIndicator: I
        }),
        A(()=>e.initialSwipe, i=>a(+i)),
        A(n, ()=>a(o.active)),
        A(()=>e.autoplay, B),
        A([he, ge, ()=>e.width, ()=>e.height], l),
        A(Ee(), i=>{
            i === "visible" ? B() : W()
        }
        ),
        ce(a),
        Be(()=>a(o.active)),
        Re(()=>a(o.active)),
        Fe(W),
        Le(W),
        we("touchmove", x, {
            target: s
        }),
        ()=>{
            var i;
            return P("div", {
                ref: t,
                class: Q()
            }, [P("div", {
                ref: s,
                style: u.value,
                class: Q("track", {
                    vertical: e.vertical
                }),
                onTouchstartPassive: Y,
                onTouchend: Z,
                onTouchcancel: Z
            }, [(i = m.default) == null ? void 0 : i.call(m)]), Ie()])
        }
    }
});
const Ve = Ce(qe)
  , [Ge,Ke] = p("swipe-item");
var Qe = ee({
    name: Ge,
    setup(e, {slots: d}) {
        let m;
        const t = te({
            offset: 0,
            inited: !1,
            mounted: !1
        })
          , {parent: s, index: o} = De(be);
        if (!s)
            return;
        const y = C(()=>{
            const r = {}
              , {vertical: n} = s.props;
            return s.size.value && (r[n ? "height" : "width"] = `${s.size.value}px`),
            t.offset && (r.transform = `translate ${n ? "Y" : "X"}(${t.offset}px)`),
            r
        }
        )
          , h = C(()=>{
            const {loop: r, lazyRender: n} = s.props;
            if (!n || m)
                return !0;
            if (!t.mounted)
                return !1;
            const v = s.activeIndicator.value
              , w = s.count.value - 1
              , M = v === 0 && r ? w : v - 1
              , z = v === w && r ? 0 : v + 1;
            return m = o.value === v || o.value === M || o.value === z,
            m
        }
        )
          , b = r=>{
            t.offset = r
        }
        ;
        return ce(()=>{
            re(()=>{
                t.mounted = !0
            }
            )
        }
        ),
        le({
            setOffset: b
        }),
        ()=>{
            var r;
            return P("div", {
                class: Ke(),
                style: y.value
            }, [h.value ? (r = d.default) == null ? void 0 : r.call(d) : null])
        }
    }
});
const Je = Ce(Qe)
  , fe = e=>Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2)
  , Te = e=>({
    x: (e[0].clientX + e[1].clientX) / 2,
    y: (e[0].clientY + e[1].clientY) / 2
})
  , se = p("image-preview")[1];
var Oe = ee({
    props: {
        src: String,
        show: Boolean,
        active: Number,
        minZoom: K(O),
        maxZoom: K(O),
        rootWidth: K(Number),
        rootHeight: K(Number),
        disableZoom: Boolean
    },
    emits: ["scale", "close", "longPress"],
    setup(e, {emit: d, slots: m}) {
        const t = te({
            scale: 1,
            moveX: 0,
            moveY: 0,
            moving: !1,
            zooming: !1,
            imageRatio: 0,
            displayWidth: 0,
            displayHeight: 0
        })
          , s = me()
          , o = j()
          , y = j()
          , h = C(()=>{
            const {rootWidth: a, rootHeight: l} = e
              , c = l / a;
            return t.imageRatio > c
        }
        )
          , b = C(()=>{
            const {scale: a, moveX: l, moveY: c, moving: Y, zooming: x} = t
              , Z = {
                transitionDuration: x || Y ? "0s" : ".3s"
            };
            return a !== 1 && (Z.transform = `matrix(${a}, 0, 0, ${a}, ${l}, ${c})`),
            Z
        }
        )
          , r = C(()=>{
            if (t.imageRatio) {
                const {rootWidth: a, rootHeight: l} = e
                  , c = h.value ? l / t.imageRatio : a;
                return Math.max(0, (t.scale * c - a) / 2)
            }
            return 0
        }
        )
          , n = C(()=>{
            if (t.imageRatio) {
                const {rootWidth: a, rootHeight: l} = e
                  , c = h.value ? l : a * t.imageRatio;
                return Math.max(0, (t.scale * c - l) / 2)
            }
            return 0
        }
        )
          , v = (a,l)=>{
            var c;
            if (a = k(a, +e.minZoom, +e.maxZoom + 1),
            a !== t.scale) {
                const Y = a / t.scale;
                if (t.scale = a,
                l) {
                    const x = Pe((c = o.value) == null ? void 0 : c.$el)
                      , Z = {
                        x: x.width * .5,
                        y: x.height * .5
                    }
                      , oe = t.moveX - (l.x - x.left - Z.x) * (Y - 1)
                      , ie = t.moveY - (l.y - x.top - Z.y) * (Y - 1);
                    t.moveX = k(oe, -r.value, r.value),
                    t.moveY = k(ie, -n.value, n.value)
                } else
                    t.moveX = 0,
                    t.moveY = 0;
                d("scale", {
                    scale: a,
                    index: e.active
                })
            }
        }
          , w = ()=>{
            v(1)
        }
          , M = ()=>{
            const a = t.scale > 1 ? 1 : 2;
            v(a, a === 2 ? {
                x: s.startX.value,
                y: s.startY.value
            } : void 0)
        }
        ;
        let z, D, I, N, u, E, S, R, H = !1;
        const ae = a=>{
            const {touches: l} = a;
            if (z = l.length,
            z === 2 && e.disableZoom)
                return;
            const {offsetX: c} = s;
            s.start(a),
            D = t.moveX,
            I = t.moveY,
            R = Date.now(),
            H = !1,
            t.moving = z === 1 && t.scale !== 1,
            t.zooming = z === 2 && !c.value,
            t.zooming && (N = t.scale,
            u = fe(l))
        }
          , q = a=>{
            const {touches: l} = a;
            if (s.move(a),
            t.moving) {
                const {deltaX: c, deltaY: Y} = s
                  , x = c.value + D
                  , Z = Y.value + I;
                if ((x > r.value || x < -r.value) && !H && s.isHorizontal()) {
                    t.moving = !1;
                    return
                }
                H = !0,
                J(a, !0),
                t.moveX = k(x, -r.value, r.value),
                t.moveY = k(Z, -n.value, n.value)
            }
            if (t.zooming && (J(a, !0),
            l.length === 2)) {
                const c = fe(l)
                  , Y = N * c / u;
                E = Te(l),
                v(Y, E)
            }
        }
          , V = ()=>{
            if (z > 1)
                return;
            const {offsetX: a, offsetY: l} = s
              , c = Date.now() - R
              , Y = 250
              , x = 5;
            a.value < x && l.value < x && (c < Y ? S ? (clearTimeout(S),
            S = null,
            M()) : S = setTimeout(()=>{
                d("close"),
                S = null
            }
            , Y) : c > Ze && d("longPress"))
        }
          , W = a=>{
            let l = !1;
            if ((t.moving || t.zooming) && (l = !0,
            t.moving && D === t.moveX && I === t.moveY && (l = !1),
            !a.touches.length)) {
                t.zooming && (t.moveX = k(t.moveX, -r.value, r.value),
                t.moveY = k(t.moveY, -n.value, n.value),
                t.zooming = !1),
                t.moving = !1,
                D = 0,
                I = 0,
                N = 1,
                t.scale < 1 && w();
                const c = +e.maxZoom;
                t.scale > c && v(c, E)
            }
            J(a, l),
            V(),
            s.reset()
        }
          , B = a=>{
            const {naturalWidth: l, naturalHeight: c} = a.target;
            t.imageRatio = c / l
        }
        ;
        return A(()=>e.active, w),
        A(()=>e.show, a=>{
            a || w()
        }
        ),
        we("touchmove", q, {
            target: C(()=>{
                var a;
                return (a = y.value) == null ? void 0 : a.$el
            }
            )
        }),
        ()=>{
            const a = {
                loading: ()=>P(Ye, {
                    type: "spinner"
                }, null)
            };
            return P(Je, {
                ref: y,
                class: se("swipe-item"),
                onTouchstartPassive: ae,
                onTouchend: W,
                onTouchcancel: W
            }, {
                default: ()=>[m.image ? P("div", {
                    class: se("image-wrap")
                }, [m.image({
                    src: e.src
                })]) : P(Ue, {
                    ref: o,
                    src: e.src,
                    fit: "contain",
                    class: se("image", {
                        vertical: h.value
                    }),
                    style: b.value,
                    onLoad: B
                }, a)]
            })
        }
    }
});
const [pe,L] = p("image-preview")
  , et = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"]
  , tt = {
    show: Boolean,
    loop: _,
    images: Ae(),
    minZoom: F(1 / 3),
    maxZoom: F(3),
    overlay: _,
    closeable: Boolean,
    showIndex: _,
    className: ve,
    closeIcon: de("clear"),
    transition: String,
    beforeClose: Function,
    overlayClass: ve,
    overlayStyle: Object,
    swipeDuration: F(300),
    startPosition: F(0),
    showIndicators: Boolean,
    closeOnPopstate: _,
    closeIconPosition: de("top-right"),
    teleport: [String, Object]
};
var at = ee({
    name: pe,
    props: tt,
    emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
    setup(e, {emit: d, slots: m}) {
        const t = j()
          , s = te({
            active: 0,
            rootWidth: 0,
            rootHeight: 0,
            disableZoom: !1
        })
          , o = ()=>{
            if (t.value) {
                const u = Pe(t.value.$el);
                s.rootWidth = u.width,
                s.rootHeight = u.height,
                t.value.resize()
            }
        }
          , y = u=>d("scale", u)
          , h = u=>d("update:show", u)
          , b = ()=>{
            $e(e.beforeClose, {
                args: [s.active],
                done: ()=>h(!1)
            })
        }
          , r = u=>{
            u !== s.active && (s.active = u,
            d("change", u))
        }
          , n = ()=>{
            if (e.showIndex)
                return P("div", {
                    class: L("index")
                }, [m.index ? m.index({
                    index: s.active
                }) : `${s.active + 1} / ${e.images.length}`])
        }
          , v = ()=>{
            if (m.cover)
                return P("div", {
                    class: L("cover")
                }, [m.cover()])
        }
          , w = ()=>{
            s.disableZoom = !0
        }
          , M = ()=>{
            s.disableZoom = !1
        }
          , z = ()=>P(Ve, {
            ref: t,
            lazyRender: !0,
            loop: e.loop,
            class: L("swipe"),
            duration: e.swipeDuration,
            initialSwipe: e.startPosition,
            showIndicators: e.showIndicators,
            indicatorColor: "white",
            onChange: r,
            onDragEnd: M,
            onDragStart: w
        }, {
            default: ()=>[e.images.map((u,E)=>P(Oe, {
                src: u,
                show: e.show,
                active: s.active,
                maxZoom: e.maxZoom,
                minZoom: e.minZoom,
                rootWidth: s.rootWidth,
                rootHeight: s.rootHeight,
                disableZoom: s.disableZoom,
                onScale: y,
                onClose: b,
                onLongPress: ()=>d("longPress", {
                    index: E
                })
            }, {
                image: m.image
            }))]
        })
          , D = ()=>{
            if (e.closeable)
                return P(He, {
                    role: "button",
                    name: e.closeIcon,
                    class: [L("close-icon", e.closeIconPosition), Ne],
                    onClick: b
                }, null)
        }
          , I = ()=>d("closed")
          , N = (u,E)=>{
            var S;
            return (S = t.value) == null ? void 0 : S.swipeTo(u, E)
        }
        ;
        return le({
            swipeTo: N
        }),
        ce(o),
        A([he, ge], o),
        A(()=>e.startPosition, u=>r(+u)),
        A(()=>e.show, u=>{
            const {images: E, startPosition: S} = e;
            u ? (r(+S),
            re(()=>{
                o(),
                N(+S, {
                    immediate: !0
                })
            }
            )) : d("close", {
                index: s.active,
                url: E[s.active]
            })
        }
        ),
        ()=>P(Xe, xe({
            class: [L(), e.className],
            overlayClass: [L("overlay"), e.overlayClass],
            onClosed: I,
            "onUpdate:show": h
        }, ke(e, et)), {
            default: ()=>[D(), z(), n(), v()]
        })
    }
});
let T;
const ot = {
    loop: !0,
    images: [],
    maxZoom: 3,
    minZoom: 1 / 3,
    onScale: void 0,
    onClose: void 0,
    onChange: void 0,
    teleport: "body",
    className: "",
    showIndex: !0,
    closeable: !1,
    closeIcon: "clear",
    transition: void 0,
    beforeClose: void 0,
    overlayStyle: void 0,
    overlayClass: void 0,
    startPosition: 0,
    swipeDuration: 300,
    showIndicators: !1,
    closeOnPopstate: !0,
    closeIconPosition: "top-right"
};
function it() {
    ({instance: T} = ye({
        setup() {
            const {state: e, toggle: d} = Me()
              , m = ()=>{
                e.images = []
            }
            ;
            return ()=>P(at, xe(e, {
                onClosed: m,
                "onUpdate:show": d
            }), null)
        }
    }))
}
const mt = (e,d=0)=>{
    if (!!We)
        return T || it(),
        e = Array.isArray(e) ? {
            images: e,
            startPosition: d
        } : e,
        T.open(_e({}, ot, e)),
        T
}
;
var nt = (e=>(e[e.Doctor = 1] = "Doctor",
e[e.Fast = 2] = "Fast",
e[e.Medication = 3] = "Medication",
e))(nt || {})
  , st = (e=>(e[e.Week = 1] = "Week",
e[e.Month = 2] = "Month",
e[e.HalfYear = 3] = "HalfYear",
e[e.More = 4] = "More",
e))(st || {})
  , lt = (e=>(e[e.MsgText = 1] = "MsgText",
e[e.MsgImage = 4] = "MsgImage",
e[e.CardPat = 21] = "CardPat",
e[e.CardPre = 22] = "CardPre",
e[e.CardEvaForm = 23] = "CardEvaForm",
e[e.CardEva = 24] = "CardEva",
e[e.Notify = 31] = "Notify",
e[e.NotifyTip = 32] = "NotifyTip",
e[e.NotifyCancel = 33] = "NotifyCancel",
e))(lt || {})
  , ct = (e=>(e[e.NotPayment = 1] = "NotPayment",
e[e.Payment = 2] = "Payment",
e[e.Invalid = 3] = "Invalid",
e))(ct || {})
  , rt = (e=>(e[e.ConsultPay = 1] = "ConsultPay",
e[e.ConsultWait = 2] = "ConsultWait",
e[e.ConsultChat = 3] = "ConsultChat",
e[e.ConsultComplete = 4] = "ConsultComplete",
e[e.ConsultCancel = 5] = "ConsultCancel",
e[e.MedicinePay = 10] = "MedicinePay",
e[e.MedicineSend = 11] = "MedicineSend",
e[e.MedicineTake = 12] = "MedicineTake",
e[e.MedicineComplete = 13] = "MedicineComplete",
e[e.MedicineCancel = 14] = "MedicineCancel",
e))(rt || {});
export {nt as C, st as I, lt as M, rt as O, ct as P, Ve as S, Je as a, mt as s};
