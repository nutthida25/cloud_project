"use strict";(self["webpackChunkmyfrontend"]=self["webpackChunkmyfrontend"]||[]).push([[878],{9878:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hero is-fullheight",staticStyle:{"background-color":"#1A132F"}},[r("div",{staticStyle:{margin:"6rem"}},[r("p",{staticClass:"is-size-2\thas-text-white"},[e._v("สถานะ Order")]),e._l(e.order,(function(t){return r("div",{key:t.index,staticClass:"is-large mt-5 p-4",staticStyle:{"background-color":"#EBEBFF"}},[r("div",{staticClass:"level"},[r("p",{staticClass:"is-size-5 level-left"},[e._v("รหัส Order: "+e._s(t.order_id))]),r("strong",{staticClass:"is-size-5 level-right has-text-link"},[e._v(e._s(t.order_status))])]),r("div",{staticClass:"hero-body p-5"},[r("img",{attrs:{src:s(5034),alt:"รูปตั๋ว",width:"200em",height:"100em"}}),r("div",{staticClass:"ml-6"},[r("p",[e._v("รหัสผู้ซื้อ: "+e._s(t.user_id))]),r("p",[e._v("รวมการสั่งซื้อ: ฿"+e._s(t.order_price))]),r("p",[e._v("วันจองบัตรเข้าชม: "+e._s(t.order_date))])])])])}))],2)])},i=[],a=s(6166),o=s.n(a),l={data(){return{order:[],user:[]}},mounted(){this.onAuthChange()},methods:{getOrderDetail(e){o().get("http://3.215.49.113:3000/user/order/finish/"+e).then((e=>{console.log(e),this.order=e.data.order})).catch((e=>{this.error=e.response.data.message}))},onAuthChange(){const e=localStorage.getItem("token");e&&this.getUser(),console.log(e)},getUser(){const e=localStorage.getItem("token");o().get("http://3.215.49.113:3000/user/me",{headers:{Authorization:"Bearer "+e}}).then((e=>{this.user=e.data,this.getOrderDetail(this.user.user_id),console.log(this.user.user_id),console.log(this.user)}))}}},n=l,d=s(1001),h=(0,d.Z)(n,r,i,!1,null,null,null),c=h.exports},5034:function(e,t,s){e.exports=s.p+"img/thx.d382678f.jpg"}}]);
//# sourceMappingURL=878.04aae886.js.map