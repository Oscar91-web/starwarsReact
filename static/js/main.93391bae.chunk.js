(this.webpackJsonpuppgift2=this.webpackJsonpuppgift2||[]).push([[0],{16:function(e,t,a){e.exports=a(41)},21:function(e,t,a){},22:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),u=(a(21),a(22),a(3)),i=a.n(u),o=a(14),m=a(2),s=a(15),E=a.n(s),f=function(e){var t=e.favorites;return l.a.createElement("div",{className:"addFavorites"},l.a.createElement("label",null,"Favorites:"),l.a.createElement("div",{className:"listUL antiabsolute"},t.filter((function(e){return!e.unreal})).map((function(e){return l.a.createElement("ul",{key:e.name},l.a.createElement("li",null,e.name),l.a.createElement("li",null," ",e.eye_color," "),l.a.createElement("li",null,e.birth_year))}))),l.a.createElement("label",null,"Made up:"),l.a.createElement("div",{className:"listUL antiabsolute"},t.filter((function(e){return e.unreal})).map((function(e){return l.a.createElement("ul",{key:e.name},l.a.createElement("li",null," ",e.name),l.a.createElement("li",null," ",e.eye_color),l.a.createElement("li",null," ",e.birth_year))}))))},v=function(e){var t=e.add,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],u=r[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),s=o[0],E=o[1],f=Object(n.useState)(""),v=Object(m.a)(f,2),d=v[0],p=v[1];return l.a.createElement("div",{className:"addFavorites dontoverdoit"},l.a.createElement("label",null,"Create a new character"),l.a.createElement("form",{onSubmit:function(e){t({name:s,eye_color:c,birth_year:d,unreal:!0}),e.preventDefault(),u(""),E(""),p("")}},l.a.createElement("ul",{className:"addUL"},l.a.createElement("li",null,l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",value:s,onChange:function(e){E(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Eye color:"),l.a.createElement("input",{type:"text",value:c,onChange:function(e){u(e.target.value)}})),l.a.createElement("li",null,l.a.createElement("label",null,"Birth year:"),l.a.createElement("input",{type:"text",value:d,onChange:function(e){p(e.target.value)}})),l.a.createElement("input",{type:"submit",value:"Submit"}))))},d=function(e){var t=e.person,a=e.addFavorite;return l.a.createElement("li",{key:t.name},l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,t.name),l.a.createElement("li",null,t.eye_color," eyes"),l.a.createElement("li",null,"Birth year: ",t.birth_year))),l.a.createElement("div",null,l.a.createElement("button",{className:"favoriteButton",onClick:function(){return a(t)}},"Add favorite")))},p=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),u=Object(m.a)(c,2),s=u[0],p=u[1],b=Object(n.useState)([]),h=Object(m.a)(b,2),y=h[0],g=h[1],j=Object(n.useState)(!0),O=Object(m.a)(j,2),k=O[0],N=O[1],x=Object(n.useState)(null),S=Object(m.a)(x,2),w=S[0],_=S[1];Object(n.useEffect)((function(){B("https://swapi.dev/api/people/"),N(!1)}),[]);var C=function(e){s.find((function(t){return e.name===t.name}))||p((function(t){return t.concat(e)}))},B=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],e.prev=1,n=0;case 3:if(!(n<10&&t)){e.next=16;break}return e.next=6,E.a.get(t);case 6:if(null==(l=e.sent)){e.next=12;break}t=l.data.next,a=a.concat(l.data.results),e.next=13;break;case 12:return e.abrupt("break",16);case 13:n++,e.next=3;break;case 16:g(a),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),_(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}();return k?l.a.createElement("h3",null," loading"):w?l.a.createElement("h3",null,w):l.a.createElement("div",null,l.a.createElement("div",{className:"category"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},l.a.createElement("input",{className:"searchInput",type:"text",placeholder:"Search character",value:a,onChange:function(e){console.log("HandleChange: "+a),r(e.target.value)}})),l.a.createElement("ul",{className:"listUL"},y.filter((function(e){return function(e,t){if(0===t.length)return!1;var a=RegExp(t,"i");return!!e.name.match(a)||(!!e.eye_color.match(a)||!!e.birth_year.match(a))}(e,a)})).map((function(e){return l.a.createElement(d,{key:e.name,person:e,addFavorite:C})})))),l.a.createElement("div",{className:"switch"},l.a.createElement("div",{className:"first"},l.a.createElement(f,{favorites:s})),l.a.createElement("div",{className:"last"},l.a.createElement(v,{add:C}))))};var b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Star Wars ")),l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.93391bae.chunk.js.map