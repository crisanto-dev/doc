(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,6],{283:function(t,e,l){"use strict";l.r(e);var r={props:{title:{type:String,required:!0},description:{type:String,required:!0},path:{type:String,required:!0}}},n=l(8),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"card"},[l("div",{staticClass:"simple"},[l("nuxt-link",{attrs:{to:t.path}},[t._v(t._s(t.title))]),t._v(" "),l("p",[t._v(t._s(t.description))])],1)])}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,l){"use strict";l.r(e);var r={props:{value:{type:String,required:!1,default:""},tag:{type:String,required:!1,default:"button"},type:{type:String,required:!1,default:"primary"},path:{type:String,required:!1,default:null}},mounted:function(){console.log(this.tag)}},n=l(8),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",["a"==t.tag?l("a",{class:"button "+t.type,attrs:{href:t.path}},[t._v(t._s(t.value))]):l("button",{class:"button "+t.type},[t._v(t._s(t.value))])])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,l){"use strict";l.r(e);var r={props:{blogs:{type:Array,required:!0}},data:function(){return{title:"Recent blogs"}}},n=l(8),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"section"},[l("h4",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),l("div",{staticClass:"blog"},t._l(t.blogs,(function(e){return l("div",{key:e.path,staticClass:"section-blog"},[l("CardsSimple",{attrs:{title:e.title,description:e.description,path:t.localePath("/blog/"+e.slug)}})],1)})),0),t._v(" "),l("div",{staticClass:"section-footer"},[l("AppButton",{attrs:{value:"Ver todos",path:t.localePath("/blog"),tag:"a"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardsSimple:l(283).default,AppButton:l(285).default})}}]);