(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),u=n(3),l=n(1),s=n.n(l),i=n(7),m=n(2),p=n(4),b=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b("https://jsonplaceholder.typicode.com/todos"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b("https://jsonplaceholder.typicode.com/users"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.title,n=e.completed,a=e.user;return r.a.createElement("tr",{className:"table-info"},r.a.createElement("td",null,t),r.a.createElement("td",null,n?"OK":"KO"),r.a.createElement("td",null,a&&r.a.createElement("p",null,a.name)))},h=function(e){var t=e.todos,n=e.sortByTitle,a=e.showCompleted,c=e.sortByName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-info button-margin",type:"button",onClick:n},"sort by title"),r.a.createElement("button",{className:"btn btn-info button-margin",type:"button",onClick:a},"show completed"),r.a.createElement("button",{className:"btn btn-info",type:"button",onClick:c},"by user name")),r.a.createElement("table",{className:"table-bordered table-center"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"bg-danger"},r.a.createElement("th",null,"Todo"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"UserName"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(E,Object.assign({key:e.id},e))})))))},y=(n(14),function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(p.a)(o,2),b=l[0],E=l[1],y=function(){var e=Object(m.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,d();case 3:return t=e.sent,e.next=6,f();case 6:n=e.sent,c(t.map((function(e){return Object(i.a)({},e,{user:n.find((function(t){return t.id===e.userId}))})}))),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return b?r.a.createElement("p",{className:"loading"},"Loading..."):r.a.createElement("div",{className:"main"},r.a.createElement("div",null,n.length?r.a.createElement(h,{todos:n,sortByTitle:function(){c(Object(u.a)(n).sort((function(e,t){return e.title.localeCompare(t.title)})))},sortByName:function(){c(Object(u.a)(n).sort((function(e,t){return e.user.name.localeCompare(t.user.name)})))},showCompleted:function(){c(Object(u.a)(n).sort((function(e,t){return Number(t.completed)-Number(e.completed)})))}}):r.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:y},"Load All")))});o.a.render(r.a.createElement(y,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1c145b03.chunk.js.map