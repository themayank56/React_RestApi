(this.webpackJsonpmayank=this.webpackJsonpmayank||[]).push([[0],{32:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),j=c(18),a=c.n(j),r=(c(32),c(33),c(12)),s=c(8),i=c(10),b=c(26),l=c.n(b),o=c(0);var O=function(){var e=Object(i.c)((function(e){return e.max.user})),t=Object(i.b)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"View Data"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-3",children:[Object(o.jsx)("h1",{children:"Name"}),e.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{children:e.name})})}))]}),Object(o.jsxs)("div",{className:"col-2",children:[Object(o.jsx)("h1",{children:"Age"}),e.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{children:e.age})})}))]}),Object(o.jsxs)("div",{className:"col-3",children:[Object(o.jsx)("h1",{children:"City"}),e.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{children:e.city})})}))]}),Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("h1",{children:"Phone"}),e.map((function(e,c){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("p",{children:[e.phone,Object(o.jsx)("button",{onClick:function(){return t({type:"DELETE",id:c})},children:"Del"})]})})}))]})]})})]})},h=c(9),d=c(3);var u=function(){var e,t=Object(n.useState)(),c=Object(s.a)(t,2),j=c[0],a=c[1],b=Object(n.useState)(),u=Object(s.a)(b,2),x=u[0],m=u[1],p=Object(n.useState)(),v=Object(s.a)(p,2),f=v[0],g=v[1],N=Object(n.useState)(),y=Object(s.a)(N,2),S=y[0],E=y[1],w=Object(i.b)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Home"}),Object(o.jsx)("input",{type:"text",placeholder:"Name",value:j,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"number",placeholder:"Age",value:x,onChange:function(e){return m(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"City",value:f,onChange:function(e){return g(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"number",placeholder:"Phone",value:S,onChange:function(e){return E(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){var e={id:l.a.generate(),name:j,age:x,city:f,phone:S};w({type:"ADD",data:e},a(""),m(""),g(""),E(""));var t={name:j,age:x,city:f,phone:S};fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},children:"Submit"}),Object(o.jsx)("hr",{}),Object(o.jsxs)(h.a,{children:[Object(o.jsx)("div",{id:"max",children:Object(o.jsx)(h.b,{className:"navv",to:"viewdata",children:"View Data"})}),Object(o.jsx)(d.c,{children:Object(o.jsx)(d.a,(e={exact:!0,path:"/viewdata"},Object(r.a)(e,"exact",!0),Object(r.a)(e,"component",O),e))})]})]})},x=c(15);var m=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=t[0],j=t[1],a=Object(n.useState)(),r=Object(s.a)(a,2),i=r[0],b=r[1],l=Object(n.useState)([]),O=Object(s.a)(l,2),h=O[0],d=O[1],u=Object(n.useState)([]),m=Object(s.a)(u,2),p=m[0],v=m[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("Name_list"),t=localStorage.getItem("Age_list");t&&(d(JSON.parse(e)),v(JSON.parse(t)))}),[],[]),Object(n.useEffect)((function(){localStorage.setItem("Name_list",JSON.stringify(h)),localStorage.setItem("Age_list",JSON.stringify(p))}),[h],[p]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Save data to localStorage"}),Object(o.jsx)("input",{type:"text",placeholder:"Name",value:c,onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"number",placeholder:"Age",value:i,onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){d((function(e){return[].concat(Object(x.a)(e),[c])})),v((function(e){return[].concat(Object(x.a)(e),[i])})),j(""),b("")},children:"Submit"}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("h1",{children:"Name"}),h.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{children:e})})}))]}),Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("h1",{children:"Age"}),p.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("p",{children:[e,Object(o.jsx)("button",{onClick:function(){return function(e){d((function(t){return t.filter((function(t,c){return c!==e}))})),v((function(t){return t.filter((function(t,c){return c!==e}))}))}(t)},children:"Delete"})]})})}))]})]})})]})};var p=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],j=t[1],a=function(){fetch("http://localhost:3000/posts").then((function(e){e.json().then((function(e){j(e)}))}))};return Object(n.useEffect)((function(){a()})),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"View Data Base"}),Object(o.jsx)("div",{class:"container mt-3",children:Object(o.jsxs)("table",{class:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Age"}),Object(o.jsx)("th",{children:"City"}),Object(o.jsx)("th",{children:"Phone"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.age}),Object(o.jsx)("td",{children:e.city}),Object(o.jsx)("td",{children:e.phone}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:function(){return t=e.id,void fetch("http://localhost:3000/posts/".concat(t),{method:"DELETE"}).then((function(e){e.json().then(a)}));var t},children:"Del"})})]})})}))})]})})]})},v=c(16),f={user:[{id:0,name:"",age:"",city:"",phone:""}]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return Object(v.a)(Object(v.a)({},e),{},{user:[].concat(Object(x.a)(e.user),[t.data])});case"DELETE":var c=e.user.filter((function(e,c){return c!==t.id}));return Object(v.a)(Object(v.a)({},e),{},{user:c});default:return e}},N=c(20),y=Object(N.a)({max:g}),S=Object(N.b)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var E=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(i.a,{store:S,children:Object(o.jsxs)(h.a,{children:[Object(o.jsxs)("div",{id:"max",children:[Object(o.jsx)(h.b,{className:"navv",to:"/home",children:"Home"}),Object(o.jsx)(h.b,{className:"navv",to:"/viewdb",children:"Data Base"}),Object(o.jsx)(h.b,{className:"navv",to:"/viewone",children:"View By one"})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{exact:!0,path:"/home",component:u}),Object(o.jsx)(d.a,{exact:!0,path:"/viewdb",component:p}),Object(o.jsx)(d.a,{exact:!0,path:"/viewone",component:m})]})]})})})};a.a.render(Object(o.jsx)(E,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.c8c50b8f.chunk.js.map