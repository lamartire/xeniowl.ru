!function e(t,n,o){function i(s,a){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return i(n||e)},c,c.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t,n){(function(e){!function(e,o){"function"==typeof define&&define.amd?define([],function(){return o(e)}):"object"==typeof n?t.exports=o(e):e.SmoothScroll=o(e)}(void 0!==e?e:"undefined"!=typeof window?window:this,function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++)!function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}(arguments[t]);return e},i=function(t){return parseInt(e.getComputedStyle(t).height,10)},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,r="",s=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===s?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+r},s=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},a=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},u=function(e){return e?i(e)+e.offsetTop:0},c=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},d=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(i,f){var h,m,v,p,g,y,b,k={};k.cancelScroll=function(){cancelAnimationFrame(b)},k.animateScroll=function(t,i,r){var d=o(h||n,r||{}),f="[object Number]"===Object.prototype.toString.call(t),m=f||!t.tagName?null:t;if(f||m){var v=e.pageYOffset;d.header&&!p&&(p=document.querySelector(d.header)),g||(g=u(p));var y,b,O,C=f?t:l(m,g,parseInt("function"==typeof d.offset?d.offset():d.offset,10)),E=C-v,w=a(),L=0,M=function(n,o){var r=e.pageYOffset;if(n==o||r==o||(v<o&&e.innerHeight+r)>=w)return k.cancelScroll(),c(t,o,f),d.after(t,i),y=null,!0},S=function(t){y||(y=t),b=(L+=t-y)/parseInt(d.speed,10),O=v+E*s(d,b=b>1?1:b),e.scrollTo(0,Math.floor(O)),M(O,C)||(e.requestAnimationFrame(S),y=t)};0===e.pageYOffset&&e.scrollTo(0,0),d.before(t,i),k.cancelScroll(),e.requestAnimationFrame(S)}};var O=function(e){m&&(m.id=m.getAttribute("data-scroll-id"),k.animateScroll(m,v),m=null,v=null)},C=function(t){if(!d()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(v=t.target.closest(i))&&"a"===v.tagName.toLowerCase()&&!t.target.closest(h.ignore)&&v.hostname===e.location.hostname&&v.pathname===e.location.pathname&&/#/.test(v.href)){var n;try{n=r(decodeURIComponent(v.hash))}catch(e){n=r(v.hash)}if("#"===n){t.preventDefault();var o=(m=document.body).id?m.id:"smooth-scroll-top";return m.setAttribute("data-scroll-id",o),m.id="",void(e.location.hash.substring(1)===o?O():e.location.hash=o)}(m=document.querySelector(n))&&(m.setAttribute("data-scroll-id",m.id),m.id="",v.hash===e.location.hash&&(t.preventDefault(),O()))}},E=function(e){y||(y=setTimeout(function(){y=null,g=u(p)},66))};return k.destroy=function(){h&&(document.removeEventListener("click",C,!1),e.removeEventListener("resize",E,!1),k.cancelScroll(),h=null,m=null,v=null,p=null,g=null,y=null,b=null)},k.init=function(i){t&&(k.destroy(),h=o(n,i||{}),p=h.header?document.querySelector(h.header):null,g=u(p),document.addEventListener("click",C,!1),e.addEventListener("hashchange",O,!1),p&&e.addEventListener("resize",E,!1))},k.init(f),k}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if(void 0!==n)t(n);else{var o={exports:{}};t(o.exports),e.VanillaModal=o.exports}}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e){console.error("VanillaModal: "+e)}function o(e,t){return function(n){var o=e.filter(t);return o[0]?o[0][n]:void 0}}function i(){var e=document.createElement("div");return o([{key:"transition",value:"transitionend"},{key:"OTransition",value:"otransitionend"},{key:"MozTransition",value:"transitionend"},{key:"WebkitTransition",value:"webkitTransitionEnd"}],function(t){var n=t.key;return void 0!==e.style[n]})("value")}function r(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.length}function s(e,t){var o=(t||document).querySelector(e);return o||n(e+" not found in document."),o}function a(e,t){e instanceof HTMLElement||n("Not a valid HTML element."),e.setAttribute("class",e.className.split(" ").filter(function(e){return e!==t}).concat(t).join(" "))}function l(e,t){e instanceof HTMLElement||n("Not a valid HTML element."),e.setAttribute("class",e.className.split(" ").filter(function(e){return e!==t}).join(" "))}function u(e){return e&&"string"==typeof e.hash?document.querySelector(e.hash):"string"==typeof e?document.querySelector(e):(n("No selector supplied to open()"),null)}function c(e){return h({},m,e,{transitionEnd:i()})}function d(e,t){for(var n=(e.target.document||e.target.ownerDocument).querySelectorAll(t),o=0;o<n.length;o+=1)for(var i=e.target;i&&i!==document.body;){if(i===n[o])return i;i=i.parentNode}return null}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m={modal:".modal",modalInner:".modal-inner",modalContent:".modal-content",open:"[data-modal-open]",close:"[data-modal-close]",page:"body",class:"modal-visible",loadClass:"vanilla-modal",clickOutside:!0,closeKeys:[27],transitions:!0,transitionEnd:null,onBeforeOpen:null,onBeforeClose:null,onOpen:null,onClose:null},v=function(){function e(n){t(this,e),this.isOpen=!1,this.current=null,this.isListening=!1,this.settings=c(n),this.dom=this.getDomNodes(),this.open=this.open.bind(this),this.close=this.close.bind(this),this.closeKeyHandler=this.closeKeyHandler.bind(this),this.outsideClickHandler=this.outsideClickHandler.bind(this),this.delegateOpen=this.delegateOpen.bind(this),this.delegateClose=this.delegateClose.bind(this),this.listen=this.listen.bind(this),this.destroy=this.destroy.bind(this),this.addLoadedCssClass(),this.listen()}return f(e,[{key:"getDomNodes",value:function(){var e=this.settings,t=e.modal,n=e.page,o=e.modalInner,i=e.modalContent;return{modal:s(t),page:s(n),modalInner:s(o,s(t)),modalContent:s(i,s(t))}}},{key:"addLoadedCssClass",value:function(){a(this.dom.page,this.settings.loadClass)}},{key:"setOpenId",value:function(e){this.dom.page.setAttribute("data-current-modal",e||"anonymous")}},{key:"removeOpenId",value:function(){this.dom.page.removeAttribute("data-current-modal")}},{key:"open",value:function(e,t){var o=this.dom.page,i=this.settings,r=i.onBeforeOpen,s=i.onOpen;this.closeModal(t),this.current instanceof HTMLElement==!1?(this.releaseNode(this.current),this.current=u(e),"function"==typeof r&&r.call(this,t),this.captureNode(this.current),a(o,this.settings.class),this.setOpenId(this.current.id),this.isOpen=!0,"function"==typeof s&&s.call(this,t)):n("VanillaModal target must exist on page.")}},{key:"detectTransition",value:function(){var e=this.dom.modal,t=window.getComputedStyle(e,null);return Boolean(["transitionDuration","oTransitionDuration","MozTransitionDuration","webkitTransitionDuration"].filter(function(e){return"string"==typeof t[e]&&parseFloat(t[e])>0}).length)}},{key:"close",value:function(e){var t=this.settings,n=t.transitions,o=t.transitionEnd,i=t.onBeforeClose,r=this.detectTransition();this.isOpen&&(this.isOpen=!1,"function"==typeof i&&i.call(this,e),l(this.dom.page,this.settings.class),n&&o&&r?this.closeModalWithTransition(e):this.closeModal(e))}},{key:"closeModal",value:function(e){var t=this.settings.onClose;this.removeOpenId(this.dom.page),this.releaseNode(this.current),this.isOpen=!1,this.current=null,"function"==typeof t&&t.call(this,e)}},{key:"closeModalWithTransition",value:function(e){var t=this,n=this.dom.modal,o=this.settings.transitionEnd;n.addEventListener(o,function i(){n.removeEventListener(o,i),t.closeModal(e)})}},{key:"captureNode",value:function(e){for(var t=this.dom.modalContent;e.childNodes.length;)t.appendChild(e.childNodes[0])}},{key:"releaseNode",value:function(e){for(var t=this.dom.modalContent;t.childNodes.length;)e.appendChild(t.childNodes[0])}},{key:"closeKeyHandler",value:function(e){var t=this.settings.closeKeys;r(t)&&t.indexOf(e.which)>-1&&!0===this.isOpen&&(e.preventDefault(),this.close(e))}},{key:"outsideClickHandler",value:function(e){var t=this.settings.clickOutside,n=this.dom.modalInner;if(t){for(var o=e.target;o&&o!==document.body;){if(o===n)return;o=o.parentNode}this.close(e)}}},{key:"delegateOpen",value:function(e){var t=d(e,this.settings.open);t&&(e.preventDefault(),this.open(t,e))}},{key:"delegateClose",value:function(e){d(e,this.settings.close)&&(e.preventDefault(),this.close(e))}},{key:"listen",value:function(){var e=this.dom.modal;this.isListening?n("Event listeners already applied."):(e.addEventListener("click",this.outsideClickHandler,!1),document.addEventListener("keydown",this.closeKeyHandler,!1),document.addEventListener("click",this.delegateOpen,!1),document.addEventListener("click",this.delegateClose,!1),this.isListening=!0)}},{key:"destroy",value:function(){var e=this.dom.modal;this.isListening?(this.close(),e.removeEventListener("click",this.outsideClickHandler),document.removeEventListener("keydown",this.closeKeyHandler),document.removeEventListener("click",this.delegateOpen),document.removeEventListener("click",this.delegateClose),this.isListening=!1):n("Event listeners already removed.")}}]),e}();e.default=v})},{}],3:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e("./blocks/menu/menu")),r=o(e("./blocks/mockup/mockup")),s=o(e("./blocks/modal/modal"));window.onload=function(){(0,i.default)(),(0,r.default)((0,s.default)())}},{"./blocks/menu/menu":4,"./blocks/mockup/mockup":5,"./blocks/modal/modal":6}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(e("smooth-scroll"));n.default=function(){var e=new o.default;document.querySelectorAll(".menu__link").forEach(function(t){t.onclick=function(t){var n=t.target.dataset.to,o=document.querySelector("*[data-anchor="+n+"]");o&&e.animateScroll(o)}})}},{"smooth-scroll":1}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var t=document.querySelectorAll(".mockup__link");t&&t.forEach(function(e){e.onclick=function(e){}})}},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(e("vanilla-modal"));n.default=function(){return new o.default({modalContent:".modal__content",modalInner:".modal__inner",clickOutside:!0})}},{"vanilla-modal":2}]},{},[3]);