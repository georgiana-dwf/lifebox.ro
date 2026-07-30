import{c as o,j as e,r as f}from"./index-s_kyWu67.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=o("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=o("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=o("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);function N({activeIndex:t,count:r,itemLabels:n,onSelect:c}){return e.jsxs("div",{className:"mt-2 flex items-center justify-center md:hidden",children:[e.jsx("div",{className:"flex items-center",role:"group","aria-label":"Navigare între carduri",children:Array.from({length:r},(m,s)=>e.jsx("button",{type:"button","aria-label":`Vezi ${n[s]}, cardul ${s+1} din ${r}`,"aria-current":t===s?"true":void 0,onClick:()=>c(s),className:"grid h-11 w-11 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/15",children:e.jsx("span",{className:`block rounded-full transition-all ${t===s?"h-2.5 w-6 bg-primary":"h-2.5 w-2.5 bg-primary/25"}`,"aria-hidden":"true"})},n[s]))}),e.jsxs("p",{className:"min-w-12 text-center text-[11px] font-extrabold text-primary/55","aria-live":"polite",children:[t+1," din ",r]})]})}function A({className:t="",dark:r=!1}){return e.jsxs("div",{className:`full-day-plan ${r?"full-day-plan--dark":""} ${t}`,"aria-label":"Trei mese și două gustări pentru întreaga zi",children:[e.jsxs("div",{children:[e.jsx("p",{className:"full-day-plan__title",children:"3 mese + 2 gustări"}),e.jsx("p",{className:"full-day-plan__scope",children:"pentru întreaga zi"})]}),e.jsxs("p",{className:"full-day-plan__meals",children:["Mic dejun ",e.jsx("span",{"aria-hidden":"true",children:"·"})," Gustare ",e.jsx("span",{"aria-hidden":"true",children:"·"})," Prânz"," ",e.jsx("span",{"aria-hidden":"true",children:"·"})," Gustare ",e.jsx("span",{"aria-hidden":"true",children:"·"})," Cină"]})]})}function C(t){const r=f.useRef(null),[n,c]=f.useState(0);return{containerRef:r,activeIndex:n,updateActiveIndex:()=>{const i=r.current;if(!i)return;const a=Array.from(i.querySelectorAll("[data-carousel-item]")),l=i.scrollLeft+i.clientWidth/2;let d=0,u=Number.POSITIVE_INFINITY;a.forEach((h,y)=>{const x=h.offsetLeft+h.offsetWidth/2,p=Math.abs(x-l);p<u&&(u=p,d=y)}),c(Math.min(d,t-1))},scrollToIndex:i=>{const a=r.current,l=a==null?void 0:a.querySelectorAll("[data-carousel-item]")[i];!a||!l||(a.scrollTo({left:l.offsetLeft-(a.clientWidth-l.offsetWidth)/2,behavior:"smooth"}),c(i))}}}export{g as A,N as C,A as F,v as S,b as T,k as a,C as u};
