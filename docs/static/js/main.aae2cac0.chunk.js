(this["webpackJsonprecetas-app"]=this["webpackJsonprecetas-app"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(6),o=t.n(c),s=(t(14),t(1)),i=t(8),l=function(e){var a=e.setCategories,t=Object(n.useState)(""),c=Object(s.a)(t,2),o=c[0],l=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o.trim().length>2&&(a((function(e){return[o].concat(Object(i.a)(e))})),l(""))},className:"search-form container mb-5"},r.a.createElement("input",{onChange:function(e){l(e.target.value)},className:"search-bar form-control text-center",placeholder:"Que quieres cosinar?","aria-describedby":"searchHelp",type:"text",value:o}),r.a.createElement("div",{id:"searchHelp",className:"form-text text-center"},"Escribe el nombre de un ingrediente o receta."))},m=(t(15),t(4)),u=t.n(m),d=t(7),p=function(){var e=Object(d.a)(u.a.mark((function e(a){var t,n,r,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"693523ac","8a0154089e798d90648839a1da62f297",t="https://api.edamam.com/search?q=".concat(encodeURI(a),"&app_id=").concat("693523ac","&app_key=").concat("8a0154089e798d90648839a1da62f297"),e.next=5,fetch(t);case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,c=r.hits,o=c.map((function(e){var a=e.recipe;return console.log(a.label),{title:a.label,image:a.image,ingredients:a.ingredientLines,label:a.label,uri:a.uri}})),console.log(o),e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),f=function(e){var a=e.title,t=e.image,n=e.ingredients,c=e.label;return console.log(c),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("img",{src:t,className:"card-img-top",alt:"recipe-img"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title text-info"},a),n.map((function(e){return r.a.createElement("p",{key:c,className:"card-text"},e)})))))},g=function(e){var a=function(e){var a=Object(n.useState)({data:[],loading:!0}),t=Object(s.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(e.category),t=a.data,c=a.loading;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"text-center text-info"},"Recetas destacadas"),c&&r.a.createElement("p",null,"Cargando..."),r.a.createElement("div",{className:"recipe-card row row-cols-1 row-cols-md-2 g-4"},t.map((function(e){return r.a.createElement(f,Object.assign({key:e.label},e))}))))},h=function(){var e=Object(n.useState)(["featured"]),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"head-wrap"},r.a.createElement("h2",{className:"sub-title"},"App de recetas")),r.a.createElement(l,{setCategories:c}),t.map((function(e){return r.a.createElement(g,{key:e,category:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(17);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.aae2cac0.chunk.js.map