import{S as ne,i as re,s as ce,e as ee,b as F,B as te,h as c,K as fe,k as _,l as d,m as u,n as h,L as _e,q as V,a as k,r as B,c as A,J as n,u as de,F as ue,w as he,x as ve,y as me,G as pe,H as ge,I as ye,f as se,t as le,z as $e}from"../../../chunks/index-82ccb513.js";import{n as Ee}from"../../../chunks/notifications-54babbdf.js";/* empty css                            */function ae(r,s,t){const e=r.slice();return e[2]=s[t],e}function ie(r){let s,t=r[0],e=[];for(let l=0;l<t.length;l+=1)e[l]=oe(ae(r,t,l));return{c(){s=_("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){s=d(l,"DIV",{class:!0});var i=u(s);for(let a=0;a<e.length;a+=1)e[a].l(i);i.forEach(c),this.h()},h(){h(s,"class","notifications bg-white svelte-scuycf")},m(l,i){F(l,s,i);for(let a=0;a<e.length;a+=1)e[a].m(s,null)},p(l,i){if(i&1){t=l[0];let a;for(a=0;a<t.length;a+=1){const f=ae(l,t,a);e[a]?e[a].p(f,i):(e[a]=oe(f),e[a].c(),e[a].m(s,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=t.length}},d(l){l&&c(s),_e(e,l)}}}function oe(r){let s,t=r[2].message+"",e,l,i;return{c(){s=_("div"),e=V(t),l=k(),this.h()},l(a){s=d(a,"DIV",{class:!0});var f=u(s);e=B(f,t),l=A(f),f.forEach(c),this.h()},h(){h(s,"class",i="border p-4 w-96 notification-type-"+r[2].type+" svelte-scuycf")},m(a,f){F(a,s,f),n(s,e),n(s,l)},p(a,f){f&1&&t!==(t=a[2].message+"")&&de(e,t),f&1&&i!==(i="border p-4 w-96 notification-type-"+a[2].type+" svelte-scuycf")&&h(s,"class",i)},d(a){a&&c(s)}}}function be(r){let s,t=r[0].length>0&&ie(r);return{c(){t&&t.c(),s=ee()},l(e){t&&t.l(e),s=ee()},m(e,l){t&&t.m(e,l),F(e,s,l)},p(e,[l]){e[0].length>0?t?t.p(e,l):(t=ie(e),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null)},i:te,o:te,d(e){t&&t.d(e),e&&c(s)}}}function Ie(r,s,t){let e;fe(r,Ee,i=>t(1,e=i));let l;return r.$$.update=()=>{r.$$.dirty&2&&t(0,l=e)},[l,e]}class ke extends ne{constructor(s){super(),re(this,s,Ie,be,ce,{})}}function Ae(r){let s,t,e,l,i,a,f,P,S,L,g,z,C,w,y,G,H,D,$,J,K,b,N,E,I;const M=r[1].default,v=ue(M,r,r[0],null);return E=new ke({}),{c(){s=_("main"),t=_("div"),e=_("div"),l=_("div"),i=_("ul"),a=_("li"),f=_("a"),P=V("Admin"),S=k(),L=_("li"),g=_("a"),z=V("Posts"),C=k(),w=_("li"),y=_("a"),G=V("Fields"),H=k(),D=_("li"),$=_("a"),J=V("Books"),K=k(),b=_("div"),v&&v.c(),N=k(),he(E.$$.fragment),this.h()},l(o){s=d(o,"MAIN",{class:!0});var m=u(s);t=d(m,"DIV",{class:!0});var q=u(t);e=d(q,"DIV",{class:!0});var U=u(e);l=d(U,"DIV",{class:!0});var j=u(l);i=d(j,"UL",{});var p=u(i);a=d(p,"LI",{});var O=u(a);f=d(O,"A",{href:!0,class:!0});var Q=u(f);P=B(Q,"Admin"),Q.forEach(c),O.forEach(c),S=A(p),L=d(p,"LI",{});var R=u(L);g=d(R,"A",{href:!0,class:!0});var T=u(g);z=B(T,"Posts"),T.forEach(c),R.forEach(c),C=A(p),w=d(p,"LI",{});var W=u(w);y=d(W,"A",{href:!0,class:!0});var X=u(y);G=B(X,"Fields"),X.forEach(c),W.forEach(c),H=A(p),D=d(p,"LI",{});var Y=u(D);$=d(Y,"A",{href:!0,class:!0});var Z=u($);J=B(Z,"Books"),Z.forEach(c),Y.forEach(c),p.forEach(c),j.forEach(c),U.forEach(c),K=A(q),b=d(q,"DIV",{class:!0});var x=u(b);v&&v.l(x),x.forEach(c),q.forEach(c),m.forEach(c),N=A(o),ve(E.$$.fragment,o),this.h()},h(){h(f,"href","/admin"),h(f,"class","svelte-1it8e93"),h(g,"href","/admin/posts"),h(g,"class","svelte-1it8e93"),h(y,"href","/admin/fields"),h(y,"class","svelte-1it8e93"),h($,"href","/admin/books"),h($,"class","svelte-1it8e93"),h(l,"class","absolute bg-slate-300 shadow-lg p-8 lg:inset-y-0 lg:inset-x-0"),h(e,"class","lg:col-span-3 relative"),h(b,"class","lg:col-span-9 p-8"),h(t,"class","grid grid-cols-1 lg:grid-cols-12 gap-2 lg:h-screen"),h(s,"class","container")},m(o,m){F(o,s,m),n(s,t),n(t,e),n(e,l),n(l,i),n(i,a),n(a,f),n(f,P),n(i,S),n(i,L),n(L,g),n(g,z),n(i,C),n(i,w),n(w,y),n(y,G),n(i,H),n(i,D),n(D,$),n($,J),n(t,K),n(t,b),v&&v.m(b,null),F(o,N,m),me(E,o,m),I=!0},p(o,[m]){v&&v.p&&(!I||m&1)&&pe(v,M,o,o[0],I?ye(M,o[0],m,null):ge(o[0]),null)},i(o){I||(se(v,o),se(E.$$.fragment,o),I=!0)},o(o){le(v,o),le(E.$$.fragment,o),I=!1},d(o){o&&c(s),v&&v.d(o),o&&c(N),$e(E,o)}}}function Le(r,s,t){let{$$slots:e={},$$scope:l}=s;return r.$$set=i=>{"$$scope"in i&&t(0,l=i.$$scope)},[l,e]}class Be extends ne{constructor(s){super(),re(this,s,Le,Ae,ce,{})}}export{Be as default};
