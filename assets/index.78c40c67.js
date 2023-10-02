import {c as B, n as d, t as z, m as P, k as u, o as $, N, I as j, w as C} from "./index.8c2cf8d9.js";
import {d as D, r as f, C as _, q as R, B as U, v as q, k as F, z as b, c as n, H as G, N as H, G as k} from "./index.f208d6e8.js";
const [M,t] = B("image")
  , O = {
    src: String,
    alt: String,
    fit: String,
    position: String,
    round: Boolean,
    block: Boolean,
    width: d,
    height: d,
    radius: d,
    lazyLoad: Boolean,
    iconSize: d,
    showError: z,
    errorIcon: P("photo-fail"),
    iconPrefix: String,
    showLoading: z,
    loadingIcon: P("photo")
};
var T = D({
    name: M,
    props: O,
    emits: ["load", "error"],
    setup(a, {emit: v, slots: s}) {
        const i = f(!1)
          , o = f(!0)
          , r = f()
          , {$Lazyload: l} = _().proxy
          , S = R(()=>{
            const e = {
                width: u(a.width),
                height: u(a.height)
            };
            return $(a.radius) && (e.overflow = "hidden",
            e.borderRadius = u(a.radius)),
            e
        }
        );
        U(()=>a.src, ()=>{
            i.value = !1,
            o.value = !0
        }
        );
        const g = e=>{
            o.value && (o.value = !1,
            v("load", e))
        }
          , m = ()=>{
            const e = new Event("load");
            Object.defineProperty(e, "target", {
                value: r.value,
                enumerable: !0
            }),
            g(e)
        }
          , h = e=>{
            i.value = !0,
            o.value = !1,
            v("error", e)
        }
          , w = (e,c,I)=>I ? I() : n(j, {
            name: e,
            size: a.iconSize,
            class: c,
            classPrefix: a.iconPrefix
        }, null)
          , E = ()=>{
            if (o.value && a.showLoading)
                return n("div", {
                    class: t("loading")
                }, [w(a.loadingIcon, t("loading-icon"), s.loading)]);
            if (i.value && a.showError)
                return n("div", {
                    class: t("error")
                }, [w(a.errorIcon, t("error-icon"), s.error)])
        }
          , x = ()=>{
            if (i.value || !a.src)
                return;
            const e = {
                alt: a.alt,
                class: t("img"),
                style: {
                    objectFit: a.fit,
                    objectPosition: a.position
                }
            };
            return a.lazyLoad ? G(n("img", k({
                ref: r
            }, e), null), [[H("lazy"), a.src]]) : n("img", k({
                ref: r,
                src: a.src,
                onLoad: g,
                onError: h
            }, e), null)
        }
          , y = ({el: e})=>{
            const c = ()=>{
                e === r.value && o.value && m()
            }
            ;
            r.value ? c() : b(c)
        }
          , L = ({el: e})=>{
            e === r.value && !i.value && h()
        }
        ;
        return l && N && (l.$on("loaded", y),
        l.$on("error", L),
        q(()=>{
            l.$off("loaded", y),
            l.$off("error", L)
        }
        )),
        F(()=>{
            b(()=>{
                var e;
                ((e = r.value) == null ? void 0 : e.complete) && !a.lazyLoad && m()
            }
            )
        }
        ),
        ()=>{
            var e;
            return n("div", {
                class: t({
                    round: a.round,
                    block: a.block
                }),
                style: S.value
            }, [x(), E(), (e = s.default) == null ? void 0 : e.call(s)])
        }
    }
});
const J = C(T);
export {J as I};
