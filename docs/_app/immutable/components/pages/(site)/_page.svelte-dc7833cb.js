import{S as H,i as C,s as g,a as p,k as y,e as c,c as k,l as b,b as u,B as d,h as _,R as w,T as F,q as v,m as q,r as $,n as E,J as h,w as I,x as P,y as S,f as T,t as z,z as A}from"../../../chunks/index-ca645e50.js";function B(n){let a,o=n[0].valueRendered+"",t;return{c(){a=new w(!1),t=c(),this.h()},l(i){a=F(i,!1),t=c(),this.h()},h(){a.a=t},m(i,r){a.m(o,i,r),u(i,t,r)},p:d,d(i){i&&_(t),i&&a.d()}}}function J(n){let a,o=n[2].valueRendered+"",t,i,r,s,l,m;return{c(){a=new w(!1),t=p(),i=y("p"),r=v("If you're looking for something interesting to read, take a look at my 2022 reading list "),s=y("a"),l=v("here"),m=v("."),this.h()},l(e){a=F(e,!1),t=k(e),i=b(e,"P",{});var f=q(i);r=$(f,"If you're looking for something interesting to read, take a look at my 2022 reading list "),s=b(f,"A",{href:!0});var R=q(s);l=$(R,"here"),R.forEach(_),m=$(f,"."),f.forEach(_),this.h()},h(){a.a=t,E(s,"href","/read/2022")},m(e,f){a.m(o,e,f),u(e,t,f),u(e,i,f),h(i,r),h(i,s),h(s,l),h(i,m)},p:d,d(e){e&&a.d(),e&&_(t),e&&_(i)}}}function j(n){let a,o=n[1].valueRendered+"",t;return{c(){a=new w(!1),t=c(),this.h()},l(i){a=F(i,!1),t=c(),this.h()},h(){a.a=t},m(i,r){a.m(o,i,r),u(i,t,r)},p:d,d(i){i&&_(t),i&&a.d()}}}function D(n){let a,o,t,i,r,s=n[0]&&B(n),l=n[2]&&J(n),m=n[1]&&j(n);return{c(){s&&s.c(),a=p(),l&&l.c(),o=p(),t=y("hr"),i=p(),m&&m.c(),r=c()},l(e){s&&s.l(e),a=k(e),l&&l.l(e),o=k(e),t=b(e,"HR",{}),i=k(e),m&&m.l(e),r=c()},m(e,f){s&&s.m(e,f),u(e,a,f),l&&l.m(e,f),u(e,o,f),u(e,t,f),u(e,i,f),m&&m.m(e,f),u(e,r,f)},p(e,[f]){e[0]&&s.p(e,f),e[2]&&l.p(e,f),e[1]&&m.p(e,f)},i:d,o:d,d(e){s&&s.d(e),e&&_(a),l&&l.d(e),e&&_(o),e&&_(t),e&&_(i),m&&m.d(e),e&&_(r)}}}function G(n,a,o){let{homeFields:t}=a;const i=t.find(l=>l.name==="home-page-cv"),r=t.find(l=>l.name==="quick-cv"),s=t.find(l=>l.name==="currently-reading");return n.$$set=l=>{"homeFields"in l&&o(3,t=l.homeFields)},[i,r,s,t]}class K extends H{constructor(a){super(),C(this,a,G,D,g,{homeFields:3})}}function L(n){let a,o;return a=new K({props:{homeFields:n[0]}}),{c(){I(a.$$.fragment)},l(t){P(a.$$.fragment,t)},m(t,i){S(a,t,i),o=!0},p:d,i(t){o||(T(a.$$.fragment,t),o=!0)},o(t){z(a.$$.fragment,t),o=!1},d(t){A(a,t)}}}function M(n,a,o){let{data:t}=a;const{homeFields:i,posts:r}=t;return n.$$set=s=>{"data"in s&&o(1,t=s.data)},[i,t]}class O extends H{constructor(a){super(),C(this,a,M,L,g,{data:1})}}export{O as default};
