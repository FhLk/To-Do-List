(()=>{var e={};e.id=409,e.ids=[409],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8147:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(7352),r(5866),r(472);var n=r(3191),o=r(8716),s=r(7922),a=r.n(s),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,472)),"D:\\Exam\\To-Do-List\\to-do-list\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],u=[],c="/_not-found/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1477:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},1373:(e,t,r)=>{Promise.resolve().then(r.bind(r,3319))},3319:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var n=r(326),o=r(434),s=r(7577);let a=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsxs)("div",{className:"flex justify-around",children:[n.jsx(o.default,{href:"/",children:n.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"TODO"})}),n.jsx(o.default,{href:"/doning",children:n.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"DOING"})}),n.jsx(o.default,{href:"/done",children:n.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",children:"DONE"})}),n.jsx("div",{className:"fixed bottom-[10%] right-[20px]",children:e&&n.jsx("button",{className:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:" ^ "})})]})}},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return o},default:function(){return s}});let n=r(6399),o="next/dist/client/components/parallel-route-default.js";function s(){(0,n.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},472:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f,metadata:()=>c});var n=r(9510),o=r(5384),s=r.n(o);r(5023);var a=r(8570);let i=(0,a.createProxy)(String.raw`D:\Exam\To-Do-List\to-do-list\src\components\StatusBar.tsx`),{__esModule:l,$$typeof:d}=i;i.default;let u=(0,a.createProxy)(String.raw`D:\Exam\To-Do-List\to-do-list\src\components\StatusBar.tsx#default`),c={title:"Create Next App",description:"Generated by create next app"};function f({children:e}){return n.jsx("html",{lang:"en",children:(0,n.jsxs)("body",{className:`${s().className} min-h-screen`,children:[n.jsx(u,{}),e]})})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,324],()=>r(8147));module.exports=n})();