function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function t(e){if(Array.isArray(e))return e}function n(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){var i,r;i=e,r=n[t],t in i?Object.defineProperty(i,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[t]=r})}return e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n.push.apply(n,i)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function o(e,i){return t(e)||function(e,t){var n,i,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==r.return||r.return()}finally{if(s)throw i}}return a}}(e,i)||s(e,i)||n()}function s(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);if("Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}}!function(){var e,l,c,p,d,h,u,f,m,g,b,v,y,w,T,R,x,S,M,L,G=(e={},c=(l=[]).map,p=Array.isArray,d="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,h=function(e){var t="";if("string"==typeof e)return e;if(p(e)&&e.length>0)for(var n,i=0;i<e.length;i++)""!==(n=h(e[i]))&&(t+=(t&&" ")+n);else for(var i in e)e[i]&&(t+=(t&&" ")+i);return t},u=function(e,t){var n={};for(var i in e)n[i]=e[i];for(var i in t)n[i]=t[i];return n},f=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:f(t):0)},l)},m=function(e,t){if(e!==t)for(var n in u(e,t)){var i,r;if(e[n]!==t[n]&&(i=e[n],r=t[n],!(p(i)&&p(r))||i[0]!==r[0]||"function"!=typeof i[0]))return!0;t[n]=e[n]}},g=function(e,t,n){for(var i,r,a=0,o=[];a<e.length||a<t.length;a++)i=e[a],o.push((r=t[a])?!i||r[0]!==i[0]||m(r[1],i[1])?[r[0],r[1],r[0](n,r[1]),i&&i[2]()]:i:i&&i[2]());return o},b=function(e,t,n,i,r,a){if("key"===t);else if("style"===t)for(var o in u(n,i))n=null==i||null==i[o]?"":i[o],"-"===o[0]?e[t].setProperty(o,n):e[t][o]=n;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=i)?n||e.addEventListener(t,r):e.removeEventListener(t,r):!a&&"list"!==t&&t in e?e[t]=null==i?"":i:null!=i&&!1!==i&&("class"!==t||(i=h(i)))?e.setAttribute(t,i):e.removeAttribute(t)},v=function(e,t,n){var i=e.props,r=3===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:i.is}):document.createElement(e.name,{is:i.is});for(var a in i)b(r,a,null,i[a],t,n);for(var o=0,s=e.children.length;o<s;o++)r.appendChild(v(e.children[o]=x(e.children[o]),t,n));return e.node=r},y=function(e){return null==e?null:e.key},w=function(e,t,n,i,r,a){if(n===i);else if(null!=n&&3===n.type&&3===i.type)n.name!==i.name&&(t.nodeValue=i.name);else if(null==n||n.name!==i.name)t=e.insertBefore(v(i=x(i),r,a),t),null!=n&&e.removeChild(n.node);else{var o,s,l,c,p=n.props,d=i.props,h=n.children,f=i.children,m=0,g=0,T=h.length-1,R=f.length-1;for(var S in a=a||"svg"===i.name,u(p,d))("value"===S||"selected"===S||"checked"===S?t[S]:p[S])!==d[S]&&b(t,S,p[S],d[S],r,a);for(;g<=R&&m<=T&&null!=(l=y(h[m]))&&l===y(f[g]);)w(t,h[m].node,h[m],f[g]=x(f[g++],h[m++]),r,a);for(;g<=R&&m<=T&&null!=(l=y(h[T]))&&l===y(f[R]);)w(t,h[T].node,h[T],f[R]=x(f[R--],h[T--]),r,a);if(m>T)for(;g<=R;)t.insertBefore(v(f[g]=x(f[g++]),r,a),(s=h[m])&&s.node);else if(g>R)for(;m<=T;)t.removeChild(h[m++].node);else{for(var S=m,M={},L={};S<=T;S++)null!=(l=h[S].key)&&(M[l]=h[S]);for(;g<=R;){if(l=y(s=h[m]),c=y(f[g]=x(f[g],s)),L[l]||null!=c&&c===y(h[m+1])){null==l&&t.removeChild(s.node),m++;continue}null==c||1===n.type?(null==l&&(w(t,s&&s.node,s,f[g],r,a),g++),m++):(l===c?(w(t,s.node,s,f[g],r,a),L[c]=!0,m++):null!=(o=M[c])?(w(t,t.insertBefore(o.node,s&&s.node),o,f[g],r,a),L[c]=!0):w(t,s&&s.node,null,f[g],r,a),g++)}for(;m<=T;)null==y(s=h[m++])&&t.removeChild(s.node);for(var S in M)null==L[S]&&t.removeChild(M[S].node)}}return i.node=t},T=function(e,t){for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0},R=function(e){return"object"==typeof e?e:M(e)},x=function(e,t){return 2===e.type?((!t||!t.lazy||T(t.lazy,e.lazy))&&((t=R(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},S=function(e,t,n,i,r,a){return{name:e,props:t,children:n,node:i,type:a,key:r}},M=function(t,n){return S(t,e,l,n,void 0,3)},L=function(t){return 3===t.nodeType?M(t.nodeValue,t):S(t.nodeName.toLowerCase(),e,c.call(t.childNodes,L),t,void 0,1)},{h:function(t,n){for(var i,r=[],a=[],o=arguments.length;o-- >2;)r.push(arguments[o]);for(;r.length>0;)if(p(i=r.pop()))for(var o=i.length;o-- >0;)r.push(i[o]);else!1===i||!0===i||null==i||a.push(R(i));return n=n||e,"function"==typeof t?t(n,a):S(t,n,a,void 0,n.key)},app:function(e){var t={},n=!1,i=e.view,r=e.node,a=r&&L(r),o=e.subscriptions,s=[],l=function(e){u(this.actions[e.type],e)},c=function(e){return t!==e&&(t=e,o&&(s=g(s,f([o(t)]),u)),i&&!n&&d(m,n=!0)),t},h=e.middleware,u=(void 0===h?function(e){return e}:h)(function(e,n){return"function"==typeof e?u(e(t,n)):p(e)?"function"==typeof e[0]||p(e[0])?u(e[0],"function"==typeof e[1]?e[1](n):e[1]):(f(e.slice(1)).map(function(e){e&&e[0](u,e[1])},c(e[0])),t):c(e)}),m=function(){n=!1,r=w(r.parentNode,r,a,a=R(i(t)),l)};u(e.init)}}),k=G.h,V=G.app,C=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,i=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return n.some(function(t){return t===(void 0===e?"undefined":e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e)})};if(i(n,"undefined")){if(t.props)return k(e,{},[t]);i(t,"string","number","function")||Array.isArray(t)?(n=t,t={}):i(t.View,"function")&&(n=t.View,t={})}return k(e,t,n)}},A=C("a");C("abbr"),C("address"),C("animate"),C("animateMotion"),C("animateTransform"),C("area"),C("article"),C("aside"),C("audio"),C("b"),C("base"),C("bdi"),C("bdo"),C("blockquote"),C("body"),C("br");var H=C("button");C("canvas"),C("caption");var O=C("circle");C("cite"),C("clipPath");var j=C("code");C("col"),C("colgroup"),C("data"),C("datalist"),C("dd"),C("defs"),C("del"),C("desc"),C("description"),C("details"),C("dfn"),C("dialog"),C("discard");var D=C("div");C("dl"),C("dt"),C("ellipse"),C("em"),C("embed"),C("feBlend"),C("feColorMatrix"),C("feComponentTransfer"),C("feComposite"),C("feConvolveMatrix"),C("feDiffuseLighting"),C("feDisplacementMap"),C("feDistantLight"),C("feDropShadow"),C("feFlood"),C("feFuncA"),C("feFuncB"),C("feFuncG"),C("feFuncR"),C("feGaussianBlur"),C("feImage"),C("feMerge"),C("feMergeNode"),C("feMorphology"),C("feOffset"),C("fePointLight"),C("feSpecularLighting"),C("feSpotLight"),C("feTile"),C("feTurbulence"),C("fieldset"),C("figcaption"),C("figure"),C("filter");var I=C("footer");C("foreignObject"),C("form");var P=C("g");C("h1");var E=C("h2"),F=C("h3");C("h4"),C("h5"),C("h6"),C("hatch"),C("hatchpath"),C("head");var z=C("header");C("hgroup"),C("hr"),C("html"),C("i"),C("iframe"),C("image"),C("img");var B=C("input");C("ins"),C("kbd"),C("label"),C("legend");var N=C("li");C("line"),C("linearGradient"),C("link");var W=C("main");C("map"),C("mark"),C("marker"),C("mask"),C("mesh"),C("meshgradient"),C("meshpatch"),C("meshrow"),C("meta"),C("metadata"),C("meter"),C("mpath");var q=C("nav");C("noscript"),C("object"),C("ol"),C("optgroup"),C("option"),C("output");var U=C("p");C("param");var X=C("path");C("pattern"),C("picture"),C("polygon"),C("polyline");var Y=C("pre");C("progress"),C("q"),C("radialGradient"),C("rb"),C("rect"),C("rp"),C("rt"),C("rtc"),C("ruby"),C("s"),C("samp"),C("script"),C("section"),C("select"),C("set"),C("small"),C("solidcolor"),C("source");var _=C("span");C("stop"),C("strong"),C("style"),C("sub"),C("summary"),C("sup");var J=C("svg");C("symbol"),C("table"),C("tbody"),C("td"),C("template"),C("text"),C("textPath"),C("textarea"),C("tfoot"),C("th"),C("thead"),C("time"),C("title"),C("tr"),C("track"),C("tspan"),C("u");var $=C("ul");C("unknown"),C("use"),C("video"),C("view"),C("wbr");var K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return I({class:"Footer"},[D({class:"Container"},[D({class:"Credits"},["made with a few bits of ",Z({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),t])])},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.logo,i=e.menu,r=e.logotext,a=e.hash,o=e.url;if(n||i||r)return z({class:"Header"},[ee(),r&&U(r),i&&et({url:o,hash:a,menu:i}),t])},Z=function(e,t){var n=e.to,i=e.action,r=void 0===i?es.go:i,o=e.text,s=a(e,["to","action","text"]),l=s.href,c=s.nofollow,p=s.noreferrer,d=a(s,["href","nofollow","noreferrer"]);return n=n||l||"",d.href=n,o&&t?o=[o,t]:o||(o=t||n),"/"===n[0]||"#"===n[0]?d.onclick=[r,eo.preventDefault]:(d.target="_blank",d.rel="noopener",c&&(d.rel+=" nofollow"),p&&(d.rel+=" noreferrer")),A(d,o)},ee=function(){return Z({to:"/tags/",class:"Logo"},[J({viewBox:"0 0 512 444"},[X({d:"M512 444L256 0 0 444z",fill:"#663695"}),O({cx:"256",cy:"294",r:"130",fill:"#fff"}),O({cx:"256",cy:"281",r:"40",fill:"#663695"}),X({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),X({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])])},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.collapse,n=void 0===t||t,a=e.menu,o=e.hash,s=e.class,l=void 0===s?"":s,c=e.url;return l.includes("Menu")||(l="Menu ".concat(l).trim()),o&&!c.endsWith(o)&&(c+="#".concat(o)),q({className:l},$(a.map(function(e){return en(r(i({},e),{url:c,collapse:n}))})))},en=function(e){var t=e.collapse,n=e.items,r=void 0===n?[]:n,o=e.text,s=e.url,l=a(e,["collapse","items","text","url"]),c={class:{}},p=l.to;p===s&&(c.class.active=!0);var d=[];return(!t||s.includes(p))&&r.length&&(d=$(r.map(function(e){return en(i({url:s,collapse:t},e))}))),N(c,[p?Z(l,o):_(l,o),d])},ei=function(e){var t=e.nospy,n=void 0===t?{}:t;e.cookies;var i=n.show,r=n.title,a=void 0===r?"Privacy Notice":r,o=n.content,s=void 0===o?"This app neither saves, collects, nor shares any data about you.":o,l=n.buttonText;return i?D({class:"NoSpy"},[D({class:"Background",onclick:es.nospy.toggle}),D({class:"Container"},[a&&F(a),s&&U(s),B({onclick:es.nospy.toggle,value:void 0===l?"Awesome!":l,type:"button"})])]):D({class:"NoSpy"},J({class:"icon",onclick:es.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[P([X({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),O({cx:"192",cy:"128",r:"32"}),O({cx:"128",cy:"256",r:"32"}),O({cx:"288",cy:"384",r:"32"}),O({cx:"272",cy:"272",r:"16"}),O({cx:"400",cy:"336",r:"16"}),O({cx:"176",cy:"368",r:"16"})])]))},er=function(e,t){var n=e.page,i=e.state;return W({id:"Magic",class:i.pageClass},D({class:{Wrapper:!0}},[Q(i),D({class:"Page",id:"page"},n(i)),K(i),t]))},ea=function(e,t){"string"==typeof e?e={content:e}:t?e=i({content:t},e):Array.isArray(e)&&(e={content:e.join("")});var n=e.content,r=e.lines,a=void 0===r||r;return D({class:{Pre:!0,lines:a&&"false"!==a}},[D({class:"menu"},[H({onclick:[es.pre.clip,function(e){return{e:e,content:n}}]},"copy")]),Y(n.trim().split("\n").map(ea.Line))])};ea.Comment=function(e){return _({class:"comment"},e)},ea.Line=function(e){return j({class:"line"},ea.Words(e))},ea.Word=function(e){if(!e)return"";var t=e.includes("://"),n=e.startsWith("mailto:")||e.includes("@")&&e.includes(".");if(t||n)return Z({to:e,text:e});var i="";return("state"===e?i="state":"actions"===e?i="actions":eo.pre.keywords.includes(e)?i="keyword":eo.pre.builtins.includes(e)?i="builtin":eo.pre.booleans.includes(e)&&(i="boolean"),i)?_({class:i},e):e},ea.Words=function(e){var i,r=t(i=e.split(eo.pre.commentRegex))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||s(i)||n(),a=r[0],l=r.slice(1);if(!a.endsWith(":")&&l.length)return[ea.Words(a),ea.Comment(l.join("").split(eo.pre.wordRegex).map(ea.Word))];var c=[],p=e;return(e.replace(eo.pre.stringRegex,function(e){if(p){var t=o(p.split(e),2),n=t[0],i=t[1];n&&c.push(n.split(eo.pre.wordRegex).map(ea.Word).filter(function(e){return e})),p=i}c.push(_({class:"string"},e))}),p!==e)?(p&&c.push(p.split(eo.pre.wordRegex).map(ea.Word).filter(function(e){return e})),c):e.split(eo.pre.wordRegex).filter(function(e){return e}).map(ea.Word)};var eo={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function(e){return e.preventDefault(),e}},es={changeTheme:function(e){return r(i({},e),{pageClass:r(i({},e.pageClass),{light:"dark"===e.theme}),theme:"dark"===e.theme?"light":"dark"})},go:function(e,t){var n=t.currentTarget.href.replace(window.location.origin,""),a=o(n.split("#"),2),s=a[0],l=a[1],c=void 0===l?"":l;if(s===e.url&&c===e.hash)return c&&(window.location.hash=c),e;var p=e.pages&&e.pages[s]&&e.pages[s].title;p&&(document.title=e.title=p),s!==e.url?c||window.scrollTo({top:0}):window.location.hash=c;var d=window.scrollY;return window.history.pushState({url:s,hash:c,scrollY:d},e.title,n),r(i({},e),{url:s,hash:c,prev:e.url})},nospy:{toggle:function(e){return e.nospy.show=!e.nospy.show,i({},e)}},pop:function(e,t){var n=window.location,a=n.pathname,o=n.hash;o=o.substring(1);var s=0;return t.state&&(a=t.state.url,o=t.state.hash,s=t.state.scrollY||0),o?window.location.hash=o:window.scroll({top:s}),r(i({},e),{url:a,hash:o})},pre:{clip:function(e,t){var n=t.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var i=document.createElement("textarea");i.id="copy",i.innerHTML=n,document.body.appendChild(i);var r=document.getElementById("copy");r.select(),document.execCommand("copy"),document.body.removeChild(r)}return e}}},el={listenPopState:function(e,t){var n=function(n){return e(t,n)};return addEventListener("popstate",n),function(){return removeEventListener("popstate",n)}}},ec={"/tags/":function(){return D([D({id:"installation"},[E("Installation"),ea("npm i --save-dev --save-exact @magic/test")]),D({id:"usage"},[E("Usage"),ea("\nimport tags, { bodyTags, headTags, svgTags } from '@magic/tags'\n// tags includes all tags\n// bodyTags includes all tags that can live only in the <body>\n// headTags includes all tags that can live in the <head>\n// svgTags includes all valid svg tags\n"),ea("\n// bodyTags\n\n// Represents a hyperlink (the link that a user clicks on to go to another web page or document).\n'a'\n// Represents an abbreviation\n'abbr'\n// Represents an address element\n'address'\n// Represents an area inside an image map. Used with the map and img elements.\n'area'\n// Represents an article. This HTML tag was introduced in HTML5.\n'article'\n// Represents content aside from the page content. This HTML element is new in HTML5.\n'aside'\n// Represents sound content. The audio element is new in HTML5.\n'audio'\n// Represents bold text. Not to be confused with the strong element.\n'b'\n// For bi-directional text formatting. This HTML tag was introduced in HTML5.\n'bdi'\n// Represents the direction of text display\n'bdo'\n// Represents a long quotation. For short quotations see the q element.\n'blockquote'\n// Represents the body element\n'body'\n// Inserts a single line break\n'br'\n// Represents a button form control.\n'button'\n// Define graphics. The canvas tag is new in HTML5.\n'canvas'\n// Represents a table caption\n'caption'\n// Represents a citation\n'cite'\n// Represents computer code text\n'code'\n// Represents attributes for table columns&nbsp;\n'col'\n// Represents groups of table columns\n'colgroup'\n// Allows for machine-readable data to be provided. This tag was introduced in HTML5.\n'data'\n// Represents an \"autocomplete\" dropdown list. The datalist tag was introduced in HTML5.\n'datalist'\n// Represents a definition description\n'dd'\n// Represents deleted text\n'del'\n// Represents details of an element. This tag was introduced in HTML5.\n'details'\n// Defines&nbsp;a definition term\n'dfn'\n// Represents that part of an application is interactive. This tag is new in HTML5.\n'dialog'\n// Represents a section in a document\n'div'\n// Represents a definition list\n'dl'\n// Represents a definition term\n'dt'\n// Represents emphasized text&nbsp;\n'em'\n// Represents external application or interactive content. The embed tag was introduced in HTML5 (although browsers have supported it since long before HTML5).\n'embed'\n// Represents a fieldset\n'fieldset'\n// Represents caption for the 'code',figure'/code', element. The figcaption tag is new in HTML5.\n'figcaption'\n// Represents a group of media content, and their caption. This tag was introduced in HTML5.\n'figure'\n// Represents a footer for a section or page. This tag was introduced in HTML5.\n'footer'\n// Represents a form&nbsp;\n'form'\n// Represents a heading level 1\n'h1'\n// Represents a heading level 2\n'h2'\n// Represents a heading level 3\n'h3'\n// Represents a heading level 4\n'h4'\n// Represents a heading level 5\n'h5'\n// Represents a heading level 6\n'h6'\n// Represents a group of introductory or navigational aids, including 'code',hgroup'/code', elements. This tag was introduced in HTML5.\n'header'\n// Represents a header for a section or page.\n// Note that this element has been dropped from the W3C HTML5 specification but it is still included in the WHATWG HTML Living Standard.\n'hgroup'\n// Represents a horizontal rule\n'hr'\n// Represents italic text\n'i'\n// Represents an inline sub window (frame)\n'iframe'\n// Represents an image\n'img'\n// Represents an input field\n'input'\n// Represents inserted text\n'ins'\n// Represents keyboard text\n'kbd'\n// Represents a label&nbsp;for a form control\n'label'\n// Represents a title in a fieldset\n'legend'\n// Represents a list item\n'li'\n// Represents the main content area of an HTML document. This tag is new in HTML5.\n'main'\n// Represents an image map&nbsp;\n'map'\n// Represents marked text. This tag was introduced in HTML5.\n'mark'\n// Represents measurement within a predefined range. This element is new in HTML5.\n'meter'\n// Represents navigation links. This tag was introduced in HTML5.\n'nav'\n// Represents a noscript section\n'noscript'\n// Represents an embedded object\n'object'\n// Represents an ordered list\n'ol'\n// Represents an option group\n'optgroup'\n// Represents an option in a drop-down list\n'option'\n// Represents some types of output. The output element was introduced in HTML5.\n'output'\n// Represents a paragraph\n'p'\n// Represents a parameter for an object\n'param'\n// Represents preformatted text\n'pre'\n// Represents progress of a task of any kind. This element was introduced in HTML5.\n'progress'\n// Represents a short quotation\n'q'\n// Marks the base text component of a ruby annotation. This tag is new in HTML5.\n'rb'\n// Used for the benefit of browsers that don't support ruby annotations. This element was introduced in HTML5.\n'rp'\n// Represents the ruby text component of a ruby annotation. This element was introduced in HTML5.\n'rt'\n// Marks the ruby text container for ruby text components in a ruby annotation. This element is new in HTML5.\n'rtc'\n// Represents a ruby annotation (used in East Asian typography). The ruby element was introduced in HTML5.\n'ruby'\n// Indicates text that's no longer accurate or relevant.\n's'\n// Represents sample computer code\n'samp'\n// Represents a script\n'script'\n// Represents a section. This tag is new in HTML5.\n'section'\n// Represents a selectable list\n'select'\n// Represents small text\n'small'\n// Represents media resources. This HTML element is new in HTML5.\n'source'\n// Represents a section in a document\n'span'\n// Represents strong text\n'strong'\n// Represents a style definition\n'style'\n// Represents subscripted text\n'sub'\n// Represents a summary / caption for the details element. This HTML tag is new in HTML5.\n'summary'\n// Represents superscripted text\n'sup'\n// Represents a table\n'table'\n// Represents a table body\n'tbody'\n// Represents a table cell\n'td'\n// Allows you to declare an HTML fragment that can be cloned and inserted in the document by script.\n'template'\n// Represents a text area\n'textarea'\n// Represents a table footer\n'tfoot'\n// Represents a table header\n'th'\n// Represents a table header\n'thead'\n// Represents a date/time. This HTML element was introduced in HTML5.\n'time'\n// Represents a table row\n'tr'\n// Represents a text track for media such as video and audio. This element is new in HTML5.\n'track'\n// Represents text with a non-textual annotation.\n'u'\n// Represents an unordered list\n'ul'\n// Represents a variable\n// Breaks the build (of course)\n//~ 'var',\n// Represents a video. The video element is new in HTML5.\n'video'\n// Represents a line break 'i',opportunity'/i', for very long words and strings of text with no spaces. This tag is new in HTML5.\n'wbr'\n\n\n// headTags\n\n// Represents a base URL for all the links in a page\n'base'\n// Represents information about the document\n'head'\n// Represents an html document\n'html'\n// Represents a resource reference\n'link'\n// Represents meta information\n'meta'\n// Represents the document title\n'title'\n\n\n// svgTags\n\n// The <a> SVG element creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.\n'a'\n// This element implements the SVGAnimateElement interface.\n'animate'\n// The <animateMotion> element causes a referenced element to move along a motion path.\n'animateMotion'\n// The animateTransform element animates a transformation attribute on a target element, thereby allowing animations to control translation, scaling, rotation and/or skewing.\n'animateTransform'\n// The <circle> SVG element is an SVG basic shape, used to create circles based on a center point and a radius.\n'circle'\n// The <clipPath> SVG element defines a clipping path. A clipping path is used/referenced using the clip-path property.\n'clipPath'\n// The <color-profile> element allows describing the color profile used for the image.\n// DOES NOT CONFORM TO HTML ELEMENT NAMES. DISABLED\n// 'color-profile',\n// The <defs> element is used to store graphical objects that will be used at a later time. Objects created inside a <defs> element are not rendered directly. To display them you have to reference them (with a <use> element for example).\n'defs'\n// Each container element or graphics element in an SVG drawing can supply a description string using the <desc> element where the description is text-only.\n'desc'\n// The <discard> SVG element allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.\n'discard'\n// The <ellipse> element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.\n'ellipse'\n// The <feBlend> SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute.\n'feBlend'\n// The <feColorMatrix> SVG filter element changes colors based on a transformation matrix. Every pixel's color value (represented by an [R,G,B,A] vector) is matrix multiplied to create a new color:\n'feColorMatrix'\n// Th <feComponentTransfer> SVG filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding.\n'feComponentTransfer'\n// The <feComposite> SVG filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor, and lighter. Additionally, a component-wise arithmetic operation (with the result clamped between [0..1]) can be applied.\n'feComposite'\n// The <feConvolveMatrix> SVG filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling.\n'feConvolveMatrix'\n// The <feDiffuseLighting> SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map.\n'feDiffuseLighting'\n// The <feDisplacementMap> SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.\n'feDisplacementMap'\n// The <feDistantLight> filter primitive defines a distant light source that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.\n'feDistantLight'\n// The <feDropShadow> filter primitive creates a drop shadow of the input image. It is a shorthand filter, and is defined in terms of combinations of other filter primitives.\n'feDropShadow'\n// The <feFlood> SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.\n'feFlood'\n// The <feFuncA> SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent <feComponentTransfer> element.\n'feFuncA'\n// The <feFuncB> SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent <feComponentTransfer> element.\n'feFuncB'\n// The <feFuncG> SVG filter primitive defines the transfer function for the green component of the input graphic of its parent <feComponentTransfer> element.\n'feFuncG'\n// The <feFuncR> SVG filter primitive defines the transfer function for the red component of the input graphic of its parent <feComponentTransfer> element.\n'feFuncR'\n// The <feGaussianBlur> SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.\n'feGaussianBlur'\n// The <feImage> SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)\n'feImage'\n// The <feMerge> SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a <feMergeNode> child.\n'feMerge'\n// The feMergeNode takes the result of another filter to be processed by its parent <feMerge>.\n'feMergeNode'\n// The <feMorphology> SVG filter primitive is used to erode or dilate the input image. It's usefulness lies especially in fattening or thinning effects.\n'feMorphology'\n// The <feOffset> SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes.\n'feOffset'\n// The <fePointLight> filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.\n'fePointLight'\n// The <feSpecularLighting> SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model. The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction.\n'feSpecularLighting'\n// The <feSpotLight> SVG filter primitive defines a light source which allows to create a spotlight effect. It that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.\n'feSpotLight'\n// The <feTile> SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a <pattern>.\n'feTile'\n// The <feTurbulence> SVG filter primitive creates an image using the Perlin turbulence function. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.\n'feTurbulence'\n// The <filter> SVG element serves as container for atomic filter operations. It is never rendered directly. A filter is referenced by using the filter attribute on the target SVG element or via the filter CSS property.\n'filter'\n// The <foreignObject> SVG element allows for inclusion of a different XML namespace. In the context of a browser it is most likely XHTML/HTML.\n'foreignObject'\n// The <g> SVG element is a container used to group other SVG elements.\n'g'\n// The <hatch> SVG element is used to fill or stroke an object using one or more pre-defined paths that are repeated at fixed intervals in a specified direction to cover the areas to be painted.\n'hatch'\n// The <hatchpath> SVG element defines a hatch path used by the <hatch> element.\n'hatchpath'\n// The <image> SVG element includes images inside SVG documents. It can display raster image files or other SVG files.\n'image'\n// The <line> element is an SVG basic shape used to create a line connecting two points.\n'line'\n// The <linearGradient> element lets authors define linear gradients that can be applied to fill or stroke of graphical elements.\n'linearGradient'\n// The <marker> element defines the graphic&nbsp;that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.\n'marker'\n// The <mask> element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.\n'mask'\n'mesh'\n'meshgradient'\n'meshpatch'\n'meshrow'\n// The <metadata> SVG element allows to add metadata to SVG content.\n// Metadata is structured information about data.\n// The contents of <metadata> elements should be elements from other XML namespaces such as RDF, FOAF, etc.\n'metadata'\n// The <mpath> sub-element for the <animateMotion> element provides the ability to reference an external <path> element as the definition of a motion path.\n'mpath'\n// The <path> SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.\n'path'\n// The <pattern> element defines a graphics object which can be redrawn at repeated x and y-coordinate intervals (&quot;tiled&quot;) to cover an area.\n'pattern'\n// The HTML <picture> element contains zero or more <source> elements and one element to offer alternative versions of an image for different display/device scenarios.\n'picture'\n// The <polygon> element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point. For open shapes see the&nbsp;<polyline> element.\n'polygon'\n// The <polyline> SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the <polygon> element.\n'polyline'\n// The <radialGradient> SVG element lets authors define radial gradients to fill or stroke graphical elements.\n'radialGradient'\n// The <rect> element is a basic SVG shape that creates rectangles, defined by their corner's position, their width, and their height. The rectangles may have their corners rounded.\n'rect'\n// A SVG script element is equivalent to the script element in HTML and thus is the place for scripts (e.g., ECMAScript).\n'script'\n// The <set> element provides a simple means of just setting the value of an attribute for a specified duration. It supports all attribute types, including those that cannot reasonably be interpolated, such as string and boolean values. The <set> element is non-additive. The additive and accumulate attributes are not allowed, and will be ignored if specified.\n'set'\n// The <solidcolor> SVG element lets authors define a single color for use in multiple places in an SVG document. It is also useful as away of animating a palette colors.\n'solidcolor'\n// The <stop> SVG element defines the ramp of colors to use on a gradient, which is a child element to either the <linearGradient> or the <radialGradient> element.\n'stop'\n// The <style> SVG element allows style sheets to be embedded directly within SVG content. SVG's style element has the same attributes as the corresponding element in HTML (see HTML's <style> element).\n'style'\n// The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of any SVG document but it can also be used to embed a SVG fragment inside any SVG or HTML document.\n'svg'\n// The <switch> SVG element evaluates the requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then processes and renders the first child for which these attributes evaluate to true. All others will be bypassed and therefore not rendered. If the child element is a container element such as a <g>, then the entire subtree is either processed/rendered or bypassed/not rendered.\n// Object.switch breaks javascript\n// 'switch',\n// The <symbol> element is used to define graphical template objects which can be instantiated by a <use> element.\n'symbol'\n// The SVG <text> element defines a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, just like any other SVG graphics element.\n'text'\n// In addition to text drawn in a straight line, SVG also includes the ability to place text along the shape of a <path> element. To specify that a block of text is to be rendered along the shape of a <path>, include the given text within a <textPath> element which includes an href attribute with a reference to a <path> element.\n'textPath'\n// Each container element or graphics element in an SVG drawing can supply a <title> element containing a description string where the description is text-only. When the current SVG document fragment is rendered as SVG on visual media, <title> element is not rendered as part of the graphics. However, some user agents may, for example, display the <title> element as a tooltip. Alternate presentations are possible, both visual and aural, which display the <title> element but do not display path elements or other graphics elements. The <title> element generally improves accessibility of SVG documents.\n'title'\n// Within a <text> element, text and font properties and the current text position can be adjusted with absolute or relative coordinate values by including a <tspan> element.\n'tspan'\n'unknown'\n// The <use> element takes nodes from within the SVG document, and duplicates them somewhere else.\n'use'\n// A view is a defined way to view the image, like a zoom level or a detail view.\n'view'\n"),E("Sources"),U("html elements list and docs extracted from"),U(Z({to:"https://www.html.am/tags/",text:"html.am"})),U("svg element list and docs extracted from"),U(Z({to:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element",text:"Mozilla Developer Docs"}))])])},"/tags/404/":function(){return D("404 - not found.")}};V({init:r(i({},{description:["all html tags in an array."],logotext:"@magic/tags",menu:[{text:"installation",to:"/tags/#installation"},{text:"usage",to:"/tags/#usage"}],nospy:{show:!1},pageClass:{},pages:{"/tags/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/tags/",theme:"dark",title:"@magic/tags",url:"/tags/"}),{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function(e){return[[el.listenPopState,es.pop]]},view:function(e){var t=ec[e.url]?e.url:"/404/",n=ec[t],i=e.pages&&e.pages[t];return i&&Object.keys(i).forEach(function(t){e[t]=i[t]}),e.url=t,er({page:n,state:e},[function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],J({class:"LightSwitch icon",onclick:es.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[X({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),X({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),X({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])}(e),ei(e)])},node:document.getElementById("Magic")})}();