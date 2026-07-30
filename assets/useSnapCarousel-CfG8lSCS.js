import{c as i,j as l,r as x}from"./index-BnqdXA8b.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=i("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=i("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=i("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);function I({activeIndex:s,count:t,itemLabels:n,onSelect:o}){return l.jsxs("div",{className:"mt-2 flex items-center justify-center md:hidden",children:[l.jsx("div",{className:"flex items-center",role:"group","aria-label":"Navigare între carduri",children:Array.from({length:t},(p,r)=>l.jsx("button",{type:"button","aria-label":`Vezi ${n[r]}, cardul ${r+1} din ${t}`,"aria-current":s===r?"true":void 0,onClick:()=>o(r),className:"grid h-11 w-11 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/15",children:l.jsx("span",{className:`block rounded-full transition-all ${s===r?"h-2.5 w-6 bg-primary":"h-2.5 w-2.5 bg-primary/25"}`,"aria-hidden":"true"})},n[r]))}),l.jsxs("p",{className:"min-w-12 text-center text-[11px] font-extrabold text-primary/55","aria-live":"polite",children:[s+1," din ",t]})]})}function M(s){const t=x.useRef(null),[n,o]=x.useState(0);return{containerRef:t,activeIndex:n,updateActiveIndex:()=>{const a=t.current;if(!a)return;const e=Array.from(a.querySelectorAll("[data-carousel-item]")),c=a.scrollLeft+a.clientWidth/2;let y=0,h=Number.POSITIVE_INFINITY;e.forEach((d,f)=>{const m=d.offsetLeft+d.offsetWidth/2,u=Math.abs(m-c);u<h&&(h=u,y=f)}),o(Math.min(y,s-1))},scrollToIndex:a=>{const e=t.current,c=e==null?void 0:e.querySelectorAll("[data-carousel-item]")[a];!e||!c||(e.scrollTo({left:c.offsetLeft-(e.clientWidth-c.offsetWidth)/2,behavior:"smooth"}),o(a))}}}export{v as A,I as C,j as S,w as T,A as U,b as a,g as b,M as u};
