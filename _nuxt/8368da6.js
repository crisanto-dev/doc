(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{284:function(t,e,r){"use strict";r.r(e);r(33),r(66);var n={props:{tags:{type:String,required:!0}},computed:{tagg:function(){return this.tags.split(",")}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tags"},[r("ul",{staticClass:"tag-list"},t._l(t.tagg,(function(e){return r("li",{key:e,staticClass:"tag"},[r("span",[t._v("\n        "+t._s(e)+"\n      ")])])})),0)])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,r){"use strict";r.r(e);var n={props:{project:{type:Object,require:!0}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card card-project"},[r("div",{},[r("nuxt-link",{attrs:{to:t.localePath(t.project.path.replace(/^(\/es)/,""))}},[t._v(t._s(t.project.title))]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.project.description))]),t._v(" "),r("AppTag",{attrs:{tags:t.project.tags}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTag:r(284).default})}}]);