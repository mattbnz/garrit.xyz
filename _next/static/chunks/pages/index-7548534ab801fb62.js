(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2603)}])},2955:function(e,t,r){"use strict";var n=r(5893),i=r(1664),a=r.n(i),o=r(5017);let s=e=>{let{posts:t}=e;(0,o.wW)();let r=e=>!e.slug.startsWith("_"),i=t.filter(r),s=e=>{let t=new Date(e);return t.toDateString().slice(4)},c=e=>(0,n.jsxs)("div",{className:"blog__list__post",children:[(0,n.jsx)("time",{className:"blog__list__post__date",children:s(e.frontmatter.date)}),(0,n.jsx)("br",{}),(0,n.jsx)(a(),{href:"/posts/".concat(e.slug),children:e.frontmatter.title})]},e.slug);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{children:i.length>0&&i.filter(r).map(c)})})};t.Z=s},7024:function(e,t,r){"use strict";var n=r(5893),i=r(8608),a=r(347),o=r(4768),s=r(7294);let c=e=>{var t;let{node:r,children:n,...i}=e,a=null===(t=r.children[0].value)||void 0===t?void 0:t.replaceAll(" ","-").toLowerCase();return s.createElement(r.tagName,{id:a,children:[n],...i})},l=e=>(0,n.jsx)(i.D,{remarkPlugins:[a.Z],rehypePlugins:[o.Z],components:{h1:c,h2:c,h3:c,h4:c,h5:c,h6:c},children:e.children});t.Z=l},7099:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),i=r(7294);function a(e){return(0,n.jsx)("header",{className:"header",children:(0,n.jsxs)("nav",{className:"nav",role:"navigation","aria-label":"main navigation",children:[(0,n.jsx)("div",{className:"header__container",children:(0,n.jsx)("a",{href:"/",className:"header__container__logo underlined",children:e.siteTitle})}),(0,n.jsxs)("ul",{className:"header__links",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/posts",className:"underlined",children:"Blog"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/contact",className:"underlined",children:"Contact"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/cv",className:"underlined",children:"Resume"})})]})]})})}function o(){let e=new Date().getFullYear();return(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsxs)("div",{className:"footer__content",children:[(0,n.jsx)("h3",{children:"Links of Interest"}),(0,n.jsx)("a",{href:"/rss.xml",children:"RSS Feed"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/todo",children:"Todo List"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://keyoxide.org/hkp/garrit@slashdev.space",children:"PGP Key"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/guestbook",children:"Guestbook"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/blogroll",children:"Blogroll"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/ctf",children:"Capture the Flag"}),(0,n.jsx)("h3",{children:"Elsewhere"}),(0,n.jsx)("a",{href:"https://github.com/garritfra",rel:"me",children:"Github"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://www.linkedin.com/in/garritfranke/",children:"LinkedIn"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://fosstodon.org/@garritfra",children:"Mastodon (ActivityPub)"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/contact",children:"Contact"})]}),(0,n.jsxs)("p",{children:["\uD83D\uDC7B\xa0Proud member of ",(0,n.jsx)("a",{target:"_blank",href:"https://darktheme.club/",children:"darktheme.club"})," ","\uD83D\uDC7B"]}),(0,n.jsxs)("p",{children:["\xa9 2018-",e," Garrit Franke",(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/privacy",children:"Privacy"})," |"," ",(0,n.jsx)("a",{target:"_blank",href:"https://github.com/garritfra/garrit.xyz",children:"Source Code"})]})]})}var s=r(9008),c=r.n(s),l=r(4298),u=r.n(l);function f(e){let t=()=>!!window,r=()=>{window.plausible=window.plausible||function(){},(window.plausible.q=window.plausible.q||[]).push(arguments)},a=()=>{console.log("================================================"),console.log("Hi there! You seem to be interested in websites."),console.log("        Why not check out my challenge?"),console.log("            https://garrit.xyz/ctf"),console.log("================================================")},o=()=>{window.fetch("https://jurassic.garrit.xyz").catch(console.log)};return(0,i.useEffect)(()=>{t()&&(r(),a(),o())},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:e.pageTitle||e.siteTitle}),(0,n.jsx)("meta",{name:"Description",content:"Generalist developer writing about fullstack development, system administration and free software."}),(0,n.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),(0,n.jsx)("link",{rel:"webmention",href:"https://webmention.io/garrit.xyz/webmention"}),(0,n.jsx)("link",{rel:"pingback",href:"https://webmention.io/garrit.xyz/xmlrpc"}),(0,n.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css",rel:"stylesheet"})]}),(0,n.jsx)(u(),{src:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.iife.js",defer:!0,init:!0})]})}function d(e){let{siteTitle:t,siteDescription:r,pageTitle:i,children:s}=e;return(0,n.jsxs)("section",{className:"layout",children:[(0,n.jsx)(f,{siteTitle:t,siteDescription:r,pageTitle:i}),(0,n.jsx)(a,{siteTitle:t}),(0,n.jsx)("div",{className:"content",children:s}),(0,n.jsx)(o,{})]})}function h(e){let{title:t,date:r,siteTitle:a}=e,o=()=>{window.addEventListener("keypress",e=>{if("."===e.key){let e=window.location.pathname,t="".concat("https://github.com/garritfra/garrit.xyz/edit/main/content").concat(e,".md");window.location.href=t}})};return(0,i.useEffect)(()=>{o()},[]),(0,n.jsx)(d,{siteTitle:a,pageTitle:t,siteDescription:void 0,children:(0,n.jsxs)("article",{className:"page h-entry",children:[t&&(0,n.jsxs)("div",{className:"page__info",children:[(0,n.jsx)("h1",{className:"p-name",children:t}),r&&(0,n.jsx)("time",{className:"page__info__date",children:r})]}),(0,n.jsx)("div",{className:"page__body e-content",children:e.children})]})})}},2603:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u}});var n=r(5893),i=r(7294),a=r(1106),o=r(7099),s=r(2955),c=r(7024);let l=e=>{let[t,r]=(0,i.useState)(!0);(0,i.useEffect)(()=>{r(!1)});let l=!t&&window.matchMedia("(prefers-reduced-motion: reduce)"),u=!l||l.matches,f=new Date().getMonth()>10||1>new Date().getMonth();return(0,n.jsxs)(o.Z,{className:"h-card",siteTitle:"Garrit Franke",children:[f&&!u&&(0,n.jsx)(a.Z,{snowflakeCount:100,style:{position:"fixed",width:"100vw",height:"100vh"}}),(0,n.jsx)(c.Z,{children:e.markdownBody}),(0,n.jsx)("h2",{children:"Recent posts"}),(0,n.jsx)(s.Z,{posts:e.recentPosts})]})};var u=!0;t.default=l},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,a){try{return function e(a,o){if(a===o)return!0;if(a&&o&&"object"==typeof a&&"object"==typeof o){var s,c,l,u;if(a.constructor!==o.constructor)return!1;if(Array.isArray(a)){if((s=a.length)!=o.length)return!1;for(c=s;0!=c--;)if(!e(a[c],o[c]))return!1;return!0}if(r&&a instanceof Map&&o instanceof Map){if(a.size!==o.size)return!1;for(u=a.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=a.entries();!(c=u.next()).done;)if(!e(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&a instanceof Set&&o instanceof Set){if(a.size!==o.size)return!1;for(u=a.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(o)){if((s=a.length)!=o.length)return!1;for(c=s;0!=c--;)if(a[c]!==o[c])return!1;return!0}if(a.constructor===RegExp)return a.source===o.source&&a.flags===o.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===o.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===o.toString();if((s=(l=Object.keys(a)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&a instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!a.$$typeof)&&!e(a[l[c]],o[l[c]]))return!1;return!0}return a!=a&&o!=o}(e,a)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},1106:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.Z=void 0;var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=a?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=e[o]}return i.default=e,r&&r.set(e,i),i}(r(7294)),a=r(2136),o=r(6906),s=r(2820);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.color,r=void 0===t?s.defaultConfig.color:t,n=e.changeFrequency,c=void 0===n?s.defaultConfig.changeFrequency:n,l=e.radius,u=void 0===l?s.defaultConfig.radius:l,f=e.speed,d=void 0===f?s.defaultConfig.speed:f,h=e.wind,p=void 0===h?s.defaultConfig.wind:h,m=e.rotationSpeed,g=void 0===m?s.defaultConfig.rotationSpeed:m,y=e.snowflakeCount,v=e.images,b=e.style,j=(0,o.useSnowfallStyle)(b),w=(0,i.useRef)(null),x=(0,o.useComponentSize)(w),S=(0,i.useRef)(0),O=(0,i.useRef)(Date.now()),_=(0,o.useDeepMemo)({color:r,changeFrequency:c,radius:u,speed:d,wind:p,rotationSpeed:g,images:v}),k=(0,o.useSnowflakes)(w,void 0===y?150:y,_),P=(0,i.useCallback)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=w.current;if(t){k.forEach(function(r){return r.update(t,e)});var r=t.getContext("2d");r&&(r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,t.offsetWidth,t.offsetHeight),k.forEach(function(e){return e.draw(r)}))}},[k]),C=(0,i.useCallback)(function(){var e=Date.now(),t=Date.now()-O.current;O.current=e,P(t/a.targetFrameTime),S.current=requestAnimationFrame(C)},[P]);return(0,i.useEffect)(function(){return C(),function(){return cancelAnimationFrame(S.current)}},[C]),i.default.createElement("canvas",{ref:w,height:x.height,width:x.width,style:j,"data-testid":"SnowfallCanvas"})}},2820:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultConfig=t.default=void 0;var n,i=(n=r(9590))&&n.__esModule?n:{default:n},a=r(7486);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){f(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={color:"#dee4fd",radius:[.5,3],speed:[1,3],wind:[-.5,2],changeFrequency:200,rotationSpeed:[-1,1]};t.defaultConfig=d;var h=function(){var e,t;function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r),f(this,"config",void 0),f(this,"params",void 0),f(this,"framesSinceLastUpdate",void 0),f(this,"image",void 0),this.updateConfig(t);var n=this.config,i=n.radius,o=n.wind,s=n.speed,l=n.rotationSpeed;this.params={x:(0,a.random)(0,e.offsetWidth),y:(0,a.random)(-e.offsetHeight,0),rotation:(0,a.random)(0,360),radius:a.random.apply(void 0,c(i)),speed:a.random.apply(void 0,c(s)),wind:a.random.apply(void 0,c(o)),rotationSpeed:a.random.apply(void 0,c(l)),nextSpeed:a.random.apply(void 0,c(o)),nextWind:a.random.apply(void 0,c(s)),nextRotationSpeed:a.random.apply(void 0,c(l))},this.framesSinceLastUpdate=0}return e=[{key:"selectImage",value:function(){this.config.images&&this.config.images.length>0?this.image=(0,a.randomElement)(this.config.images):this.image=void 0}},{key:"updateConfig",value:function(e){var t=this.config;this.config=s(s({},d),e),this.config.changeFrequency=(0,a.random)(this.config.changeFrequency,1.5*this.config.changeFrequency),this.params&&!(0,i.default)(this.config.radius,null==t?void 0:t.radius)&&(this.params.radius=a.random.apply(void 0,c(this.config.radius))),(0,i.default)(this.config.images,null==t?void 0:t.images)||this.selectImage()}},{key:"updateTargetParams",value:function(){this.params.nextSpeed=a.random.apply(void 0,c(this.config.speed)),this.params.nextWind=a.random.apply(void 0,c(this.config.wind)),this.image&&(this.params.nextRotationSpeed=a.random.apply(void 0,c(this.config.rotationSpeed)))}},{key:"update",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.params,n=r.x,i=r.y,o=r.rotation,s=r.rotationSpeed,c=r.nextRotationSpeed,l=r.wind,u=r.speed,f=r.nextWind,d=r.nextSpeed,h=r.radius;this.params.x=(n+l*t)%(e.offsetWidth+2*h),this.params.x>e.offsetWidth+h&&(this.params.x=-h),this.params.y=(i+u*t)%(e.offsetHeight+2*h),this.params.y>e.offsetHeight+h&&(this.params.y=-h),this.image&&(this.params.rotation=(o+s)%360),this.params.speed=(0,a.lerp)(u,d,.01),this.params.wind=(0,a.lerp)(l,f,.01),this.params.rotationSpeed=(0,a.lerp)(s,c,.01),this.framesSinceLastUpdate++>this.config.changeFrequency&&(this.updateTargetParams(),this.framesSinceLastUpdate=0)}},{key:"getImageOffscreenCanvas",value:function(e,t){if(e instanceof HTMLImageElement&&e.loading)return e;var n=r.offscreenCanvases.get(e);if(n||(n={},r.offscreenCanvases.set(e,n)),!(t in n)){var i,a,o=document.createElement("canvas");o.width=t,o.height=t,null===(a=o.getContext("2d"))||void 0===a||a.drawImage(e,0,0,t,t),n[t]=o}return null!==(i=n[t])&&void 0!==i?i:e}},{key:"draw",value:function(e){if(this.image){e.setTransform(1,0,0,1,this.params.x,this.params.y);var t=Math.ceil(this.params.radius);e.rotate(this.params.rotation*Math.PI/180),e.drawImage(this.getImageOffscreenCanvas(this.image,t),-Math.ceil(t/2),-Math.ceil(t/2),t,t)}else e.beginPath(),e.arc(this.params.x,this.params.y,this.params.radius,0,2*Math.PI),e.fillStyle=this.config.color,e.closePath(),e.fill()}}],u(r.prototype,e),t&&u(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}();f(h,"offscreenCanvases",new WeakMap),t.default=h},2136:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.targetFrameTime=t.snowfallBaseStyle=void 0,t.snowfallBaseStyle={pointerEvents:"none",backgroundColor:"transparent",position:"absolute",top:0,left:0,width:"100%",height:"100%"},t.targetFrameTime=1e3/60},6906:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useComponentSize=void 0,t.useDeepCompareEffect=g,t.useDeepMemo=function(e){var t=d((0,n.useState)(e),2),r=t[0],i=t[1];return g(function(){return i(e)},[e]),r},t.useSnowflakes=t.useSnowfallStyle=void 0;var n=r(7294),i=c(r(9590)),a=c(r(2820)),o=r(2136),s=r(7486);function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,i;n=e,i=r[t],t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||h(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(r=i.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,n=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw n}}return a}}(e,t)||h(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e,t,r){if(!e.current)return[];for(var n=[],i=0;i<t;i++)n.push(new a.default(e.current,r));return n};function g(e,t){var r=(0,n.useRef)(t);return(0,i.default)(t,r.current)||(r.current=t),(0,n.useEffect)(e,r.current)}t.useSnowflakes=function(e,t,r){var i=d((0,n.useState)([]),2),a=i[0],o=i[1];return(0,n.useEffect)(function(){o(function(n){var i=t-n.length;return i>0?[].concat(f(n),f(m(e,i,r))):i<0?n.slice(0,t):n})},[t,e,r]),(0,n.useEffect)(function(){o(function(e){return e.map(function(e){return e.updateConfig(r),e})})},[r]),a},t.useComponentSize=function(e){var t=d((0,n.useState)((0,s.getSize)(e.current)),2),r=t[0],i=t[1],a=(0,n.useCallback)(function(){e.current&&i((0,s.getSize)(e.current))},[e]);return(0,n.useLayoutEffect)(function(){var t=window.ResizeObserver;if(e.current){if(a(),"function"!=typeof t)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};var r=new t(a);return r.observe(e.current),function(){return r.disconnect()}}},[e,a]),r},t.useSnowfallStyle=function(e){return(0,n.useMemo)(function(){return u(u({},o.snowfallBaseStyle),e||{})},[e])}},7486:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSize=function(e){return e?{height:e.offsetHeight,width:e.offsetWidth}:{height:0,width:0}},t.lerp=function(e,t,r){return(1-r)*e+r*t},t.random=function(e,t){var r=Math.random()*(t-e+1)+e;return Number.isInteger(e)&&Number.isInteger(t)?Math.floor(r):r},t.randomElement=function(e){var t=Math.floor(Math.random()*e.length);return e[t]}}},function(e){e.O(0,[658,664,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);