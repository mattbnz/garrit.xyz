(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{5794:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return s(9501)}])},5759:function(e,t,s){"use strict";var n=s(5893),r=s(1664),i=s.n(r),a=s(5017);t.Z=e=>{let{posts:t}=e;(0,a.wW)();let s=e=>!e.slug.startsWith("_"),r=t.filter(s),l=e=>new Date(e).toDateString().slice(4);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{children:r.length>0&&r.filter(s).map(e=>(0,n.jsxs)("div",{className:"blog__list__post",children:[(0,n.jsx)("time",{className:"blog__list__post__date",children:l(e.frontmatter.date)}),(0,n.jsx)("br",{}),(0,n.jsx)(i(),{href:"/posts/".concat(e.slug),children:e.frontmatter.title})]},e.slug))})})}},9723:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var n=s(5893),r=s(7294);function i(e){return(0,n.jsx)("header",{className:"header",children:(0,n.jsxs)("nav",{className:"nav",role:"navigation","aria-label":"main navigation",children:[(0,n.jsx)("div",{className:"header__container",children:(0,n.jsx)("a",{href:"/",className:"header__container__logo underlined",children:e.siteTitle})}),(0,n.jsxs)("ul",{className:"header__links",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/posts",className:"underlined",children:"Blog"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/contact",className:"underlined",children:"Contact"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/links",className:"underlined",children:"More ..."})})]})]})})}function a(){let e=new Date().getFullYear();return(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsxs)("div",{className:"footer__content",children:[(0,n.jsx)("h3",{children:"Links of Interest"}),(0,n.jsx)("a",{href:"/rss.xml",children:"RSS Feed"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/todo",children:"Todo List"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://keyoxide.org/hkp/garrit@slashdev.space",children:"PGP Key"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/guestbook",children:"Guestbook"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/blogroll",children:"Blogroll"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/ctf",children:"Capture the Flag"}),(0,n.jsx)("h3",{children:"Elsewhere"}),(0,n.jsx)("a",{href:"https://github.com/garritfra",rel:"me",children:"Github"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://www.linkedin.com/in/garritfranke/",children:"LinkedIn"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://fosstodon.org/@garritfra",children:"Mastodon (ActivityPub)"}),(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/contact",children:"Contact"})]}),(0,n.jsxs)("p",{children:["\uD83D\uDC7B\xa0Proud member of ",(0,n.jsx)("a",{target:"_blank",href:"https://darktheme.club/",children:"darktheme.club"})," ","\uD83D\uDC7B"]}),(0,n.jsxs)("p",{children:["\xa9 2018-",e," Garrit Franke",(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"/privacy",children:"Privacy"})," |"," ",(0,n.jsx)("a",{target:"_blank",href:"https://github.com/garritfra/garrit.xyz",children:"Source Code"})]})]})}var l=s(9008),o=s.n(l);function c(e){let t=()=>!!window,s=function(){window.plausible=window.plausible||function(){},(window.plausible.q=window.plausible.q||[]).push(arguments)},i=()=>{console.log("================================================"),console.log("Hi there! You seem to be interested in websites."),console.log("        Why not check out my challenge?"),console.log("            https://garrit.xyz/ctf"),console.log("================================================")},a=()=>{window.fetch("https://jurassic.garrit.xyz").catch(console.log)};return(0,r.useEffect)(()=>{t()&&(s(),i(),a())},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:e.pageTitle?"".concat(e.pageTitle," | ").concat(e.siteTitle):e.siteTitle}),(0,n.jsx)("meta",{name:"Description",content:"Generalist developer writing about fullstack development, system administration and free software."}),(0,n.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),(0,n.jsx)("link",{rel:"webmention",href:"https://webmention.io/garrit.xyz/webmention"}),(0,n.jsx)("link",{rel:"pingback",href:"https://webmention.io/garrit.xyz/xmlrpc"}),(0,n.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css",rel:"stylesheet"})]})})}function h(e){let{siteTitle:t,siteDescription:s,pageTitle:r,children:l}=e;return(0,n.jsxs)("section",{className:"layout",children:[(0,n.jsx)(c,{siteTitle:t,siteDescription:s,pageTitle:r}),(0,n.jsx)(i,{siteTitle:t}),(0,n.jsx)("div",{className:"content",children:l}),(0,n.jsx)(a,{})]})}var d=s(4298),u=s.n(d);function x(e){let{title:t,date:s,siteTitle:i,tags:a}=e,l=()=>{window.addEventListener("keypress",e=>{if("."===e.key){let e=window.location.pathname,t="".concat("https://github.com/garritfra/garrit.xyz/edit/main/content").concat(e,".md");window.location.href=t}})};return(0,r.useEffect)(()=>{l()},[]),(0,n.jsxs)(h,{siteTitle:i,pageTitle:t,siteDescription:void 0,children:[(0,n.jsxs)("article",{className:"page h-entry",children:[t&&(0,n.jsxs)("div",{className:"page__info",children:[(0,n.jsx)("h1",{className:"p-name",children:t}),s&&(0,n.jsx)("time",{className:"page__info__date",children:s}),a&&(0,n.jsx)("p",{className:"tag-list",children:a.map(e=>(0,n.jsxs)("a",{href:"/posts?tags=".concat(e),children:["#",e]},e))})]}),(0,n.jsx)("div",{className:"page__body e-content",children:e.children})]}),(0,n.jsx)(u(),{src:"https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.iife.js",defer:!0,init:!0})]})}},9501:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return o}});var n=s(5893),r=s(7294),i=s(1163),a=s(5759),l=s(9723),o=!0;t.default=e=>{var t;let{query:s}=(0,i.useRouter)(),o="string"==typeof s.tags?null==s?void 0:s.tags:null===(t=s.tags)||void 0===t?void 0:t[0],c=s.tags?e.posts.filter(e=>e.tags.map(e=>e.toLowerCase()).includes(o.toLowerCase())):e.posts,h=()=>{let e=Math.floor(Math.random()*c.length),t=c[e];return"/posts/".concat(null==t?void 0:t.slug)},[d,u]=(0,r.useState)(h());return(0,r.useEffect)(()=>{u(h())},[]),(0,n.jsxs)(l.Z,{siteTitle:"Garrit's Notes",children:[(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:d,onClick:()=>u(h()),children:"✨ Random Post ✨"})}),(0,n.jsx)("hr",{}),(0,n.jsx)(a.Z,{posts:c})]})}},1163:function(e,t,s){e.exports=s(2937)}},function(e){e.O(0,[996,774,888,179],function(){return e(e.s=5794)}),_N_E=e.O()}]);