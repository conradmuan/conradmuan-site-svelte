import{S as R,i as T,s as U,k as _,q as E,a as D,e as N,l as u,m as v,r as y,h as o,c as I,n as p,b as k,J as n,B as H,L as W}from"../../../../../chunks/index-7e21b56a.js";function M(c,e,i){const t=c.slice();return t[2]=e[i],t}function X(c){let e,i,t,l;return{c(){e=_("h1"),i=E("No fields yet. "),t=_("a"),l=E("Create some?"),this.h()},l(s){e=u(s,"H1",{});var a=v(e);i=y(a,"No fields yet. "),t=u(a,"A",{href:!0});var f=v(t);l=y(f,"Create some?"),f.forEach(o),a.forEach(o),this.h()},h(){p(t,"href","/admin/fields/create")},m(s,a){k(s,e,a),n(e,i),n(e,t),n(t,l)},d(s){s&&o(e)}}}function Y(c){let e,i=c[0],t=[];for(let l=0;l<i.length;l+=1)t[l]=Q(M(c,i,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=N()},l(l){for(let s=0;s<t.length;s+=1)t[s].l(l);e=N()},m(l,s){for(let a=0;a<t.length;a+=1)t[a].m(l,s);k(l,e,s)},p(l,s){if(s&1){i=l[0];let a;for(a=0;a<i.length;a+=1){const f=M(l,i,a);t[a]?t[a].p(f,s):(t[a]=Q(f),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=i.length}},d(l){W(t,l),l&&o(e)}}}function Q(c){let e,i,t,l=c[2].id+"",s,a,f,d,r=c[2].name+"",h,V,x,C,S=c[2].value+"",P,g,w,b,q,F;return{c(){e=_("div"),i=_("div"),t=_("p"),s=E(l),a=D(),f=_("div"),d=_("h1"),h=E(r),V=D(),x=_("div"),C=_("p"),P=E(S),g=D(),w=_("div"),b=_("a"),q=E("View / Edit"),F=D(),this.h()},l(A){e=u(A,"DIV",{class:!0});var m=v(e);i=u(m,"DIV",{class:!0});var j=v(i);t=u(j,"P",{});var B=v(t);s=y(B,l),B.forEach(o),j.forEach(o),a=I(m),f=u(m,"DIV",{class:!0});var J=v(f);d=u(J,"H1",{class:!0});var L=v(d);h=y(L,r),L.forEach(o),J.forEach(o),V=I(m),x=u(m,"DIV",{class:!0});var O=v(x);C=u(O,"P",{});var z=v(C);P=y(z,S),z.forEach(o),O.forEach(o),g=I(m),w=u(m,"DIV",{});var G=v(w);b=u(G,"A",{type:!0,href:!0,class:!0});var K=v(b);q=y(K,"View / Edit"),K.forEach(o),G.forEach(o),F=I(m),m.forEach(o),this.h()},h(){p(i,"class","flex-none px-2"),p(d,"class","truncate"),p(f,"class","flex-initial w-52 px-2"),p(x,"class","px-2 flex-1"),p(b,"type","button"),p(b,"href","/admin/fields/"+c[2].id),p(b,"class","button no-underline"),p(e,"class","flex border-b border-slate-500 py-2")},m(A,m){k(A,e,m),n(e,i),n(i,t),n(t,s),n(e,a),n(e,f),n(f,d),n(d,h),n(e,V),n(e,x),n(x,C),n(C,P),n(e,g),n(e,w),n(w,b),n(b,q),n(e,F)},p:H,d(A){A&&o(e)}}}function Z(c){let e,i,t,l,s,a,f=c[0].length===0&&X(),d=c[0].length>0&&Y(c);return{c(){e=_("div"),i=_("a"),t=E("Create Field"),l=D(),f&&f.c(),s=D(),d&&d.c(),a=N(),this.h()},l(r){e=u(r,"DIV",{});var h=v(e);i=u(h,"A",{type:!0,class:!0,href:!0});var V=v(i);t=y(V,"Create Field"),V.forEach(o),h.forEach(o),l=I(r),f&&f.l(r),s=I(r),d&&d.l(r),a=N(),this.h()},h(){p(i,"type","button"),p(i,"class","button mb-4"),p(i,"href","/admin/fields/create")},m(r,h){k(r,e,h),n(e,i),n(i,t),k(r,l,h),f&&f.m(r,h),k(r,s,h),d&&d.m(r,h),k(r,a,h)},p(r,[h]){r[0].length>0&&d.p(r,h)},i:H,o:H,d(r){r&&o(e),r&&o(l),f&&f.d(r),r&&o(s),d&&d.d(r),r&&o(a)}}}function $(c,e,i){let{data:t}=e;const l=Object.values(t);return c.$$set=s=>{"data"in s&&i(1,t=s.data)},[l,t]}class te extends R{constructor(e){super(),T(this,e,$,Z,U,{data:1})}}export{te as default};