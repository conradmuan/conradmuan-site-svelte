import{S as Q,i as R,s as T,k as _,q as E,a as I,e as w,l as u,m as v,r as y,h as c,c as x,n as p,b as k,J as n,B as S,L as U}from"../../../../chunks/index-dd4a8c05.js";function K(f,e,s){const t=f.slice();return t[3]=e[s],t}function W(f){let e,s,t,a;return{c(){e=_("h1"),s=E("No posts yet. "),t=_("a"),a=E("Create some?"),this.h()},l(i){e=u(i,"H1",{});var l=v(e);s=y(l,"No posts yet. "),t=u(l,"A",{href:!0});var o=v(t);a=y(o,"Create some?"),o.forEach(c),l.forEach(c),this.h()},h(){p(t,"href","/admin/posts/create")},m(i,l){k(i,e,l),n(e,s),n(e,t),n(t,a)},d(i){i&&c(e)}}}function X(f){let e,s=f[0],t=[];for(let a=0;a<s.length;a+=1)t[a]=M(K(f,s,a));return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=w()},l(a){for(let i=0;i<t.length;i+=1)t[i].l(a);e=w()},m(a,i){for(let l=0;l<t.length;l+=1)t[l].m(a,i);k(a,e,i)},p(a,i){if(i&3){s=a[0];let l;for(l=0;l<s.length;l+=1){const o=K(a,s,l);t[l]?t[l].p(o,i):(t[l]=M(o),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=s.length}},d(a){U(t,a),a&&c(e)}}}function M(f){let e,s,t,a=f[3].id+"",i,l,o,h,r=f[3].title+"",d,V,D,C,j=(f[3].content&&f[1](f[3].content))+"",A,N,P,b,q,H;return{c(){e=_("div"),s=_("div"),t=_("p"),i=E(a),l=I(),o=_("div"),h=_("h1"),d=E(r),V=I(),D=_("div"),C=_("p"),A=E(j),N=I(),P=_("div"),b=_("a"),q=E("View / Edit"),H=I(),this.h()},l(g){e=u(g,"DIV",{class:!0});var m=v(e);s=u(m,"DIV",{class:!0});var B=v(s);t=u(B,"P",{});var J=v(t);i=y(J,a),J.forEach(c),B.forEach(c),l=x(m),o=u(m,"DIV",{class:!0});var L=v(o);h=u(L,"H1",{class:!0});var O=v(h);d=y(O,r),O.forEach(c),L.forEach(c),V=x(m),D=u(m,"DIV",{class:!0});var $=v(D);C=u($,"P",{});var z=v(C);A=y(z,j),z.forEach(c),$.forEach(c),N=x(m),P=u(m,"DIV",{});var F=v(P);b=u(F,"A",{type:!0,href:!0,class:!0});var G=v(b);q=y(G,"View / Edit"),G.forEach(c),F.forEach(c),H=x(m),m.forEach(c),this.h()},h(){p(s,"class","flex-none px-2"),p(h,"class","truncate"),p(o,"class","flex-initial w-52 px-2"),p(D,"class","px-2 flex-1"),p(b,"type","button"),p(b,"href","/admin/posts/"+f[3].id),p(b,"class","button no-underline"),p(e,"class","flex border-b border-slate-500 py-2")},m(g,m){k(g,e,m),n(e,s),n(s,t),n(t,i),n(e,l),n(e,o),n(o,h),n(h,d),n(e,V),n(e,D),n(D,C),n(C,A),n(e,N),n(e,P),n(P,b),n(b,q),n(e,H)},p:S,d(g){g&&c(e)}}}function Y(f){let e,s,t,a,i,l,o=f[0].length===0&&W(),h=f[0].length>0&&X(f);return{c(){e=_("div"),s=_("a"),t=E("Create Post"),a=I(),o&&o.c(),i=I(),h&&h.c(),l=w(),this.h()},l(r){e=u(r,"DIV",{});var d=v(e);s=u(d,"A",{type:!0,class:!0,href:!0});var V=v(s);t=y(V,"Create Post"),V.forEach(c),d.forEach(c),a=x(r),o&&o.l(r),i=x(r),h&&h.l(r),l=w(),this.h()},h(){p(s,"type","button"),p(s,"class","button mb-4"),p(s,"href","/admin/posts/create")},m(r,d){k(r,e,d),n(e,s),n(s,t),k(r,a,d),o&&o.m(r,d),k(r,i,d),h&&h.m(r,d),k(r,l,d)},p(r,[d]){r[0].length>0&&h.p(r,d)},i:S,o:S,d(r){r&&c(e),r&&c(a),o&&o.d(r),r&&c(i),h&&h.d(r),r&&c(l)}}}function Z(f,e,s){let{data:t}=e;const a=Object.values(t),i=l=>`${l.substring(0,300)}...`;return f.$$set=l=>{"data"in l&&s(2,t=l.data)},[a,i,t]}class te extends Q{constructor(e){super(),R(this,e,Z,Y,T,{data:2})}}export{te as default};
