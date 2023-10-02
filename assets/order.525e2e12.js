import {r} from "./request.894b30ad.js";
const i = e=>r("patient/medicine/order/pre", "GET", e)
  , d = ()=>r("patient/order/address")
  , a = e=>r("patient/medicine/order", "POST", e)
  , s = e=>r(`patient/medicine/order/detail/${e}`)
  , c = e=>r(`patient/order/${e}/logistics`);
export {i as a, d as b, a as c, c as d, s as g};
