(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2c79efc"],{ca31:function(t,e,s){"use strict";var n=s("d2e9"),i=s.n(n);i.a},d2e9:function(t,e,s){},ee7d:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{background:"#f5f5f5"}},[s("form",{attrs:{action:"/"}},[s("van-search",{attrs:{placeholder:"Ulike家用冰感无痛脱毛仪999","show-action":""},on:{cancel:t.onCancel},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("div",{staticClass:"hot"},[s("h3",[t._v("热销推荐")]),s("ul",{staticClass:"listwo"},t._l(t.listwo,function(e,n){return s("li",{key:n,domProps:{textContent:t._s(e)},on:{click:function(e){return t.goshop(1,"戒指/指环")}}})}),0),s("ul",{staticClass:"lissix"},t._l(t.lissix,function(e,n){return s("li",{key:n,domProps:{textContent:t._s(e)},on:{click:function(e){return t.goshop(2,"A&Y")}}})}),0)]),s("div",{staticClass:"mylike"},[s("h2",[t._v("猜你喜欢")]),s("ul",t._l(t.mylike,function(e,n){return s("li",{key:n,attrs:{"data-id":e._id},on:{click:function(s){return t.golist(e._id)}}},[s("div",{staticClass:"mylike_img"},[s("img",{attrs:{src:e.imgSrc[0],alt:""}})]),s("div",{staticClass:"mylike_font"},[s("p",{staticClass:"title",domProps:{textContent:t._s(e.gName)}}),s("p",{staticClass:"price"},[s("span",{staticClass:"d_price",domProps:{textContent:t._s("￥"+e.currentPrice)}}),s("span",{staticClass:"d_icon"},[t._v("会员价")])]),s("p",{staticClass:"del_price",domProps:{textContent:t._s("￥"+e.currentPrice)}}),s("p",{staticClass:"name"},[t._v("自营")])])])}),0)])])},i=[],a=(s("63ff"),s("e71e")),c={data:function(){return{value:"",listwo:["开学逆袭增肌季","EA 19秋冬新品"],lissix:["Champion","口红礼盒","Ray Ban","Tiffany","B&O","Gucci"],mylike:[]}},methods:{onCancel:function(){this.$router.push({name:"home0"})},golist:function(t){this.$router.push({name:"detapages",params:{id:t}})},goshop:function(t,e){this.$router.push({name:"listpage",params:{cla:t,name:e}})}},created:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("http://10.3.132.244:12345/goods/type?type=欧米茄&skip=2");case 2:e=t.sent,this.mylike=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},o=c,r=(s("ca31"),s("6691")),l=Object(r["a"])(o,n,i,!1,null,"7bcbf0ae",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-d2c79efc.44990bbc.js.map