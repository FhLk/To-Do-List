(()=>{var e={};e.id=208,e.ids=[208],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3871:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),r(3683),r(472),r(5866);var s=r(3191),a=r(8716),n=r(7922),o=r.n(n),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["doning",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3683)),"D:\\Exam\\To-Do-List\\to-do-list\\src\\app\\doning\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,472)),"D:\\Exam\\To-Do-List\\to-do-list\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Exam\\To-Do-List\\to-do-list\\src\\app\\doning\\page.tsx"],u="/doning/page",x={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/doning/page",pathname:"/doning",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1477:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},1373:(e,t,r)=>{Promise.resolve().then(r.bind(r,3319))},7817:(e,t,r)=>{Promise.resolve().then(r.bind(r,4894))},4894:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(326);r(7577);var a=r(7774);let n=function(){return s.jsx("div",{children:s.jsx(a.Z,{status:"doing"})})}},3319:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var s=r(326),a=r(434),n=r(7577);let o=()=>{let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,s.jsxs)("div",{className:"flex justify-around",children:[s.jsx(a.default,{href:"/",children:s.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"TODO"})}),s.jsx(a.default,{href:"/doning",children:s.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"DOING"})}),s.jsx(a.default,{href:"/done",children:s.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"DONE"})}),s.jsx("div",{className:"fixed bottom-[10%] right-[20px]",children:e&&s.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:" ^ "})})]})}},7774:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var s=r(326),a=r(7577);let n="https://todo-list-api-mfchjooefq-as.a.run.app/todo-list",o=Number(0),i=Number(10),l=async(e=o,t=i)=>{try{let r=await fetch(`${n}?status=TODO&offset=${e}&limit=${t}&sortBy=createdAt&isAsc=true`);return(await r.json()).tasks}catch(e){console.error(e)}},d=async(e=o,t=i)=>{try{let r=await fetch(`${n}?status=DOING&offset=${e}&limit=${t}&sortBy=createdAt&isAsc=true`);return(await r.json()).tasks}catch(e){console.error(e)}},c=async(e=o,t=i)=>{try{let r=await fetch(`${n}?status=DONE&offset=${e}&limit=${t}&sortBy=createdAt&isAsc=true`);return(await r.json()).tasks}catch(e){console.error(e)}};var u=r(7967),x=r.n(u);let p=({tasks:e,onDeleteTask:t})=>{let[r,n]=(0,a.useState)({});(0,a.useEffect)(()=>{o()},[e]);let o=()=>{n(e.reduce((e,t)=>{let r=x()(t.createdAt).utc().format("L");return e[r]||(e[r]=[]),e[r].push(t),e},{}))},i=e=>{t(e)};return s.jsx("div",{className:"w-[700px]",children:Object.keys(r).map(e=>(0,s.jsxs)("div",{className:"",children:[s.jsx("h3",{children:e}),s.jsx("ul",{children:r[e].map(e=>s.jsx("li",{className:"my-[10px]",children:(0,s.jsxs)("div",{className:"flex justify-between",children:[s.jsx("h3",{children:s.jsx("strong",{children:e.title})}),s.jsx("button",{onClick:()=>i(e.id),className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"Delete"})]})},e.id))})]},e))})},m=({status:e})=>{let[t,r]=(0,a.useState)([]),[n,o]=(0,a.useState)(0),[i,u]=(0,a.useState)(!1),x=async e=>{let t=[];switch(u(!0),e){case"todo":t=await l();break;case"doing":t=await d();break;case"done":t=await c();break;default:t=[]}r(t),o(n+1),u(!1)},m=async()=>{u(!0),r([...t,...await l(n)]),o(n+1),u(!1)};(0,a.useEffect)(()=>{x(e)},[]),(0,a.useEffect)(()=>(window.addEventListener("scroll",h),()=>{window.removeEventListener("scroll",h)}),[t]);let h=()=>{window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(m(),console.log("Fetch more list items!"))};return(0,s.jsxs)("div",{className:"h-screen flex justify-center",children:[s.jsx(p,{tasks:t,onDeleteTask:e=>{console.log(e),r(t.filter((t,r)=>t.id!==e))}}),i&&s.jsx("div",{children:"Loading..."})]})}},3683:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var s=r(8570);let a=(0,s.createProxy)(String.raw`D:\Exam\To-Do-List\to-do-list\src\app\doning\page.tsx`),{__esModule:n,$$typeof:o}=a;a.default;let i=(0,s.createProxy)(String.raw`D:\Exam\To-Do-List\to-do-list\src\app\doning\page.tsx#default`)},472:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>u});var s=r(9510),a=r(5384),n=r.n(a);r(5023);var o=r(8570);let i=(0,o.createProxy)(String.raw`D:\Exam\To-Do-List\to-do-list\src\components\StatusBar.tsx`),{__esModule:l,$$typeof:d}=i;i.default;let c=(0,o.createProxy)(String.raw`D:\Exam\To-Do-List\to-do-list\src\components\StatusBar.tsx#default`),u={title:"Create Next App",description:"Generated by create next app"};function x({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:`${n().className} min-h-screen`,children:[s.jsx(c,{}),e]})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,324,473],()=>r(3871));module.exports=s})();