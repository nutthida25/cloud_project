"use strict";(self["webpackChunkmyfrontend"]=self["webpackChunkmyfrontend"]||[]).push([[496],{6496:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("body",{staticStyle:{padding:"7rem"}},[i("p",{staticClass:"title has-text-white has-text-centered"},[t._v("แก้ไขโปรโมชั่น")]),i("div",{staticClass:"columns is-centered mt-6"},[i("table",{staticClass:"table"},[t._m(0),i("tbody",[t._l(t.promotion,(function(e,o){return i("tr",{key:e.promotion_id},[i("td",[i("strong",[t._v(t._s(o+1))])]),t.editToggle.includes(e.promotion_id)?i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit2,expression:"edit2"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.edit2},on:{input:function(e){e.target.composing||(t.edit2=e.target.value)}}})]):i("td",{staticStyle:{width:"10rem"}},[t._v(t._s(e.pmt_name))]),t.editToggle.includes(e.promotion_id)?i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit3,expression:"edit3"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.edit3},on:{input:function(e){e.target.composing||(t.edit3=e.target.value)}}})]):i("td",[t._v(t._s(e.price_normal_kid))]),t.editToggle.includes(e.promotion_id)?i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit4,expression:"edit4"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.edit4},on:{input:function(e){e.target.composing||(t.edit4=e.target.value)}}})]):i("td",[t._v(t._s(e.price_pmt_kid))]),t.editToggle.includes(e.promotion_id)?i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit5,expression:"edit5"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.edit5},on:{input:function(e){e.target.composing||(t.edit5=e.target.value)}}})]):i("td",[t._v(t._s(e.price_normal_adult))]),t.editToggle.includes(e.promotion_id)?i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit6,expression:"edit6"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.edit6},on:{input:function(e){e.target.composing||(t.edit6=e.target.value)}}})]):i("td",[t._v(t._s(e.price_pmt_adult))]),t.editToggle.includes(e.promotion_id)?i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit7,expression:"edit7"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.edit7},on:{input:function(e){e.target.composing||(t.edit7=e.target.value)}}})]):i("td",[t._v(t._s(e.file_path))]),i("td",{staticClass:"level"},[t.editToggle.includes(e.promotion_id)?i("button",{staticClass:"button is-info level-item mr-3",on:{click:function(i){return t.saveEdit(e.promotion_id)}}},[t._v("Save edit")]):i("button",{staticClass:"button is-info level-item mr-3",on:{click:function(i){return t.showEdit(e.promotion_id)}}},[t._v("edit")]),t.editToggle.includes(e.promotion_id)?i("button",{staticClass:"button is-danger level-item",on:{click:function(i){return t.cancelEdit(e.promotion_id)}}},[t._v("cancel")]):i("button",{staticClass:"button is-danger level-item",on:{click:function(i){return t.deletePmt(e.promotion_id)}}},[t._v("del")])])])})),i("tr",[i("td",[i("strong",[t._v(t._s(t.promotion.length+1))])]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.add1,expression:"add1"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.add1},on:{input:function(e){e.target.composing||(t.add1=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.add2,expression:"add2"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.add2},on:{input:function(e){e.target.composing||(t.add2=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.add3,expression:"add3"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.add3},on:{input:function(e){e.target.composing||(t.add3=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.add4,expression:"add4"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.add4},on:{input:function(e){e.target.composing||(t.add4=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.add5,expression:"add5"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.add5},on:{input:function(e){e.target.composing||(t.add5=e.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.add6,expression:"add6"}],staticClass:"input level-item is-primary",attrs:{type:"text"},domProps:{value:t.add6},on:{input:function(e){e.target.composing||(t.add6=e.target.value)}}})]),i("td",[i("button",{staticClass:"button is-primary",on:{click:function(e){return t.add()}}},[t._v("add")])])])],2)])])])},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("ID")]),i("th",[t._v("ชื่อโปรโมชั่น")]),i("th",[t._v("ราคาปกติ(KID)")]),i("th",[t._v("ราคาโปรโมชั่น(KID)")]),i("th",[t._v("ราคาปกติ(ADULT)")]),i("th",[t._v("ราคาโปรโมชั่น(ADULT)")]),i("th",[t._v("Path รูปภาพ")]),i("th",[t._v("Action")])])])}],a=i(6166),s=i.n(a),n={data(){return{promotion:[],editToggle:[],edit2:"",edit3:"",edit4:"",edit5:"",edit6:"",edit7:"",add1:"",add2:"",add3:"",add4:"",add5:"",add6:""}},mounted(){this.getprofileDetail()},methods:{getprofileDetail(){s().get("http://3.215.49.113:3000/user/promotion").then((t=>{console.log(t),this.promotion=t.data.promotion})).catch((t=>{this.error=t.response.data.message}))},showEdit(t){this.edit2=this.promotion.filter((e=>e.promotion_id===t))[0].pmt_name,this.edit3=this.promotion.filter((e=>e.promotion_id===t))[0].price_normal_kid,this.edit4=this.promotion.filter((e=>e.promotion_id===t))[0].price_pmt_kid,this.edit5=this.promotion.filter((e=>e.promotion_id===t))[0].price_normal_adult,this.edit6=this.promotion.filter((e=>e.promotion_id===t))[0].price_pmt_adult,this.edit7=this.promotion.filter((e=>e.promotion_id===t))[0].file_path,this.editToggle.push(t),console.log("here")},cancelEdit(t){this.editToggle=this.editToggle.filter((e=>e!=t))},saveEdit(t){s().post(`http://3.215.49.113:3000/user/edit/${t}`,{name:this.edit2,priceKid1:this.edit3,priceKid2:this.edit4,priceAdult1:this.edit5,priceAdult2:this.edit6,path:this.edit7}).then((e=>{this.promotion.filter((e=>e.promotion_id===t))[0].pmt_name=this.edit2,this.promotion.filter((e=>e.promotion_id===t))[0].price_normal_kid=this.edit3,this.promotion.filter((e=>e.promotion_id===t))[0].price_pmt_kid=this.edit4,this.promotion.filter((e=>e.promotion_id===t))[0].price_normal_adult=this.edit5,this.promotion.filter((e=>e.promotion_id===t))[0].price_pmt_adult=this.edit6,this.promotion.filter((e=>e.promotion_id===t))[0].file_path=this.edit7,console.log("response"+e),console.log("1223423423")})).catch((t=>{this.error=t.response.data.message})),this.editToggle=this.editToggle.filter((e=>e!=t))},deletePmt(t){const e=confirm("Are you sure you want to delete it?");e&&s()["delete"](`http://3.215.49.113:3000/user/del/${t}`).then((t=>{console.log(t),location.reload()})).catch((t=>{alert(t.response.data.message)}))},add(){s().post("http://3.215.49.113:3000/user/add/",{name:this.add1,priceKid1:this.add2,priceKid2:this.add3,priceAdult1:this.add4,priceAdult2:this.add5,path:this.add6}).then((t=>{location.reload(),console.log(t)})).catch((t=>{this.error=t.response.data.message}))}}},r=n,l=i(1001),p=(0,l.Z)(r,o,d,!1,null,null,null),m=p.exports}}]);
//# sourceMappingURL=496.2fe13b21.js.map