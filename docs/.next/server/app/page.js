(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3161:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),s(5480),s(472),s(5866);var r=s(3191),a=s(8716),o=s(7922),n=s.n(o),i=s(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5480)),"D:\\Exam\\To-Do-List\\to-do-list\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,472)),"D:\\Exam\\To-Do-List\\to-do-list\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Exam\\To-Do-List\\to-do-list\\src\\app\\page.tsx"],u="/page",x={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1477:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},1373:(e,t,s)=>{Promise.resolve().then(s.bind(s,3319))},7184:(e,t,s)=>{Promise.resolve().then(s.bind(s,4497))},4497:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(326),a=s(4931);function o(){return r.jsx("main",{className:"h-full",children:r.jsx(a.default,{})})}},4931:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(326);s(7577);var a=s(7774);let o=function(){return r.jsx("div",{children:r.jsx(a.Z,{status:"todo"})})}},3319:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var r=s(326),a=s(434),o=s(7577);let n=()=>{let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,r.jsxs)("div",{className:"flex justify-around",children:[r.jsx(a.default,{href:"/",children:r.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"TODO"})}),r.jsx(a.default,{href:"/doning",children:r.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"DOING"})}),r.jsx(a.default,{href:"/done",children:r.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"DONE"})}),r.jsx("div",{className:"fixed bottom-[10%] right-[20px]",children:e&&r.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:" ^ "})})]})}},7774:(e,t,s)=>{"use strict";s.d(t,{Z:()=>m});var r=s(326),a=s(7577);let o="https://todo-list-api-mfchjooefq-as.a.run.app/todo-list",n=Number(0),i=Number(10),l=async(e=n,t=i)=>{try{let s=await fetch(`${o}?status=TODO&offset=${e}&limit=${t}&sortBy=createdAt&isAsc=true`);return(await s.json()).tasks}catch(e){console.error(e)}},d=async(e=n,t=i)=>{try{let s=await fetch(`${o}?status=DOING&offset=${e}&limit=${t}&sortBy=createdAt&isAsc=true`);return(await s.json()).tasks}catch(e){console.error(e)}},c=async(e=n,t=i)=>{try{let s=await fetch(`${o}?status=DONE&offset=${e}&limit=${t}&sortBy=createdAt&isAsc=true`);return(await s.json()).tasks}catch(e){console.error(e)}};var u=s(7967),x=s.n(u);let p=({tasks:e,onDeleteTask:t})=>{let[s,o]=(0,a.useState)({});(0,a.useEffect)(()=>{n()},[e]);let n=()=>{o(e.reduce((e,t)=>{let s=x()(t.createdAt).utc().format("L");return e[s]||(e[s]=[]),e[s].push(t),e},{}))},i=e=>{t(e)};return r.jsx("div",{className:"w-[700px]",children:Object.keys(s).map(e=>(0,r.jsxs)("div",{className:"",children:[r.jsx("h3",{children:e}),r.jsx("ul",{children:s[e].map(e=>r.jsx("li",{className:"my-[10px]",children:(0,r.jsxs)("div",{className:"flex justify-between",children:[r.jsx("h3",{children:r.jsx("strong",{children:e.title})}),r.jsx("button",{onClick:()=>i(e.id),className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"Delete"})]})},e.id))})]},e))})},m=({status:e})=>{let[t,s]=(0,a.useState)([]),[o,n]=(0,a.useState)(0),[i,u]=(0,a.useState)(!1),x=async e=>{let t=[];switch(u(!0),e){case"todo":t=await l();break;case"doing":t=await d();break;case"done":t=await c();break;default:t=[]}s(t),n(o+1),u(!1)},m=async()=>{u(!0),s([...t,...await l(o)]),n(o+1),u(!1)};(0,a.useEffect)(()=>{x(e)},[]),(0,a.useEffect)(()=>(window.addEventListener("scroll",h),()=>{window.removeEventListener("scroll",h)}),[t]);let h=()=>{window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(m(),console.log("Fetch more list items!"))};return(0,r.jsxs)("div",{className:"h-screen flex justify-center",children:[r.jsx(p,{tasks:t,onDeleteTask:e=>{console.log(e),s(t.filter((t,s)=>t.id!==e))}}),i&&r.jsx("div",{children:"Loading..."})]})}},472:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>u});var r=s(9510),a=s(5384),o=s.n(a);s(5023);var n=s(8570);let i=(0,n.createProxy)(String.raw`D:\Exam\To-Do-List\to-do-list\src\components\StatusBar.tsx`),{__esModule:l,$$typeof:d}=i;i.default;let c=(0,n.createProxy)(String.raw`D:\Exam\To-Do-List\to-do-list\src\components\StatusBar.tsx#default`),u={title:"Create Next App",description:"Generated by create next app"};function x({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:`${o().className} min-h-screen`,children:[r.jsx(c,{}),e]})})}},5480:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>i});var r=s(8570);let a=(0,r.createProxy)(String.raw`D:\Exam\To-Do-List\to-do-list\src\app\page.tsx`),{__esModule:o,$$typeof:n}=a;a.default;let i=(0,r.createProxy)(String.raw`D:\Exam\To-Do-List\to-do-list\src\app\page.tsx#default`)},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,324,473],()=>s(3161));module.exports=r})();