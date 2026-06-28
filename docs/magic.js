const __MAGIC__=()=>{var e,t,n,i,a,s,r,o,l,c,d,p,h,u,m,f,g,b,y,w;let{h:T,app:v}=(e={},n=(t=[]).map,i=Array.isArray,a="u">typeof requestAnimationFrame?requestAnimationFrame:setTimeout,s=function(e){var t="";if("string"==typeof e)return e;if(i(e)&&e.length>0)for(var n,a=0;a<e.length;a++)""!==(n=s(e[a]))&&(t+=(t&&" ")+n);else for(var a in e)e[a]&&(t+=(t&&" ")+a);return t},r=function(e,t){var n={};for(var i in e)n[i]=e[i];for(var i in t)n[i]=t[i];return n},o=function(e){return e.reduce(function(e,t){return e.concat(t&&!0!==t?"function"==typeof t[0]?[t]:o(t):0)},t)},l=function(e,t){if(e!==t)for(var n in r(e,t)){var a,s;if(e[n]!==t[n]&&(a=e[n],s=t[n],!(i(a)&&i(s))||a[0]!==s[0]||"function"!=typeof a[0]))return!0;t[n]=e[n]}},c=function(e,t,n){for(var i,a,s=0,r=[];s<e.length||s<t.length;s++)i=e[s],r.push((a=t[s])?!i||a[0]!==i[0]||l(a[1],i[1])?[a[0],a[1],a[0](n,a[1]),i&&i[2]()]:i:i&&i[2]());return r},d=function(e,t,n,i,a,o){if("key"===t);else if("style"===t)for(var l in r(n,i))n=null==i||null==i[l]?"":i[l],"-"===l[0]?e[t].setProperty(l,n):e[t][l]=n;else"o"===t[0]&&"n"===t[1]?((e.actions||(e.actions={}))[t=t.slice(2)]=i)?n||e.addEventListener(t,a):e.removeEventListener(t,a):!o&&"list"!==t&&"children"!==t&&t in e?e[t]=null==i?"":i:null!=i&&!1!==i&&("class"!==t||(i=s(i)))?"children"!==t&&e.setAttribute(t,i):e.removeAttribute(t)},p=function(e,t,n){var i=e.props,a=3===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:i.is}):document.createElement(e.name,{is:i.is});for(var s in i)d(a,s,null,i[s],t,n);for(var r=0,o=e.children.length;r<o;r++)a.appendChild(p(e.children[r]=g(e.children[r]),t,n));return e.node=a},h=function(e){return null==e?null:e.key},u=function(e,t,n,i,a,s){if(n===i);else if(null!=n&&3===n.type&&3===i.type)n.name!==i.name&&(t.nodeValue=i.name);else if(null==n||n.name!==i.name)t=e.insertBefore(p(i=g(i),a,s),t),null!=n&&e.removeChild(n.node);else{var o,l,c,m,f=n.props,b=i.props,y=n.children,w=i.children,T=0,v=0,R=y.length-1,x=w.length-1;for(var S in s=s||"svg"===i.name,r(f,b))("value"===S||"selected"===S||"checked"===S?t[S]:f[S])!==b[S]&&d(t,S,f[S],b[S],a,s);for(;v<=x&&T<=R&&null!=(c=h(y[T]))&&c===h(w[v]);)u(t,y[T].node,y[T],w[v]=g(w[v++],y[T++]),a,s);for(;v<=x&&T<=R&&null!=(c=h(y[R]))&&c===h(w[x]);)u(t,y[R].node,y[R],w[x]=g(w[x--],y[R--]),a,s);if(T>R)for(;v<=x;)t.insertBefore(p(w[v]=g(w[v++]),a,s),(l=y[T])&&l.node);else if(v>x)for(;T<=R;)t.removeChild(y[T++].node);else{for(var S=T,M={},G={};S<=R;S++)null!=(c=y[S].key)&&(M[c]=y[S]);for(;v<=x;){if(c=h(l=y[T]),m=h(w[v]=g(w[v],l)),G[c]||null!=m&&m===h(y[T+1])){null==c&&t.removeChild(l.node),T++;continue}null==m||1===n.type?(null==c&&(u(t,l&&l.node,l,w[v],a,s),v++),T++):(c===m?(u(t,l.node,l,w[v],a,s),G[m]=!0,T++):null!=(o=M[m])?(u(t,t.insertBefore(o.node,l&&l.node),o,w[v],a,s),G[m]=!0):u(t,l&&l.node,null,w[v],a,s),v++)}for(;T<=R;)null==h(l=y[T++])&&t.removeChild(l.node);for(var S in M)null==G[S]&&t.removeChild(M[S].node)}}return i.node=t},m=function(e,t){for(var n in e)if(e[n]!==t[n])return!0;for(var n in t)if(e[n]!==t[n])return!0},f=function(e){return"object"==typeof e?e:y(e)},g=function(e,t){return 2===e.type?((!t||!t.lazy||m(t.lazy,e.lazy))&&((t=f(e.lazy.view(e.lazy))).lazy=e.lazy),t):e},b=function(e,t,n,i,a,s){return{name:e,props:t,children:n,node:i,type:s,key:a}},y=function(n,i){return b(n,e,t,i,void 0,3)},w=function(t){return 3===t.nodeType?y(t.nodeValue,t):b(t.nodeName.toLowerCase(),e,n.call(t.childNodes,w),t,void 0,1)},{h:function(t,n){for(var a,s=[],r=[],o=arguments.length;o-- >2;)s.push(arguments[o]);for(;s.length>0;)if(i(a=s.pop()))for(var o=a.length;o-- >0;)s.push(a[o]);else!1===a||!0===a||null==a||r.push(f(a));return n=n||e,"function"==typeof t?t(n,r):b(t,n,r,void 0,n.key)},app:function(e){var t={},n=!1,s=e.view,r=e.node,l=r&&w(r),d=e.subscriptions,p=[],h=function(e){b(this.actions[e.type],e)},m=function(e){return t!==e&&(t=e,d&&(p=c(p,o([d(t)]),b)),s&&!n&&a(y,n=!0)),t};let{middleware:g=e=>e}=e,b=g((e,n)=>"function"==typeof e?b(e(t,n)):i(e)?"function"==typeof e[0]||i(e[0])?b(e[0],"function"==typeof e[1]?e[1](n):e[1]):(o(e.slice(1)).map(function(e){e&&e[0](b,e[1])},m(e[0])),t):m(e));var y=function(){n=!1,r=u(r.parentNode,r,l,l=f(s(t)),h)};b(e.init)}}),R=e=>(t={},n)=>{let i=(e,...t)=>t.some(t=>t===typeof e);if(i(n,"undefined")){if(t.props)return T(e,{},[t]);i(t,"string","number","function")||Array.isArray(t)?(n=t,t={}):i(t.View,"function")&&(n=t.View,t={})}return T(e,t,n)},x=R("a"),S=R("button"),M=R("circle"),G=R("code");R("description");let L=R("div"),k=R("footer"),V=R("g"),H=R("h2"),C=R("h3");R("h4");let A=R("header");R("img");let I=R("input"),z=R("li");R("link");let j=R("main");R("meta");let F=R("nav"),D=R("p"),E=R("path"),W=R("pre");R("script");let B=R("span"),q=R("svg");R("title");let N=R("ul"),P=({to:e,action:t=X.go,text:n,...i},a)=>{let{href:s,nofollow:r,noreferrer:o,...l}=i;return l.href=e=e||s||"",n&&a?n=[n,a]:n||(n=a||e),"/"===e[0]||"#"===e[0]?l.onclick=[t,O.preventDefault]:(l.target="_blank",l.rel="noopener",r&&(l.rel+=" nofollow"),o&&(l.rel+=" noreferrer")),x(l,n)},_=e=>{let{collapse:t,items:n=[],text:i,url:a,...s}=e,r={class:{}},{to:o}=s;o===a&&(r.class.active=!0);let l=[];return(!t||a.includes(o))&&n.length&&(l=N(n.map(e=>_({url:a,collapse:t,...e})))),z(r,[o?P(s,i):B(s,i),l])},U=(e,t)=>{"string"==typeof e?e={content:e}:t?e={content:t,...e}:Array.isArray(e)&&(e={content:e.join("")});let{content:n,lines:i=!0}=e;return L({class:{Pre:!0,lines:i&&"false"!==i}},[L({class:"menu"},[S({onclick:[X.pre.clip,e=>({e,content:n})]},"copy")]),W(n.trim().split("\n").map(U.Line))])};U.Comment=e=>B({class:"comment"},e),U.Line=e=>G({class:"line"},U.Words(e)),U.Word=e=>{if(!e)return"";let t=e.includes("://"),n=e.startsWith("mailto:")||e.includes("@")&&e.includes(".");if(t||n)return P({to:e,text:e});let i="";return("state"===e?i="state":"actions"===e?i="actions":"effects"===e?i="effects":"subscriptions"===e?i="subscriptions":O.pre.keywords.includes(e)?i="keyword":O.pre.builtins.includes(e)?i="builtin":O.pre.booleans.includes(e)&&(i="boolean"),i)?B({class:i},e):e},U.Words=e=>{let[t,...n]=e.split(O.pre.commentRegex);if(!t.endsWith(":")&&n.length)return[U.Words(t),U.Comment(n.join("").split(O.pre.wordRegex).map(U.Word))];let i=[],a=e;return(e.replace(O.pre.stringRegex,e=>{if(a){let[t,n]=a.split(e);t&&i.push(t.split(O.pre.wordRegex).map(U.Word).filter(e=>e)),a=n}i.push(B({class:"string"},e))}),a!==e)?(a&&i.push(a.split(O.pre.wordRegex).map(U.Word).filter(e=>e)),i):e.split(O.pre.wordRegex).filter(e=>e).map(U.Word)};let O={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},undefined:{code:"ERR_UNSUPPORTED_DIR_IMPORT",url:"file:///home/j/dev/magic/util/tags/node_modules/@magic-libraries"}},X={changeTheme:e=>({...e,pageClass:{...e.pageClass,light:"dark"===e.theme},theme:"dark"===e.theme?"light":"dark"}),go:(e,t)=>{if(!t||!t.currentTarget)return e;let n=t.currentTarget.href.replace(window.location.origin,""),[i,a=""]=n.split("#");if(i===e.url&&a===e.hash)return a&&(window.location.hash=a),e;let s=e.pages&&e.pages[i]&&e.pages[i].title;s&&(document.title=e.title=s),i!==e.url?a||window.scrollTo({top:0}):window.location.hash=a;let{scrollY:r}=window;return window.history.pushState({url:i,hash:a,scrollY:r},e.title,n),{...e,url:i,hash:a,prev:e.url}},nospy:{toggle:e=>(e.nospy.show=!e.nospy.show,{...e})},pop:(e,t)=>{let{pathname:n,hash:i}=window.location;i=i.substring(1);let a=0;return t.state&&(n=t.state.url,i=t.state.hash,a=t.state.scrollY||0),i?window.location.hash=i:window.scroll({top:a}),{...e,url:n,hash:i}},pre:{clip:(e,{content:t})=>{if("u">typeof document&&"function"==typeof document.execCommand){let e=document.createElement("textarea");e.id="copy",e.innerHTML=t,document.body.appendChild(e);let n=document.getElementById("copy");n.select(),document.execCommand("copy"),document.body.removeChild(n)}return e}}},$=(e,t)=>{let n=n=>e(t,n);return addEventListener("popstate",n),()=>removeEventListener("popstate",n)},J={"/tags/":()=>L([L({id:"installation"},[H("Installation"),U("npm i --save-dev --save-exact @magic/test")]),L({id:"usage"},[H("Usage"),U(`
import tags, { bodyTags, headTags, svgTags } from '@magic/tags'
// tags includes all tags
// bodyTags includes all tags that can live only in the <body>
// headTags includes all tags that can live in the <head>
// svgTags includes all valid svg tags
`),U(`
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
`),H("Sources"),D("html elements list and docs extracted from"),D(P({to:"https://www.html.am/tags/",text:"html.am"})),D("svg element list and docs extracted from"),D(P({to:"https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element",text:"Mozilla Developer Docs"}))])]),"/tags/404/":()=>L("404 - not found.")};v({init:{...{description:["all html tags in an array."],logotext:"@magic/tags",menu:[{text:"installation",to:"/tags/#installation"},{text:"usage",to:"/tags/#usage"}],nospy:{show:!1},pageClass:{},pages:{"/tags/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/tags/",theme:"dark",title:"@magic/tags",url:"/tags/"},url:window.location.pathname,hash:window.location.hash.substr(1)},subscriptions:e=>[[$,X.pop]],view:e=>{let t=J[e.url]?e.url:"/404/",n=J[t],i=e.pages&&e.pages[t];return i&&Object.keys(i).forEach(t=>{e[t]=i[t]}),e.url=t,(({page:e,state:t},n)=>j({id:"Magic",class:t.pageClass},L({class:{Wrapper:!0}},[((e={},t=[])=>{let{logo:n,menu:i,logotext:a,hash:s,url:r}=e;if(n||i||a)return A({class:"Header"},[P({to:"/",class:"Logo"},[q({viewBox:"0 0 512 444"},[E({d:"M512 444L256 0 0 444z",fill:"#663695"}),M({cx:"256",cy:"294",r:"130",fill:"#fff"}),M({cx:"256",cy:"281",r:"40",fill:"#663695"}),E({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),E({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])]),a&&D(a),i&&((e={})=>{let{collapse:t=!0,menu:n,hash:i}=e,{class:a="",url:s}=e;return a.includes("Menu")||(a=`Menu ${a}`.trim()),i&&!s.endsWith(i)&&(s+=`#${i}`),F({className:a},N(n.map(e=>_({...e,url:s,collapse:t}))))})({url:r,hash:s,menu:i}),t])})(t),L({class:"Page",id:"page"},e(t)),((e,t=[])=>k({class:"Footer"},[L({class:"Container"},[L({class:"Credits"},["made with a few bits of ",P({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")]),t])]))(0),n])))({page:n,state:e},[((e={})=>q({class:"LightSwitch icon",onclick:X.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[E({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),E({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),E({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))(e),(({nospy:e={},cookies:t=[]})=>{let{show:n,title:i="Privacy Notice",content:a="This app neither saves, collects, nor shares any data about you.",buttonText:s="Awesome!"}=e;return n?L({class:"NoSpy"},[L({class:"Background",onclick:X.nospy.toggle}),L({class:"Container"},[i&&C(i),a&&D(a),I({onclick:X.nospy.toggle,value:s,type:"button"})])]):L({class:"NoSpy"},q({class:"icon",onclick:X.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[V([E({d:`
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
`}),M({cx:"192",cy:"128",r:"32"}),M({cx:"128",cy:"256",r:"32"}),M({cx:"288",cy:"384",r:"32"}),M({cx:"272",cy:"272",r:"16"}),M({cx:"400",cy:"336",r:"16"}),M({cx:"176",cy:"368",r:"16"})])]))})(e)])},node:document.getElementById("Magic")})};__MAGIC__();