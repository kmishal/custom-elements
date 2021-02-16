!function(){"use strict";var e=Promise,t=(e,t)=>{const n=e=>{for(let t=0,{length:n}=e;t<n;t++)r(e[t])},r=({target:e,attributeName:t,oldValue:n})=>{e.attributeChangedCallback(t,n,e.getAttribute(t))};return(l,o)=>{const{observedAttributes:s}=l.constructor;return s&&e(o).then((()=>{new t(n).observe(l,{attributes:!0,attributeOldValue:!0,attributeFilter:s});for(let e=0,{length:t}=s;e<t;e++)l.hasAttribute(s[e])&&r({target:l,attributeName:s[e],oldValue:null})})),l}};const{document:n,MutationObserver:r,Set:l,WeakMap:o}=self,s=e=>"querySelectorAll"in e,{filter:c}=[];var a=e=>{const t=new o,a=t=>{const{query:n}=e;if(n.length)for(let e=0,{length:r}=t;e<r;e++)u(c.call(t[e].addedNodes,s),!0,n),u(c.call(t[e].removedNodes,s),!1,n)},u=(n,r,o,s=new l)=>{for(let c,a,f=0,{length:d}=n;f<d;f++)if(!s.has(a=n[f])){if(s.add(a),r)for(let n,s=i(a),u=0,{length:f}=o;u<f;u++)s.call(a,n=o[u])&&(t.has(a)||t.set(a,new l),c=t.get(a),c.has(n)||(c.add(n),e.handle(a,r,n)));else t.has(a)&&(c=t.get(a),t.delete(a),c.forEach((t=>{e.handle(a,r,t)})));u(h(a),r,o,s)}},i=e=>e.matches||e.webkitMatchesSelector||e.msMatchesSelector,f=(t,n=!0)=>{u(t,n,e.query)},h=e=>p.length?e.querySelectorAll(p):p,d=new r(a),g=e.root||n,{query:p}=e;return d.observe(g,{childList:!0,subtree:!0}),f(h(g)),{drop:e=>{for(let n=0,{length:r}=e;n<r;n++)t.delete(e[n])},flush:()=>{a(d.takeRecords())},observer:d,parse:f}};const{document:u,Map:i,MutationObserver:f,Object:h,Set:d,WeakMap:g,Element:p,HTMLElement:y,Node:w,Error:m,TypeError:b,Reflect:E}=self,v=self.Promise||e,{defineProperty:M,keys:S,getOwnPropertyNames:q,setPrototypeOf:O}=h;let A=!self.customElements;const C=e=>{const t=S(e),n=[],{length:r}=t;for(let l=0;l<r;l++)n[l]=e[t[l]],delete e[t[l]];return()=>{for(let l=0;l<r;l++)e[t[l]]=n[l]}};if(A){const{createElement:n}=u,r=new i,l=new i,o=new i,s=new i,c=[],h=(e,t,n)=>{const r=o.get(n);if(t&&!r.isPrototypeOf(e)){const t=C(e);g=O(e,r);try{new r.constructor}finally{g=null,t()}}const l=(t?"":"dis")+"connectedCallback";l in r&&e[l]()},{parse:d}=a({query:c,handle:h});let g=null;const p=t=>{if(!l.has(t)){let n,r=new e((e=>{n=e}));l.set(t,{$:r,_:n})}return l.get(t).$},E=t(p,f);function N(){const{constructor:e}=this;if(!r.has(e))throw new b("Illegal constructor");const t=r.get(e);if(g)return E(g,t);const l=n.call(u,t);return E(O(l,e.prototype),t)}M(self,"customElements",{configurable:!0,value:{define:(e,t)=>{if(s.has(e))throw new m(`the name "${e}" has already been used with this registry`);r.set(t,e),o.set(e,t.prototype),s.set(e,t),c.push(e),p(e).then((()=>{d(u.querySelectorAll(e))})),l.get(e)._(t)},get:e=>s.get(e),whenDefined:p}}),M(N.prototype=y.prototype,"constructor",{value:N}),M(self,"HTMLElement",{configurable:!0,value:N}),M(u,"createElement",{configurable:!0,value(e,t){const r=t&&t.is,l=r?s.get(r):s.get(e);return l?new l:n.call(u,e)}}),"isConnected"in w.prototype||M(w.prototype,"isConnected",{configurable:!0,get(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{function T(){return self.Reflect.construct(HTMLLIElement,[],T)}T.prototype=HTMLLIElement.prototype;const e="extends-li";self.customElements.define("extends-li",T,{extends:"li"}),A=u.createElement("li",{is:e}).outerHTML.indexOf(e)<0;const{get:t,whenDefined:n}=self.customElements;M(self.customElements,"whenDefined",{configurable:!0,value(e){return n.call(this,e).then((n=>n||t.call(this,e)))}})}catch(e){A=!A}if(A){const e=self.customElements,{attachShadow:n}=p.prototype,{createElement:r}=u,{define:l,get:o}=e,{construct:s}=E||{construct(e){return e.call(this)}},c=new g,h=new d,y=new i,w=new i,S=new i,A=new i,N=[],T=[],L=t=>A.get(t)||o.call(e,t),P=(e,t,n)=>{const r=S.get(n);if(t&&!r.isPrototypeOf(e)){const t=C(e);_=O(e,r);try{new r.constructor}finally{_=null,t()}}const l=(t?"":"dis")+"connectedCallback";l in r&&e[l]()},{parse:k}=a({query:T,handle:P}),{parse:$}=a({query:N,handle(e,t){c.has(e)&&(t?h.add(e):h.delete(e),T.length&&D.call(T,e))}}),I=e=>{if(!w.has(e)){let t,n=new v((e=>{t=e}));w.set(e,{$:n,_:t})}return w.get(e).$},H=t(I,f);let _=null;function D(e){const{parse:t,root:n}=c.get(e);t(n.querySelectorAll(this),e.isConnected)}q(self).filter((e=>/^HTML/.test(e))).forEach((e=>{const t=self[e];function n(){const{constructor:e}=this;if(!y.has(e))throw new b("Illegal constructor");const{is:n,tag:l}=y.get(e);if(n){if(_)return H(_,n);const t=r.call(u,l);return t.setAttribute("is",n),H(O(t,e.prototype),n)}return s.call(this,t,[],e)}O(n,t),M(n.prototype=t.prototype,"constructor",{value:n}),M(self,e,{value:n})})),M(u,"createElement",{configurable:!0,value(e,t){const n=t&&t.is;if(n){const t=A.get(n);if(t&&y.get(t).tag===e)return new t}const l=r.call(u,e);return n&&l.setAttribute("is",n),l}}),n&&M(p.prototype,"attachShadow",{configurable:!0,value(){const e=n.apply(this,arguments),{parse:t}=a({query:T,root:e,handle:P});return c.set(this,{root:e,parse:t}),e}}),M(e,"get",{configurable:!0,value:L}),M(e,"whenDefined",{configurable:!0,value:I}),M(e,"define",{configurable:!0,value(t,n,r){if(L(t))throw new m(`'${t}' has already been defined as a custom element`);let o;const s=r&&r.extends;y.set(n,s?{is:t,tag:s}:{is:"",tag:t}),s?(o=`${s}[is="${t}"]`,S.set(o,n.prototype),A.set(t,n),T.push(o)):(l.apply(e,arguments),N.push(o=t)),I(t).then((()=>{s?(k(u.querySelectorAll(o)),h.forEach(D,[o])):$(u.querySelectorAll(o))})),w.get(t)._(n)}})}}();
