(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-141ef4c8"],{2239:function(t,s,n){},"4fa8":function(t,s,n){"use strict";n.r(s);var o=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticStyle:{background:"#fff"}},[n("header",{attrs:{id:"head"}},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",[t._v("←")])]),n("h3",[t._v("品牌优选")]),n("div",{staticClass:"nav",on:{click:t.show}},[n("em",{staticClass:"iconfont icon-fenlei"}),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.bool,expression:"bool"}],staticClass:"nav_list"},t._l(t.nav,function(s,o){return n("li",{key:o,on:{click:function(s){return t.gogo(o)}}},[n("span",{staticClass:"iconfont",class:s.icon}),n("span",{domProps:{textContent:t._s(s.font)}})])}),0)])]),n("h3",{staticClass:"title"},[t._v("品牌优选")]),n("div",{staticClass:"shop_list"},[n("ul",t._l(t.shop,function(s,o){return n("li",{key:o,attrs:{"data-name":s.des}},[n("div",{staticClass:"shop_img"},[n("img",{attrs:{src:s.img,alt:""}})]),n("div",{staticClass:"shop_font"},[n("p",{domProps:{textContent:t._s(s.des)}}),n("div",[t._v("查看更多")])])])}),0)]),n("div",{staticClass:"shop_list3"},[n("ul",t._l(t.shopthree,function(s,o){return n("li",{key:o,attrs:{"data-name":s.des}},[n("div",{staticClass:"shop_img"},[n("img",{attrs:{src:s.img,alt:""}})]),n("div",{staticClass:"shop_font"},[n("p",{domProps:{textContent:t._s(s.des)}})])])}),0)])])},i=[],e=(n("63ff"),n("e71e")),a={data:function(){return{bool:!1,b:"",nav:[{icon:"icon-shouye",font:"首页"},{icon:"icon-pinpai",font:"品牌"},{icon:"icon-fenlei",font:"分类"},{icon:"icon-gouwudai",font:"购物袋"},{icon:"icon-wode-copy",font:"我的"}],num:0,shop:[],shopthree:[]}},methods:{back:function(){this.$router.push({name:"home0"})},show:function(){this.bool=!this.bool},gogo:function(t){this.num=t,this.$router.push({name:"home".concat(t)})}},created:function(){var t=Object(e["a"])(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("http://10.3.132.244:12345/brands/list");case 2:s=t.sent,this.shop=s.data.slice(0,56),this.shopthree=s.data.slice(56,110);case 5:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}()},c=a,r=(n("cb87"),n("6691")),l=Object(r["a"])(c,o,i,!1,null,"e8157a00",null);s["default"]=l.exports},cb87:function(t,s,n){"use strict";var o=n("2239"),i=n.n(o);i.a}}]);
//# sourceMappingURL=chunk-141ef4c8.ed753dfd.js.map