import{S as et,i as tt,s as nt,a as rt,e as V,c as at,b as z,g as x,t as q,d as ee,f as C,h as J,j as ot,o as Ie,k as it,l as st,m as lt,n as Re,p as Y,q as ct,r as ft,u as ut,v as G,w as K,x as fe,y as M,z as H,A as he}from"./chunks/index-3ff34f59.js";import{g as Ke,f as Me,s as Q,a as Se,b as dt,i as pt}from"./chunks/singletons-94dc3b2a.js";function ht(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function mt(r){return r.split("%25").map(decodeURI).join("%25")}function _t(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(r,e){const n=new URL(r);for(const o of gt){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return yt(n),n}function yt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(r){return r.replace(/\/$/,"")+bt}function Et(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const we=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;le.delete(o)}return we(r,e)};const le=new Map;function kt(r,e){const n=Qe(r,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:a,...h}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&le.set(n,{body:a,init:h,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,h))}return we(r,e)}function $t(r,e,n){if(le.size>0){const o=Qe(r,n),a=le.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);le.delete(o)}}return we(e,n)}function Qe(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${Et(e.body)}"]`),o}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(r){const e=[],n=[],o=[];let a=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${It(r).map((t,l,c)=>{const f=decodeURIComponent(t),g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(g)return e.push(g[1]),n.push(g[2]),o.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(f);if(w)return e.push(w[1]),n.push(w[2]),o.push(!0),"(?:/([^/]+))?";const D=l===c.length-1;return f?"/"+f.split(/\[(.+?)\](?!\])/).map((O,W)=>{if(W%2){const B=Rt.exec(O);if(!B)throw new Error(`Invalid param: ${O}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,re,te,ue,ae]=B;return e.push(ue),n.push(ae),o.push(!!re),te?"(.*?)":re?"([^/]*)?":"([^/]+?)"}return D&&O.includes(".")&&(a=!1),O.normalize().replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${a?"/?":""}$`),names:e,types:n,optional:o}}function Lt(r){return!/^\([^)]+\)$/.test(r)}function It(r){return r.slice(1).split("/").filter(Lt)}function St(r,{names:e,types:n,optional:o},a){const h={};for(let t=0;t<e.length;t+=1){const l=e[t],c=n[t];let f=r[t+1];if(f||!o[t]){if(c){const g=a[c];if(!g)throw new Error(`Missing "${c}" param matcher`);if(!g(f))return}h[l]=f!=null?f:""}}return h}function At(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([l,[c,f,g]])=>{const{pattern:w,names:D,types:R,optional:Z}=Ot(l),O={id:l,exec:W=>{const B=w.exec(W);if(B)return St(B,{names:D,types:R,optional:Z},o)},errors:[1,...g||[]].map(W=>r[W]),layouts:[0,...f||[]].map(t),leaf:h(c)};return O.errors.length=O.layouts.length=Math.max(O.errors.length,O.layouts.length),O});function h(l){const c=l<0;return c&&(l=~l),[c,r[l]]}function t(l){return l===void 0?l:[a.has(l),r[l]]}}function Pt(r){let e,n,o;var a=r[0][0];function h(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=G(a,h(r))),{c(){e&&K(e.$$.fragment),n=V()},l(t){e&&fe(e.$$.fragment,t),n=V()},m(t,l){e&&M(e,t,l),z(t,n,l),o=!0},p(t,l){const c={};if(l&4&&(c.data=t[2]),l&2&&(c.form=t[1]),a!==(a=t[0][0])){if(e){x();const f=e;q(f.$$.fragment,1,0,()=>{H(f,1)}),ee()}a?(e=G(a,h(t)),K(e.$$.fragment),C(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&q(e.$$.fragment,t),o=!1},d(t){t&&J(n),e&&H(e,t)}}}function Tt(r){let e,n,o;var a=r[0][0];function h(t){return{props:{data:t[2],$$slots:{default:[Ut]},$$scope:{ctx:t}}}}return a&&(e=G(a,h(r))),{c(){e&&K(e.$$.fragment),n=V()},l(t){e&&fe(e.$$.fragment,t),n=V()},m(t,l){e&&M(e,t,l),z(t,n,l),o=!0},p(t,l){const c={};if(l&4&&(c.data=t[2]),l&1051&&(c.$$scope={dirty:l,ctx:t}),a!==(a=t[0][0])){if(e){x();const f=e;q(f.$$.fragment,1,0,()=>{H(f,1)}),ee()}a?(e=G(a,h(t)),K(e.$$.fragment),C(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&q(e.$$.fragment,t),o=!1},d(t){t&&J(n),e&&H(e,t)}}}function jt(r){let e,n,o;var a=r[0][1];function h(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=G(a,h(r))),{c(){e&&K(e.$$.fragment),n=V()},l(t){e&&fe(e.$$.fragment,t),n=V()},m(t,l){e&&M(e,t,l),z(t,n,l),o=!0},p(t,l){const c={};if(l&8&&(c.data=t[3]),l&2&&(c.form=t[1]),a!==(a=t[0][1])){if(e){x();const f=e;q(f.$$.fragment,1,0,()=>{H(f,1)}),ee()}a?(e=G(a,h(t)),K(e.$$.fragment),C(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&q(e.$$.fragment,t),o=!1},d(t){t&&J(n),e&&H(e,t)}}}function Nt(r){let e,n,o;var a=r[0][1];function h(t){return{props:{data:t[3],$$slots:{default:[Dt]},$$scope:{ctx:t}}}}return a&&(e=G(a,h(r))),{c(){e&&K(e.$$.fragment),n=V()},l(t){e&&fe(e.$$.fragment,t),n=V()},m(t,l){e&&M(e,t,l),z(t,n,l),o=!0},p(t,l){const c={};if(l&8&&(c.data=t[3]),l&1043&&(c.$$scope={dirty:l,ctx:t}),a!==(a=t[0][1])){if(e){x();const f=e;q(f.$$.fragment,1,0,()=>{H(f,1)}),ee()}a?(e=G(a,h(t)),K(e.$$.fragment),C(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&q(e.$$.fragment,t),o=!1},d(t){t&&J(n),e&&H(e,t)}}}function Dt(r){let e,n,o;var a=r[0][2];function h(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=G(a,h(r))),{c(){e&&K(e.$$.fragment),n=V()},l(t){e&&fe(e.$$.fragment,t),n=V()},m(t,l){e&&M(e,t,l),z(t,n,l),o=!0},p(t,l){const c={};if(l&16&&(c.data=t[4]),l&2&&(c.form=t[1]),a!==(a=t[0][2])){if(e){x();const f=e;q(f.$$.fragment,1,0,()=>{H(f,1)}),ee()}a?(e=G(a,h(t)),K(e.$$.fragment),C(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){o||(e&&C(e.$$.fragment,t),o=!0)},o(t){e&&q(e.$$.fragment,t),o=!1},d(t){t&&J(n),e&&H(e,t)}}}function Ut(r){let e,n,o,a;const h=[Nt,jt],t=[];function l(c,f){return c[0][2]?0:1}return e=l(r),n=t[e]=h[e](r),{c(){n.c(),o=V()},l(c){n.l(c),o=V()},m(c,f){t[e].m(c,f),z(c,o,f),a=!0},p(c,f){let g=e;e=l(c),e===g?t[e].p(c,f):(x(),q(t[g],1,1,()=>{t[g]=null}),ee(),n=t[e],n?n.p(c,f):(n=t[e]=h[e](c),n.c()),C(n,1),n.m(o.parentNode,o))},i(c){a||(C(n),a=!0)},o(c){q(n),a=!1},d(c){t[e].d(c),c&&J(o)}}}function He(r){let e,n=r[6]&&We(r);return{c(){e=it("div"),n&&n.c(),this.h()},l(o){e=st(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=lt(e);n&&n.l(a),a.forEach(J),this.h()},h(){Re(e,"id","svelte-announcer"),Re(e,"aria-live","assertive"),Re(e,"aria-atomic","true"),Y(e,"position","absolute"),Y(e,"left","0"),Y(e,"top","0"),Y(e,"clip","rect(0 0 0 0)"),Y(e,"clip-path","inset(50%)"),Y(e,"overflow","hidden"),Y(e,"white-space","nowrap"),Y(e,"width","1px"),Y(e,"height","1px")},m(o,a){z(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=We(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&J(e),n&&n.d()}}}function We(r){let e;return{c(){e=ct(r[7])},l(n){e=ft(n,r[7])},m(n,o){z(n,e,o)},p(n,o){o&128&&ut(e,n[7])},d(n){n&&J(e)}}}function Vt(r){let e,n,o,a,h;const t=[Tt,Pt],l=[];function c(g,w){return g[0][1]?0:1}e=c(r),n=l[e]=t[e](r);let f=r[5]&&He(r);return{c(){n.c(),o=rt(),f&&f.c(),a=V()},l(g){n.l(g),o=at(g),f&&f.l(g),a=V()},m(g,w){l[e].m(g,w),z(g,o,w),f&&f.m(g,w),z(g,a,w),h=!0},p(g,[w]){let D=e;e=c(g),e===D?l[e].p(g,w):(x(),q(l[D],1,1,()=>{l[D]=null}),ee(),n=l[e],n?n.p(g,w):(n=l[e]=t[e](g),n.c()),C(n,1),n.m(o.parentNode,o)),g[5]?f?f.p(g,w):(f=He(g),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null)},i(g){h||(C(n),h=!0)},o(g){q(n),h=!1},d(g){l[e].d(g),g&&J(o),f&&f.d(g),g&&J(a)}}}function qt(r,e,n){let{stores:o}=e,{page:a}=e,{components:h}=e,{form:t}=e,{data_0:l=null}=e,{data_1:c=null}=e,{data_2:f=null}=e;ot(o.page.notify);let g=!1,w=!1,D=null;return Ie(()=>{const R=o.page.subscribe(()=>{g&&(n(6,w=!0),n(7,D=document.title||"untitled page"))});return n(5,g=!0),R}),r.$$set=R=>{"stores"in R&&n(8,o=R.stores),"page"in R&&n(9,a=R.page),"components"in R&&n(0,h=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,l=R.data_0),"data_1"in R&&n(3,c=R.data_1),"data_2"in R&&n(4,f=R.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[h,t,l,c,f,g,w,D,o,a]}class Ct extends et{constructor(e){super(),tt(this,e,qt,Vt,nt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Bt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Ft=function(r,e){return new URL(r,e).href},Ye={},P=function(e,n,o){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(h=>{if(h=Ft(h,o),h in Ye)return;Ye[h]=!0;const t=h.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(!!o)for(let g=a.length-1;g>=0;g--){const w=a[g];if(w.href===h&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${l}`))return;const f=document.createElement("link");if(f.rel=t?"stylesheet":Bt,t||(f.as="script",f.crossOrigin=""),f.href=h,document.head.appendChild(f),t)return new Promise((g,w)=>{f.addEventListener("load",g),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})})).then(()=>e())},Jt={},ye=[()=>P(()=>import("./chunks/0-5a780870.js"),["./chunks/0-5a780870.js","./components/layout.svelte-a2de1d6c.js","./chunks/index-3ff34f59.js"],import.meta.url),()=>P(()=>import("./chunks/1-494cea71.js"),["./chunks/1-494cea71.js","./components/error.svelte-44b55374.js","./chunks/index-3ff34f59.js","./chunks/stores-47f5c1bc.js","./chunks/singletons-94dc3b2a.js","./chunks/index-6e59cfbb.js"],import.meta.url),()=>P(()=>import("./chunks/2-5503fcec.js"),["./chunks/2-5503fcec.js","./components/pages/(admin)/_layout.svelte-d5e51a0b.js","./chunks/index-3ff34f59.js","./chunks/notifications-1daaa43e.js","./chunks/index-6e59cfbb.js","./assets/_layout-d8496a53.css","./assets/style-82564915.css"],import.meta.url),()=>P(()=>import("./chunks/3-a6dab0fb.js"),["./chunks/3-a6dab0fb.js","./chunks/_layout-71302d3b.js","./components/pages/(site)/_layout.svelte-905b3b42.js","./chunks/index-3ff34f59.js","./chunks/stores-47f5c1bc.js","./chunks/singletons-94dc3b2a.js","./chunks/index-6e59cfbb.js","./assets/_layout-b53f2634.css","./assets/style-82564915.css"],import.meta.url),()=>P(()=>import("./chunks/4-be6dd0c0.js"),["./chunks/4-be6dd0c0.js","./components/pages/(admin)/admin/_page.svelte-b09d304c.js","./chunks/index-3ff34f59.js"],import.meta.url),()=>P(()=>import("./chunks/5-6ce152ee.js"),["./chunks/5-6ce152ee.js","./components/pages/(admin)/admin/books/_page.svelte-d9c8b708.js","./chunks/index-3ff34f59.js","./chunks/notifications-1daaa43e.js","./chunks/index-6e59cfbb.js"],import.meta.url),()=>P(()=>import("./chunks/6-fcbc1fb9.js"),["./chunks/6-fcbc1fb9.js","./components/pages/(admin)/admin/books/create/_page.svelte-3ef45446.js","./chunks/index-3ff34f59.js","./chunks/navigation-a106ef9b.js","./chunks/singletons-94dc3b2a.js","./chunks/index-6e59cfbb.js","./chunks/notifications-1daaa43e.js"],import.meta.url),()=>P(()=>import("./chunks/7-1fe76a4c.js"),["./chunks/7-1fe76a4c.js","./components/pages/(admin)/admin/fields/_page.svelte-119d9a99.js","./chunks/index-3ff34f59.js"],import.meta.url),()=>P(()=>import("./chunks/8-f99fb50a.js"),["./chunks/8-f99fb50a.js","./components/pages/(admin)/admin/fields/_id_/_page.svelte-3d2dc68e.js","./chunks/index-3ff34f59.js","./chunks/navigation-a106ef9b.js","./chunks/singletons-94dc3b2a.js","./chunks/index-6e59cfbb.js","./chunks/editor-0e506569.js","./assets/editor-d1b108ce.css","./chunks/notifications-1daaa43e.js"],import.meta.url),()=>P(()=>import("./chunks/9-0857d365.js"),["./chunks/9-0857d365.js","./components/pages/(admin)/admin/fields/create/_page.svelte-6ab534e5.js","./chunks/index-3ff34f59.js","./chunks/editor-0e506569.js","./assets/editor-d1b108ce.css","./chunks/notifications-1daaa43e.js","./chunks/index-6e59cfbb.js","./chunks/navigation-a106ef9b.js","./chunks/singletons-94dc3b2a.js"],import.meta.url),()=>P(()=>import("./chunks/10-961cb028.js"),["./chunks/10-961cb028.js","./components/pages/(admin)/admin/posts/_page.svelte-756e910c.js","./chunks/index-3ff34f59.js"],import.meta.url),()=>P(()=>import("./chunks/11-32ecc86e.js"),["./chunks/11-32ecc86e.js","./components/pages/(admin)/admin/posts/_id_/_page.svelte-266b93b5.js","./chunks/index-3ff34f59.js","./chunks/navigation-a106ef9b.js","./chunks/singletons-94dc3b2a.js","./chunks/index-6e59cfbb.js","./chunks/editor-0e506569.js","./assets/editor-d1b108ce.css","./chunks/notifications-1daaa43e.js"],import.meta.url),()=>P(()=>import("./chunks/12-619f5ad1.js"),["./chunks/12-619f5ad1.js","./components/pages/(admin)/admin/posts/create/_page.svelte-3b818118.js","./chunks/index-3ff34f59.js","./chunks/navigation-a106ef9b.js","./chunks/singletons-94dc3b2a.js","./chunks/index-6e59cfbb.js","./chunks/editor-0e506569.js","./assets/editor-d1b108ce.css","./chunks/notifications-1daaa43e.js"],import.meta.url),()=>P(()=>import("./chunks/13-2a5253df.js"),["./chunks/13-2a5253df.js","./components/pages/(site)/_page.svelte-29ba1fa2.js","./chunks/index-3ff34f59.js","./chunks/date-b67229a3.js","./assets/_page-283e460b.css"],import.meta.url),()=>P(()=>import("./chunks/14-6b00eae3.js"),["./chunks/14-6b00eae3.js","./components/pages/(site)/blog/_page.svelte-58de6907.js","./chunks/index-3ff34f59.js","./chunks/date-b67229a3.js","./assets/_page-767e712f.css"],import.meta.url),()=>P(()=>import("./chunks/15-ef1451f4.js"),["./chunks/15-ef1451f4.js","./components/pages/(site)/blog/_slug_/_page.svelte-25ae9d09.js","./chunks/index-3ff34f59.js","./chunks/date-b67229a3.js","./assets/_page-14d8b6a8.css"],import.meta.url),()=>P(()=>import("./chunks/16-c04f8a6f.js"),["./chunks/16-c04f8a6f.js","./components/pages/(site)/read/_page.svelte-7edc71f5.js","./chunks/index-3ff34f59.js"],import.meta.url),()=>P(()=>import("./chunks/17-83c0fe02.js"),["./chunks/17-83c0fe02.js","./components/pages/(site)/read/2022/_page.svelte-912612c8.js","./chunks/index-3ff34f59.js","./assets/_page-b54cfb09.css"],import.meta.url)],zt=[2],Gt={"/(site)":[-14,[3]],"/(admin)/admin":[4,[2]],"/(admin)/admin/books":[-6,[2]],"/(admin)/admin/books/create":[6,[2]],"/(admin)/admin/fields":[-8,[2]],"/(admin)/admin/fields/create":[9,[2]],"/(admin)/admin/fields/[id]":[-9,[2]],"/(admin)/admin/posts":[-11,[2]],"/(admin)/admin/posts/create":[12,[2]],"/(admin)/admin/posts/[id]":[-12,[2]],"/(site)/blog":[-15,[3]],"/(site)/blog/[slug]":[-16,[3]],"/(site)/read":[-17,[3]],"/(site)/read/2022":[-18,[3]]},Kt={handleError:({error:r})=>{console.error(r)}};class Ae{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,n){this.status=e,this.location=n}}async function Mt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ht=-1,Wt=-2,Yt=-3,Xt=-4,Zt=-5,Qt=-6;function xt(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function o(a,h=!1){if(a===Ht)return;if(a===Yt)return NaN;if(a===Xt)return 1/0;if(a===Zt)return-1/0;if(a===Qt)return-0;if(h)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const c=new Set;n[a]=c;for(let w=1;w<t.length;w+=1)c.add(o(t[w]));break;case"Map":const f=new Map;n[a]=f;for(let w=1;w<t.length;w+=2)f.set(o(t[w]),o(t[w+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[a]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=o(t[w+1]);break}else{const l=new Array(t.length);n[a]=l;for(let c=0;c<t.length;c+=1){const f=t[c];f!==Wt&&(l[c]=o(f))}}else{const l={};n[a]=l;for(const c in t){const f=t[c];l[c]=o(f)}}return n[a]}return o(0)}const xe="sveltekit:scroll",X="sveltekit:index",me=At(ye,zt,Gt,Jt),Pe=ye[0],Te=ye[1];Pe();Te();let ce={};try{ce=JSON.parse(sessionStorage[xe])}catch{}function Oe(r){ce[r]=Se()}function en({target:r,base:e,trailing_slash:n}){var Je;const o=[];let a=null;const h={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,c=!1,f=!0,g=!1,w=!1,D=!1,R=!1,Z,O=(Je=history.state)==null?void 0:Je[X];O||(O=Date.now(),history.replaceState({...history.state,[X]:O},"",location.href));const W=ce[O];W&&(history.scrollRestoration="manual",scrollTo(W.x,W.y));let B,re,te;async function ue(){te=te||Promise.resolve(),await te,te=null;const i=new URL(location.href),u=Ee(i,!0);a=null,await Ne(u,i,[])}async function ae(i,{noScroll:u=!1,replaceState:d=!1,keepFocus:s=!1,state:p={},invalidateAll:m=!1},_,v){return typeof i=="string"&&(i=new URL(i,Ke(document))),ke({url:i,scroll:u?Se():null,keepfocus:s,redirect_chain:_,details:{state:p,replaceState:d},nav_token:v,accepted:()=>{m&&(R=!0)},blocked:()=>{},type:"goto"})}async function je(i){const u=Ee(i,!1);if(!u)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${i}`);return a={id:u.id,promise:Ve(u).then(d=>(d.type==="loaded"&&d.state.error&&(a=null),d))},a.promise}async function Ne(i,u,d,s,p={},m){var v,E;re=p;let _=i&&await Ve(i);if(_||(_=await Fe(u,{id:null},se(new Error(`Not found: ${u.pathname}`),{url:u,params:{},route:{id:null}}),404)),u=(i==null?void 0:i.url)||u,re!==p)return!1;if(_.type==="redirect")if(d.length>10||d.includes(u.pathname))_=await de({status:500,error:se(new Error("Redirect loop"),{url:u,params:{},route:{id:null}}),url:u,route:{id:null}});else return ae(new URL(_.location,u).href,{},[...d,u.pathname],p),!1;else((E=(v=_.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await Q.updated.check()&&await pe(u);if(o.length=0,R=!1,g=!0,s&&s.details){const{details:y}=s,b=y.replaceState?0:1;y.state[X]=O+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",u)}if(a=null,c){t=_.state,_.props.page&&(_.props.page.url=u);const y=ge();Z.$set(_.props),y()}else De(_);if(s){const{scroll:y,keepfocus:b}=s;if(b||Le(),await he(),f){const I=u.hash&&document.getElementById(u.hash.slice(1));y?scrollTo(y.x,y.y):I?I.scrollIntoView():scrollTo(0,0)}}else await he();f=!0,_.props.page&&(B=_.props.page),m&&m(),g=!1}function De(i){var p,m;t=i.state;const u=document.querySelector("style[data-sveltekit]");u&&u.remove(),B=i.props.page;const d=ge();Z=new Ct({target:r,props:{...i.props,stores:Q},hydrate:!0}),d();const s={from:null,to:_e("to",{params:t.params,route:{id:(m=(p=t.route)==null?void 0:p.id)!=null?m:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};h.after_navigate.forEach(_=>_(s)),c=!0}async function oe({url:i,params:u,branch:d,status:s,error:p,route:m,form:_}){var j;const v=d.filter(Boolean),E={type:"loaded",state:{url:i,params:u,branch:d,error:p,route:m},props:{components:v.map(L=>L.node.component)}};_!==void 0&&(E.props.form=_);let y={},b=!B;for(let L=0;L<v.length;L+=1){const N=v[L];y={...y,...N.data},(b||!t.branch.some(U=>U===N))&&(E.props[`data_${L}`]=y,b=b||Object.keys((j=N.data)!=null?j:{}).length>0)}if(b||(b=Object.keys(B.data).length!==Object.keys(y).length),!t.url||i.href!==t.url.href||t.error!==p||_!==void 0||b){E.props.page={error:p,params:u,route:m,status:s,url:i,form:_,data:b?y:B.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const L=(N,U)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${U}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return E}async function be({loader:i,parent:u,url:d,params:s,route:p,server_data_node:m}){var y,b,I,j,L;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await i();if((y=E.shared)!=null&&y.load){let N=function(...$){for(const F of $){const{href:k}=new URL(F,d);v.dependencies.add(k)}};const U={route:{get id(){return v.route=!0,p.id}},params:new Proxy(s,{get:($,F)=>(v.params.add(F),$[F])}),data:(b=m==null?void 0:m.data)!=null?b:null,url:wt(d,()=>{v.url=!0}),async fetch($,F){let k;$ instanceof Request?(k=$.url,F={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...F}):k=$;const S=new URL(k,d).href;return N(S),c?$t(k,S,F):kt(k,F)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,u()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),_=(I=await E.shared.load.call(null,U))!=null?I:null,_=_?await Mt(_):null}return{node:E,loader:i,server:m,shared:(j=E.shared)!=null&&j.load?{type:"data",data:_,uses:v}:null,data:(L=_!=null?_:m==null?void 0:m.data)!=null?L:null}}function Ue(i,u,d,s,p){if(R)return!0;if(!s)return!1;if(s.parent&&i||s.route&&u||s.url&&d)return!0;for(const m of s.params)if(p[m]!==t.params[m])return!0;for(const m of s.dependencies)if(o.some(_=>_(new URL(m))))return!0;return!1}function ve(i,u){var d,s;return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set((d=i.uses.dependencies)!=null?d:[]),params:new Set((s=i.uses.params)!=null?s:[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url}}:(i==null?void 0:i.type)==="skip"&&u!=null?u:null}async function Ve({id:i,invalidating:u,url:d,params:s,route:p}){var F;if((a==null?void 0:a.id)===i)return a.promise;const{errors:m,layouts:_,leaf:v}=p,E=[..._,v];m.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?i!==t.url.pathname+t.url.search:!1,I=t.route?i!==t.route.id:!1,j=E.reduce((k,S,T)=>{var ie;const A=t.branch[T],ne=!!(S!=null&&S[0])&&((A==null?void 0:A.loader)!==S[1]||Ue(k.some(Boolean),I,b,(ie=A.server)==null?void 0:ie.uses,s));return k.push(ne),k},[]);if(j.some(Boolean)){try{y=await Ze(d,j)}catch(k){return de({status:500,error:se(k,{url:d,params:s,route:{id:p.id}}),url:d,route:p})}if(y.type==="redirect")return y}const L=y==null?void 0:y.nodes;let N=!1;const U=E.map(async(k,S)=>{var ie;if(!k)return;const T=t.branch[S],A=L==null?void 0:L[S];if((!A||A.type==="skip")&&k[1]===(T==null?void 0:T.loader)&&!Ue(N,I,b,(ie=T.shared)==null?void 0:ie.uses,s))return T;if(N=!0,(A==null?void 0:A.type)==="error")throw A;return be({loader:k[1],url:d,params:s,route:p,parent:async()=>{var Ge;const ze={};for(let $e=0;$e<S;$e+=1)Object.assign(ze,(Ge=await U[$e])==null?void 0:Ge.data);return ze},server_data_node:ve(A===void 0&&k[0]?{type:"skip"}:A!=null?A:null,T==null?void 0:T.server)})});for(const k of U)k.catch(()=>{});const $=[];for(let k=0;k<E.length;k+=1)if(E[k])try{$.push(await U[k])}catch(S){if(S instanceof Xe)return{type:"redirect",location:S.location};let T=500,A;L!=null&&L.includes(S)?(T=(F=S.status)!=null?F:T,A=S.error):S instanceof Ae?(T=S.status,A=S.body):A=se(S,{params:s,url:d,route:{id:p.id}});const ne=await qe(k,$,m);return ne?await oe({url:d,params:s,branch:$.slice(0,ne.idx).concat(ne.node),status:T,error:A,route:p}):await Fe(d,{id:p.id},A,T)}else $.push(void 0);return await oe({url:d,params:s,branch:$,status:200,error:null,route:p,form:u?void 0:null})}async function qe(i,u,d){for(;i--;)if(d[i]){let s=i;for(;!u[s];)s-=1;try{return{idx:s+1,node:{node:await d[i](),loader:d[i],data:{},server:null,shared:null}}}catch{continue}}}async function de({status:i,error:u,url:d,route:s}){var y;const p={},m=await Pe();let _=null;if(m.server)try{const b=await Ze(d,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=(y=b.nodes[0])!=null?y:null}catch{(d.origin!==location.origin||d.pathname!==location.pathname||l)&&await pe(d)}const v=await be({loader:Pe,url:d,params:p,route:s,parent:()=>Promise.resolve({}),server_data_node:ve(_)}),E={node:await Te(),loader:Te,shared:null,server:null,data:null};return await oe({url:d,params:p,branch:[v,E],status:i,error:u,route:null})}function Ee(i,u){if(Ce(i))return;const d=mt(i.pathname.slice(e.length)||"/");for(const s of me){const p=s.exec(d);if(p){const m=new URL(i.origin+ht(i.pathname,n)+i.search+i.hash);return{id:m.pathname+m.search,invalidating:u,route:s,params:_t(p),url:m}}}}function Ce(i){return i.origin!==location.origin||!i.pathname.startsWith(e)}function Be({url:i,type:u,intent:d,delta:s}){var v,E,y,b,I;let p=!1;const m={from:_e("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:_e("to",{params:(y=d==null?void 0:d.params)!=null?y:null,route:{id:(I=(b=d==null?void 0:d.route)==null?void 0:b.id)!=null?I:null},url:i}),willUnload:!d,type:u};s!==void 0&&(m.delta=s);const _={...m,cancel:()=>{p=!0}};return w||h.before_navigate.forEach(j=>j(_)),p?null:m}async function ke({url:i,scroll:u,keepfocus:d,redirect_chain:s,details:p,type:m,delta:_,nav_token:v,accepted:E,blocked:y}){const b=Ee(i,!1),I=Be({url:i,type:m,delta:_,intent:b});if(!I){y();return}Oe(O),E(),w=!0,c&&Q.navigating.set(I),await Ne(b,i,s,{scroll:u,keepfocus:d,details:p},v,()=>{w=!1,h.after_navigate.forEach(j=>j(I)),Q.navigating.set(null)})}async function Fe(i,u,d,s){return i.origin===location.origin&&i.pathname===location.pathname&&!l?await de({status:s,error:d,url:i,route:u}):await pe(i)}function pe(i){return location.href=i.href,new Promise(()=>{})}return{after_navigate:i=>{Ie(()=>(h.after_navigate.push(i),()=>{const u=h.after_navigate.indexOf(i);h.after_navigate.splice(u,1)}))},before_navigate:i=>{Ie(()=>(h.before_navigate.push(i),()=>{const u=h.before_navigate.indexOf(i);h.before_navigate.splice(u,1)}))},disable_scroll_handling:()=>{(g||!c)&&(f=!1)},goto:(i,u={})=>{if("keepfocus"in u)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in u)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ae(i,u,[])},invalidate:i=>{if(i===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof i=="function")o.push(i);else{const{href:u}=new URL(i,location.href);o.push(d=>d.href===u)}return ue()},invalidateAll:()=>(R=!0,ue()),prefetch:async i=>{const u=new URL(i,Ke(document));await je(u)},prefetch_routes:async i=>{const d=(i?me.filter(s=>i.some(p=>s.exec(p))):me).map(s=>Promise.all([...s.layouts,s.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(d)},apply_action:async i=>{if(i.type==="error"){const u=new URL(location.href),{branch:d,route:s}=t;if(!s)return;const p=await qe(t.branch.length,d,s.errors);if(p){const m=await oe({url:u,params:t.params,branch:d.slice(0,p.idx).concat(p.node),status:500,error:i.error,route:s});t=m.state;const _=ge();Z.$set(m.props),_(),he().then(Le)}}else if(i.type==="redirect")ae(i.location,{invalidateAll:!0},[]);else{const u={form:i.data,page:{...B,form:i.data,status:i.status}},d=ge();Z.$set(u),d(),i.type==="success"&&he().then(Le)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,_;let p=!1;if(!w){const v={from:_e("from",{params:t.params,route:{id:(_=(m=t.route)==null?void 0:m.id)!=null?_:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>p=!0};h.before_navigate.forEach(E=>E(v))}p?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Oe(O);try{sessionStorage[xe]=JSON.stringify(ce)}catch{}}});const i=s=>{const{url:p,options:m,has:_}=Me(s);if(p&&m.prefetch&&!Ce(p)){if(m.reload||_.rel_external||_.target||_.download)return;je(p)}};let u;const d=s=>{clearTimeout(u),u=setTimeout(()=>{var p;(p=s.target)==null||p.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",i),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",i),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:p,url:m,options:_,has:v}=Me(s);if(!p||!m||!(p instanceof SVGAElement)&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:")||v.download)return;if(_.reload||v.rel_external||v.target){Be({url:m,type:"link"})||s.preventDefault(),w=!0;return}const[y,b]=m.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){D=!0,Oe(O),t.url=m,Q.page.set({...B,url:m}),Q.page.notify();return}ke({url:m,scroll:_.noscroll?Se():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[X]===O)return;const p=s.state[X]-O;ke({url:new URL(location.href),scroll:ce[s.state[X]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=s.state[X]},blocked:()=>{history.go(-p)},type:"popstate",delta:p})}}),addEventListener("hashchange",()=>{D&&(D=!1,history.replaceState({...history.state,[X]:++O},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&Q.navigating.set(null)})},_hydrate:async({status:i,error:u,node_ids:d,params:s,route:p,data:m,form:_})=>{var y;l=!0;const v=new URL(location.href);let E;try{const b=d.map(async(I,j)=>{const L=m[j];return be({loader:ye[I],url:v,params:s,route:p,parent:async()=>{const N={};for(let U=0;U<j;U+=1)Object.assign(N,(await b[U]).data);return N},server_data_node:ve(L)})});E=await oe({url:v,params:s,branch:await Promise.all(b),status:i,error:u,form:_,route:(y=me.find(({id:I})=>I===p.id))!=null?y:null})}catch(b){if(b instanceof Xe){await pe(new URL(b.location,location.href));return}E=await de({status:b instanceof Ae?b.status:500,error:se(b,{url:v,params:s,route:p}),url:v,route:p})}De(E)}}}async function Ze(r,e){var h;const n=new URL(r);n.pathname=vt(r.pathname);const o=await we(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),a=await o.json();if(!o.ok)throw new Error(a);return(h=a.nodes)==null||h.forEach(t=>{var l,c;(t==null?void 0:t.type)==="data"&&(t.data=xt(t.data),t.uses={dependencies:new Set((l=t.uses.dependencies)!=null?l:[]),params:new Set((c=t.uses.params)!=null?c:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function se(r,e){var n;return r instanceof Ae?r.body:(n=Kt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const tn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function _e(r,e){for(const n of tn)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function ge(){return()=>{}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function an({env:r,hydrate:e,paths:n,target:o,trailing_slash:a}){dt(n);const h=en({target:o,base:n.base,trailing_slash:a});pt({client:h}),e?await h._hydrate(e):h.goto(location.href,{replaceState:!0}),h._start_router()}export{an as start};
