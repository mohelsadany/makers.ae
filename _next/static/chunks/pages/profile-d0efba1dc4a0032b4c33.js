_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"+wdE":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return r("btdU")}])},UI0J:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){function t(e){var r,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,i=a(t).call(this,e),r=!i||"object"!==n(i)&&"function"!==typeof i?c(o):i,s(c(c(r)),"image",void 0),s(c(c(r)),"loadImage",(function(e,t){r.image&&(r.image.onload=null,r.image.onerror=null);var n=new Image;r.image=n,n.onload=r.onLoad,n.onerror=r.onError,n.src=e,t&&(n.srcset=t.srcSet,n.sizes=t.sizes)})),s(c(c(r)),"onLoad",(function(){r.props.delay?r.setImageWithDelay():r.setImage()})),s(c(c(r)),"setImageWithDelay",(function(){setTimeout((function(){r.setImage()}),r.props.delay)})),s(c(c(r)),"setImage",(function(){r.setState({image:r.image.src,loading:!1,srcSetData:{srcSet:r.image.srcset||"",sizes:r.image.sizes||""}})})),s(c(c(r)),"onError",(function(e){var t=r.props.onError;t&&t(e)})),r.state={image:e.placeholder,loading:!0,srcSetData:{srcSet:"",sizes:""}},r}var r,l,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,e),r=t,(l=[{key:"componentDidMount",value:function(){var e=this.props,t=e.src,r=e.srcSetData;this.loadImage(t,r)}},{key:"componentDidUpdate",value:function(e){var t=this,r=this.props,n=r.src,o=r.placeholder,a=r.srcSetData;n!==e.src&&this.setState({image:o,loading:!0},(function(){t.loadImage(n,a)}))}},{key:"componentWillUnmount",value:function(){this.image&&(this.image.onload=null,this.image.onerror=null)}},{key:"render",value:function(){var e=this.state,t=e.image,r=e.loading,n=e.srcSetData,o=this.props.children;if(!o||"function"!==typeof o)throw new Error("ProgressiveImage requires a function as its only child");return o(t,r,n)}}])&&o(r.prototype,l),u&&o(r,u),t}(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("q1tI")).Component);t.default=l},bQFp:function(e,t,r){"use strict";r.d(t,"b",(function(){return u}));var n=r("pVnL"),o=r.n(n),a=r("8OQS"),i=r.n(a),c=r("qKvR"),s=r("q1tI"),l=r("BMxC");function u(e){var t=e.src,r=e.onLoad,n=e.onError,o=e.enabled,a=void 0===o||o,i=Object(s.useRef)(!0),c=Object(s.useState)(!1),l=c[0],u=c[1];return Object(s.useEffect)((function(){if(t&&a){var e=new window.Image;e.src=t,e.onload=function(e){i.current&&(u(!0),r&&r(e))},e.onerror=function(e){i.current&&(u(!1),n&&n(e))}}}),[t,r,n,a]),Object(s.useEffect)((function(){return function(){i.current=!1}}),[]),l}var d=Object(s.forwardRef)((function(e,t){var r=e.htmlWidth,n=e.htmlHeight,a=e.alt,s=i()(e,["htmlWidth","htmlHeight","alt"]);return Object(c.d)("img",o()({width:r,height:n,ref:t,alt:a},s))})),f=Object(s.forwardRef)((function(e,t){var r=e.src,n=e.fallbackSrc,a=e.onError,s=e.onLoad,f=e.ignoreFallback,p=i()(e,["src","fallbackSrc","onError","onLoad","ignoreFallback"]),b=u({src:r,onLoad:s,onError:a,enabled:!Boolean(f)}),h=f?{src:r,onLoad:s,onError:a}:{src:b?r:n};return Object(c.d)(l.a,o()({as:d,ref:t},h,p))}));f.displayName="Image",t.a=f},btdU:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var n=r("nKUr"),o=r("dt/t"),a=r("9ixD"),i=r("mIvz"),c=r("BMxC"),s=r("pboS"),l=r("hoFu"),u=r("qWyU"),d=r("sK1y"),f=r("wK1f"),p=r("284q"),b=r("eDnY");function h(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f.a,{}),Object(n.jsx)(s.a,{color:"gray.400",children:"\u2190 Back to Home"}),Object(n.jsxs)(l.a,{gridTemplateColumns:["1fr","1fr","200px 1fr","200px 1fr"],mt:"40px",children:[Object(n.jsx)(b.a,{width:"200px",height:"auto",skeletonHeight:"200px",src:"/avatars/kamran.jpeg",rounded:"10px"}),Object(n.jsxs)(c.a,{ml:[0,0,"30px","30px"],children:[Object(n.jsxs)(c.a,{mb:"30px",children:[Object(n.jsx)(u.a,{color:"gray.100",fontSize:"45px",lineHeight:"45px",mb:"12px",children:"Kamran Ahmed"}),Object(n.jsx)(d.a,{color:"gray.400",fontSize:"17px",children:"Engineering Manager at Tradeling"})]}),Object(n.jsxs)(c.a,{mb:"30px",children:[Object(n.jsx)(u.a,{fontSize:"34px",color:"white",mb:"10px",children:"Bio"}),Object(n.jsx)(d.a,{color:"gray.400",mb:"20px",children:"Kamran is currently working at tradeling which is a DAFZA funded B2B e-commerce platform in the MENA region where he was one of the early hires. He has been a part of several startups in the region. Before joining tradeling, he worked at tajawal for 4 years where he was one of the pre-launch early hires and saw the company grow from 20 people to more than a 1000 people."}),Object(n.jsxs)(d.a,{color:"gray.400",children:["He is the creator and maintainer of several opensource projects including ",Object(n.jsx)(s.a,{fontWeight:500,color:"yellow.400",children:"developer-roadmap"})," which is tenth most starred project on GitHub. He has also created and contributed to ",Object(n.jsx)(s.a,{color:"yellow.400",fontWeight:500,children:"several famous OpenSource projects"})," used by millions of developers."]})]}),Object(n.jsx)(u.a,{fontSize:"30px",color:"white",mb:"10px",children:"Social Media"})]})]}),Object(n.jsx)(p.a,{})]})}function m(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(a.b,{title:"Join Makers.ae \u2014 Community of makers in UAE",description:"Makers.ae aims to build a community of developers in UAE.",titleTemplate:i.a.seo.titleTemplate}),Object(n.jsx)(c.a,{maxW:"890px",mx:"auto",children:Object(n.jsx)(h,{})})]})}},eDnY:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var n=r("rePB"),o=r("nKUr"),a=r("pVnL"),i=r.n(a),c=r("8OQS"),s=r.n(c),l=r("cOp2"),u=r.n(l),d=r("q1tI"),f=r("CjxU"),p=r("mf32"),b=r("qKvR"),h=r("BMxC");function m(){var e=u()(["\n  animation: "," ","s;\n"]);return m=function(){return e},e}function j(){var e=u()(["\nfrom { opacity: 0; }\nto   { opacity: 1; }\n"]);return j=function(){return e},e}function g(){var e=u()(["\n  border-color: "," !important;\n  box-shadow: none !important;\n  opacity: 0.7;\n  // do not !important this for Firefox support\n  background: ",";\n\n  // Prevent background color from extending to the border and overlappping\n  background-clip: padding-box !important;\n  cursor: default;\n\n  // Transparent text will occupy space but be invisible to the user\n  color: transparent !important;\n  animation: ","s linear infinite alternate\n    ",";\n  pointer-events: none;\n  user-select: none;\n\n  // Make pseudo-elements (CSS icons) and children invisible\n  &::before,\n  &::after,\n  * {\n    visibility: hidden !important;\n  }\n"]);return g=function(){return e},e}function O(){var e=u()(["\nfrom {\n  border-color: ",";\n  background: ",";\n}\n\nto {\n  border-color: ",";\n  background: ",";\n}\n"]);return O=function(){return e},e}var y=function(e){var t=e.colorStart,r=e.colorEnd,n=e.speed;return Object(b.c)(g(),t,t,n,function(e,t){return Object(b.e)(O(),e,e,t,t)}(t,r))},v=Object(b.e)(j()),w=function(e){var t=Object(f.b)().colors,r=Object(p.a)().colorMode,n={light:t.gray[100],dark:t.gray[800]},o={light:t.gray[400],dark:t.gray[600]},a=e.colorStart,c=void 0===a?n[r]:a,l=e.colorEnd,u=void 0===l?o[r]:l,j=e.isLoaded,g=void 0!==j&&j,O=e.fadeInDuration,w=void 0===O?.4:O,x=e.speed,S=void 0===x?.8:x,k=s()(e,["colorStart","colorEnd","isLoaded","fadeInDuration","speed"]),E=Object(d.useMemo)((function(){return e=w,Object(b.c)(m(),v,e);var e}),[w]),P=Object(d.useMemo)((function(){return y({colorStart:c,colorEnd:u,speed:S})}),[c,u,S]);return g?Object(b.d)(h.a,i()({css:E},k)):Object(b.d)(h.a,i()({css:P,borderRadius:"2px"},k))},x=r("bQFp"),S=r("UI0J"),k=r.n(S);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){var t=e.src,r=e.height,a=e.width,i=e.rounded,c=e.skeletonWidth,s=e.skeletonHeight;return Object(o.jsx)(k.a,{delay:500,src:t,placeholder:"/avatars/placeholder.png",children:function(t,l){return l?Object(o.jsx)(w,{rounded:i,height:s||r,width:c||a,d:"block"}):Object(o.jsx)(x.a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}}},[["+wdE",1,2,0,3,4]]]);