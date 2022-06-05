import{m as u,n as h,q as v,o as l,c as o,a as c,w as _,d as f,f as e,A as i,e as p,x as k,B as y}from"./index.251ec9bc.js";const x=e("h2",{class:"text-gray-900 text-lg mb-5 font-medium title-font dark:text-gray-200"}," Settings ",-1),w={class:"flex items-center gap-5"},z=e("div",{class:"text-lg dark:text-gray-400"},"Select Theme:",-1),S={id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none ring-4 ring-gray-200 dark:ring-gray-600 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"},b=e("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},null,-1),C=[b],I=e("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"},null,-1),V=[I],M={name:"settingsView",setup(B){const s=u(),t=h("light"),a=v({get:()=>s.getCurrency,set:n=>{s.setCurrency(n)}}),d=[{label:"INR",icon:"\u20B9"},{label:"USD",icon:"$"}],m=()=>{localStorage.getItem("color-theme")?localStorage.getItem("color-theme")==="light"?(localStorage.setItem("color-theme","dark"),document.documentElement.classList.add("dark"),t.value="dark"):(localStorage.setItem("color-theme","light"),document.documentElement.classList.remove("dark"),t.value="light"):document.documentElement.classList.contains("dark")?(localStorage.setItem("color-theme","light"),document.documentElement.classList.remove("dark"),t.value="light"):(localStorage.setItem("color-theme","dark"),document.documentElement.classList.add("dark"),t.value="dark")};return(n,r)=>(l(),o("div",null,[x,c(f,{label:"Currency",help:"Please select currency"},{default:_(()=>[c(p,{modelValue:k(a),"onUpdate:modelValue":r[0]||(r[0]=g=>y(a)?a.value=g:null),options:d,name:"currency",autocomplete:"currency",h:"min-content"},null,8,["modelValue"])]),_:1}),e("div",w,[z,e("div",{onClick:m,class:"mr-4"},[e("button",S,[(l(),o("svg",{id:"theme-toggle-dark-icon",class:i(["w-5 h-5",t.value==="light"?"hidden":""]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},C,2)),(l(),o("svg",{id:"theme-toggle-light-icon",class:i(["w-5 h-5",t.value!=="light"?"hidden":""]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},V,2))])])])]))}};export{M as default};