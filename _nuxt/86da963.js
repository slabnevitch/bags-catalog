(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},228:function(t,e,o){t.exports=o.p+"fonts/PTSans-Bold.f3941d8.woff2"},229:function(t,e,o){t.exports=o.p+"fonts/PTSans-Bold.d352e17.woff"},230:function(t,e,o){t.exports=o.p+"fonts/PTSans-Regular.334e181.ttf"},231:function(t,e,o){t.exports=o.p+"fonts/PTSans-Regular.9585da7.woff2"},232:function(t,e,o){t.exports=o.p+"fonts/PTSans-Regular.0745239.woff"},236:function(t,e,o){var content=o(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("737e6e7e",content,!0,{sourceMap:!1})},247:function(t,e,o){"use strict";o.r(e);var n={name:"Header",props:["cartOpen","cart"],data:function(){return{}},methods:{cartShow:function(){console.log("cartShow!"),this.$emit("update:cartOpen",!0)}}},r=(o(248),o(26)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"header__inner"},[o("a",{staticClass:"header__logo",attrs:{href:"#"}},[t._v("TestList")]),t._v(" "),o("div",{staticClass:"header__cart cart-header"},[o("div",{staticClass:"cart-header__icon",on:{click:function(e){return e.stopPropagation(),t.cartShow.apply(null,arguments)}}},[o("svg",{attrs:{width:"24",height:"27",viewBox:"0 0 24 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.84 0.48C4.06663 0.177833 4.42229 0 4.8 0H19.2C19.5777 0 19.9334 0.177833 20.16 0.48L23.76 5.28C23.9158 5.48772 24 5.74036 24 6V22.8C24 23.7548 23.6207 24.6705 22.9456 25.3456C22.2705 26.0207 21.3548 26.4 20.4 26.4H3.6C2.64522 26.4 1.72955 26.0207 1.05442 25.3456C0.379285 24.6705 0 23.7548 0 22.8V6C0 5.74036 0.0842134 5.48772 0.24 5.28L3.84 0.48ZM5.4 2.4L2.4 6.4V22.8C2.4 23.1183 2.52643 23.4235 2.75147 23.6485C2.97652 23.8736 3.28174 24 3.6 24H20.4C20.7183 24 21.0235 23.8736 21.2485 23.6485C21.4736 23.4235 21.6 23.1183 21.6 22.8V6.4L18.6 2.4H5.4Z",fill:"#1F1F1F"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 6C0 5.33726 0.537258 4.8 1.2 4.8H22.8C23.4627 4.8 24 5.33726 24 6C24 6.66274 23.4627 7.2 22.8 7.2H1.2C0.537258 7.2 0 6.66274 0 6Z",fill:"#1F1F1F"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.2 9.6C7.86274 9.6 8.4 10.1373 8.4 10.8C8.4 11.7548 8.77928 12.6705 9.45442 13.3456C10.1295 14.0207 11.0452 14.4 12 14.4C12.9548 14.4 13.8705 14.0207 14.5456 13.3456C15.2207 12.6705 15.6 11.7548 15.6 10.8C15.6 10.1373 16.1373 9.6 16.8 9.6C17.4627 9.6 18 10.1373 18 10.8C18 12.3913 17.3679 13.9174 16.2426 15.0426C15.1174 16.1679 13.5913 16.8 12 16.8C10.4087 16.8 8.88258 16.1679 7.75736 15.0426C6.63214 13.9174 6 12.3913 6 10.8C6 10.1373 6.53726 9.6 7.2 9.6Z",fill:"#1F1F1F"}})]),t._v(" "),t.cart.length?o("div",{staticClass:"cart-header__counter"},[t._v(t._s(t.cart.length))]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(247).default})},248:function(t,e,o){"use strict";o(236)},249:function(t,e,o){var n=o(61),r=o(227),l=o(228),f=o(229),d=o(230),c=o(231),h=o(232),w=n(!1),x=r(l),m=r(f),v=r(d),C=r(c),_=r(h);w.push([t.i,'@font-face{font-family:"PT Sans";font-style:bold;font-weight:700;src:url(/fonts/PT_Sans/PTSans-Bold) format("woff2")}@font-face{font-family:"PT Sans";font-style:normal;font-weight:400;src:url(/fonts/PT_Sans/PTSans-Regular) format("woff2")}@font-face{font-family:"PT Sans";src:url('+x+') format("ttf"),url('+x+') format("woff2"),url('+m+') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:"PT Sans";src:url('+v+') format("ttf"),url('+C+') format("woff2"),url('+_+') format("woff");font-weight:400;font-style:normal;font-display:swap}*{box-sizing:border-box}body,html{margin:0;padding:0}body{font-family:"PT Sans",sans-serif;font-weight:400;font-size:15px;min-width:320px;position:relative;overflow-x:hidden;-webkit-font-smoothing:antialiased}body.freeze{overflow:hidden}li,ul{margin:0;padding:0}input[type=email],input[type=tel],input[type=text],textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}.input,input{outline:none;display:block;width:100%;font-family:"PT Sans",sans-serif}textarea.input{resize:none;padding:0}.wrapper{position:relative;margin:0 auto;padding-left:15px;padding-right:15px;max-width:1300px}.justify{content:"";width:100%;height:0;display:inline-block;overflow:hidden;visibility:hidden;line-height:0}.hidden{display:none}.btn{display:inline-flex;width:100%;height:50px;align-items:center;justify-content:center;border:none;color:#fff;text-decoration:none;padding:0 45px;font-size:16px;line-height:21px;background-color:#1f1f1f;border-radius:8px;text-align:center;position:relative;outline:none;transition:all .1s ease;cursor:pointer}.btn:hover{background-color:#59606d}.ibg{background-position:50%;background-size:cover;background-repeat:no-repeat;position:relative}.ibg img{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0}._prod-img{position:relative;padding-bottom:79%}._prod-img img{display:block;max-width:100%;max-height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}._fit img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;left:0;right:0;-o-object-position:center center;object-position:center center}.header{position:fixed;z-index:50;left:0;top:0;width:100%;min-height:40px;box-shadow:0 4px 16px rgba(0,0,0,.05);border-radius:0 0 8px 8px;background-color:#fff}.header__inner{display:grid;grid-template-columns:repeat(2,auto);justify-content:space-between;align-items:center;min-height:66px}.header__logo{font-size:22px;line-height:28px;font-weight:700;text-decoration:none;color:#59606d}.cart-header{position:relative}.cart-header__counter{position:absolute;display:flex;justify-content:center;align-items:center;top:-5px;right:-5px;min-width:12px;height:12px;border-radius:50%;background-color:#959dad;font-weight:700;font-size:8px;line-height:10px;color:#fff}',""]),t.exports=w}}]);