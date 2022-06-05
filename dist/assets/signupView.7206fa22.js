import{r as p,u as c,o as f,c as g,a as e,w as l,b as _,_ as w,d as r,e as n,f as t,g as y}from"./index.251ec9bc.js";const h={class:"px-0 md:px-6 py-6 flex h-screen items-center justify-center bg-gradient-to-tr from-gray-200 to-teal-500 dark:text-white dark:from-gray-600 dark:to-teal-800"},b=t("div",{class:"text-xl my-3 font-semibold uppercase"},"Introduce Yourself",-1),x={class:"flex items-center"},V=t("div",{class:"bg-white px-3 dark:bg-gray-800"},"OR",-1),v=t("img",{src:"https://developers-dot-devsite-v2-prod.appspot.com/identity/sign-in/g-normal.png",alt:"G"},null,-1),k=t("span",{class:"text-gray-900"},"Sign up with Google",-1),j=[v,k],S={name:"signupView",setup(B){const o=p({name:"john.doe",email:"john.doe@email.com",pass:"highly-secure-password-fYjUw-"}),d=c(),m=()=>{confirm("Please allow permission to Lend & Borrow of your google account!")==!0&&i()},i=()=>{d.push("/dashboard")};return(u,s)=>(f(),g("div",h,[e(w,{class:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl",rounded:"rounded-lg",form:"",onSubmit:_(i,["prevent"])},{default:l(()=>[b,e(r,{label:"Hi there! My name is",help:"Please enter your name"},{default:l(()=>[e(n,{modelValue:o.name,"onUpdate:modelValue":s[0]||(s[0]=a=>o.name=a),name:"login",autocomplete:"username"},null,8,["modelValue"])]),_:1}),e(r,{label:"Here's my email address",help:"Please enter your email"},{default:l(()=>[e(n,{modelValue:o.email,"onUpdate:modelValue":s[1]||(s[1]=a=>o.email=a),type:"email",name:"login",autocomplete:"email"},null,8,["modelValue"])]),_:1}),e(r,{label:"Here's my email password",help:"Please enter your password"},{default:l(()=>[e(n,{modelValue:o.pass,"onUpdate:modelValue":s[2]||(s[2]=a=>o.pass=a),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue"])]),_:1}),t("div",x,[e(y,{type:"submit",color:"info",label:"Sign me up!",class:"w-full"}),V,t("div",{class:"flex w-full items-center justify-center bg-white rounded py-1 hover:bg-gray-50 cursor-pointer border-gray-300 border",onClick:m},j)])]),_:1},8,["onSubmit"])]))}};export{S as default};