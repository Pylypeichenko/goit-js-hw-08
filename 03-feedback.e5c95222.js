!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),s?y(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function O(){var e=g();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?p(n,u-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function T(){var e=g(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=w(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(w(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?a:h(g())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j,S=document.querySelector("input"),O=document.querySelector("textarea"),h=document.querySelector("form"),T="feedback-form-state";function x(){var e={email:S.value,message:O.value};localStorage.setItem(T,JSON.stringify(e))}(j=JSON.parse(localStorage.getItem(T)))&&(S.value=j.email,O.value=j.message),S.addEventListener("input",e(t)(x,500)),O.addEventListener("input",e(t)(x,500)),h.addEventListener("submit",e(t)((function(e){if(e.preventDefault(),""===S.value)return void window.alert("Please write your email :)");console.log("User's email: ".concat(S.value)),console.log("User's message: ".concat(O.value)),localStorage.removeItem(T),e.target.reset()}),500))}();
//# sourceMappingURL=03-feedback.e5c95222.js.map
