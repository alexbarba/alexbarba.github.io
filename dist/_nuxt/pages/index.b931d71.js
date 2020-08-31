(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{195:function(t,e,r){var content=r(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("c035c202",content,!0,{sourceMap:!1})},199:function(t,e,r){"use strict";r.r(e);var l={name:"Card",props:{title:{type:String,required:!0},description:{type:String,required:!0},labels:{type:Array,required:!0},url:{type:String,required:!0},img:{type:String,required:!0}}},o=(r(201),r(3)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-sm rounded overflow-hidden shadow-lg card"},[r("a",{attrs:{href:t.url,target:"_blank"}},[r("img",{staticClass:"w-full",attrs:{src:t.img,alt:"logo"}})]),t._v(" "),r("div",{staticClass:"px-6 py-4"},[r("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"text-gray-700 text-base"},[t._v(t._s(t.description))])]),t._v(" "),r("div",{staticClass:"px-6 py-4"},t._l(t.labels,(function(label){return r("span",{key:label,staticClass:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},[t._v("#"+t._s(label))])})),0)])}),[],!1,null,"10dd3e96",null);e.default=component.exports},200:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMzAwIDMwMCI+PGc+PHBhdGggZD0iTTUwIDI2My40TDI3LjcgMTIuN2gyNDUuNmwtMjIuNCAyNTAuNy0xMDAuNiAyNy45em0wIDAiIGZpbGw9IiMxNTcyYjYiLz48cGF0aCBkPSJNMTUwLjUgMjcwbDgxLjItMjIuNkwyNTEgMzMuMkgxNTAuNXptMCAwIiBmaWxsPSIjMzNhOWRjIi8+PHBhdGggZD0iTTE1MC41IDEyNGg0MC43bDIuOC0zMS41aC00My41VjYxLjhoNzdsLS43IDguMi03LjUgODQuOGgtNjguOHptMCAwIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE1MC43IDIwMy45aC0uMmwtMzQuMi05LjItMi4yLTI0LjVIODMuMmw0LjMgNDguMiA2MyAxNy41aC4yem0wIDAiIGZpbGw9IiNlYmViZWIiLz48cGF0aCBkPSJNMTg4LjUgMTUzLjVsLTMuNyA0MS4yLTM0LjMgOS4ydjMybDYzLTE3LjUuNS01LjIgNS40LTU5Ljd6bTAgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTAuNiA2MS44djMwLjdINzYuM2wtLjYtNi45TDc0LjMgNzBsLS44LTguMnptLS4xIDYyLjJ2MzAuOGgtMzMuOGwtLjctNy0xLjQtMTUuNS0uNy04LjN6bTAgMCIgZmlsbD0iI2ViZWJlYiIvPjwvZz48L3N2Zz4NCg=="},201:function(t,e,r){"use strict";var l=r(195);r.n(l).a},202:function(t,e,r){(e=r(36)(!1)).push([t.i,".card[data-v-10dd3e96]{display:inline-block;margin:20px}img[data-v-10dd3e96]{margin-left:auto;margin-right:auto;width:auto;max-height:350px}",""]),t.exports=e},205:function(t,e,r){"use strict";r.r(e);var l=r(199),o=r(89),c={name:"Portfolio",components:{Card:l.default,MainLayout:o.a},data:function(){return{cards:[{title:"Fiestas de Octubre",id:"fiestas",description:"Mi primer proyecto llevado a producción fue el sitio web de Fiestas de Octubre Guadalajara 2017, para el cual mis nociones de HTML5 eran muy básicas. Inicié con un template como guia y lo personalicé al grado de que quedó identico al mockup que me entregaron. La duración del proyecto fue de una semana.",labels:["Jalisco","Evento"],url:"https://alexbarba.github.io/fiestas-de-octubre-2017/",img:"https://alexbarba.github.io/fiestas-de-octubre-2017/images/home/logo-nuevo.png"},{title:"Rojo Delicias",id:"rojodelicias",description:"Sitio web donde publican su información de contacto, su menú (desplegado con vue y un archivo JSON) y fotos de sus platillos. También he realizado: creación del menú, instalacion del sistema Odoo POS (Punto de Venta) y campañas de marketing para obtener followers.",labels:["Restaurante","Café","Postres"],url:"https://www.rojodelicias.com/",img:"https://www.rojodelicias.com/images/medium/logo-collapsed.png"},{title:"Teresa López Blog",id:"teresa",description:"El blog esta hecho con una starter library de Gatsby y se personalizó. Teresa es una escritora recien empezada, aún no es famosa pero algún dia lo será. Su contenido aún está en proceso pero el diseño y la funcionalidad están listos para explotar su talento.",labels:["Blog","Literatura"],url:"https://www.teresaescribe.net/",img:"https://i.imgur.com/B8kJUSn.png"},{title:"Platzi Video",id:"platzivideo",description:"UI para reproducción de video hecha en React. Proyecto realizado para el curso de React 2017 en la plataforma de educación Platzi.",labels:["React","Javascript","Platzi"],url:"https://alexbarba.github.io/curso-react/",img:"https://i.imgur.com/la6x97t.png"},{title:"Calculadora Binaria",id:"binaryCalculator",description:'Calculadora binaria hecha con Vainilla JS y CSS, usando Regex, a prueba de errores, para el reto "10 Days of Javascript" de Hackerrank',labels:["Calculadora","Javascript","CSS"],url:"https://alexbarba.github.io/BinaryCalculator/",img:"https://i.imgur.com/tKNvJ7t.png"}]}},head:{title:"Alexis Barba - Portafolio 🚀"}},n=r(3),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("MainLayout",[l("div",{staticClass:"container mx-auto divide-y-2 divide-black divide-opacity-25"},[l("div",{staticClass:"py-4"},[l("h2",{staticClass:"lg:text-3xl text-2xl"},[t._v("Proyectos")]),t._v(" "),t._l(t.cards,(function(t){return l("Card",{key:t.id,attrs:{title:t.title,description:t.description,labels:t.labels,url:t.url,img:t.img}})}))],2),t._v(" "),l("div",{staticClass:"py-4"},[l("h2",{staticClass:"lg:text-3xl text-2xl"},[t._v("\n        Lenguajes, Frameworks, Herramientas, Librerías\n      ")]),t._v(" "),l("div",{staticClass:"m-8"},[l("img",{staticClass:"h-40 inline-block m-4",attrs:{src:"https://i.imgur.com/x3CYclw.png"}}),t._v(" "),l("img",{staticClass:"h-40 inline-block m-4",attrs:{src:"https://i.imgur.com/cFC4rej.png"}}),t._v(" "),l("img",{staticClass:"h-40 inline-block m-4",attrs:{src:r(200)}}),t._v(" "),l("img",{staticClass:"h-40 inline-block m-4",attrs:{src:"https://i.imgur.com/9YHOqS6.png"}}),t._v(" "),l("img",{staticClass:"h-40 inline-block m-4",attrs:{src:"https://i.imgur.com/DGIFtCv.png"}}),t._v(" "),l("img",{staticClass:"h-40 inline-block m-4",attrs:{src:"https://i.imgur.com/aVSMiAF.png"}}),t._v(" "),l("img",{staticClass:"h-40 inline-block m-4",attrs:{src:"https://i.imgur.com/xeZOCCj.png"}}),t._v(" "),l("img",{staticClass:"h-40 inline-block m-4",attrs:{src:"https://i.imgur.com/Omud1zQ.png"}}),t._v(" "),l("img",{staticClass:"h-40 inline-block m-4",attrs:{src:"https://i.imgur.com/aK5pheS.png"}}),t._v(" "),l("img",{staticClass:"h-40 inline-block m-4",attrs:{src:"https://i.imgur.com/tVIwnQg.png"}})])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(199).default})}}]);