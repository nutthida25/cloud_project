"use strict";(self["webpackChunkmyfrontend"]=self["webpackChunkmyfrontend"]||[]).push([[871],{1871:function(e,s,t){t.r(s),t.d(s,{default:function(){return c}});var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"all"},[e._m(0),t("div",{staticClass:"container p-3",staticStyle:{"padding-bottom":"5%","justify-content":"center",display:"flex"}},[t("div",{staticClass:"notification block"},[t("div",{staticClass:"flex-container",staticStyle:{display:"flex","flex-direction":"row"}},[t("div",{staticStyle:{"margin-right":"7%",width:"350px"}},[e._v(" ชื่อจริง "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.first_name.$model,expression:"$v.first_name.$model"}],staticClass:"input",class:{"is-danger":e.$v.first_name.$error},attrs:{type:"text"},domProps:{value:e.$v.first_name.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.first_name,"$model",s.target.value)}}}),e.$v.first_name.$error?[e.$v.first_name.required?e._e():t("p",{staticClass:"help is-danger"},[e._v(" This field is required ")])]:e._e()],2),t("div",{staticStyle:{width:"350px"}},[e._v(" นามสกุล "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.last_name.$model,expression:"$v.last_name.$model"}],staticClass:"input",class:{"is-danger":e.$v.last_name.$error},attrs:{type:"text"},domProps:{value:e.$v.last_name.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.last_name,"$model",s.target.value)}}}),e.$v.last_name.$error?[e.$v.last_name.required?e._e():t("p",{staticClass:"help is-danger"},[e._v(" This field is required ")])]:e._e()],2)]),t("div",{staticClass:"flex-container",staticStyle:{display:"flex","flex-direction":"row"}},[t("div",{staticStyle:{"margin-right":"7%",width:"350px"}},[e._v(" เบอร์โทร "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.mobile.$model,expression:"$v.mobile.$model"}],staticClass:"input",class:{"is-danger":e.$v.mobile.$error},attrs:{type:"tel"},domProps:{value:e.$v.mobile.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.mobile,"$model",s.target.value)}}}),e.$v.mobile.$error?[e.$v.mobile.required?e._e():t("p",{staticClass:"help is-danger"},[e._v(" This field is required ")]),e.$v.mobile.mobile?e._e():t("p",{staticClass:"help is-danger"},[e._v(" Invalid Mobile Number ")])]:e._e()],2),t("div",{staticStyle:{width:"350px"}},[e._v(" ชื่อผู้ใช้ "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.username.$model,expression:"$v.username.$model"}],staticClass:"input",class:{"is-danger":e.$v.username.$error},attrs:{type:"text"},domProps:{value:e.$v.username.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.username,"$model",s.target.value)}}}),e.$v.username.$error?[e.$v.username.required?e._e():t("p",{staticClass:"help is-danger"},[e._v(" This field is required ")]),e.$v.username.minLength?e._e():t("p",{staticClass:"help is-danger"},[e._v(" Must be at least 5 characters ")])]:e._e()],2)]),t("div",[e._v(" อีเมล "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.email.$model,expression:"$v.email.$model"}],staticClass:"input",class:{"is-danger":e.$v.email.$error},staticStyle:{width:"755px"},domProps:{value:e.$v.email.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.email,"$model",s.target.value)}}}),e.$v.email.$error?[e.$v.email.required?e._e():t("p",{staticClass:"help is-danger"},[e._v("This field is required")]),e.$v.email.email?e._e():t("p",{staticClass:"help is-danger"},[e._v("Invalid email")])]:e._e()],2),t("div",[e._v(" รหัสผ่าน "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.password.$model,expression:"$v.password.$model"}],staticClass:"input",class:{"is-danger":e.$v.password.$error},staticStyle:{width:"755px"},attrs:{type:"password"},domProps:{value:e.$v.password.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.password,"$model",s.target.value)}}}),e.$v.password.$error?[e.$v.password.required?e._e():t("p",{staticClass:"help is-danger"},[e._v("This field is required")]),e.$v.password.minLength?e._e():t("p",{staticClass:"help is-danger"},[e._v("Must be at least 8 character")])]:e._e()],2),t("div",[e._v(" ยืนยันรหัสผ่าน "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.confirm_password.$model,expression:"$v.confirm_password.$model"}],staticClass:"input",class:{"is-danger":e.$v.confirm_password.$error},staticStyle:{width:"755px"},attrs:{type:"password"},domProps:{value:e.$v.confirm_password.$model},on:{input:function(s){s.target.composing||e.$set(e.$v.confirm_password,"$model",s.target.value)}}}),e.$v.confirm_password.$error?[e.$v.confirm_password.sameAs?e._e():t("p",{staticClass:"help is-danger"},[e._v(" Password not match ")])]:e._e()],2),t("div",{staticClass:"buttons flex-container",staticStyle:{width:"755px","justify-content":"flex-end","margin-top":"5%"}},[t("button",{staticClass:"button is-link",on:{click:function(s){return e.submit()}}},[t("p",[e._v("สร้างบัญชีใหม่")])])])])])])},i=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container is-max-desktop headtext"},[t("h1",[e._v("Sign up")])])}],r=(t(4916),t(4723),t(6166)),n=t.n(r),l=t(6409);function o(e){return!l.BM.req(e)||!!e.match(/0[0-9]{9}/)}var d={data:function(){return{username:"",password:"",confirm_password:"",email:"",mobile:"",first_name:"",last_name:""}},methods:{submit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e={username:this.username,password:this.password,confirm_password:this.confirm_password,email:this.email,mobile:this.mobile,first_name:this.first_name,last_name:this.last_name};n().post("http://3.215.49.113:3000/user/signup",e).then((function(e){alert("Sign up Success"),location.reload(),console.log(e)})).catch((function(e){alert(e.response.data.details.message)}))}}},validations:{email:{required:l.C1,email:l.Do},mobile:{required:l.C1,mobile:o},password:{required:l.C1,minLength:(0,l.Ei)(8)},confirm_password:{sameAs:(0,l.sH)("password")},username:{required:l.C1,minLength:(0,l.Ei)(5),maxLength:(0,l.BS)(20)},first_name:{required:l.C1},last_name:{required:l.C1}}},m=d,v=t(1001),p=(0,v.Z)(m,a,i,!1,null,null,null),c=p.exports}}]);
//# sourceMappingURL=871-legacy.3628724d.js.map