(this["webpackJsonpmoz-todo-react"]=this["webpackJsonpmoz-todo-react"]||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},26:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/Banner.f3caac45.png"},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c),s=(a(26),a(19)),m=a(10),o=a(6);a(12),a(1);var u=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),c.trim()&&(e.addTask(c),r(""))}},l.a.createElement("h2",{className:"label-wrapper"},l.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},"Write your Tasks!")),l.a.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:c,onChange:function(e){r(e.target.value)}}),l.a.createElement("button",{type:"submit",className:"btn btn__primary btn__lg"},"ADD NEW TASK"))};var i=function(e){return l.a.createElement("button",{type:"button",className:"btn toggle-btn","aria-pressed":e.isPressed,onClick:function(){return e.setFilter(e.name)}},l.a.createElement("span",{className:"visually-hidden"},"Show "),l.a.createElement("span",null,e.name),l.a.createElement("span",{className:"visually-hidden"}," tasks"))};function d(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),u=m[0],i=m[1],d=Object(n.useRef)(null),b=Object(n.useRef)(null),f=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(c);var p=l.a.createElement("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),u.trim()&&(e.editTask(e.id,u),i(""),r(!1))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"todo-label",htmlFor:e.id},"New name for ",e.name),l.a.createElement("input",{id:e.id,className:"todo-text",type:"text",value:u,onChange:function(e){i(e.target.value)},ref:d})),l.a.createElement("div",{className:"btn-group"},l.a.createElement("button",{type:"button",className:"btn todo-cancel",onClick:function(){return r(!1)}},"Cancel",l.a.createElement("span",{className:"visually-hidden"},"renaming ",e.name)),l.a.createElement("button",{type:"submit",className:"btn btn__primary todo-edit"},"Save",l.a.createElement("span",{className:"visually-hidden"},"new name for ",e.name)))),E=l.a.createElement("div",{className:"stack-small"},l.a.createElement("div",{className:"c-cb"},l.a.createElement("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),l.a.createElement("label",{className:"todo-label",htmlFor:e.id},e.name)),l.a.createElement("div",{className:"btn-group"},l.a.createElement("button",{type:"button",className:"btn",onClick:function(){return r(!0)},ref:b},"Edit ",l.a.createElement("span",{className:"visually-hidden"},e.name)),l.a.createElement("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)}},"Delete ",l.a.createElement("span",{className:"visually-hidden"},e.name))));return Object(n.useEffect)((function(){!f&&c&&d.current.focus(),f&&!c&&b.current.focus()}),[f,c]),l.a.createElement("li",{className:"todo"},c?p:E)}var b=a(20),f=function(){return l.a.createElement("form",{className:"form"},l.a.createElement("h2",{className:"label__lg"},"HELLO! Please leave your information!"),l.a.createElement("label",null),l.a.createElement("input",{className:"name",placeholder:"name"}),l.a.createElement("label",null),l.a.createElement("input",{className:"email",placeholder:"email"}),l.a.createElement("label",null),l.a.createElement("textarea",{className:"message",placeholder:"message"}),l.a.createElement("br",null),l.a.createElement("button",{className:"submit",type:"submit"},"SUBMIT"))};var p={All:function(){return!0},Active:function(e){return!e.completed},Completed:function(e){return e.completed}},E=Object.keys(p);var v=function(e){var t=Object(n.useState)(e.tasks),c=Object(o.a)(t,2),r=c[0],v=c[1],g=Object(n.useState)("All"),N=Object(o.a)(g,2),h=N[0],k=N[1];function O(e){var t=r.map((function(t){return e===t.id?Object(m.a)(Object(m.a)({},t),{},{completed:!t.completed}):t}));v(t)}function j(e){var t=r.filter((function(t){return e!==t.id}));v(t)}function y(e,t){var a=r.map((function(a){return e===a.id?Object(m.a)(Object(m.a)({},a),{},{name:t}):a}));v(a)}var _=r.filter(p[h]).map((function(e){return l.a.createElement(d,{id:e.id,name:e.name,completed:e.completed,key:e.id,toggleTaskCompleted:O,deleteTask:j,editTask:y})})),C=E.map((function(e){return l.a.createElement(i,{key:e,name:e,isPressed:e===h,setFilter:k})})),S=1!==_.length?"tasks":"task",x="".concat(_.length," ").concat(S," remaining"),T=Object(n.useRef)(null),w=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(r.length);return Object(n.useEffect)((function(){r.length-w===-1&&T.current.focus()}),[r.length,w]),l.a.createElement("div",{className:"todoapp stack-large"},l.a.createElement("img",{class:"image",src:a(35)}),l.a.createElement(f,null),l.a.createElement(u,{addTask:function(e){var t={id:"todo-"+Object(b.a)(),name:e,completed:!1};v([].concat(Object(s.a)(r),[t]))}}),l.a.createElement("div",{className:"filters btn-group stack-exception"},C),l.a.createElement("h2",{id:"list-heading",tabIndex:"-1",ref:T},x),l.a.createElement("ul",{role:"list",className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},_))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,{tasks:[]})),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1dcf7dcf.chunk.js.map