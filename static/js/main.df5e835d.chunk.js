(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(5),s=c.n(n),o=c(2),r=c(1),i=(c(10),c(11),"https://mate.academy/students-api"),l=c(4),d=c.n(l),a=(c(12),c(0)),u=function(e){var t=e.todos,c=e.onUserIdSelected,n=e.selectedUserId,s=Object(r.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1],j=Object(r.useState)("all"),b=Object(o.a)(j,2),h=b[0],O=b[1],p=t.filter((function(e){return e.title.includes(l)}));return Object(a.jsxs)("div",{className:"TodoList",children:[Object(a.jsx)("h2",{children:"Todos:"}),Object(a.jsxs)("div",{className:"TodoList__list-container",children:[Object(a.jsx)("p",{children:"Filter todos by title"}),Object(a.jsx)("input",{type:"text",value:l,onChange:function(e){u(e.target.value)}}),Object(a.jsx)("p",{children:"Show todos by status"}),Object(a.jsxs)("select",{onChange:function(e){O(e.target.value)},children:[Object(a.jsx)("option",{value:"all",children:"Show all"}),Object(a.jsx)("option",{value:"active",children:"Show active"}),Object(a.jsx)("option",{value:"completed",children:"Show completed"})]}),Object(a.jsx)("ul",{className:"TodoList__list",children:function(e){switch(h){case"active":return e.filter((function(e){return!1===e.completed}));case"completed":return e.filter((function(e){return!0===e.completed}));default:return e}}(p).map((function(e){return Object(a.jsxs)("li",{className:d()("TodoList__item",{" TodoList__item--checked":e.completed," TodoList__item--unchecked":!e.completed}),children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(a.jsx)("p",{children:e.title})]}),Object(a.jsxs)("button",{type:"button",className:d()("TodoList__user-button","button",{"TodoList__user-button--selected":n===e.userId}),onClick:function(){c(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})]})]})},j=(c(14),function(e){var t=e.userId,c=e.onUserIdSelected,n=Object(r.useState)(null),s=Object(o.a)(n,2),l=s[0],d=s[1];return Object(r.useEffect)((function(){(function(e){return fetch("".concat(i,"/users/").concat(e)).then((function(e){if(!e.ok)throw new Error("Error");return e.json()}))})(t).then((function(e){return d(e)}))}),[t]),Object(a.jsxs)("div",{className:"CurrentUser",children:[l&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"CurrentUser__title",children:Object(a.jsx)("span",{children:"Selected user: ".concat(l.id)})}),Object(a.jsx)("button",{type:"button",onClick:function(){c(0)},children:"Clear"})]}),Object(a.jsx)("h3",{className:"CurrentUser__name",children:null===l||void 0===l?void 0:l.name}),Object(a.jsx)("p",{className:"CurrentUser__email",children:null===l||void 0===l?void 0:l.email}),Object(a.jsx)("p",{className:"CurrentUser__phone",children:null===l||void 0===l?void 0:l.phone})]})}),b=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)([]),l=Object(o.a)(s,2),d=l[0],b=l[1];Object(r.useEffect)((function(){fetch("".concat(i,"/todos")).then((function(e){return e.json()})).then((function(e){return b(e)}))}),[]);var h=function(e){return n(e)};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"App__sidebar",children:Object(a.jsx)(u,{todos:d,selectedUserId:c,onUserIdSelected:h})}),Object(a.jsx)("div",{className:"App__content",children:Object(a.jsx)("div",{className:"App__content-container",children:c?Object(a.jsx)(j,{userId:c,onUserIdSelected:h}):"No user selected"})})]})};s.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.df5e835d.chunk.js.map