import{q as p,r as b,m as _,u as g,o as v,c as y,f as s,x,a,w as r,d as m,e as u,g as h}from"./index.8048f4fa.js";const V=s("h2",{class:"text-gray-900 text-lg mb-1 font-medium title-font dark:text-gray-200"}," Invite User ",-1),w=s("p",{class:"leading-relaxed mb-5 text-gray-600 dark:text-gray-200"}," Invite user by filling in below following fields. ",-1),S={class:"text-red-500 leading-relaxed mb-5"},P={name:"inviteView",setup(U){const l=p(""),e=b({id:Math.random().toString(36).substr(2,5),label:"",email:""}),d=()=>!e.label&&e.label==""?(l.value="Please enter name",!1):!e.email&&e.email==""?(l.value="Please select email",!1):(l.value=null,!0),o=_(),c=g(),f=()=>{if(d()){console.log("form",e);const i={type:"invite",title:"You send an invitation",date:new Date().toLocaleDateString("en-US",{year:"numeric",month:"numeric",day:"numeric"})};o.addActivity(i),o.addUser(e),c.push({path:"/dashboard"})}};return(i,t)=>(v(),y("div",null,[V,w,s("p",S,x(l.value),1),a(m,{label:"Name *",help:"Please enter name"},{default:r(()=>[a(u,{modelValue:e.label,"onUpdate:modelValue":t[0]||(t[0]=n=>e.label=n),name:"name",autocomplete:"current-name"},null,8,["modelValue"])]),_:1}),a(m,{label:"Email *",help:"Please enter email"},{default:r(()=>[a(u,{modelValue:e.email,"onUpdate:modelValue":t[1]||(t[1]=n=>e.email=n),type:"email",name:"email",autocomplete:"current-email"},null,8,["modelValue"])]),_:1}),a(h,{type:"submit",color:"info",label:"Invite",class:"w-full",onClick:f})]))}};export{P as default};
