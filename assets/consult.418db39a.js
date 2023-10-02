import {r as t} from "./request.894b30ad.js";
const a = e=>t("patient/home/knowledge", "GET", e)
  , n = e=>t("home/page/doc", "GET", e)
  , s = (e,o="doc")=>t("like", "POST", {
    id: e,
    type: o
})
  , l = ()=>t("dep/all")
  , c = e=>{
    const o = new FormData;
    return o.append("file", e),
    t("upload", "POST", o)
}
  , d = e=>t("patient/consult/order/pre", "GET", e)
  , p = e=>t("patient/consult/order", "POST", e)
  , i = e=>t("patient/consult/pay", "POST", e)
  , u = e=>t("patient/consult/order/detail", "GET", {
    orderId: e
})
  , g = e=>t(`patient/consult/prescription/${e}`)
  , O = e=>t("patient/order/evaluate", "POST", e)
  , P = e=>t("patient/consult/order/list", "GET", e)
  , T = e=>t(`patient/order/cancel/${e}`, "PUT")
  , E = e=>t(`patient/order/${e}`, "DELETE");
export {l as a, d as b, T as c, E as d, p as e, s as f, g, i as h, O as i, u as j, P as k, a as l, n as m, c as u};
