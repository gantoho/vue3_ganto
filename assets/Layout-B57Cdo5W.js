import{i as le,r as T,u as J,t as ue,a as Y,c as de,o as X,n as U,g as fe,b as pe,d as Z,w as K,e as M,s as he,f as me,h as B,j as H,k as _,l as g,F as G,m as _e,p as E,q as N,v as ye,x as z,y as ge,_ as I,z as ve,A as we,B as D,C as P,D as ee,K as be,E as ke,S as Se}from"./index-DJ9p5o2o.js";function te(e){return fe()?(pe(e),!0):!1}function L(e){return typeof e=="function"?e():J(e)}const Ce=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const xe=Object.prototype.toString,Ee=e=>xe.call(e)==="[object Object]",ne=()=>{};function De(e,t){function n(...s){return new Promise((o,i)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(o).catch(i)})}return n}const oe=e=>e();function Ae(e=oe){const t=T(!0);function n(){t.value=!1}function s(){t.value=!0}const o=(...i)=>{t.value&&e(...i)};return{isActive:Y(t),pause:n,resume:s,eventFilter:o}}function Me(e){return e||Z()}function Le(...e){if(e.length!==1)return ue(...e);const t=e[0];return typeof t=="function"?Y(de(()=>({get:t,set:ne}))):T(t)}function Oe(e,t,n={}){const{eventFilter:s=oe,...o}=n;return K(e,De(s,t),o)}function Te(e,t,n={}){const{eventFilter:s,...o}=n,{eventFilter:i,pause:c,resume:u,isActive:l}=Ae(s);return{stop:Oe(e,t,{...o,eventFilter:i}),pause:c,resume:u,isActive:l}}function re(e,t=!0,n){Me()?X(e,n):t?e():U(e)}function Fe(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,o=le(e),i=T(e);function c(u){if(arguments.length)return i.value=u,i.value;{const l=L(n);return i.value=i.value===l?L(s):l,i.value}}return o?c:[i,c]}function se(e){var t;const n=L(e);return(t=n==null?void 0:n.$el)!=null?t:n}const O=Ce?window:void 0;function q(...e){let t,n,s,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,o]=e,t=O):[t,n,s,o]=e,!t)return ne;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],c=()=>{i.forEach(a=>a()),i.length=0},u=(a,f,v,p)=>(a.addEventListener(f,v,p),()=>a.removeEventListener(f,v,p)),l=K(()=>[se(t),L(o)],([a,f])=>{if(c(),!a)return;const v=Ee(f)?{...f}:f;i.push(...n.flatMap(p=>s.map(w=>u(a,p,w,v))))},{immediate:!0,flush:"post"}),d=()=>{l(),c()};return te(d),d}function Ne(){const e=T(!1),t=Z();return t&&X(()=>{e.value=!0},t),e}function Ve(e){const t=Ne();return M(()=>(t.value,!!e()))}function $e(e,t={}){const{window:n=O}=t,s=Ve(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const i=T(!1),c=d=>{i.value=d.matches},u=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",c):o.removeListener(c))},l=me(()=>{s.value&&(u(),o=n.matchMedia(L(e)),"addEventListener"in o?o.addEventListener("change",c):o.addListener(c),i.value=o.matches)});return te(()=>{l(),u(),o=void 0}),i}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__",Re=je();function je(){return W in j||(j[W]=j[W]||{}),j[W]}function ae(e,t){return Re[e]||t}function We(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ze={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Q="vueuse-storage";function Be(e,t,n,s={}){var o;const{flush:i="pre",deep:c=!0,listenToStorageChanges:u=!0,writeDefaults:l=!0,mergeDefaults:d=!1,shallow:a,window:f=O,eventFilter:v,onError:p=r=>{console.error(r)},initOnMounted:w}=s,y=(a?he:T)(typeof t=="function"?t():t);if(!n)try{n=ae("getDefaultStorage",()=>{var r;return(r=O)==null?void 0:r.localStorage})()}catch(r){p(r)}if(!n)return y;const k=L(t),F=We(k),S=(o=s.serializer)!=null?o:ze[F],{pause:V,resume:h}=Te(y,()=>$(y.value),{flush:i,deep:c,eventFilter:v});f&&u&&re(()=>{q(f,"storage",b),q(f,Q,R),w&&b()}),w||b();function C(r,m){f&&f.dispatchEvent(new CustomEvent(Q,{detail:{key:e,oldValue:r,newValue:m,storageArea:n}}))}function $(r){try{const m=n.getItem(e);if(r==null)C(m,null),n.removeItem(e);else{const x=S.write(r);m!==x&&(n.setItem(e,x),C(m,x))}}catch(m){p(m)}}function A(r){const m=r?r.newValue:n.getItem(e);if(m==null)return l&&k!=null&&n.setItem(e,S.write(k)),k;if(!r&&d){const x=S.read(m);return typeof d=="function"?d(x,k):F==="object"&&!Array.isArray(x)?{...k,...x}:x}else return typeof m!="string"?m:S.read(m)}function b(r){if(!(r&&r.storageArea!==n)){if(r&&r.key==null){y.value=k;return}if(!(r&&r.key!==e)){V();try{(r==null?void 0:r.newValue)!==S.write(y.value)&&(y.value=A(r))}catch(m){p(m)}finally{r?U(h):h()}}}}function R(r){b(r.detail)}return y}function ie(e){return $e("(prefers-color-scheme: dark)",e)}function Ie(e={}){const{selector:t="html",attribute:n="class",initialValue:s="auto",window:o=O,storage:i,storageKey:c="vueuse-color-scheme",listenToStorageChanges:u=!0,storageRef:l,emitAuto:d,disableTransition:a=!0}=e,f={auto:"",light:"light",dark:"dark",...e.modes||{}},v=ie({window:o}),p=M(()=>v.value?"dark":"light"),w=l||(c==null?Le(s):Be(c,s,i,{window:o,listenToStorageChanges:u})),y=M(()=>w.value==="auto"?p.value:w.value),k=ae("updateHTMLAttrs",(h,C,$)=>{const A=typeof h=="string"?o==null?void 0:o.document.querySelector(h):se(h);if(!A)return;let b;if(a&&(b=o.document.createElement("style"),b.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),o.document.head.appendChild(b)),C==="class"){const R=$.split(/\s/g);Object.values(f).flatMap(r=>(r||"").split(/\s/g)).filter(Boolean).forEach(r=>{R.includes(r)?A.classList.add(r):A.classList.remove(r)})}else A.setAttribute(C,$);a&&(o.getComputedStyle(b).opacity,document.head.removeChild(b))});function F(h){var C;k(t,n,(C=f[h])!=null?C:h)}function S(h){e.onChanged?e.onChanged(h,F):F(h)}K(y,S,{flush:"post",immediate:!0}),re(()=>S(y.value));const V=M({get(){return d?w.value:y.value},set(h){w.value=h}});try{return Object.assign(V,{store:w,system:p,state:y})}catch{return V}}function Pe(e={}){const{valueDark:t="dark",valueLight:n="",window:s=O}=e,o=Ie({...e,onChanged:(u,l)=>{var d;e.onChanged?(d=e.onChanged)==null||d.call(e,u==="dark",l,u):l(u)},modes:{dark:t,light:n}}),i=M(()=>o.system?o.system.value:ie({window:s}).value?"dark":"light");return M({get(){return o.value==="dark"},set(u){const l=u?"dark":"light";i.value===l?o.value="auto":o.value=l}})}const He={class:"tabbar flex"},Je=["onClick"],Ke=["onClick"],Ge={key:0,class:"cursor-pointer"},qe=["onClick"],Qe=B({__name:"Tabbar",setup(e){const t=Pe(),n=Fe(t),s=[{type:"router",name:"首页",to:"/home"},{type:"router",name:"书签",to:"/bookmarks"},{type:"router",name:"开发",to:"/dev"},{type:"link",name:"博客",link:"https://www.cnblogs.com/ganto"},{type:"link",name:"开往",link:"https://www.travellings.cn/go.html"},{type:"btn",name:"Sunny",event:n}],o=c=>{window.open(c)},i=(c,u)=>{const l=u.clientX,d=u.clientY,a=Math.hypot(Math.max(l,innerWidth-l),Math.max(d,innerHeight-d));document.documentElement.style.setProperty("--x",l+"px"),document.documentElement.style.setProperty("--y",d+"px"),document.documentElement.style.setProperty("--r",a+"px"),document.startViewTransition?document.startViewTransition(()=>{c()}):c()};return(c,u)=>{const l=H("el-icon"),d=H("RouterLink");return _(),g("div",He,[(_(),g(G,null,_e(s,a=>E(d,{custom:"",to:a.to?a.to:"",key:a.name+a.to},{default:N(({isActive:f,navigate:v})=>[a.type==="router"?(_(),g("span",{key:0,class:ye(["cursor-pointer font-light hover:font-black",{active:f}]),onClick:v},z(a.name),11,Je)):a.type==="link"?(_(),g("span",{key:1,class:"cursor-alias font-light hover:font-black",onClick:p=>o(a.link?a.link:"")},z(a.name),9,Ke)):(_(),g(G,{key:2},[a.name==="Sunny"?(_(),g("span",Ge,[E(l,{size:"25"},{default:N(()=>[E(J(ge),{onClick:p=>i(a.event?a.event:()=>{},p)},null,8,["onClick"])]),_:2},1024)])):(_(),g("span",{key:1,class:"cursor-alias font-light hover:font-black",onClick:p=>i(a.event?a.event:()=>{},p)},z(a.name),9,qe))],64))]),_:2},1032,["to"])),64))])}}}),Ye=I(Qe,[["__scopeId","data-v-b054099e"]]),ce=e=>(ve("data-v-9f279cd3"),e=e(),we(),e),Xe={class:"header pt-32 bg-cover"},Ue=ce(()=>D("div",{id:"author"},[D("span",{class:"author text-5xl font-semibold"},"干徒"),D("i",{class:"shine"})],-1)),Ze=ce(()=>D("div",{class:"motto text-sm font-light mt-2 mb-2"},[D("p",null,"这很酷")],-1)),et=B({__name:"Header",setup(e){return(t,n)=>(_(),g("header",Xe,[Ue,Ze,E(Ye)]))}}),tt=I(et,[["__scopeId","data-v-9f279cd3"]]),nt={},ot={class:"main py-5"};function rt(e,t){const n=H("RouterView");return _(),g("main",ot,[(_(),P(Se,null,{fallback:N(()=>[ee(" 正在加载... ")]),default:N(()=>[E(n,null,{default:N(({Component:s})=>[(_(),P(be,{include:"Dev"},[(_(),P(ke(s)))],1024))]),_:1})]),_:1}))])}const st=I(nt,[["render",rt]]),at={class:"footer mb-5 text-gray-500"},it=D("i",{class:"font-black not-italic text-yellow-700"}," © ",-1),ct=D("span",null,"干徒 / Ganto",-1),lt=B({__name:"Footer",setup(e){const n=new Date().getFullYear();return(s,o)=>(_(),g("footer",at,[ee(" 2019-"+z(J(n)),1),it,ct]))}}),ut={class:"layout w-full m-auto min-h-screen"},dt=B({__name:"Layout",setup(e){return(t,n)=>(_(),g("div",ut,[E(tt),E(st),E(lt)]))}}),pt=I(dt,[["__scopeId","data-v-3d22da54"]]);export{pt as default};