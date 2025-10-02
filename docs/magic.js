function e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){var i,a;i=e,a=n[t],t in i?Object.defineProperty(i,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[t]=a})}return e}function t(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n.push.apply(n,i)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function n(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(()=>{let{h:i,app:a}=(()=>{var e={},t=[],n=t.map,i=Array.isArray,a="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,r=function(e){var t="";if("string"==typeof e)return e;if(i(e)&&e.length>0)for(var n,a=0;a<e.length;a++)""!==(n=r(e[a]))&&(t+=(t&&" ")+n);else for(var a in e)e[a]&&(t+=(t&&" ")+a);return t},s=function(e,t){var n={};for(var i in e)n[i]=e[i];for(var i in t)n[i]=t[i];return n},o=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:o(t):0)},t)},l=function(e,t){if(e!==t)for(var n in s(e,t)){var a,r;if(e[n]!==t[n]&&(a=e[n],r=t[n],!(i(a)&&i(r))||a[0]!==r[0]||"function"!=typeof a[0]))return!0;t[n]=e[n]}},c=function(e,t,n){for(var i,a,r=0,s=[];r<e.length||r<t.length;r++)i=e[r],s.push((a=t[r])?!i||a[0]!==i[0]||l(a[1],i[1])?[a[0],a[1],a[0](n,a[1]),i&&i[2]()]:i:i&&i[2]());return s},p=function(e,t,n,i,a,o){if("key"===t);else if("style"===t)for(var l in s(n,i))n=null==i||null==i[l]?"":i[l],"-"===l[0]?e[t].setProperty(l,n):e[t][l]=n;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=i)?n||e.addEventListener(t,a):e.removeEventListener(t,a):!o&&"list"!==t&&t in e?e[t]=null==i?"":i:null!=i&&!1!==i&&("class"!==t||(i=r(i)))?e.setAttribute(t,i):e.removeAttribute(t)},d=function(e,t,n){var i=e.props,a=3===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:i.is}):document.createElement(e.name,{is:i.is});for(var r in i)p(a,r,null,i[r],t,n);for(var s=0,o=e.children.length;s<o;s++)a.appendChild(d(e.children[s]=g(e.children[s]),t,n));return e.node=a},h=function(e){return null==e?null:e.key},f=function(e,t,n,i,a,r){if(n===i);else if(null!=n&&3===n.type&&3===i.type)n.name!==i.name&&(t.nodeValue=i.name);else if(null==n||n.name!==i.name)t=e.insertBefore(d(i=g(i),a,r),t),null!=n&&e.removeChild(n.node);else{var o,l,c,u,m=n.props,b=i.props,y=n.children,w=i.children,v=0,T=0,R=y.length-1,x=w.length-1;for(var S in r=r||"svg"===i.name,s(m,b))("value"===S||"selected"===S||"checked"===S?t[S]:m[S])!==b[S]&&p(t,S,m[S],b[S],a,r);for(;T<=x&&v<=R&&null!=(c=h(y[v]))&&c===h(w[T]);)f(t,y[v].node,y[v],w[T]=g(w[T++],y[v++]),a,r);for(;T<=x&&v<=R&&null!=(c=h(y[R]))&&c===h(w[x]);)f(t,y[R].node,y[R],w[x]=g(w[x--],y[R--]),a,r);if(v>R)for(;T<=x;)t.insertBefore(d(w[T]=g(w[T++]),a,r),(l=y[v])&&l.node);else if(T>x)for(;v<=R;)t.removeChild(y[v++].node);else{for(var S=v,M={},G={};S<=R;S++)null!=(c=y[S].key)&&(M[c]=y[S]);for(;T<=x;){if(c=h(l=y[v]),u=h(w[T]=g(w[T],l)),G[c]||null!=u&&u===h(y[v+1])){null==c&&t.removeChild(l.node),v++;continue}null==u||1===n.type?(null==c&&(f(t,l&&l.node,l,w[T],a,r),T++),v++):(c===u?(f(t,l.node,l,w[T],a,r),G[u]=!0,v++):null!=(o=M[u])?(f(t,t.insertBefore(o.node,l&&l.node),o,w[T],a,r),G[u]=!0):f(t,l&&l.node,null,w[T],a,r),T++)}for(;v<=R;)null==h(l=y[v++])&&t.removeChild(l.node);for(var S in M)null==G[S]&&t.removeChild(M[S].node)}}return i.node=t},u=function(e,t){for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0},m=function(e){return"object"==typeof e?e:y(e)},g=function(e,t){return 2===e.type?((!t||!t.lazy||u(t.lazy,e.lazy))&&((t=m(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},b=function(e,t,n,i,a,r){return{name:e,props:t,children:n,node:i,type:r,key:a}},y=function(n,i){return b(n,e,t,i,void 0,3)},w=function(t){return 3===t.nodeType?y(t.nodeValue,t):b(t.nodeName.toLowerCase(),e,n.call(t.childNodes,w),t,void 0,1)};return{h:function(t,n){for(var a,r=[],s=[],o=arguments.length;o-- >2;)r.push(arguments[o]);for(;r.length>0;)if(i(a=r.pop()))for(var o=a.length;o-- >0;)r.push(a[o]);else!1===a||!0===a||null==a||s.push(m(a));return n=n||e,"function"==typeof t?t(n,s):b(t,n,s,void 0,n.key)},app:function(e){var t={},n=!1,r=e.view,s=e.node,l=s&&w(s),p=e.subscriptions,d=[],h=function(e){b(this.actions[e.type],e)},u=function(e){return t!==e&&(t=e,p&&(d=c(d,o([p(t)]),b)),r&&!n&&a(y,n=!0)),t};let{middleware:g=e=>e}=e,b=g((e,n)=>"function"==typeof e?b(e(t,n)):i(e)?"function"==typeof e[0]||i(e[0])?b(e[0],"function"==typeof e[1]?e[1](n):e[1]):(o(e.slice(1)).map(function(e){e&&e[0](b,e[1])},u(e[0])),t):u(e));var y=function(){n=!1,s=f(s.parentNode,s,l,l=m(r(t)),h)};b(e.init)}}})(),r=e=>(t={},n)=>{let a=(e,...t)=>t.some(t=>t===typeof e);if(a(n,"undefined")){if(t.props)return i(e,{},[t]);a(t,"string","number","function")||Array.isArray(t)?(n=t,t={}):a(t.View,"function")&&(n=t.View,t={})}return i(e,t,n)},s=r("a");r("abbr"),r("address"),r("animate"),r("animateMotion"),r("animateTransform"),r("area"),r("article"),r("aside"),r("audio"),r("b"),r("base"),r("bdi"),r("bdo"),r("blockquote"),r("body"),r("br");let o=r("button");r("canvas"),r("caption");let l=r("circle");r("cite"),r("clipPath");let c=r("code");r("col"),r("colgroup"),r("data"),r("datalist"),r("dd"),r("defs"),r("del"),r("desc"),r("description"),r("details"),r("dfn"),r("dialog"),r("discard");let p=r("div");r("dl"),r("dt"),r("ellipse"),r("em"),r("embed"),r("feBlend"),r("feColorMatrix"),r("feComponentTransfer"),r("feComposite"),r("feConvolveMatrix"),r("feDiffuseLighting"),r("feDisplacementMap"),r("feDistantLight"),r("feDropShadow"),r("feFlood"),r("feFuncA"),r("feFuncB"),r("feFuncG"),r("feFuncR"),r("feGaussianBlur"),r("feImage"),r("feMerge"),r("feMergeNode"),r("feMorphology"),r("feOffset"),r("fePointLight"),r("feSpecularLighting"),r("feSpotLight"),r("feTile"),r("feTurbulence"),r("fieldset"),r("figcaption"),r("figure"),r("filter");let d=r("footer");r("foreignObject"),r("form");let h=r("g");r("h1");let f=r("h2"),u=r("h3");r("h4"),r("h5"),r("h6"),r("hatch"),r("hatchpath"),r("head");let m=r("header");r("hgroup"),r("hr"),r("html"),r("i"),r("iframe"),r("image"),r("img");let g=r("input");r("ins"),r("kbd"),r("label"),r("legend");let b=r("li");r("line"),r("linearGradient"),r("link");let y=r("main");r("map"),r("mark"),r("marker"),r("mask"),r("mesh"),r("meshgradient"),r("meshpatch"),r("meshrow"),r("meta"),r("metadata"),r("meter"),r("mpath");let w=r("nav");r("noscript"),r("object"),r("ol"),r("optgroup"),r("option"),r("output");let v=r("p");r("param");let T=r("path");r("pattern"),r("picture"),r("polygon"),r("polyline");let R=r("pre");r("progress"),r("q"),r("radialGradient"),r("rb"),r("rect"),r("rp"),r("rt"),r("rtc"),r("ruby"),r("s"),r("samp"),r("script"),r("section"),r("select"),r("set"),r("small"),r("solidcolor"),r("source");let x=r("span");r("stop"),r("strong"),r("style"),r("sub"),r("summary"),r("sup");let S=r("svg");r("symbol"),r("table"),r("tbody"),r("td"),r("template"),r("text"),r("textPath"),r("textarea"),r("tfoot"),r("th"),r("thead"),r("time"),r("title"),r("tr"),r("track"),r("tspan"),r("u");let M=r("ul");r("unknown"),r("url"),r("use"),r("video"),r("view"),r("wbr");let G=()=>p({class:"Credits"},["made with a few bits of ",C({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),L=(e,t=[])=>d({class:"Footer"},[p({class:"Container"},[G(),t])]),k=(e={},t=[])=>{let{logo:n,menu:i,logotext:a,hash:r,url:s}=e;if(n||i||a)return m({class:"Header"},[H(),a&&v(a),i&&A({url:s,hash:r,menu:i}),t])},V=(e={})=>S({class:"LightSwitch icon",onclick:I.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[T({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),T({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),T({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]),C=(e,t)=>{var{to:i,action:a=I.go,text:r}=e,o=n(e,["to","action","text"]);let{href:l,nofollow:c,noreferrer:p}=o,d=n(o,["href","nofollow","noreferrer"]);i=i||l||"",d.href=i,r&&t?r=[r,t]:r||(r=t||i);let h="/"===i[0]||"#"===i[0];return h?d.onclick=[a,F.preventDefault]:(d.target="_blank",d.rel="noopener",c&&(d.rel+=" nofollow"),p&&(d.rel+=" noreferrer")),s(d,r)},H=()=>C({to:"/tags/",class:"Logo"},[S({viewBox:"0 0 512 444"},[T({d:"M512 444L256 0 0 444z",fill:"#663695"}),l({cx:"256",cy:"294",r:"130",fill:"#fff"}),l({cx:"256",cy:"281",r:"40",fill:"#663695"}),T({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),T({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])]),A=(n={})=>{let{collapse:i=!0,menu:a,hash:r}=n,{class:s="",url:o}=n;return s.includes("Menu")||(s=`Menu ${s}`.trim()),r&&!o.endsWith(r)&&(o+=`#${r}`),w({className:s},M(a.map(n=>j(t(e({},n),{url:o,collapse:i})))))},j=t=>{let{collapse:i,items:a=[],text:r,url:s}=t,o=n(t,["collapse","items","text","url"]),l={class:{}},{to:c}=o;c===s&&(l.class.active=!0);let p=[],d=!i||s.includes(c);return d&&a.length&&(p=M(a.map(t=>j(e({url:s,collapse:i},t))))),b(l,[c?C(o,r):x(o,r),p])},O=({nospy:e={},cookies:t=[]})=>{let{show:n,title:i="Privacy Notice",content:a="This app neither saves, collects, nor shares any data about you.",buttonText:r="Awesome!"}=e;return n?p({class:"NoSpy"},[p({class:"Background",onclick:I.nospy.toggle}),p({class:"Container"},[i&&u(i),a&&v(a),g({onclick:I.nospy.toggle,value:r,type:"button"})])]):p({class:"NoSpy"},S({class:"icon",onclick:I.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[h([T({d:`
M507,208c-1-7-7-12-14-13c-7-1-13,3-16,9
c-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11
C393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14
c2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29
c6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0
C115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256
C512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66
C57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0
C259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128
c0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256
c11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z
`}),l({cx:"192",cy:"128",r:"32"}),l({cx:"128",cy:"256",r:"32"}),l({cx:"288",cy:"384",r:"32"}),l({cx:"272",cy:"272",r:"16"}),l({cx:"400",cy:"336",r:"16"}),l({cx:"176",cy:"368",r:"16"})])]))},P=({page:e,state:t},n)=>{let i={id:"Magic",class:t.pageClass};return y(i,p({class:{Wrapper:!0}},[k(t),p({class:"Page",id:"page"},e(t)),L(t),n]))},D=(t,n)=>{"string"==typeof t?t={content:t}:n?t=e({content:n},t):Array.isArray(t)&&(t={content:t.join("")});let{content:i,lines:a=!0}=t;return p({class:{Pre:!0,lines:a&&"false"!==a}},[p({class:"menu"},[o({onclick:[I.pre.clip,e=>({e,content:i})]},"copy")]),R(i.trim().split("\n").map(D.Line))])};D.Comment=e=>x({class:"comment"},e),D.Line=e=>c({class:"line"},D.Words(e)),D.Word=e=>{if(!e)return"";let t=e.includes("://"),n=e.startsWith("mailto:")||e.includes("@")&&e.includes(".");if(t||n)return C({to:e,text:e});let i="";return("state"===e?i="state":"actions"===e?i="actions":"effects"===e?i="effects":"subscriptions"===e?i="subscriptions":F.pre.keywords.includes(e)?i="keyword":F.pre.builtins.includes(e)?i="builtin":F.pre.booleans.includes(e)&&(i="boolean"),i)?x({class:i},e):e},D.Words=e=>{let[t,...n]=e.split(F.pre.commentRegex),i=!t.endsWith(":")&&n.length;if(i)return[D.Words(t),D.Comment(n.join("").split(F.pre.wordRegex).map(D.Word))];let a=[],r=e;if(e.replace(F.pre.stringRegex,e=>{if(r){let[t,n]=r.split(e);t&&a.push(t.split(F.pre.wordRegex).map(D.Word).filter(e=>e)),r=n}a.push(x({class:"string"},e))}),r!==e)return r&&a.push(r.split(F.pre.wordRegex).map(D.Word).filter(e=>e)),a;let s=e.split(F.pre.wordRegex).filter(e=>e);return s.map(D.Word)};let F={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:e=>(e.preventDefault(),e)},I={changeTheme:n=>t(e({},n),{pageClass:t(e({},n.pageClass),{light:"dark"===n.theme}),theme:"dark"===n.theme?"light":"dark"}),go:(n,i)=>{let a=i.currentTarget.href.replace(window.location.origin,""),[r,s=""]=a.split("#");if(r===n.url&&s===n.hash)return s&&(window.location.hash=s),n;let o=n.pages&&n.pages[r]&&n.pages[r].title;o&&(document.title=n.title=o),r!==n.url?s||window.scrollTo({top:0}):window.location.hash=s;let{scrollY:l}=window;return window.history.pushState({url:r,hash:s,scrollY:l},n.title,a),t(e({},n),{url:r,hash:s,prev:n.url})},nospy:{toggle:t=>(t.nospy.show=!t.nospy.show,e({},t))},pop:(n,i)=>{let{pathname:a,hash:r}=window.location;r=r.substring(1);let s=0;return i.state&&(a=i.state.url,r=i.state.hash,s=i.state.scrollY||0),r?window.location.hash=r:window.scroll({top:s}),t(e({},n),{url:a,hash:r})},pre:{clip:(e,{content:t})=>{if("undefined"!=typeof document&&"function"==typeof document.execCommand){let e=document.createElement("textarea");e.id="copy",e.innerHTML=t,document.body.appendChild(e);let n=document.getElementById("copy");n.select(),document.execCommand("copy"),document.body.removeChild(n)}return e}}},z={listenPopState:(e,t)=>{let n=n=>e(t,n);return addEventListener("popstate",n),()=>removeEventListener("popstate",n)}},E={"/tags/":()=>p([p({id:"installation"},[f("Installation"),D("npm i --save-dev --save-exact @magic/test")]),p({id:"usage"},[f("Usage"),D(`
import tags, { bodyTags, headTags, svgTags } from '@magic/tags'
// tags includes all tags
// bodyTags includes all tags that can live only in the <body>
// headTags includes all tags that can live in the <head>
// svgTags includes all valid svg tags
`),D(`
// bodyTags

// Represents a hyperlink (the link that a user clicks on to go to another web page or document).
'a'
// Represents an abbreviation
'abbr'
// Represents an address element
'address'
// Represents an area inside an image map. Used with the map and img elements.
'area'
// Represents an article. This HTML tag was introduced in HTML5.
'article'
// Represents content aside from the page content. This HTML element is new in HTML5.
'aside'
// Represents sound content. The audio element is new in HTML5.
'audio'
// Represents bold text. Not to be confused with the strong element.
'b'
// For bi-directional text formatting. This HTML tag was introduced in HTML5.
'bdi'
// Represents the direction of text display
'bdo'
// Represents a long quotation. For short quotations see the q element.
'blockquote'
// Represents the body element
'body'
// Inserts a single line break
'br'
// Represents a button form control.
'button'
// Define graphics. The canvas tag is new in HTML5.
'canvas'
// Represents a table caption
'caption'
// Represents a citation
'cite'
// Represents computer code text
'code'
// Represents attributes for table columns&nbsp;
'col'
// Represents groups of table columns
'colgroup'
// Allows for machine-readable data to be provided. This tag was introduced in HTML5.
'data'
// Represents an "autocomplete" dropdown list. The datalist tag was introduced in HTML5.
'datalist'
// Represents a definition description
'dd'
// Represents deleted text
'del'
// Represents details of an element. This tag was introduced in HTML5.
'details'
// Defines&nbsp;a definition term
'dfn'
// Represents that part of an application is interactive. This tag is new in HTML5.
'dialog'
// Represents a section in a document
'div'
// Represents a definition list
'dl'
// Represents a definition term
'dt'
// Represents emphasized text&nbsp;
'em'
// Represents external application or interactive content. The embed tag was introduced in HTML5 (although browsers have supported it since long before HTML5).
'embed'
// Represents a fieldset
'fieldset'
// Represents caption for the 'code',figure'/code', element. The figcaption tag is new in HTML5.
'figcaption'
// Represents a group of media content, and their caption. This tag was introduced in HTML5.
'figure'
// Represents a footer for a section or page. This tag was introduced in HTML5.
'footer'
// Represents a form&nbsp;
'form'
// Represents a heading level 1
'h1'
// Represents a heading level 2
'h2'
// Represents a heading level 3
'h3'
// Represents a heading level 4
'h4'
// Represents a heading level 5
'h5'
// Represents a heading level 6
'h6'
// Represents a group of introductory or navigational aids, including 'code',hgroup'/code', elements. This tag was introduced in HTML5.
'header'
// Represents a header for a section or page.
// Note that this element has been dropped from the W3C HTML5 specification but it is still included in the WHATWG HTML Living Standard.
'hgroup'
// Represents a horizontal rule
'hr'
// Represents italic text
'i'
// Represents an inline sub window (frame)
'iframe'
// Represents an image
'img'
// Represents an input field
'input'
// Represents inserted text
'ins'
// Represents keyboard text
'kbd'
// Represents a label&nbsp;for a form control
'label'
// Represents a title in a fieldset
'legend'
// Represents a list item
'li'
// Represents the main content area of an HTML document. This tag is new in HTML5.
'main'
// Represents an image map&nbsp;
'map'
// Represents marked text. This tag was introduced in HTML5.
'mark'
// Represents measurement within a predefined range. This element is new in HTML5.
'meter'
// Represents navigation links. This tag was introduced in HTML5.
'nav'
// Represents a noscript section
'noscript'
// Represents an embedded object
'object'
// Represents an ordered list
'ol'
// Represents an option group
'optgroup'
// Represents an option in a drop-down list
'option'
// Represents some types of output. The output element was introduced in HTML5.
'output'
// Represents a paragraph
'p'
// Represents a parameter for an object
'param'
// Represents preformatted text
'pre'
// Represents progress of a task of any kind. This element was introduced in HTML5.
'progress'
// Represents a short quotation
'q'
// Marks the base text component of a ruby annotation. This tag is new in HTML5.
'rb'
// Used for the benefit of browsers that don't support ruby annotations. This element was introduced in HTML5.
'rp'
// Represents the ruby text component of a ruby annotation. This element was introduced in HTML5.
'rt'
// Marks the ruby text container for ruby text components in a ruby annotation. This element is new in HTML5.
'rtc'
// Represents a ruby annotation (used in East Asian typography). The ruby element was introduced in HTML5.
'ruby'
// Indicates text that's no longer accurate or relevant.
's'
// Represents sample computer code
'samp'
// Represents a script
'script'
// Represents a section. This tag is new in HTML5.
'section'
// Represents a selectable list
'select'
// Represents small text
'small'
// Represents media resources. This HTML element is new in HTML5.
'source'
// Represents a section in a document
'span'
// Represents strong text
'strong'
// Represents a style definition
'style'
// Represents subscripted text
'sub'
// Represents a summary / caption for the details element. This HTML tag is new in HTML5.
'summary'
// Represents superscripted text
'sup'
// Represents a table
'table'
// Represents a table body
'tbody'
// Represents a table cell
'td'
// Allows you to declare an HTML fragment that can be cloned and inserted in the document by script.
'template'
// Represents a text area
'textarea'
// Represents a table footer
'tfoot'
// Represents a table header
'th'
// Represents a table header
'thead'
// Represents a date/time. This HTML element was introduced in HTML5.
'time'
// Represents a table row
'tr'
// Represents a text track for media such as video and audio. This element is new in HTML5.
'track'
// Represents text with a non-textual annotation.
'u'
// Represents an unordered list
'ul'
// Represents a variable
'var',
// Represents a video. The video element is new in HTML5.
'video'
// Represents a line break 'i',opportunity'/i', for very long words and strings of text with no spaces. This tag is new in HTML5.
'wbr'


// headTags

// Represents a base URL for all the links in a page
'base'
// Represents information about the document
'head'
// Represents an html document
'html'
// Represents a resource reference
'link'
// Represents meta information
'meta'
// Represents the document title
'title'


// svgTags

// The <a> SVG element creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.
'a'
// This element implements the SVGAnimateElement interface.
'animate'
// The <animateMotion> element causes a referenced element to move along a motion path.
'animateMotion'
// The animateTransform element animates a transformation attribute on a target element, thereby allowing animations to control translation, scaling, rotation and/or skewing.
'animateTransform'
// The <circle> SVG element is an SVG basic shape, used to create circles based on a center point and a radius.
'circle'
// The <clipPath> SVG element defines a clipping path. A clipping path is used/referenced using the clip-path property.
'clipPath'
// The <color-profile> element allows describing the color profile used for the image.
'color-profile',
// The <defs> element is used to store graphical objects that will be used at a later time. Objects created inside a <defs> element are not rendered directly. To display them you have to reference them (with a <use> element for example).
'defs'
// Each container element or graphics element in an SVG drawing can supply a description string using the <desc> element where the description is text-only.
'desc'
// The <discard> SVG element allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.
'discard'
// The <ellipse> element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
'ellipse'
// The <feBlend> SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute.
'feBlend'
// The <feColorMatrix> SVG filter element changes colors based on a transformation matrix. Every pixel's color value (represented by an [R,G,B,A] vector) is matrix multiplied to create a new color:
'feColorMatrix'
// Th <feComponentTransfer> SVG filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding.
'feComponentTransfer'
// The <feComposite> SVG filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor, and lighter. Additionally, a component-wise arithmetic operation (with the result clamped between [0..1]) can be applied.
'feComposite'
// The <feConvolveMatrix> SVG filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling.
'feConvolveMatrix'
// The <feDiffuseLighting> SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map.
'feDiffuseLighting'
// The <feDisplacementMap> SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.
'feDisplacementMap'
// The <feDistantLight> filter primitive defines a distant light source that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.
'feDistantLight'
// The <feDropShadow> filter primitive creates a drop shadow of the input image. It is a shorthand filter, and is defined in terms of combinations of other filter primitives.
'feDropShadow'
// The <feFlood> SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.
'feFlood'
// The <feFuncA> SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent <feComponentTransfer> element.
'feFuncA'
// The <feFuncB> SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent <feComponentTransfer> element.
'feFuncB'
// The <feFuncG> SVG filter primitive defines the transfer function for the green component of the input graphic of its parent <feComponentTransfer> element.
'feFuncG'
// The <feFuncR> SVG filter primitive defines the transfer function for the red component of the input graphic of its parent <feComponentTransfer> element.
'feFuncR'
// The <feGaussianBlur> SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.
'feGaussianBlur'
// The <feImage> SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)
'feImage'
// The <feMerge> SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a <feMergeNode> child.
'feMerge'
// The feMergeNode takes the result of another filter to be processed by its parent <feMerge>.
'feMergeNode'
// The <feMorphology> SVG filter primitive is used to erode or dilate the input image. It's usefulness lies especially in fattening or thinning effects.
'feMorphology'
// The <feOffset> SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes.
'feOffset'
// The <fePointLight> filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.
'fePointLight'
// The <feSpecularLighting> SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model. The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction.
'feSpecularLighting'
// The <feSpotLight> SVG filter primitive defines a light source which allows to create a spotlight effect. It that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.
'feSpotLight'
// The <feTile> SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a <pattern>.
'feTile'
// The <feTurbulence> SVG filter primitive creates an image using the Perlin turbulence function. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.
'feTurbulence'
// The <filter> SVG element serves as container for atomic filter operations. It is never rendered directly. A filter is referenced by using the filter attribute on the target SVG element or via the filter CSS property.
'filter'
// The <foreignObject> SVG element allows for inclusion of a different XML namespace. In the context of a browser it is most likely XHTML/HTML.
'foreignObject'
// The <g> SVG element is a container used to group other SVG elements.
'g'
// The <hatch> SVG element is used to fill or stroke an object using one or more pre-defined paths that are repeated at fixed intervals in a specified direction to cover the areas to be painted.
'hatch'
// The <hatchpath> SVG element defines a hatch path used by the <hatch> element.
'hatchpath'
// The <image> SVG element includes images inside SVG documents. It can display raster image files or other SVG files.
'image'
// The <line> element is an SVG basic shape used to create a line connecting two points.
'line'
// The <linearGradient> element lets authors define linear gradients that can be applied to fill or stroke of graphical elements.
'linearGradient'
// The <marker> element defines the graphic&nbsp;that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.
'marker'
// The <mask> element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.
'mask'
'mesh'
'meshgradient'
'meshpatch'
'meshrow'
// The <metadata> SVG element allows to add metadata to SVG content.
// Metadata is structured information about data.
// The contents of <metadata> elements should be elements from other XML namespaces such as RDF, FOAF, etc.
'metadata'
// The <mpath> sub-element for the <animateMotion> element provides the ability to reference an external <path> element as the definition of a motion path.
'mpath'
// The <path> SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.
'path'
// The <pattern> element defines a graphics object which can be redrawn at repeated x and y-coordinate intervals (&quot;tiled&quot;) to cover an area.
'pattern'
// The HTML <picture> element contains zero or more <source> elements and one element to offer alternative versions of an image for different display/device scenarios.
'picture'
// The <polygon> element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point. For open shapes see the&nbsp;<polyline> element.
'polygon'
// The <polyline> SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the <polygon> element.
'polyline'
// The <radialGradient> SVG element lets authors define radial gradients to fill or stroke graphical elements.
'radialGradient'
// The <rect> element is a basic SVG shape that creates rectangles, defined by their corner's position, their width, and their height. The rectangles may have their corners rounded.
'rect'
// A SVG script element is equivalent to the script element in HTML and thus is the place for scripts (e.g., ECMAScript).
'script'
// The <set> element provides a simple means of just setting the value of an attribute for a specified duration. It supports all attribute types, including those that cannot reasonably be interpolated, such as string and boolean values. The <set> element is non-additive. The additive and accumulate attributes are not allowed, and will be ignored if specified.
'set'
// The <solidcolor> SVG element lets authors define a single color for use in multiple places in an SVG document. It is also useful as away of animating a palette colors.
'solidcolor'
// The <stop> SVG element defines the ramp of colors to use on a gradient, which is a child element to either the <linearGradient> or the <radialGradient> element.
'stop'
// The <style> SVG element allows style sheets to be embedded directly within SVG content. SVG's style element has the same attributes as the corresponding element in HTML (see HTML's <style> element).
'style'
// The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of any SVG document but it can also be used to embed a SVG fragment inside any SVG or HTML document.
'svg'
// The <switch> SVG element evaluates the requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then processes and renders the first child for which these attributes evaluate to true. All others will be bypassed and therefore not rendered. If the child element is a container element such as a <g>, then the entire subtree is either processed/rendered or bypassed/not rendered.
'switch',
// The <symbol> element is used to define graphical template objects which can be instantiated by a <use> element.
'symbol'
// The SVG <text> element defines a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, just like any other SVG graphics element.
'text'
// In addition to text drawn in a straight line, SVG also includes the ability to place text along the shape of a <path> element. To specify that a block of text is to be rendered along the shape of a <path>, include the given text within a <textPath> element which includes an href attribute with a reference to a <path> element.
'textPath'
// Each container element or graphics element in an SVG drawing can supply a <title> element containing a description string where the description is text-only. When the current SVG document fragment is rendered as SVG on visual media, <title> element is not rendered as part of the graphics. However, some user agents may, for example, display the <title> element as a tooltip. Alternate presentations are possible, both visual and aural, which display the <title> element but do not display path elements or other graphics elements. The <title> element generally improves accessibility of SVG documents.
'title'
// Within a <text> element, text and font properties and the current text position can be adjusted with absolute or relative coordinate values by including a <tspan> element.
'tspan'
'unknown'
// The <use> element takes nodes from within the SVG document, and duplicates them somewhere else.
'use'
// A view is a defined way to view the image, like a zoom level or a detail view.
'view'
`),f("Sources"),v("html elements list and docs extracted from"),v(C({to:"https://www.html.am/tags/",text:"html.am"})),v("svg element list and docs extracted from"),v(C({to:"https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element",text:"Mozilla Developer Docs"}))])]),"/tags/404/":()=>p("404 - not found.")};a({init:t(e({},{description:["all html tags in an array."],logotext:"@magic/tags",menu:[{text:"installation",to:"/tags/#installation"},{text:"usage",to:"/tags/#usage"}],nospy:{show:!1},pageClass:{},pages:{"/tags/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/tags/",theme:"dark",title:"@magic/tags",url:"/tags/"}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:e=>[[z.listenPopState,I.pop]],view:e=>{let t=E[e.url]?e.url:"/404/",n=E[t],i=e.pages&&e.pages[t];return i&&Object.keys(i).forEach(t=>{e[t]=i[t]}),e.url=t,P({page:n,state:e},[V(e),O(e)])},node:document.getElementById("Magic")})})();