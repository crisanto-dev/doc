(window.webpackJsonp=window.webpackJsonp||[]).push([[14,9],{292:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,required:!1,default:null},next:{type:Object,required:!1,default:null}},methods:{delimite:function(t){return t.substring(0,25)+"..."}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"prev-next"},[n("div",{staticClass:"prev"},[null!=t.prev?n("nuxt-link",{attrs:{to:t.localePath("/blog/"+t.prev.slug),alt:t.prev.title}},[n("fa",{attrs:{icon:"arrow-left"}}),t._v("\n       "+t._s(t.delimite(t.prev.title))+"\n    ")],1):t._e()],1),t._v(" "),n("div",{staticClass:"next"},[null!=t.next?n("nuxt-link",{attrs:{to:t.localePath("/blog/"+t.next.slug),alt:t.next.title}},[t._v("\n      "+t._s(t.delimite(t.next.title))+" \n      "),n("fa",{attrs:{icon:"arrow-right"}})],1):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";n.r(e);n(38),n(12),n(18),n(44),n(17),n(46),n(23);var r,o=n(13),l=n(9),c=n(3),d=(n(67),n(22),n(45),n(32),n(1)),f=n(309);function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m=(r={asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,d,f,v,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=t.error,c=t.i18n,e.next=3,n(c.locale+"/blog",r.slug).fetch().catch((function(t){o({statusCode:404,message:"$t('error.404')"})}));case 3:return d=e.sent,e.next=6,n(c.locale+"/blog").only(["title","path"]).sortBy("createdAt","asc").surround(r.slug).fetch();case 6:return f=e.sent,v=Object(l.a)(f,2),h=v[0],m=v[1],e.abrupt("return",{blog:d,prev:h,next:m});case 11:case"end":return e.stop()}}),e)})))()},layout:"blog",methods:{getBlog:function(){console.log(this.blog)}},mounted:function(){setTimeout((function(){var t,e=v(document.getElementsByClassName("nuxt-content-highlight"));try{for(e.s();!(t=e.n()).done;){var n=t.value,component=(new(d.a.extend(f.default))).$mount();n.appendChild(component.$el)}}catch(t){e.e(t)}finally{e.f()}}),100)}},Object(o.a)(r,"methods",{}),Object(o.a)(r,"head",(function(){return{title:this.blog.title,meta:[{hid:"description",name:"description",content:this.blog.description},{hid:"og:title",property:"og:title",content:this.blog.title},{hid:"og:description",property:"og:description",content:this.blog.description},{hid:"twitter:title",name:"twitter:title",content:this.blog.title},{hid:"twitter:description",name:"twitter:description",content:this.blog.description}]}})),r),y=n(8),x=Object(y.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("div",{staticClass:"blog-sidebar"}),t._v(" "),n("div",{staticClass:"blog-body"},[n("h1",[t._v(t._s(t.blog.title))]),t._v(" "),n("div",{staticClass:"body"},[n("nuxt-content",{attrs:{document:t.blog}})],1),t._v(" "),n("prev-next",{attrs:{prev:t.prev,next:t.next}})],1),t._v(" "),n("div",{staticClass:"blog-sidebar"})])}),[],!1,null,null,null);e.default=x.exports;installComponents(x,{PrevNext:n(292).default})}}]);