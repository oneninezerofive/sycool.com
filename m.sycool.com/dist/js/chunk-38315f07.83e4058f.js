(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38315f07"],{"0e44":function(t,e,n){var o=n("88dd"),i=n("a013"),a=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n("01f5")(Function.call,n("acb9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:a}},"15c2":function(t,e,n){"use strict";var o=n("db4b"),i=n("5fe5"),a=n("b146");t.exports=function(t){var e=o(this),n=a(e.length),r=arguments.length,s=i(r>1?arguments[1]:void 0,n),c=r>2?arguments[2]:void 0,d=void 0===c?n:i(c,n);while(d>s)e[s++]=t;return e}},"1c74":function(t,e,n){var o=n("b2f5");o(o.P,"Array",{fill:n("15c2")}),n("644a")("fill")},"44de":function(t,e,n){var o=n("88dd"),i=n("0e44").set;t.exports=function(t,e,n){var a,r=e.constructor;return r!==n&&"function"==typeof r&&(a=r.prototype)!==n.prototype&&o(a)&&i&&i(t,a),t}},"4d58":function(t,e,n){t.exports=n.p+"img/wechat.2dc7c737.png"},"539d":function(t,e,n){var o=n("b2f5"),i=n("f01a"),a=n("b6f1"),r=n("c9ea4"),s="["+r+"]",c="​",d=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),l=function(t,e,n){var i={},s=a(function(){return!!r[t]()||c[t]()!=c}),d=i[t]=s?e(f):r[t];n&&(i[n]=d),o(o.P+o.F*s,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},"87ec":function(t,e,n){},8928:function(t,e,n){t.exports=n.p+"img/qq.dea1b0b8.png"},"8dba":function(t,e,n){"use strict";var o=n("87ec"),i=n.n(o);i.a},9343:function(t,e,n){t.exports=n.p+"img/baidu.e31397cd.png"},a55b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-view"},[n("van-nav-bar",{attrs:{title:t.text.title[t.status],"left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-cell-group",[n("van-field",{attrs:{placeholder:t.text.userholder[t.status]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("van-field",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],attrs:{type:"password",placeholder:"密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("van-field",{directives:[{name:"show",rawName:"v-show",value:!t.status,expression:"!status"}],attrs:{placeholder:"验证码"},model:{value:t.checkcode,callback:function(e){t.checkcode=e},expression:"checkcode"}},[n("van-button",{attrs:{slot:"button",size:"normal",type:"primary",disable:t.geticode},slot:"button"},[t._v("发送验证码")])],1),n("van-field",{attrs:{placeholder:"图形验证码"},model:{value:t.icode,callback:function(e){t.icode=e},expression:"icode"}},[n("van-button",{staticClass:"code",attrs:{slot:"button",size:"small",type:"primary"},on:{click:t.refreshCode},slot:"button"},[n("sidentify",{attrs:{identifyCode:t.identifyCode}})],1)],1)],1),n("div",{staticClass:"login-btn"},[n("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.userlogin}},[t._v("登录")])],1),n("div",{staticClass:"plus-options"},[n("span",{on:{click:t.change}},[t._v(t._s(t.text.changedes[t.status]))]),n("span",[t._v(t._s(t.text.plusdes[t.status]))])]),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"third-party"},[o("div",[o("img",{attrs:{src:n("4d58"),alt:""}}),o("p",[t._v("微信登录")])]),o("div",[o("img",{attrs:{src:n("8928"),alt:""}}),o("p",[t._v("QQ登录")])]),o("div",[o("img",{attrs:{src:n("9343"),alt:""}}),o("p",[t._v("百度登录")])])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-canvas"},[n("canvas",{attrs:{id:"s-canvas",width:t.contentWidth,height:t.contentHeight}})])},r=[],s=(n("1c74"),n("d4d5"),{name:"sidentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:20},fontSizeMax:{type:Number,default:40},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:112},contentHeight:{type:Number,default:38}},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){var n=this.randomNum(t,e),o=this.randomNum(t,e),i=this.randomNum(t,e);return"rgb("+n+","+o+","+i+")"},drawPic:function(){var t=document.getElementById("s-canvas"),e=t.getContext("2d");e.textBaseline="bottom",e.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),e.fillRect(0,0,this.contentWidth,this.contentHeight);for(var n=0;n<this.identifyCode.length;n++)this.drawText(e,this.identifyCode[n],n);this.drawLine(e),this.drawDot(e)},drawText:function(t,e,n){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var o=(n+1)*(this.contentWidth/(this.identifyCode.length+1)),i=this.randomNum(this.fontSizeMax,this.contentHeight-5),a=this.randomNum(-45,45);t.translate(o,i),t.rotate(a*Math.PI/180),t.fillText(e,0,0),t.rotate(-a*Math.PI/180),t.translate(-o,-i)},drawLine:function(t){for(var e=0;e<4;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var e=0;e<25;e++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}}),c=s,d=n("6691"),u=Object(d["a"])(c,a,r,!1,null,null,null),l=u.exports,f={name:"login",components:{sidentify:l},data:function(){return{username:"",password:"",checkcode:"",icode:"",geticode:!0,identifyCodes:"abcdefghijklmnopqrstuvwxyz1234567890",identifyCode:"",status:0,text:{title:["短信快捷登录","账号密码登录"],userholder:["手机号","用户名/手机号/邮箱"],changedes:["账号密码登录","短信快捷登录"],plusdes:["收不到验证码？","忘记密码"]}}},methods:{onClickLeft:function(){this.$router.go(-1)},randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},makeCode:function(t,e){for(var n=0;n<e;n++)this.identifyCode+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)]},userlogin:function(){var t=this;this.icode===this.identifyCode?0===this.status?this.status=1:this.$axios({method:"post",url:"http://10.3.132.244:12345/login",data:this.$qs.stringify({username:this.username,password:this.password})}).then(function(e){e.data.status?(localStorage.setItem("loginToken",e.data.token),sessionStorage.setItem("isLogin",!0),sessionStorage.setItem("username",e.data.username),sessionStorage.setItem("uid",e.data.uid),t.$router.push({name:"home4"})):alert("用户名或密码错误！")}).catch(function(t){console.log(t)}):alert("验证码错误")},change:function(){this.status?this.status=0:this.status=1}},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)}},h=f,p=(n("8dba"),Object(d["a"])(h,o,i,!1,null,"41ae28d4",null));e["default"]=p.exports},a891:function(t,e,n){var o=n("fb6d"),i=n("b4e0").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,i)}},acb9:function(t,e,n){var o=n("d217"),i=n("7dea"),a=n("3a68"),r=n("5325"),s=n("03b3"),c=n("568a"),d=Object.getOwnPropertyDescriptor;e.f=n("dad2")?d:function(t,e){if(t=a(t),e=r(e,!0),c)try{return d(t,e)}catch(n){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},c9ea4:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},d4d5:function(t,e,n){"use strict";var o=n("3754"),i=n("03b3"),a=n("94ac"),r=n("44de"),s=n("5325"),c=n("b6f1"),d=n("a891").f,u=n("acb9").f,l=n("ddf7").f,f=n("539d").trim,h="Number",p=o[h],m=p,v=p.prototype,g=a(n("a7b8")(v))==h,b="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var n,o,i,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+e}for(var r,c=e.slice(2),d=0,u=c.length;d<u;d++)if(r=c.charCodeAt(d),r<48||r>i)return NaN;return parseInt(c,o)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(g?c(function(){v.valueOf.call(n)}):a(n)!=h)?r(new m(y(e)),n,p):y(e)};for(var C,N=n("dad2")?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;N.length>x;x++)i(m,C=N[x])&&!i(p,C)&&l(p,C,u(m,C));p.prototype=v,v.constructor=p,n("e5ef")(o,h,p)}}}]);
//# sourceMappingURL=chunk-38315f07.83e4058f.js.map