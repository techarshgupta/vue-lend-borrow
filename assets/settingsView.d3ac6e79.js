import{m as v,q as r,o as l,c as o,a as c,w as _,d as f,f as e,z as i,e as k}from"./index.8048f4fa.js";const p=e("h2",{class:"text-gray-900 text-lg mb-5 font-medium title-font dark:text-gray-200"}," Settings ",-1),y={class:"flex items-center gap-5"},x=e("div",{class:"text-lg dark:text-gray-400"},"Select Theme:",-1),w={id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none ring-4 ring-gray-200 dark:ring-gray-600 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"},z=e("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},null,-1),S=[z],b=e("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"},null,-1),C=[b],E={name:"settingsView",setup(I){const d=v(),t=r("light"),a=r({label:"USD",icon:"$"}),m=[{label:"INR",icon:"\u20B9"},{label:"USD",icon:"$"}],g=()=>{localStorage.getItem("color-theme")?localStorage.getItem("color-theme")==="light"?(localStorage.setItem("color-theme","dark"),document.documentElement.classList.add("dark"),t.value="dark"):(localStorage.setItem("color-theme","light"),document.documentElement.classList.remove("dark"),t.value="light"):document.documentElement.classList.contains("dark")?(localStorage.setItem("color-theme","light"),document.documentElement.classList.remove("dark"),t.value="light"):(localStorage.setItem("color-theme","dark"),document.documentElement.classList.add("dark"),t.value="dark")},u=s=>{a.value=s,d.setCurrency(a.value)};return(s,n)=>(l(),o("div",null,[p,c(f,{label:"Currency",help:"Please select currency"},{default:_(()=>[c(k,{modelValue:a.value,"onUpdate:modelValue":[n[0]||(n[0]=h=>a.value=h),u],options:m,name:"currency",autocomplete:"currency",h:"min-content"},null,8,["modelValue"])]),_:1}),e("div",y,[x,e("div",{onClick:g,class:"mr-4"},[e("button",w,[(l(),o("svg",{id:"theme-toggle-dark-icon",class:i(["w-5 h-5",t.value==="light"?"hidden":""]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},S,2)),(l(),o("svg",{id:"theme-toggle-light-icon",class:i(["w-5 h-5",t.value!=="light"?"hidden":""]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},C,2))])])])]))}};export{E as default};
