(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6],{283:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0},description:{type:String,required:!0},path:{type:String,required:!0}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"simple"},[r("nuxt-link",{attrs:{to:t.path}},[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.description))])],1)])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);var n={props:{coachs:{type:Array,required:!0}},data:function(){return{title:"Recent coach"}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section"},[r("h4",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"coach"},t._l(t.coachs,(function(t){return r("div",{key:t.path,staticClass:"section-blog"},[r("CardsSimple",{attrs:{title:t.title,description:t.description,path:t.path}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsSimple:r(283).default})}}]);