(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3],{227:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},228:function(t,e,o){t.exports=o.p+"fonts/PTSans-Bold.f3941d8.woff2"},229:function(t,e,o){t.exports=o.p+"fonts/PTSans-Bold.d352e17.woff"},230:function(t,e,o){t.exports=o.p+"fonts/PTSans-Regular.334e181.ttf"},231:function(t,e,o){t.exports=o.p+"fonts/PTSans-Regular.9585da7.woff2"},232:function(t,e,o){t.exports=o.p+"fonts/PTSans-Regular.0745239.woff"},235:function(t,e,o){var content=o(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("1d0c5f44",content,!0,{sourceMap:!1})},241:function(t,e,o){"use strict";o(235)},242:function(t,e,o){var n=o(61),r=o(227),d=o(228),l=o(229),c=o(230),f=o(231),h=o(232),m=n(!1),w=r(d),v=r(l),x=r(c),_=r(f),y=r(h);m.push([t.i,'@font-face{font-family:"PT Sans";font-style:bold;font-weight:700;src:url(/fonts/PT_Sans/PTSans-Bold) format("woff2")}@font-face{font-family:"PT Sans";font-style:normal;font-weight:400;src:url(/fonts/PT_Sans/PTSans-Regular) format("woff2")}@font-face{font-family:"PT Sans";src:url('+w+') format("ttf"),url('+w+') format("woff2"),url('+v+') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:"PT Sans";src:url('+x+') format("ttf"),url('+_+') format("woff2"),url('+y+') format("woff");font-weight:400;font-style:normal;font-display:swap}*{box-sizing:border-box}body,html{margin:0;padding:0}body{font-family:"PT Sans",sans-serif;font-weight:400;font-size:15px;min-width:320px;position:relative;overflow-x:hidden;-webkit-font-smoothing:antialiased}body.freeze{overflow:hidden}li,ul{margin:0;padding:0}input[type=email],input[type=tel],input[type=text],textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}.input,input{outline:none;display:block;width:100%;font-family:"PT Sans",sans-serif}textarea.input{resize:none;padding:0}.wrapper{position:relative;margin:0 auto;padding-left:15px;padding-right:15px;max-width:1300px}.justify{content:"";width:100%;height:0;display:inline-block;overflow:hidden;visibility:hidden;line-height:0}.hidden{display:none}.btn{display:inline-flex;width:100%;height:50px;align-items:center;justify-content:center;border:none;color:#fff;text-decoration:none;padding:0 45px;font-size:16px;line-height:21px;background-color:#1f1f1f;border-radius:8px;text-align:center;position:relative;outline:none;transition:all .1s ease;cursor:pointer}.btn:hover{background-color:#59606d}.ibg{background-position:50%;background-size:cover;background-repeat:no-repeat;position:relative}.ibg img{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0}._prod-img{position:relative;padding-bottom:79%}._prod-img img{display:block;max-width:100%;max-height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}._fit img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;left:0;right:0;-o-object-position:center center;object-position:center center}.card{display:block;position:relative;padding:18px;box-shadow:0 4px 16px rgba(0,0,0,.05);border-radius:8px;text-decoration:none}.card__header{padding:18px;position:absolute;top:0;left:0;width:100%;justify-content:space-between;z-index:2}.card__header,.product-rating{display:flex;align-items:center}.product-rating__value{margin-left:5px;color:#f2c94c;font-size:10px;line-height:13px}.card__to-cart{cursor:pointer}.card__to-cart svg{fill:#959dad}@media (any-hover:hover){.card__to-cart:hover svg{fill:#000}}.card__img{padding-bottom:80%}._prod-img{margin-bottom:16px}.product-title{margin-bottom:6px;color:#59606d}.product-price,.product-title{font-size:14px;line-height:18px}.product-price{font-weight:700;color:#1f1f1f}.product-rating__icon{position:relative;width:30px;height:30px}.product-rating__box,.product-rating__in,.product-rating__out{top:0;left:0;right:0;margin:auto;position:absolute;width:30px;height:30px;bottom:0;top:auto;background-repeat:no-repeat;background-position:50%;background-size:100%}.product-rating__out{background-image:url(/bags-catalog/img/star-empty.svg)}.product-rating__in{background-image:url(/bags-catalog/img/star-full.svg)}.product-rating__box{overflow:hidden}.card__in-cart img{width:25px}.card__link{text-decoration:none}',""]),t.exports=m},243:function(t,e,o){var content=o(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("540d27b4",content,!0,{sourceMap:!1})},245:function(t,e,o){"use strict";o.r(e);var n={name:"Card",props:["product","isInCart"],data:function(){return{}},methods:{addToCart:function(t){this.$emit("add-to-cart",t)}}},r=(o(241),o(26)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card"},[o("div",{staticClass:"card__header"},[o("div",{staticClass:"product-rating"},[o("div",{staticClass:"product-rating__icon"},[o("div",{staticClass:"product-rating__out"}),t._v(" "),o("div",{staticClass:"product-rating__box",style:{height:t.product.rating/5*100+"%"}},[o("div",{staticClass:"product-rating__in"})])]),t._v(" "),o("div",{staticClass:"product-rating__value"},[t._v(t._s(t.product.rating))])]),t._v(" "),t.isInCart?o("div",{staticClass:"card__in-cart"},[o("img",{attrs:{src:"/bags-catalog/img/check.svg",alt:""}})]):o("div",{staticClass:"card__to-cart",on:{click:function(e){return e.stopPropagation(),t.addToCart(t.product)}}},[o("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.92 1.74C4.03331 1.58892 4.21115 1.5 4.4 1.5H11.6C11.7889 1.5 11.9667 1.58892 12.08 1.74L13.88 4.14C13.9579 4.24386 14 4.37018 14 4.5V12.9C14 13.3774 13.8104 13.8352 13.4728 14.1728C13.1352 14.5104 12.6774 14.7 12.2 14.7H3.8C3.32261 14.7 2.86477 14.5104 2.52721 14.1728C2.18964 13.8352 2 13.3774 2 12.9V4.5C2 4.37018 2.04211 4.24386 2.12 4.14L3.92 1.74ZM4.7 2.7L3.2 4.7V12.9C3.2 13.0591 3.26321 13.2117 3.37574 13.3243C3.48826 13.4368 3.64087 13.5 3.8 13.5H12.2C12.3591 13.5 12.5117 13.4368 12.6243 13.3243C12.7368 13.2117 12.8 13.0591 12.8 12.9V4.7L11.3 2.7H4.7Z"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2 4.5C2 4.16863 2.26863 3.9 2.6 3.9H13.4C13.7314 3.9 14 4.16863 14 4.5C14 4.83137 13.7314 5.1 13.4 5.1H2.6C2.26863 5.1 2 4.83137 2 4.5Z"}}),t._v(" "),o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.6 6.3C5.93137 6.3 6.2 6.56863 6.2 6.9C6.2 7.37739 6.38964 7.83523 6.72721 8.17279C7.06477 8.51036 7.52261 8.7 8 8.7C8.47739 8.7 8.93523 8.51036 9.27279 8.17279C9.61036 7.83523 9.8 7.37739 9.8 6.9C9.8 6.56863 10.0686 6.3 10.4 6.3C10.7314 6.3 11 6.56863 11 6.9C11 7.69565 10.6839 8.45871 10.1213 9.02132C9.55871 9.58393 8.79565 9.9 8 9.9C7.20435 9.9 6.44129 9.58393 5.87868 9.02132C5.31607 8.45871 5 7.69565 5 6.9C5 6.56863 5.26863 6.3 5.6 6.3Z"}})])])]),t._v(" "),o("nuxt-link",{staticClass:"card__link",attrs:{to:"/"+t.product.id}},[o("div",{staticClass:"card__img _prod-img"},[o("img",{attrs:{src:"https://frontend-test.idaproject.com"+t.product.photo,alt:t.product.name}})]),t._v(" "),o("div",{staticClass:"product-title"},[t._v(t._s(t.product.name))]),t._v(" "),o("div",{staticClass:"product-price"},[t._v(t._s(t.product.price))])])],1)}),[],!1,null,null,null);e.default=component.exports},254:function(t,e,o){"use strict";o(243)},255:function(t,e,o){var n=o(61),r=o(227),d=o(228),l=o(229),c=o(230),f=o(231),h=o(232),m=n(!1),w=r(d),v=r(l),x=r(c),_=r(f),y=r(h);m.push([t.i,'@font-face{font-family:"PT Sans";font-style:bold;font-weight:700;src:url(/fonts/PT_Sans/PTSans-Bold) format("woff2")}@font-face{font-family:"PT Sans";font-style:normal;font-weight:400;src:url(/fonts/PT_Sans/PTSans-Regular) format("woff2")}@font-face{font-family:"PT Sans";src:url('+w+') format("ttf"),url('+w+') format("woff2"),url('+v+') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:"PT Sans";src:url('+x+') format("ttf"),url('+_+') format("woff2"),url('+y+') format("woff");font-weight:400;font-style:normal;font-display:swap}*{box-sizing:border-box}body,html{margin:0;padding:0}body{font-family:"PT Sans",sans-serif;font-weight:400;font-size:15px;min-width:320px;position:relative;overflow-x:hidden;-webkit-font-smoothing:antialiased}body.freeze{overflow:hidden}li,ul{margin:0;padding:0}input[type=email],input[type=tel],input[type=text],textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}.input,input{outline:none;display:block;width:100%;font-family:"PT Sans",sans-serif}textarea.input{resize:none;padding:0}.wrapper{position:relative;margin:0 auto;padding-left:15px;padding-right:15px;max-width:1300px}.justify{content:"";width:100%;height:0;display:inline-block;overflow:hidden;visibility:hidden;line-height:0}.hidden{display:none}.btn{display:inline-flex;width:100%;height:50px;align-items:center;justify-content:center;border:none;color:#fff;text-decoration:none;padding:0 45px;font-size:16px;line-height:21px;background-color:#1f1f1f;border-radius:8px;text-align:center;position:relative;outline:none;transition:all .1s ease;cursor:pointer}.btn:hover{background-color:#59606d}.ibg{background-position:50%;background-size:cover;background-repeat:no-repeat;position:relative}.ibg img{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0}._prod-img{position:relative;padding-bottom:79%}._prod-img img{display:block;max-width:100%;max-height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}._fit img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;left:0;right:0;-o-object-position:center center;object-position:center center}.swiper-button-prev{left:0}@media only screen and (max-width:375px){.swiper-button-prev{display:none}}.swiper-button-next{right:0}@media only screen and (max-width:375px){.swiper-button-next{display:none}}',""]),t.exports=m},263:function(t,e,o){"use strict";o.r(e);var n={props:["cards","cart"],data:function(){return{banners:["Skotnik","Bredov","Babunov"],swiperOption:{autoplay:5e3,initialSlide:1,loop:!0,slidesPerView:5,spaceBetween:18,watchOverflow:!1,prevButton:".swiper-button-prev",nextButton:".swiper-button-next",breakpoints:{375:{slidesPerView:1.2,spaceBetween:15},576:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4}},onSlideChangeEnd:function(t){}}}},mounted:function(){},methods:{addProduct:function(t){this.$emit("add-to-cart",t)}}},r=(o(254),o(26)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[o("div",{staticClass:"swiper-wrapper"},t._l(t.cards,(function(e){return o("div",{staticClass:"swiper-slide"},[o("card",{attrs:{product:e,isInCart:null!=t.cart.find((function(t){return t.id===e.id}))},on:{"add-to-cart":t.addProduct}})],1)})),0)]),t._v(" "),o("div",{staticClass:"swiper-pagination swiper-pagination-bullets"}),t._v(" "),o("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),o("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:o(245).default})}}]);