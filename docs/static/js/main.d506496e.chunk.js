(this.webpackJsonprepaso=this.webpackJsonprepaso||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(12),r=a.n(c),i=(a(20),a(6)),s=a(27),u=a(15),o=a(0),j=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r.toLowerCase()].concat(Object(u.a)(e))})),s(""))},children:Object(o.jsx)("input",{type:"text",placeholder:"Search",value:r,onChange:function(e){s(e.target.value)}})})},d=a(2),l=a(10),m=a.n(l),b=a(13),f=function(){var e=Object(b.a)(m.a.mark((function e(t){var a,n,c,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=15&api_key=5J2p6Fou891x13TFWkbxudIQdcPGaXyK"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=a(25),O=a(26),p=a(28),x=function(e){e.id;var t=e.title,a=e.url;return Object(o.jsxs)(p.a,{border:"primary",style:{width:"20rem"},className:"container mb-4 animate__animated animate__fadeIn",children:[Object(o.jsx)(p.a.Img,{variant:"top",src:a,alt:"img-gif",className:"mt-4"}),Object(o.jsxs)(p.a.Body,{children:[Object(o.jsx)(p.a.Title,{className:"text",children:t}),Object(o.jsx)(p.a.Text,{})]})]})},g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=a.data,r=a.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash center",children:"Loading..."}),Object(o.jsx)(h.a,{xs:1,md:2,lg:3,className:"g-4",children:c.map((function(e){return[Object(o.jsx)(O.a,{children:Object(o.jsx)(x,Object(d.a)({},e))},e)]}))})]})},v=function(){var e=Object(n.useState)(["Facepalm"]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)("h2",{className:"center",children:"YouGif"}),Object(o.jsx)(j,{setCategories:c}),Object(o.jsx)("hr",{}),a.map((function(e){return[Object(o.jsx)(g,{category:e},e)]}))]})})};a(23);r.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d506496e.chunk.js.map