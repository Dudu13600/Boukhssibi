!function(){var t={89453:function(t,e){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;e.validate=function(t){if(!t)return!1;if(t.length>254)return!1;if(!n.test(t))return!1;var e=t.split("@");return!(e[0].length>64)&&!e[1].split(".").some((function(t){return t.length>63}))}},32596:function(t,e,n){var r=n(24122).Symbol;t.exports=r},80563:function(t,e,n){var r=n(32596),o=n(38703),i=n(50888),c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):i(t)}},91367:function(t,e,n){var r=n(94120),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},2117:function(t){var e="object"==typeof window&&window&&window.Object===Object&&window;t.exports=e},38703:function(t,e,n){var r=n(32596),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=c.call(t);return r&&(e?t[s]=n:delete t[s]),o}},50888:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},24122:function(t,e,n){var r=n(2117),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},94120:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},45034:function(t,e,n){var r=n(17709),o=n(16987),i=n(65812),c=Math.max,s=Math.min;t.exports=function(t,e,n){var u,a,l,f,p,d,v=0,m=!1,b=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(e){var n=u,r=a;return u=a=void 0,v=e,f=t.apply(r,n)}function g(t){return v=t,p=setTimeout(x,e),m?w(t):f}function h(t){var n=t-d;return void 0===d||n>=e||n<0||b&&t-v>=l}function x(){var t=o();if(h(t))return j(t);p=setTimeout(x,function(t){var n=e-(t-d);return b?s(n,l-(t-v)):n}(t))}function j(t){return p=void 0,y&&u?w(t):(u=a=void 0,f)}function _(){var t=o(),n=h(t);if(u=arguments,a=this,d=t,n){if(void 0===p)return g(d);if(b)return clearTimeout(p),p=setTimeout(x,e),w(d)}return void 0===p&&(p=setTimeout(x,e)),f}return e=i(e)||0,r(n)&&(m=!!n.leading,l=(b="maxWait"in n)?c(i(n.maxWait)||0,e):l,y="trailing"in n?!!n.trailing:y),_.cancel=function(){void 0!==p&&clearTimeout(p),v=0,u=d=a=p=void 0},_.flush=function(){return void 0===p?f:j(o())},_}},17709:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},73474:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},21995:function(t,e,n){var r=n(80563),o=n(73474);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},16987:function(t,e,n){var r=n(24122);t.exports=function(){return r.Date.now()}},65812:function(t,e,n){var r=n(91367),o=n(17709),i=n(21995),c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=s.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):c.test(t)?NaN:+t}},82049:function(t,e,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&window.Jetpack_Block_Assets_Base_Url.url&&(n.p=window.Jetpack_Block_Assets_Base_Url.url)},47701:function(t){"use strict";t.exports=window.wp.domReady}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"}(),function(){"use strict";n(82049)}(),function(){"use strict";var t=n(47701),e=n.n(t),r=n(45034),o=n.n(r),i=n(89453);const c="wp-block-jetpack-mailchimp";function s(t,e){const n=e.value,r="error";return e.classList.remove(r),!!i.validate(n)||(e.classList.add(r),"function"==typeof document.createElement("input").reportValidity&&t.reportValidity(),!1)}const u=(t,e)=>o()((()=>{s(t,e)}),1e3);function a(t,e){const n=t.querySelector("form"),r=t.querySelector("input[name=email]"),o=t.querySelector("."+c+"_processing"),i=t.querySelector("."+c+"_error"),a=t.querySelector("."+c+"_success");r.addEventListener("input",u(n,r)),n.addEventListener("submit",(c=>{c.preventDefault();const l=r.value,f=[].slice.call(n.querySelectorAll("input[type=hidden].mc-submit-param")).reduce(((t,e)=>({...t,[e.name]:e.value})),{});s(n,r)&&(t.classList.add("is-processing"),r.removeEventListener("input",u(n,r)),o.classList.add("is-visible"),function(t,e,n){let r="https://public-api.wordpress.com/rest/v1.1/sites/"+encodeURIComponent(t)+"/email_follow/subscribe?email="+encodeURIComponent(e);for(const t in n)r+="&"+encodeURIComponent(t)+"="+encodeURIComponent(n[t]);return new Promise((function(t,e){const n=new XMLHttpRequest;n.open("GET",r),n.onload=function(){if(200===n.status){const e=JSON.parse(n.responseText);t(e)}else{const t=JSON.parse(n.responseText);e(t)}},n.send()}))}(e,l,f).then((t=>{o.classList.remove("is-visible"),t.error&&"member_exists"!==t.error?i.classList.add("is-visible"):a.classList.add("is-visible")}),(()=>{o.classList.remove("is-visible"),i.classList.add("is-visible")})))}))}const l=()=>{Array.from(document.querySelectorAll("."+c)).forEach((t=>{if("true"===t.getAttribute("data-jetpack-block-initialized"))return;const e=t.getAttribute("data-blog-id");try{a(t,e)}catch(t){0}t.setAttribute("data-jetpack-block-initialized","true")}))};"undefined"!=typeof window&&e()(l)}()}();