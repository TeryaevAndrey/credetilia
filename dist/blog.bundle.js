(()=>{"use strict";var r={174:(r,e,n)=>{n.d(e,{Z:()=>d});var t=n(81),a=n.n(t),o=n(645),i=n.n(o),c=n(667),s=n.n(c),l=new URL(n(725),n.b),p=i()(a()),u=s()(l);p.push([r.id,'.blog-info {\r\n  padding: 100px 0;\r\n}\r\n\r\n.blog-info__inner {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n}\r\n\r\n.navbar {\r\n  max-width: 295px;\r\n}\r\n.navbar__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n.navbar__item {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.navbar__item-title {\r\n  position: relative;\r\n  padding-right: 21px;\r\n}\r\n\r\n.navbar__item-title.arrow::after {\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  background-image: url('+u+");\r\n  background-repeat: no-repeat;\r\n  background-size: 12px 6px;\r\n  background-position: center;\r\n  width: 12px;\r\n  height: 6px;\r\n}\r\n\r\n.navbar__item-title.border-bottom {\r\n  padding-right: 0;\r\n  border-bottom: 1px solid #000; \r\n}\r\n\r\n.navbar__item-list {\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  margin-top: 5px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.navbar__item-list.active {\r\n  display: flex;\r\n}\r\n\r\n.navbar__item-el {\r\n  opacity: 0.8;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.navbar__item-el:hover {\r\n  opacity: 1;\r\n}",""]);const d=p},645:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,t,a,o){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<r.length;l++){var p=[].concat(r[l]);t&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},667:r=>{r.exports=function(r,e){return e||(e={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),e.hash&&(r+=e.hash),/["'() \t\n]|(%20)/.test(r)||e.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var o={},i=[],c=0;c<r.length;c++){var s=r[c],l=t.base?s[0]+t.base:s[0],p=o[l]||0,u="".concat(l," ").concat(p);o[l]=p+1;var d=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var v=a(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function a(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,a){var o=t(r=r||[],a=a||{});return function(r){r=r||[];for(var i=0;i<o.length;i++){var c=n(o[i]);e[c].references--}for(var s=t(r,a),l=0;l<o.length;l++){var p=n(o[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=s}}},569:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},565:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},795:r=>{r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,a&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},589:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},725:(r,e,n)=>{r.exports=n.p+"144e76c57e02aaeddde0.svg"}},e={};function n(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return r[t](o,o.exports,n),o.exports}n.m=r,n.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return n.d(e,{a:e}),e},n.d=(r,e)=>{for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),n.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{var r;n.g.importScripts&&(r=n.g.location+"");var e=n.g.document;if(!r&&e&&(e.currentScript&&(r=e.currentScript.src),!r)){var t=e.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=r})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var r=n(379),e=n.n(r),t=n(795),a=n.n(t),o=n(569),i=n.n(o),c=n(565),s=n.n(c),l=n(216),p=n.n(l),u=n(589),d=n.n(u),f=n(174),v={};v.styleTagTransform=d(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const m=document.querySelectorAll(".navbar__item-title"),h=document.querySelectorAll(".navbar__item-list");m.forEach((r=>{h.forEach((e=>{r.addEventListener("click",(()=>{r.dataset.item===e.dataset.item&&e.classList.toggle("active")}))}))}))})()})();