import{S as b,i as q,s as B,W as _,a as R,e as H,X as c,c as S,b as o,B as p,h as v}from"../../../../../chunks/index-82ccb513.js";function C(r){var w,y,h;let t,d=((w=r[0])==null?void 0:w.valueRendered)+"",l,s,u=((y=r[2])==null?void 0:y.valueRendered)+"",n,i,a=((h=r[1])==null?void 0:h.valueRendered)+"",m;return{c(){t=new _(!1),l=R(),s=new _(!1),n=R(),i=new _(!1),m=H(),this.h()},l(e){t=c(e,!1),l=S(e),s=c(e,!1),n=S(e),i=c(e,!1),m=H(),this.h()},h(){t.a=l,s.a=n,i.a=m},m(e,f){t.m(d,e,f),o(e,l,f),s.m(u,e,f),o(e,n,f),i.m(a,e,f),o(e,m,f)},p,i:p,o:p,d(e){e&&t.d(),e&&v(l),e&&s.d(),e&&v(n),e&&v(m),e&&i.d()}}}function P(r,t,d){let{data:l}=t;const{read:s}=l,u=s.find(a=>a.name==="recently-read-2022-intro"),n=s.find(a=>a.name==="recently-read-2022"),i=s.find(a=>a.name==="currently-reading");return r.$$set=a=>{"data"in a&&d(3,l=a.data)},[u,n,i,l]}class W extends b{constructor(t){super(),q(this,t,P,C,B,{data:3})}}export{W as default};