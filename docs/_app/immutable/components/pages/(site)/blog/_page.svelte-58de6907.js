import{S as I,i as L,s as P,k as u,a as k,l as m,m as p,c as y,h as _,n as v,b,J as f,B as g,W as R,e as E,X as S,q as N,r as j,L as T}from"../../../../chunks/index-3ff34f59.js";import{n as V}from"../../../../chunks/date-b67229a3.js";function w(r,e,a){const t=r.slice();return t[3]=e[a],t}function A(r){let e,a;return{c(){e=u("p"),a=N("None yet.")},l(t){e=m(t,"P",{});var l=p(e);a=j(l,"None yet."),l.forEach(_)},m(t,l){b(t,e,l),f(e,a)},p:g,d(t){t&&_(e)}}}function B(r){let e,a=r[0],t=[];for(let l=0;l<a.length;l+=1)t[l]=D(w(r,a,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=E()},l(l){for(let n=0;n<t.length;n+=1)t[n].l(l);e=E()},m(l,n){for(let s=0;s<t.length;s+=1)t[s].m(l,n);b(l,e,n)},p(l,n){if(n&1){a=l[0];let s;for(s=0;s<a.length;s+=1){const h=w(l,a,s);t[s]?t[s].p(h,n):(t[s]=D(h),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=a.length}},d(l){T(t,l),l&&_(e)}}}function D(r){let e,a,t,l=r[3].title+"",n,s,h=V(r[3].dateCreated)+"",o,i;return{c(){e=u("div"),a=u("h1"),t=u("a"),n=k(),s=u("h2"),o=N(h),i=k(),this.h()},l(c){e=m(c,"DIV",{class:!0});var d=p(e);a=m(d,"H1",{class:!0});var H=p(a);t=m(H,"A",{href:!0});var C=p(t);C.forEach(_),H.forEach(_),n=y(d),s=m(d,"H2",{class:!0});var q=p(s);o=j(q,h),q.forEach(_),i=y(d),d.forEach(_),this.h()},h(){v(t,"href",`/blog/${r[3].slug}`),v(a,"class","title svelte-1jt0iq1"),v(s,"class","date svelte-1jt0iq1"),v(e,"class","mb-8")},m(c,d){b(c,e,d),f(e,a),f(a,t),t.innerHTML=l,f(e,n),f(e,s),f(s,o),f(e,i)},p:g,d(c){c&&_(e)}}}function J(r){let e,a=r[1].valueRendered+"",t;return{c(){e=new R(!1),t=E(),this.h()},l(l){e=S(l,!1),t=E(),this.h()},h(){e.a=t},m(l,n){e.m(a,l,n),b(l,t,n)},p:g,d(l){l&&_(t),l&&e.d()}}}function M(r){let e,a,t,l;function n(i,c){return i[0].length>0?B:A}let h=n(r)(r),o=r[1]&&J(r);return{c(){e=u("div"),h.c(),a=k(),t=u("hr"),l=k(),o&&o.c(),this.h()},l(i){e=m(i,"DIV",{class:!0});var c=p(e);h.l(c),a=y(c),t=m(c,"HR",{}),l=y(c),o&&o.l(c),c.forEach(_),this.h()},h(){v(e,"class","mt-4")},m(i,c){b(i,e,c),h.m(e,null),f(e,a),f(e,t),f(e,l),o&&o.m(e,null)},p(i,[c]){h.p(i,c),i[1]&&o.p(i,c)},i:g,o:g,d(i){i&&_(e),h.d(),o&&o.d()}}}function W(r,e,a){let{data:t}=e;const{posts:l,field:n}=t;return r.$$set=s=>{"data"in s&&a(2,t=s.data)},[l,n,t]}class z extends I{constructor(e){super(),L(this,e,W,M,P,{data:2})}}export{z as default};
