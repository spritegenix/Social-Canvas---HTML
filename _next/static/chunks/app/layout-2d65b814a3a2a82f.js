(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{8297:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,3704,23)),Promise.resolve().then(n.t.bind(n,4917,23)),Promise.resolve().then(n.t.bind(n,5455,23)),Promise.resolve().then(n.t.bind(n,347,23))},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return b}});let r=n(306),l=n(9955),a=n(5155),i=r._(n(7650)),o=l._(n(2115)),s=n(1147),u=n(2815),d=n(8571),c=new Map,f=new Set,p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},_=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:a,children:i="",strategy:o="afterInteractive",onError:s,stylesheets:d}=e,_=n||t;if(_&&f.has(_))return;if(c.has(t)){f.add(_),c.get(t).then(r,s);return}let y=()=>{l&&l(),f.add(_)},b=document.createElement("script"),m=new Promise((e,t)=>{b.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),b.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});a?(b.innerHTML=a.__html||"",y()):i?(b.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",y()):t&&(b.src=t,c.set(t,m)),(0,u.setAttributesFromProps)(b,e),"worker"===o&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",o),d&&p(d),document.body.appendChild(b)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>_(e))}):_(e)}function b(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function m(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:u="afterInteractive",onError:c,stylesheets:p,...y}=e,{updateScripts:b,scripts:m,getIsSsr:h,appDir:g,nonce:v}=(0,o.useContext)(s.HeadManagerContext),O=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||n;O.current||(l&&e&&f.has(e)&&l(),O.current=!0)},[l,t,n]);let I=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!I.current&&("afterInteractive"===u?_(e):"lazyOnload"===u&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>_(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>_(e))})),I.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(b?(m[u]=(m[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:c,...y}]),b(m)):h&&h()?f.add(t||n):h&&!h()&&_(e)),g){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(i.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v,crossOrigin:y.crossOrigin}:{as:"script",nonce:v,crossOrigin:y.crossOrigin}),(0,a.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===u&&n&&i.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v,crossOrigin:y.crossOrigin}:{as:"script",nonce:v,crossOrigin:y.crossOrigin})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let h=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return a}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function l(e){return["async","defer","noModule"].includes(e)}function a(e,t){for(let[a,i]of Object.entries(t)){if(!t.hasOwnProperty(a)||r.includes(a)||void 0===i)continue;let o=n[a]||a.toLowerCase();"SCRIPT"===e.tagName&&l(o)?e[o]=!!i:e.setAttribute(o,String(i)),(!1===i||"SCRIPT"===e.tagName&&l(o)&&(!i||"false"===i))&&(e.setAttribute(o,""),e.removeAttribute(o))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},347:()=>{},4917:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},5455:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}}},e=>{var t=t=>e(e.s=t);e.O(0,[854,441,517,358],()=>t(8297)),_N_E=e.O()}]);