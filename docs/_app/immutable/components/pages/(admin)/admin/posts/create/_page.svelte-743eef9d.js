import{S as D,i as J,s as L,k as v,q as T,a as w,w as O,e as g,l as $,m as E,r as B,h as o,c as x,x as V,n as p,b as d,J as y,y as j,P as z,f as C,t as U,z as F}from"../../../../../../chunks/index-ca645e50.js";import{E as G,g as H}from"../../../../../../chunks/editor-7e7f58f2.js";import{n as q}from"../../../../../../chunks/notifications-fced0cb7.js";function A(m){let t,a;return{c(){t=v("div"),a=T("This post will go live!"),this.h()},l(i){t=$(i,"DIV",{class:!0});var r=E(t);a=B(r,"This post will go live!"),r.forEach(o),this.h()},h(){p(t,"class","p-4 border border-green-600 mt-4")},m(i,r){d(i,t,r),y(t,a)},d(i){i&&o(t)}}}function K(m){let t,a,i,r,u,h,c,n,b,_,f,k,S,I;u=new G({props:{height:"full",onSave:m[1]}});let s=m[0]&&A();return{c(){t=v("div"),a=v("a"),i=T("Back"),r=w(),O(u.$$.fragment),h=w(),c=v("label"),n=v("input"),b=T("Published"),_=w(),s&&s.c(),f=g(),this.h()},l(e){t=$(e,"DIV",{class:!0});var l=E(t);a=$(l,"A",{href:!0,class:!0});var N=E(a);i=B(N,"Back"),N.forEach(o),l.forEach(o),r=x(e),V(u.$$.fragment,e),h=x(e),c=$(e,"LABEL",{for:!0});var P=E(c);n=$(P,"INPUT",{type:!0,name:!0,id:!0,class:!0}),b=B(P,"Published"),P.forEach(o),_=x(e),s&&s.l(e),f=g(),this.h()},h(){p(a,"href","/admin/posts"),p(a,"class","button"),p(t,"class","mb-4"),p(n,"type","checkbox"),p(n,"name","published"),p(n,"id","published"),p(n,"class","mx-2"),p(c,"for","published")},m(e,l){d(e,t,l),y(t,a),y(a,i),d(e,r,l),j(u,e,l),d(e,h,l),d(e,c,l),y(c,n),n.checked=m[0],y(c,b),d(e,_,l),s&&s.m(e,l),d(e,f,l),k=!0,S||(I=z(n,"change",m[2]),S=!0)},p(e,[l]){l&1&&(n.checked=e[0]),e[0]?s||(s=A(),s.c(),s.m(f.parentNode,f)):s&&(s.d(1),s=null)},i(e){k||(C(u.$$.fragment,e),k=!0)},o(e){U(u.$$.fragment,e),k=!1},d(e){e&&o(t),e&&o(r),F(u,e),e&&o(h),e&&o(c),e&&o(_),s&&s.d(e),e&&o(f),S=!1,I()}}}function M(m,t,a){let i=!1;const r=async({name:h,value:c,slug:n})=>{const b=h,_=c,f=await fetch("/api/posts",{method:"POST",body:JSON.stringify({title:b,content:_,slug:n,published:i}),headers:{"content-type":"application/json"}});if(f.status>299){q.danger(`Error ${f.status}: ${f.statusText}`);return}q.success("Success"),H("/admin/posts")};function u(){i=this.checked,a(0,i)}return[i,r,u]}class X extends D{constructor(t){super(),J(this,t,M,K,L,{})}}export{X as default};
