import{d as i,r as m,o as t,c as o,F as y,a as x,b as c,w as l,n as w,t as u,_ as p,p as $,e as g,f as a,g as d,h,K as C,i as S,S as I}from"./index-BSfyuMA6.js";const D={class:"tabbar flex items-center"},L=["onClick"],R=["onClick"],V=i({__name:"Tabbar",setup(e){const r=[{name:"首页",to:"/home",type:"router"},{name:"书签",to:"/bookmarks",type:"router"},{name:"博客",to:"https://www.cnblogs.com/ganto",type:"link"},{name:"开往",to:"https://www.travellings.cn/go.html",type:"link"},{name:"Dev",to:"/dev",type:"router"}],n=_=>{window.open(_)};return(_,Q)=>{const b=m("RouterLink");return t(),o("div",D,[(t(),o(y,null,x(r,s=>c(b,{custom:"",to:s.to,key:s.name+s.to},{default:l(({isActive:k,navigate:v})=>[s.type==="router"?(t(),o("span",{key:0,class:w(["cursor-pointer font-light hover:font-black",{active:k}]),onClick:v},u(s.name),11,L)):(t(),o("span",{key:1,class:"cursor-alias font-light hover:font-black",onClick:U=>n(s.to)},u(s.name),9,R))]),_:2},1032,["to"])),64))])}}}),B=p(V,[["__scopeId","data-v-d3dbfd08"]]),f=e=>($("data-v-b09bc31e"),e=e(),g(),e),E={class:"header pt-32 bg-cover"},N=f(()=>a("div",{id:"author"},[a("span",{class:"author text-5xl font-black"},"干徒"),a("i",{class:"shine"})],-1)),T=f(()=>a("div",{class:"text-sm font-light mt-2 mb-2"},[a("p",null,"没有设计就是最好的设计")],-1)),F=i({__name:"Header",setup(e){return(r,n)=>(t(),o("header",E,[N,T,c(B)]))}}),H=p(F,[["__scopeId","data-v-b09bc31e"]]),K={},z={class:"main py-5"};function A(e,r){const n=m("RouterView");return t(),o("main",z,[(t(),d(I,null,{fallback:l(()=>[h(" 正在加载... ")]),default:l(()=>[c(n,null,{default:l(({Component:_})=>[(t(),d(C,{include:"Dev"},[(t(),d(S(_)))],1024))]),_:1})]),_:1}))])}const G=p(K,[["render",A]]),M={class:"footer mb-5 text-gray-500"},P=a("i",{class:"font-black not-italic"}," © ",-1),j=a("span",null,"干徒 / Ganto",-1),q=i({__name:"Footer",setup(e){return(r,n)=>(t(),o("footer",M,[h(" 2019-PRESENT"),P,j]))}}),J={class:"layout w-full m-auto min-h-screen"},O=i({__name:"Layout",setup(e){return(r,n)=>(t(),o("div",J,[c(H),c(G),c(q)]))}}),X=p(O,[["__scopeId","data-v-3d22da54"]]);export{X as default};
