(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{227:function(e,t,r){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},228:function(e,t,r){e.exports=r.p+"fonts/PTSans-Bold.f3941d8.woff2"},229:function(e,t,r){e.exports=r.p+"fonts/PTSans-Bold.d352e17.woff"},230:function(e,t,r){e.exports=r.p+"fonts/PTSans-Regular.334e181.ttf"},231:function(e,t,r){e.exports=r.p+"fonts/PTSans-Regular.9585da7.woff2"},232:function(e,t,r){e.exports=r.p+"fonts/PTSans-Regular.0745239.woff"},233:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(276))&&n.__esModule?n:{default:n};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=c;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!c(e)||t.test(e)}))}},246:function(e,t){function r(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function n(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,o){if(!r(t))return;function l(t){if(o.context){var r=t.path||t.composedPath&&t.composedPath();r&&r.length>0&&r.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var i=0,r=t.length;i<r;i++)try{if(e.contains(t[i]))return!0;if(t[i].contains(e))return!1}catch(e){return!1}return!1}(o.context.popupItem,r)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:l,callback:t.value};const c="ontouchstart"in document.documentElement?"touchstart":"click";!n(o)&&document.addEventListener(c,l)},update:function(e,t){r(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,r){const o="ontouchstart"in document.documentElement?"touchstart":"click";!n(r)&&e.__vueClickOutside__&&document.removeEventListener(o,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},258:function(e,t,r){var content=r(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(62).default)("0c355138",content,!0,{sourceMap:!1})},274:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return S.default}}),t.helpers=void 0;var n=A(r(275)),o=A(r(278)),l=A(r(279)),c=A(r(280)),d=A(r(281)),f=A(r(282)),m=A(r(283)),v=A(r(284)),_=A(r(285)),h=A(r(286)),x=A(r(287)),y=A(r(288)),w=A(r(289)),P=A(r(290)),C=A(r(291)),j=A(r(292)),O=A(r(293)),k=A(r(294)),M=A(r(295)),$=A(r(296)),S=A(r(297)),z=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(233));function A(e){return e&&e.__esModule?e:{default:e}}t.helpers=z},275:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(233).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},276:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(277).withParams:r(175).withParams;t.default=n}).call(this,r(173))},277:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(33))},278:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(233).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},279:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(233).regex)("numeric",/^[0-9]*$/);t.default=n},280:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},281:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(233).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},282:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},283:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},284:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},285:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},286:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},287:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},288:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},289:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},290:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(233).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},292:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},293:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(233);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},296:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(233).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},297:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(233).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},298:function(e,t,r){"use strict";r(258)},299:function(e,t,r){var n=r(61),o=r(227),l=r(228),c=r(229),d=r(230),f=r(231),m=r(232),v=n(!1),_=o(l),h=o(c),x=o(d),y=o(f),w=o(m);v.push([e.i,'@font-face{font-family:"PT Sans";src:url('+_+') format("ttf"),url('+_+') format("woff2"),url('+h+') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:"PT Sans";src:url('+x+') format("ttf"),url('+y+') format("woff2"),url('+w+') format("woff");font-weight:400;font-style:normal;font-display:swap}*{box-sizing:border-box}body,html{margin:0;padding:0}body{font-family:"PT Sans",sans-serif;font-weight:400;font-size:15px;min-width:320px;position:relative;overflow-x:hidden;-webkit-font-smoothing:antialiased}body.freeze{overflow:hidden}li,ul{margin:0;padding:0}input[type=email],input[type=tel],input[type=text],textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}.input,input{outline:none;display:block;width:100%;font-family:"PT Sans",sans-serif}textarea.input{resize:none;padding:0}.wrapper{position:relative;margin:0 auto;padding-left:15px;padding-right:15px;max-width:1300px}.justify{content:"";width:100%;height:0;display:inline-block;overflow:hidden;visibility:hidden;line-height:0}.hidden{display:none}.btn{display:inline-flex;width:100%;height:50px;align-items:center;justify-content:center;border:none;color:#fff;text-decoration:none;padding:0 45px;font-size:16px;line-height:21px;background-color:#1f1f1f;border-radius:8px;text-align:center;position:relative;outline:none;transition:all .1s ease;cursor:pointer}.btn:hover{background-color:#59606d}.ibg{background-position:50%;background-size:cover;background-repeat:no-repeat;position:relative}.ibg img{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0}._prod-img{position:relative;padding-bottom:79%}._prod-img img{display:block;max-width:100%;max-height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}._fit img{-o-object-fit:cover;object-fit:cover;position:absolute;left:0;-o-object-position:center center;object-position:center center}._fit img,.cart{width:100%;height:100%;right:0}.cart{display:flex;flex-direction:column;padding:52px 48px;position:fixed;top:0;background-color:#fff;max-width:460px;overflow:auto;transition:all .3s;transform:translate3D(100%,0,0);z-index:51;box-shadow:-4px 0 16px rgba(0,0,0,.05);border-radius:8px 0 0 8px}.cart.active{transform:translateZ(0)}@media only screen and (max-width:767px){.cart{padding:22px 18px}}.cart__header{display:flex;justify-content:space-between;align-items:center;flex:0 0 auto;margin-bottom:24px}.cart__title{font-weight:700;font-size:32px;line-height:41px}.cart__close{cursor:pointer}.cart__message{margin-bottom:24px;font-size:22px;line-height:28px}.cart__text{margin-bottom:16px;font-size:18px;line-height:23px;display:flex;align-items:flex-end;color:#59606d}.cart__body{flex:1 1 auto}.cart__items{margin-bottom:32px;max-height:400px;overflow:auto}.item-cart{padding:12px 22px 16px 25px;display:grid;grid-template-columns:100px 1fr auto;grid-column-gap:16px;box-shadow:0 4px 16px rgba(0,0,0,.05);border-radius:8px}.item-cart .cart__img{grid-row:span 4;margin-bottom:0}.item-cart .product-price{grid-column:2/3;margin-bottom:16px}.item-cart .product-rating{grid-column:2/3}@media only screen and (max-width:767px){.item-cart{padding-left:16px;padding-right:16px;grid-template-columns:50px 1fr auto}}.product__remove{grid-column:3/4;grid-row:1/4;align-self:center;cursor:pointer}.product__remove svg{fill:#959dad}@media (any-hover:hover){.product__remove:hover svg{fill:#000}}.form-cart{margin-bottom:24px}.form-cart__title{margin-bottom:16px;font-size:18px;line-height:23px;color:#59606d}.form-cart__label{display:block;margin-bottom:18px}.form-cart__label:last-of-type{margin-bottom:24px}.form-cart__input{display:flex;align-items:center;justify-content:center;padding:0 14px;height:50px;background:#f8f8f8;border-radius:8px;font-size:16px;line-height:21px;color:#959dad;border:none}.form-cart__input.invalid{outline:2px solid red}.cart-ok{flex:1 1 auto;display:flex;align-items:center;justify-content:center;flex-direction:column}.cart-ok__img{margin-bottom:24px}.cart-ok__title{margin-bottom:3px;font-weight:700;font-size:24px;text-align:center}.cart-ok__text{font-size:16px;line-height:21px;text-align:center;color:#59606d}',""]),e.exports=v},304:function(e,t,r){"use strict";r.r(t);r(27);var n=r(246),o=r.n(n),l=r(274),c={name:"Cart",props:["cartOpen","cart"],data:function(){return{isSubmited:!1,name:"",phone:"",loc:""}},validations:{name:{required:l.required},loc:{required:l.required},phone:{required:l.required}},methods:{cartHide:function(){this.$emit("update:cartOpen",!1),this.isSubmited=!1,this.$v.$reset()},prodRemove:function(e){this.$emit("remove-from-cart",e)},formSubmit:function(){this.$v.$invalid?this.$v.$touch():(this.$emit("clear-cart",null),this.isSubmited=!0,this.name=this.phone=this.loc="",this.$v.$reset())}},directives:{ClickOutside:o.a}},d=(r(298),r(26)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.cartHide,expression:"cartHide"}],staticClass:"cart"},[r("div",{staticClass:"cart__header"},[r("div",{staticClass:"cart__title"},[e._v("Корзина")]),e._v(" "),r("div",{staticClass:"cart__close",on:{click:e.cartHide}},[r("img",{attrs:{src:e.$config.baseURL+"/img/close.svg",alt:""}})])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isSubmited,expression:"!isSubmited"}],staticClass:"cart__messages"},[e.cart.length?r("div",{staticClass:"cart__text"},[e._v("Товары в корзине")]):r("div",{staticClass:"cart__message"},[e._v("Пока что вы ничего не добавили\nв корзину.")])]),e._v(" "),e.isSubmited?r("div",{staticClass:"cart__submit cart-ok"},[r("div",{staticClass:"cart-ok__img"},[r("img",{attrs:{src:e.$config.baseURL+"/img/ok.jpg",alt:"alt"}})]),e._v(" "),r("div",{staticClass:"cart-ok__title"},[e._v("Заявка успешно отправлена")]),e._v(" "),r("div",{staticClass:"cart-ok__text"},[e._v("Вскоре наш менеджер свяжется с Вами")])]):r("div",{staticClass:"cart__body"},[r("ul",{directives:[{name:"show",rawName:"v-show",value:e.cart.length,expression:"cart.length"}],staticClass:"cart__items"},e._l(e.cart,(function(t){return r("li",{key:t.id,staticClass:"cart__item item-cart"},[r("div",{staticClass:"_prod-img cart__img"},[r("img",{attrs:{src:"https://frontend-test.idaproject.com"+t.photo,alt:t.name}})]),e._v(" "),r("div",{staticClass:"product-title"},[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"product-price"},[e._v(e._s(t.price))]),e._v(" "),r("div",{staticClass:"product-rating"},[r("div",{staticClass:"product-rating__icon"},[r("div",{staticClass:"product-rating__out"}),e._v(" "),r("div",{staticClass:"product-rating__box",style:{height:t.rating/5*100+"%"}},[r("div",{staticClass:"product-rating__in"})])]),e._v(" "),r("div",{staticClass:"product-rating__value"},[e._v(e._s(t.rating))])]),e._v(" "),r("div",{staticClass:"product__remove",on:{click:function(r){return r.stopPropagation(),e.prodRemove(t.id)}}},[r("svg",{attrs:{width:"20",height:"22",viewBox:"0 0 20 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 5C0 4.44772 0.447715 4 1 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H1C0.447715 6 0 5.55228 0 5Z"}}),e._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2H8ZM15 4V3C15 2.20435 14.6839 1.44129 14.1213 0.87868C13.5587 0.31607 12.7956 0 12 0H8C7.20435 0 6.44129 0.31607 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H3C2.44772 4 2 4.44772 2 5V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H15C15.7957 22 16.5587 21.6839 17.1213 21.1213C17.6839 20.5587 18 19.7957 18 19V5C18 4.44772 17.5523 4 17 4H15ZM4 6V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V6H4Z"}}),e._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 9C8.55229 9 9 9.44771 9 10V16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16V10C7 9.44771 7.44772 9 8 9Z"}}),e._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 9C12.5523 9 13 9.44771 13 10V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V10C11 9.44771 11.4477 9 12 9Z"}})])])])})),0),e._v(" "),r("form",{staticClass:"cart__form form-cart",on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[e.cart.length?r("div",{staticClass:"cart-form__order"},[r("div",{staticClass:"form-cart__title"},[e._v("Оформить заказ")]),e._v(" "),r("label",{staticClass:"form-cart__label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-cart__input",class:{invalid:e.$v.name.$dirty&&!e.$v.name.required},attrs:{type:"text",name:"name",placeholder:"Ваше имя"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),r("label",{staticClass:"form-cart__label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"},{name:"mask",rawName:"v-mask",value:"+7 (###) ###-##-##",expression:"'+7 (###) ###-##-##'"}],staticClass:"form-cart__input",class:{invalid:e.$v.phone.$dirty&&!e.$v.phone.required},attrs:{type:"text",name:"phone",placeholder:"Телефон"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),r("label",{staticClass:"form-cart__label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.loc,expression:"loc"}],staticClass:"form-cart__input",class:{invalid:e.$v.loc.$dirty&&!e.$v.loc.required},attrs:{type:"text",name:"loc",placeholder:"Адрес"},domProps:{value:e.loc},on:{input:function(t){t.target.composing||(e.loc=t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn"},[e._v("Отправить")])]):r("button",{staticClass:"btn",on:{click:e.cartHide}},[e._v("Перейти к выбору")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);