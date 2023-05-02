(function(){"use strict";var t={9947:function(t,e,n){var r=n(8935),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar is-fullwidth is-transparent px-5 mt-2",staticStyle:{position:"absolute",width:"100%","background-color":"rgba(0, 0, 0, 0)"},attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item has-text-white",attrs:{to:"/"}},[r("p",[t._v("หน้าแรก")])]),t.user?t._e():r("div",{staticStyle:{"margin-top":"0.5rem"}},[r("router-link",{staticClass:"navbar-item has-text-white",attrs:{to:"/user/promotion"}},[r("p",[t._v("โปรโมชั่น")])])],1),t.user?r("div",{staticStyle:{"margin-top":"0.345rem"}},["normal"==t.user.role?r("router-link",{staticClass:"navbar-item has-text-white",attrs:{to:"/user/promotion"}},[r("p",[t._v("โปรโมชั่น")])]):t._e()],1):t._e(),t.user?r("div",{staticStyle:{"margin-top":"0.345rem"}},["normal"==t.user.role?r("router-link",{staticClass:"navbar-item has-text-white",attrs:{to:"/user/cart"}},[r("p",[t._v("ตระกร้า")])]):t._e()],1):t._e(),t.user?r("div",{staticStyle:{"margin-top":"0.345rem"}},["normal"==t.user.role?r("router-link",{staticClass:"navbar-item has-text-white",attrs:{to:"/user/finish"}},[r("p",[t._v("ชำระแล้ว")])]):t._e()],1):t._e(),t.user?r("div",{staticStyle:{"margin-top":"0.345rem"}},["admin"==t.user.role?r("router-link",{staticClass:"navbar-item has-text-white",attrs:{to:"/user/edit"}},[r("p",[t._v("แก้ไขโปรโมชั่น")])]):t._e()],1):t._e(),t.user?r("div",{staticStyle:{"margin-top":"0.345rem"}},["admin"==t.user.role?r("router-link",{staticClass:"navbar-item has-text-white",attrs:{to:"/user/order"}},[r("p",[t._v("ยืนยันการชำระเงิน")])]):t._e()],1):t._e(),t._m(0)],1),r("div",{staticClass:"navbar-menu"},[r("div",{staticClass:"navbar-end"},[t.user?r("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[r("a",{staticClass:"navbar-link"},[r("figure",{staticClass:"image is-24x24 my-auto "},[r("img",{staticClass:"profile-pic",attrs:{src:n(6887)}})]),r("span",{staticClass:"pl-3 has-text-white"},[t._v(t._s(t.user.first_name)+" "+t._s(t.user.last_name))])]),r("div",{staticClass:"navbar-dropdown"},[r("router-link",{attrs:{to:{name:"Profile",params:{id:t.user.user_id}}}},[r("a",{staticClass:"navbar-item"},[t._v("Profile")])]),r("a",{staticClass:"navbar-item",on:{click:t.logout}},[t._v("Log out")])],1)]):t._e(),t.user?t._e():r("div",{staticClass:"navbar-end"},[r("div",{staticClass:"navbar-item"},[r("div",{staticClass:"buttons"},[r("router-link",{attrs:{to:"/user/signup"}},[r("a",{staticClass:"button is-link mr-4"},[r("strong",[t._v("Sign up")])])]),r("router-link",{attrs:{to:"/user/login"}},[r("a",{staticClass:"button is-light"},[t._v("Log in")])])],1)])])])])]),r("router-view",{key:t.$route.fullPath,attrs:{user:t.user},on:{"auth-change":t.onAuthChange}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])}],i=n(6166),s=n.n(i),u={data(){return{user:null,apiURL:"http://3.215.49.113:3000"}},mounted(){this.onAuthChange()},methods:{onAuthChange(){const t=localStorage.getItem("token");t&&this.getUser(),console.log(t)},getUser(){const t=localStorage.getItem("token");s().get("http://3.215.49.113:3000/user/me",{headers:{Authorization:"Bearer "+t}}).then((t=>{this.user=t.data,this.$router.push("/"),console.log(this.user.user_id),console.log(this.user)}))},logout(){localStorage.clear(),this.$router.push("/"),location.reload()}}},l=u,c=n(1001),d=(0,c.Z)(l,a,o,!1,null,null,null),f=d.exports,m=n(2809);r.Z.use(m.Z);const h=[{path:"/",name:"Lobby",component:()=>n.e(439).then(n.bind(n,8439))},{path:"/user/login",name:"Login",component:()=>n.e(988).then(n.bind(n,1988))},{path:"/user/signup",name:"Signup",component:()=>n.e(871).then(n.bind(n,1871))},{path:"/user/cart",name:"Cart",component:()=>n.e(742).then(n.bind(n,2742))},{path:"/user/finish",name:"Fisish",component:()=>n.e(714).then(n.bind(n,6714))},{path:"/user/profile",name:"Profile",component:()=>n.e(307).then(n.bind(n,4307))},{path:"/user/book",name:"Booking",component:()=>n.e(688).then(n.bind(n,6688))},{path:"/user/promotion",name:"Promotion",component:()=>n.e(661).then(n.bind(n,3661))},{path:"/user/confirm",name:"Confirm",component:()=>n.e(531).then(n.bind(n,531))},{path:"/user/edit",name:"Edit",component:()=>n.e(558).then(n.bind(n,8558))},{path:"/user/order",name:"AdminConfirm",component:()=>n.e(982).then(n.bind(n,2982))}],p=new m.Z({mode:"history",base:"/",routes:h});var v=p,b=n(2424);r.Z.config.productionTip=!1,r.Z.use(b.ZP),new r.Z({router:v,render:t=>t(f)}).$mount("#app")},6887:function(t,e,n){t.exports=n.p+"img/01.10084d5f.jpg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],o=t[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{307:"85899311",439:"11a79cba",531:"8d53e5e6",558:"d01cacf0",661:"9cf82685",688:"875c718c",714:"01532c28",742:"479bcb08",871:"7c7b2a03",982:"95dcd71e",988:"1f318a92"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{307:"c8c0243e",439:"7abd978e",531:"4ee95404",558:"0fefb59f",661:"86da4ef1",688:"c9f2df5b",714:"7abd978e",742:"6a77f186",871:"9115be89",982:"2778f1b5",988:"135d0436"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="myfrontend:";n.l=function(r,a,o,i){if(t[r])t[r].push(a);else{var s,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=r),t[r]=[a];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var a=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=o,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===t||o===e)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return a();t(r,s,a,o)}))},a={143:0};n.f.miniCss=function(t,e){var n={307:1,439:1,531:1,558:1,661:1,688:1,714:1,742:1,871:1,982:1,988:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],s=r[1],u=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var c=u(n)}for(e&&e(r);l<i.length;l++)o=i[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunkmyfrontend"]=self["webpackChunkmyfrontend"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9947)}));r=n.O(r)})();
//# sourceMappingURL=app.3faa76f3.js.map