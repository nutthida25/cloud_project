"use strict";(self["webpackChunkmyfrontend"]=self["webpackChunkmyfrontend"]||[]).push([[982],{2982:function(t,e,r){r.r(e),r.d(e,{default:function(){return u}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{padding:"7rem"}},[r("p",{staticClass:"title has-text-white has-text-centered"},[t._v("ยืนยันการชำระเงิน")]),r("div",{staticClass:"columns is-centered mt-6"},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.order,(function(e){return r("tr",{key:e.index},[r("th",[t._v(t._s(e.order_id))]),r("td",[t._v(t._s(e.order_status))]),r("td",[t._v(t._s(e.order_date))]),r("td",[t._v(t._s(e.order_price))]),r("td",[t._v(t._s(e.user_id))]),r("td",{staticClass:"level"},[r("button",{staticClass:"button is-info level-item mr-3",on:{click:function(r){return t.confirm(e.order_id)}}},[t._v("confirm")]),r("button",{staticClass:"button is-danger level-item",on:{click:function(r){return t.cancel(e.order_id)}}},[t._v("delete")])])])})),0)])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("ID")]),r("th",[t._v("สถานะ")]),r("th",[t._v("วันสั่งจอง")]),r("th",[t._v("ยอดชำระเงิน")]),r("th",[t._v("User_id")]),r("th",[t._v("Action")])])])}],o=r(6166),a=r.n(o),i={data(){return{order:[]}},mounted(){this.getOrderDetail()},methods:{getOrderDetail(){a().get("http://3.215.49.113:3000/user/order").then((t=>{console.log(t),this.order=t.data.order})).catch((t=>{this.error=t.response.data.message}))},confirm(t){a().post(`http://3.215.49.113:3000/user/orderConfirm/${t}`,{order_status:"confirm"}).then((t=>{this.getOrderDetail(),console.log("responseOrderConfirm"+t)})).catch((t=>{this.error=t.response.data.message}))},cancel(t){a().post(`http://3.215.49.113:3000/user/orderCancel/${t}`,{order_status:"cancel"}).then((t=>{this.getOrderDetail(),console.log("responseOrderConfirm"+t)})).catch((t=>{this.error=t.response.data.message}))}}},d=i,c=r(1001),l=(0,c.Z)(d,s,n,!1,null,null,null),u=l.exports}}]);
//# sourceMappingURL=982.95dcd71e.js.map