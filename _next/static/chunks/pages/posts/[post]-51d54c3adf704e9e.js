(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{3684:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[post]",function(){return s(1630)}])},531:function(e,t,s){"use strict";var r=s(5893),n=s(1664),i=s.n(n),a=s(3121);t.Z=e=>{let{posts:t}=e;(0,a.wW)();let s=e=>!e.slug.startsWith("_"),n=t.filter(s),l=e=>{let t=new Date(e);return t.toDateString().slice(4)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:n.length>0&&n.filter(s).map(e=>(0,r.jsxs)("div",{className:"blog__list__post",children:[(0,r.jsx)("time",{className:"blog__list__post__date",children:l(e.frontmatter.date)}),(0,r.jsx)("br",{}),(0,r.jsx)(i(),{href:"/posts/".concat(e.slug),children:e.frontmatter.title})]},e.slug))})})}},5529:function(e,t,s){"use strict";var r=s(5893),n=s(8608),i=s(347),a=s(4768),l=s(7294);let o=e=>{var t;let{node:s,children:r,...n}=e,i=null===(t=s.children[0].value)||void 0===t?void 0:t.replaceAll(" ","-").toLowerCase();return l.createElement(s.tagName,{id:i,children:[r],...n})};t.Z=e=>(0,r.jsx)(n.D,{remarkPlugins:[i.Z],rehypePlugins:[a.Z],components:{h1:o,h2:o,h3:o,h4:o,h5:o,h6:o},children:e.children})},7149:function(e,t,s){"use strict";s.d(t,{Z:function(){return f}});var r=s(5893),n=s(7294);function i(e){return(0,r.jsx)("header",{className:"header",children:(0,r.jsxs)("nav",{className:"nav",role:"navigation","aria-label":"main navigation",children:[(0,r.jsx)("div",{className:"header__container",children:(0,r.jsx)("a",{href:"/",className:"header__container__logo underlined",children:e.siteTitle})}),(0,r.jsxs)("ul",{className:"header__links",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/posts",className:"underlined",children:"Blog"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/contact",className:"underlined",children:"Contact"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/cv",className:"underlined",children:"Resume"})})]})]})})}function a(){let e=new Date().getFullYear();return(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsxs)("div",{className:"footer__content",children:[(0,r.jsx)("h3",{children:"Links of Interest"}),(0,r.jsx)("a",{href:"/rss.xml",children:"RSS Feed"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/todo",children:"Todo List"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://keyoxide.org/hkp/garrit@slashdev.space",children:"PGP Key"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/guestbook",children:"Guestbook"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/blogroll",children:"Blogroll"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/ctf",children:"Capture the Flag"}),(0,r.jsx)("h3",{children:"Elsewhere"}),(0,r.jsx)("a",{href:"https://github.com/garritfra",rel:"me",children:"Github"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/garritfranke/",children:"LinkedIn"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://fosstodon.org/@garritfra",children:"Mastodon (ActivityPub)"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/contact",children:"Contact"})]}),(0,r.jsxs)("p",{children:["\uD83D\uDC7B\xa0Proud member of ",(0,r.jsx)("a",{target:"_blank",href:"https://darktheme.club/",children:"darktheme.club"})," ","\uD83D\uDC7B"]}),(0,r.jsxs)("p",{children:["\xa9 2018-",e," Garrit Franke",(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/privacy",children:"Privacy"})," |"," ",(0,r.jsx)("a",{target:"_blank",href:"https://github.com/garritfra/garrit.xyz",children:"Source Code"})]})]})}var l=s(9008),o=s.n(l);function c(e){let t=()=>!!window,s=function(){window.plausible=window.plausible||function(){},(window.plausible.q=window.plausible.q||[]).push(arguments)},i=()=>{console.log("================================================"),console.log("Hi there! You seem to be interested in websites."),console.log("        Why not check out my challenge?"),console.log("            https://garrit.xyz/ctf"),console.log("================================================")},a=()=>{window.fetch("https://jurassic.garrit.xyz").catch(console.log)};return(0,n.useEffect)(()=>{t()&&(s(),i(),a())},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("title",{children:e.pageTitle?"".concat(e.pageTitle," | ").concat(e.siteTitle):e.siteTitle}),(0,r.jsx)("meta",{name:"Description",content:"Generalist developer writing about fullstack development, system administration and free software."}),(0,r.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),(0,r.jsx)("link",{rel:"webmention",href:"https://webmention.io/garrit.xyz/webmention"}),(0,r.jsx)("link",{rel:"pingback",href:"https://webmention.io/garrit.xyz/xmlrpc"}),(0,r.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css",rel:"stylesheet"})]})})}function h(e){let{siteTitle:t,siteDescription:s,pageTitle:n,children:l}=e;return(0,r.jsxs)("section",{className:"layout",children:[(0,r.jsx)(c,{siteTitle:t,siteDescription:s,pageTitle:n}),(0,r.jsx)(i,{siteTitle:t}),(0,r.jsx)("div",{className:"content",children:l}),(0,r.jsx)(a,{})]})}var d=s(4298),x=s.n(d);function f(e){let{title:t,date:s,siteTitle:i}=e,a=()=>{window.addEventListener("keypress",e=>{if("."===e.key){let e=window.location.pathname,t="".concat("https://github.com/garritfra/garrit.xyz/edit/main/content").concat(e,".md");window.location.href=t}})};return(0,n.useEffect)(()=>{a()},[]),(0,r.jsxs)(h,{siteTitle:i,pageTitle:t,siteDescription:void 0,children:[(0,r.jsxs)("article",{className:"page h-entry",children:[t&&(0,r.jsxs)("div",{className:"page__info",children:[(0,r.jsx)("h1",{className:"p-name",children:t}),s&&(0,r.jsx)("time",{className:"page__info__date",children:s})]}),(0,r.jsx)("div",{className:"page__body e-content",children:e.children})]}),(0,r.jsx)(x(),{src:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.iife.js",defer:!0,init:!0})]})}},1630:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return o},default:function(){return c}});var r=s(5893),n=s(531),i=s(5529),a=s(7149);s(7294);var l=()=>(0,r.jsxs)("svg",{class:"page__tag-icon",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),(0,r.jsx)("line",{x1:"7",y1:"7",x2:"7",y2:"7"})]}),o=!0;function c(e){return e.post.frontmatter?(0,r.jsxs)(a.Z,{siteTitle:"Garrit's Notes",title:e.post.frontmatter.title,date:function(e){let t=new Date(e);return t.toDateString().slice(4)}(e.post.frontmatter.date),children:[(0,r.jsx)(i.Z,{children:e.post.markdownBody}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"mailto:garrit@slashdev.space?subject=Re: ".concat(encodeURIComponent(e.post.frontmatter.title)),children:"Reply via E-Mail"})}),(0,r.jsx)("a",{href:"https://www.buymeacoffee.com/garrit",target:"_blank",children:(0,r.jsx)("img",{src:"https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=garrit&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"})}),e.post.frontmatter.tags&&(()=>{var t;let s=null===(t=e.post.frontmatter.tags)||void 0===t?void 0:t.split(",").map(e=>e.trim());return(0,r.jsxs)("p",{className:"page__tag-list",children:[(0,r.jsx)(l,{}),s.map(e=>(0,r.jsxs)("a",{href:"/posts?tags=".concat(e),children:["#",e]},e))]})})(),(0,r.jsxs)("div",{className:"shareon",children:[(0,r.jsx)("a",{className:"facebook"}),(0,r.jsx)("a",{className:"linkedin"}),(0,r.jsx)("a",{className:"mastodon"}),(0,r.jsx)("a",{className:"pocket"}),(0,r.jsx)("a",{className:"reddit"}),(0,r.jsx)("a",{className:"telegram"}),(0,r.jsx)("a",{className:"twitter"}),(0,r.jsx)("a",{className:"whatsapp"})]}),(0,r.jsx)("hr",{}),(0,r.jsx)("h2",{children:"Continue Reading"}),(0,r.jsx)(n.Z,{posts:e.recommendedPosts})]}):(0,r.jsx)(r.Fragment,{})}}},function(e){e.O(0,[996,146,774,888,179],function(){return e(e.s=3684)}),_N_E=e.O()}]);