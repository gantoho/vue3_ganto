import{d as k,u as i,j as l,o as t,c as s,f as c,t as g,_ as d,F as m,a as b,b as p}from"./index-BSfyuMA6.js";const h=["href"],v={class:"right-2 bottom-2"},_=k({__name:"Bookmark",props:{bookmark:{}},setup(u){i(o=>({"4fedbcce":typeof o.bookmark.backgroundColor=="string"?o.bookmark.backgroundColor:`linear-gradient(${o.bookmark.backgroundColor.deg}deg, ${o.bookmark.backgroundColor.start}, ${o.bookmark.backgroundColor.end})`,"60d628dc":o.bookmark.color,"2f77a0f3":r.value+8+"px","1945ffe2":n.value+8+"px"}));const a=l(null),r=l(0),n=l(0),e=()=>{var o,f;r.value=((o=a.value)==null?void 0:o.childNodes[0].childNodes[0]).offsetWidth,n.value=((f=a.value)==null?void 0:f.childNodes[0].childNodes[0]).offsetHeight};return(o,f)=>(t(),s("div",{draggable:"true",class:"bookmark shadow-inner shadow-black/50 rounded-lg",ref_key:"bookmarkRef",ref:a,onMouseenter:e},[c("a",{draggable:"true",class:"inline-block relative w-full h-full font-black leading-none",href:o.bookmark.link,target:"ganto"},[c("span",v,g(o.bookmark.name),1)],8,h)],544))}}),C=d(_,[["__scopeId","data-v-a25aa885"]]),w={class:"bookmarks flex flex-wrap"},j=k({__name:"Bookmarks",setup(u){const a=[{name:"JS",link:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",backgroundColor:"#fcdc00",color:"#181818"},{name:"Vue",link:"https://cn.vuejs.org",backgroundColor:"#42b986",color:"#2c3845"},{name:"React",link:"https://zh-hans.reactjs.org",backgroundColor:"#61dafb",color:"#23272f"},{name:"Angular",link:"https://angular.cn",backgroundColor:"#e22d37",color:"#fff"},{name:"Svelte",link:"https://svelte.dev",backgroundColor:"#fd5b3e",color:"#ffffff"},{name:"Solid",link:"https://www.solidjs.com",backgroundColor:"#5187c4",color:"#ffffff"},{name:"TS",link:"https://www.typescriptlang.org",backgroundColor:"#3477c4",color:"#ffffff"},{name:"Vite",link:"https://vitejs.dev",backgroundColor:"#6d6df0",color:"#ffffff"},{name:"Nuxt",link:"https://nuxtjs.org",backgroundColor:"#00dc82",color:"#ffffff"},{name:"Next",link:"https://nextjs.org",backgroundColor:"#0271f4",color:"#ffffff"},{name:"Remix",link:"https://remix.run",backgroundColor:"#3287ed",color:"#ffffff"},{name:"Go",link:"https://go.dev",backgroundColor:"#52b7df",color:"#ffffff"},{name:"Rust",link:"https://www.rust-lang.org",backgroundColor:"#ffffff",color:"#000000",border:"#ffffff"},{name:"Java",link:"https://docs.oracle.com/en/java/javase",backgroundColor:"#3a75b0",color:"#ffffff"}];return(r,n)=>(t(),s("div",w,[(t(),s(m,null,b(a,e=>p(C,{bookmark:e,key:e.name+e.link},null,8,["bookmark"])),64))]))}}),N=d(j,[["__scopeId","data-v-7a65840a"]]);export{N as default};
