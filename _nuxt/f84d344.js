(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{313:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(32),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.i18n,r=t.error,e.next=3,n(o.locale+"/blog").only(["title","slug"]).sortBy("createdAt","asc").fetch().catch((function(t){r({statusCode:404,message:"Page not Found"})}));case 3:return l=e.sent,e.abrupt("return",{blogs:l});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"Blogs"}},methods:{getBlog:function(){console.log(this.blogs)}}}),l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("div",{staticClass:"blog-sidebar"}),t._v(" "),n("div",{staticClass:"blog-body"},[n("h1",{on:{click:function(e){return t.getBlog()}}},[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"list"},t._l(t.blogs,(function(e){return n("li",{key:e.path,staticClass:"list-item"},[n("nuxt-link",{attrs:{to:"/blog/"+e.slug}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0)]),t._v(" "),n("div",{staticClass:"blog-sidebar"})])}),[],!1,null,null,null);e.default=component.exports}}]);