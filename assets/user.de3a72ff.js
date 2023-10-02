import {r as s} from "./request.894b30ad.js";
const a = (t,e)=>s("login/password", "POST", {
    mobile: t,
    password: e
})
  , i = (t,e)=>s("code", "GET", {
    mobile: t,
    type: e
})
  , o = (t,e)=>s("login", "POST", {
    mobile: t,
    code: e
})
  , d = ()=>s("patient/myUser")
  , l = ()=>s("patient/mylist")
  , c = t=>s("patient/add", "POST", t)
  , g = t=>s("patient/update", "PUT", t)
  , r = t=>s(`patient/del/${t}`, "DELETE")
  , p = t=>s(`patient/info/${t}`)
  , P = ()=>s("patient/message/unRead/all")
  , T = t=>s("login/thirdparty", "POST", {
    openId: t,
    source: "qq"
})
  , b = t=>s("login/binding", "POST", t);
export {o as a, c as b, p as c, r as d, g as e, T as f, l as g, b as h, P as i, d as j, a as l, i as s};
