(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{6485:function(e,t,n){"use strict";var r=n(5893),i=n(1664),o=n(5017);t.Z=function(e){var t=e.posts,n=(0,o.wW)(),a=function(e){return!e.slug.startsWith("_")},s=t.filter(a);return(0,r.jsxs)(r.Fragment,{children:[function(){var e=Math.floor(Math.random()*s.length),t=s[e],i="/posts/".concat(null===t||void 0===t?void 0:t.slug);return(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:i,onClick:function(){return n("random_post_clicked")},children:"\u2728 Random Post \u2728"})})}(),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{children:s.length>0&&s.filter(a).sort((function(e,t){return e.frontmatter.date<t.frontmatter.date?1:-1})).map((function(e){return(0,r.jsxs)("div",{className:"blog__list__post",children:[(0,r.jsx)("p",{className:"blog__list__post__date",children:(t=e.frontmatter.date,new Date(t).toDateString().slice(4))}),(0,r.jsx)(i.default,{href:"/posts/".concat(e.slug),children:e.frontmatter.title})]},e.slug);var t}))})]})}},9527:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),i=n(5988),o=n.n(i);function a(e){return(0,r.jsx)("header",{className:"header",children:(0,r.jsxs)("nav",{className:"nav",role:"navigation","aria-label":"main navigation",children:[(0,r.jsx)("div",{className:"header__container",children:(0,r.jsx)("a",{href:"/",className:"header__container__logo underlined",children:e.siteTitle})}),(0,r.jsxs)("ul",{className:"header__links",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/posts",className:"underlined",children:"Blog"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/contact",className:"underlined",children:"Contact"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/cv",className:"underlined",children:"Resume"})})]})]})})}function s(){return(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsxs)("div",{className:"footer__content",children:[(0,r.jsxs)("section",{className:"footer__content__links",children:[(0,r.jsx)("h3",{children:"Links of Interest"}),(0,r.jsx)("a",{href:"/rss.xml",children:"RSS Feed"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/todo",children:"Todo List"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://keyoxide.org/hkp/garrit@slashdev.space",children:"PGP Key"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/blogroll",children:"Blogroll"})]}),(0,r.jsxs)("section",{className:"footer__content__social",children:[(0,r.jsx)("h3",{children:"Elsewhere"}),(0,r.jsx)("a",{href:"https://github.com/garritfra",rel:"me",children:"Github"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/garritfranke/",children:"LinkedIn"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://fosstodon.org/@garritfra",children:"Mastodon (ActivityPub)"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/contact",children:"Contact"})]})]}),(0,r.jsx)("p",{children:"\xa9 2018-2022 Garrit Franke"})]})}var l=n(9008),c=n(7294);function u(e){var t=arguments,n=function(){return!!window},i=function(){window.plausible=window.plausible||function(){},(window.plausible.q=window.plausible.q||[]).push(t)},o=function(){console.log("================================================"),console.log("Hi there! You seem to be interested in websites."),console.log("        Why not check out my challenge?"),console.log("            https://garrit.xyz/ctf"),console.log("================================================")},a=function(){window.fetch("https://jurassic.garrit.xyz").catch(console.log)};return(0,c.useEffect)((function(){n()&&(i(),o(),a())}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:e.pageTitle||e.siteTitle}),(0,r.jsx)("meta",{name:"Description",content:"Generalist developer writing about fullstack development, system administration and free software."}),(0,r.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),(0,r.jsx)("link",{rel:"webmention",href:"https://webmention.io/garrit.xyz/webmention"}),(0,r.jsx)("link",{rel:"pingback",href:"https://webmention.io/garrit.xyz/xmlrpc"}),(0,r.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css",rel:"stylesheet"}),(0,r.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.iife.js",defer:!0,init:!0})]})})}function f(e){var t=e.siteTitle,n=e.siteDescription,i=e.pageTitle,l=e.children;return(0,r.jsxs)("section",{className:"jsx-1e449b56bdeeb09e layout",children:[(0,r.jsx)(u,{siteTitle:t,siteDescription:n,pageTitle:i}),(0,r.jsx)(a,{siteTitle:t}),(0,r.jsx)("div",{className:"jsx-1e449b56bdeeb09e content",children:l}),(0,r.jsx)(s,{}),(0,r.jsx)(o(),{id:"1e449b56bdeeb09e",children:".layout.jsx-1e449b56bdeeb09e{overflow-x:hidden;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\nmin-height:100vh}\n.layout.jsx-1e449b56bdeeb09e .info_page.jsx-1e449b56bdeeb09e{color:#ebebeb}\n.content.jsx-1e449b56bdeeb09e{}\n@media (min-width:768px) {}"})]})}function d(e){var t=e.title,n=e.date,i=e.siteTitle;return window.addEventListener("keypress",(function(e){if("."===e.key){var t=window.location.pathname,n="".concat("https://github.com/garritfra/garrit.xyz/edit/main/content").concat(t,".md");window.location.href=n}})),(0,r.jsx)(f,{siteTitle:i,pageTitle:t,children:(0,r.jsxs)("article",{className:"page h-entry",children:[t&&(0,r.jsxs)("div",{className:"page__info",children:[(0,r.jsx)("h1",{className:"p-name",children:t}),n&&(0,r.jsx)("h3",{className:"page__info__date",children:n})]}),(0,r.jsx)("div",{className:"page__body e-content",children:e.children})]})})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},s=n(6273),l=n(387),c=n(7190);var u={};function f(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),o=a.default.useMemo((function(){var t=i(s.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?s.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,h=o.as,p=e.children,m=e.replace,x=e.shallow,b=e.scroll,v=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var g=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,j=i(c.useIntersection({rootMargin:"200px"}),2),y=j[0],w=j[1],_=a.default.useCallback((function(e){y(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,y]);a.default.useEffect((function(){var e=w&&n&&s.isLocalURL(d),t="undefined"!==typeof v?v:r&&r.locale,i=u[d+"%"+h+(t?"%"+t:"")];e&&!i&&f(r,d,h,{locale:t})}),[h,d,w,v,n,r]);var k={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,r,{shallow:o,locale:l,scroll:a}))}(e,r,d,h,m,x,b,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&f(r,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof v?v:r&&r.locale,E=r&&r.isLocaleDomain&&s.getDomainLocale(h,N,r&&r.locales,r&&r.domainLocales);k.href=E||s.addBasePath(s.addLocale(h,N,r&&r.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!s,u=o.useRef(),f=i(o.useState(!1),2),d=f[0],h=f[1],p=i(o.useState(t?t.current:null),2),m=p[0],x=p[1],b=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),c.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]);return o.useEffect((function(){if(!s&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&x(t.current)}),[t]),[b,d]};var o=n(7294),a=n(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},1664:function(e,t,n){e.exports=n(8418)}}]);