import{S as Ee,i as Ie,s as Be,k as g,a as P,q as G,l as y,m as T,h as c,c as V,r as U,n as h,b as k,J as m,U as ve,B as W,Y as Te,Z as ee,Q,V as ke,e as J,P as j,u as Z,L as we,T as ge}from"../../../../../chunks/index-3ff34f59.js";const{Map:ye}=Te;function le(r,e,t){const s=r.slice();return s[22]=e[t],s[24]=t,s}function te(r,e,t){const s=r.slice();return s[25]=e[t],s}function ie(r,e,t){const s=r.slice();return s[28]=e[t],s}function se(r,e){let t,s=e[28].category+"",f,l,i,o;function u(){return e[14](e[28])}return{key:r,first:null,c(){t=g("button"),f=G(s),this.h()},l(a){t=y(a,"BUTTON",{class:!0,type:!0});var d=T(t);f=U(d,s),d.forEach(c),this.h()},h(){h(t,"class",l=ee(`m-1 ${e[10](e[28].id,e[0])?"button-primary":"button"}`)+" svelte-10woleb"),h(t,"type","button"),this.first=t},m(a,d){k(a,t,d),m(t,f),i||(o=Q(t,"click",u),i=!0)},p(a,d){e=a,d&1&&l!==(l=ee(`m-1 ${e[10](e[28].id,e[0])?"button-primary":"button"}`)+" svelte-10woleb")&&h(t,"class",l)},d(a){a&&c(t),i=!1,o()}}}function oe(r){let e,t,s,f;return{c(){e=g("button"),t=G("Clear"),this.h()},l(l){e=y(l,"BUTTON",{class:!0,type:!0});var i=T(e);t=U(i,"Clear"),i.forEach(c),this.h()},h(){h(e,"class","m-1 button-alternative"),h(e,"type","button")},m(l,i){k(l,e,i),m(e,t),s||(f=Q(e,"click",r[15]),s=!0)},p:W,d(l){l&&c(e),s=!1,f()}}}function fe(r){let e,t=[],s=new ye,f=r[3];const l=i=>i[25].id;for(let i=0;i<f.length;i+=1){let o=te(r,f,i),u=l(o);s.set(u,t[i]=ne(u,o))}return{c(){e=g("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=y(i,"DIV",{class:!0});var o=T(e);for(let u=0;u<t.length;u+=1)t[u].l(o);o.forEach(c),this.h()},h(){h(e,"class","columns-3 gap-4 not-prose")},m(i,o){k(i,e,o);for(let u=0;u<t.length;u+=1)t[u].m(e,null)},p(i,o){o&2569&&(f=i[3],t=ve(t,o,l,1,i,f,s,e,ke,ne,null,te))},d(i){i&&c(e);for(let o=0;o<t.length;o+=1)t[o].d()}}}function re(r){let e,t,s,f,l,i;function o(){return r[16](r[25])}return{c(){e=g("div"),t=g("button"),s=g("img"),this.h()},l(u){e=y(u,"DIV",{class:!0});var a=T(e);t=y(a,"BUTTON",{class:!0});var d=T(t);s=y(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(c),a.forEach(c),this.h()},h(){j(s.src,f=r[25].thumbnail||`https://via.placeholder.com/130x200.png?text=${r[25].title}`)||h(s,"src",f),h(s,"alt",r[25].title),h(s,"class","w-full"),h(t,"class","inline-block w-full"),h(e,"class","mb-4")},m(u,a){k(u,e,a),m(e,t),m(t,s),l||(i=Q(t,"click",ge(o)),l=!0)},p(u,a){r=u},d(u){u&&c(e),l=!1,i()}}}function ae(r){let e,t,s,f,l,i,o;function u(){return r[17](r[25])}return{c(){e=g("div"),t=g("button"),s=g("img"),l=P(),this.h()},l(a){e=y(a,"DIV",{class:!0});var d=T(e);t=y(d,"BUTTON",{class:!0});var v=T(t);s=y(v,"IMG",{src:!0,alt:!0,class:!0}),v.forEach(c),l=V(d),d.forEach(c),this.h()},h(){j(s.src,f=r[25].thumbnail||`https://via.placeholder.com/130x200.png?text=${r[25].title}`)||h(s,"src",f),h(s,"alt",r[25].title),h(s,"class","w-full"),h(t,"class","inline-block w-full"),h(e,"class","mb-4")},m(a,d){k(a,e,d),m(e,t),m(t,s),m(e,l),i||(o=Q(t,"click",ge(u)),i=!0)},p(a,d){r=a},d(a){a&&c(e),i=!1,o()}}}function ne(r,e){let t,s,f=e[0].length>0&&e[9](e[25]),l,i=e[0].length===0&&re(e),o=f&&ae(e);return{key:r,first:null,c(){t=J(),i&&i.c(),s=P(),o&&o.c(),l=J(),this.h()},l(u){t=J(),i&&i.l(u),s=V(u),o&&o.l(u),l=J(),this.h()},h(){this.first=t},m(u,a){k(u,t,a),i&&i.m(u,a),k(u,s,a),o&&o.m(u,a),k(u,l,a)},p(u,a){e=u,e[0].length===0?i?i.p(e,a):(i=re(e),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null),a&1&&(f=e[0].length>0&&e[9](e[25])),f?o?o.p(e,a):(o=ae(e),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},d(u){u&&c(t),i&&i.d(u),u&&c(s),o&&o.d(u),u&&c(l)}}}function ue(r){let e,t,s,f,l,i,o,u,a,d,v,F,A=r[1].title+"",q,S,H,D,O,R,w=r[1].subtitle&&ce(r),E=r[1].authors.length>0&&_e(r),N=r[1].description&&pe(r);return{c(){e=g("div"),t=g("button"),s=G("\u2190 Back"),f=P(),l=g("div"),i=g("div"),o=g("img"),d=P(),v=g("div"),F=g("h1"),q=G(A),S=P(),w&&w.c(),H=P(),E&&E.c(),D=P(),N&&N.c(),this.h()},l(b){e=y(b,"DIV",{class:!0});var C=T(e);t=y(C,"BUTTON",{type:!0,class:!0});var _=T(t);s=U(_,"\u2190 Back"),_.forEach(c),C.forEach(c),f=V(b),l=y(b,"DIV",{class:!0});var p=T(l);i=y(p,"DIV",{class:!0});var I=T(i);o=y(I,"IMG",{src:!0,alt:!0,class:!0}),I.forEach(c),d=V(p),v=y(p,"DIV",{class:!0});var M=T(v);F=y(M,"H1",{});var n=T(F);q=U(n,A),n.forEach(c),S=V(M),w&&w.l(M),H=V(M),E&&E.l(M),D=V(M),N&&N.l(M),M.forEach(c),p.forEach(c),this.h()},h(){h(t,"type","button"),h(t,"class","button-alternative"),h(e,"class","mb-8"),j(o.src,u=r[1].thumbnail||`https://via.placeholder.com/130x200.png?text=${r[1].title}`)||h(o,"src",u),h(o,"alt",a=r[1].title),h(o,"class","book-img svelte-10woleb"),h(i,"class","flex-initial"),h(v,"class","flex-1"),h(l,"class","flex space-x-8")},m(b,C){k(b,e,C),m(e,t),m(t,s),k(b,f,C),k(b,l,C),m(l,i),m(i,o),m(l,d),m(l,v),m(v,F),m(F,q),m(v,S),w&&w.m(v,null),m(v,H),E&&E.m(v,null),m(v,D),N&&N.m(v,null),O||(R=Q(t,"click",r[18]),O=!0)},p(b,C){C&2&&!j(o.src,u=b[1].thumbnail||`https://via.placeholder.com/130x200.png?text=${b[1].title}`)&&h(o,"src",u),C&2&&a!==(a=b[1].title)&&h(o,"alt",a),C&2&&A!==(A=b[1].title+"")&&Z(q,A),b[1].subtitle?w?w.p(b,C):(w=ce(b),w.c(),w.m(v,H)):w&&(w.d(1),w=null),b[1].authors.length>0?E?E.p(b,C):(E=_e(b),E.c(),E.m(v,D)):E&&(E.d(1),E=null),b[1].description?N?N.p(b,C):(N=pe(b),N.c(),N.m(v,null)):N&&(N.d(1),N=null)},d(b){b&&c(e),b&&c(f),b&&c(l),w&&w.d(),E&&E.d(),N&&N.d(),O=!1,R()}}}function ce(r){let e,t=r[1].subtitle+"",s;return{c(){e=g("h2"),s=G(t)},l(f){e=y(f,"H2",{});var l=T(e);s=U(l,t),l.forEach(c)},m(f,l){k(f,e,l),m(e,s)},p(f,l){l&2&&t!==(t=f[1].subtitle+"")&&Z(s,t)},d(f){f&&c(e)}}}function _e(r){let e,t,s=r[1].authors,f=[];for(let l=0;l<s.length;l+=1)f[l]=de(le(r,s,l));return{c(){e=g("h3"),t=G(`By:
					`);for(let l=0;l<f.length;l+=1)f[l].c();this.h()},l(l){e=y(l,"H3",{class:!0});var i=T(e);t=U(i,`By:
					`);for(let o=0;o<f.length;o+=1)f[o].l(i);i.forEach(c),this.h()},h(){h(e,"class","mb-2")},m(l,i){k(l,e,i),m(e,t);for(let o=0;o<f.length;o+=1)f[o].m(e,null)},p(l,i){if(i&66){s=l[1].authors;let o;for(o=0;o<s.length;o+=1){const u=le(l,s,o);f[o]?f[o].p(u,i):(f[o]=de(u),f[o].c(),f[o].m(e,null))}for(;o<f.length;o+=1)f[o].d(1);f.length=s.length}},d(l){l&&c(e),we(f,l)}}}function he(r){let e;return{c(){e=G(",")},l(t){e=U(t,",")},m(t,s){k(t,e,s)},d(t){t&&c(e)}}}function de(r){let e=r[22].author.name+"",t,s=!r[6](r[1].authors,r[24]),f,l=s&&he();return{c(){t=G(e),l&&l.c(),f=J()},l(i){t=U(i,e),l&&l.l(i),f=J()},m(i,o){k(i,t,o),l&&l.m(i,o),k(i,f,o)},p(i,o){o&2&&e!==(e=i[22].author.name+"")&&Z(t,e),o&2&&(s=!i[6](i[1].authors,i[24])),s?l||(l=he(),l.c(),l.m(f.parentNode,f)):l&&(l.d(1),l=null)},d(i){i&&c(t),l&&l.d(i),i&&c(f)}}}function pe(r){let e,t,s=r[2]&&me(r),f=!r[2]&&be(r);return{c(){s&&s.c(),e=P(),f&&f.c(),t=J()},l(l){s&&s.l(l),e=V(l),f&&f.l(l),t=J()},m(l,i){s&&s.m(l,i),k(l,e,i),f&&f.m(l,i),k(l,t,i)},p(l,i){l[2]?s?s.p(l,i):(s=me(l),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),l[2]?f&&(f.d(1),f=null):f?f.p(l,i):(f=be(l),f.c(),f.m(t.parentNode,t))},d(l){s&&s.d(l),l&&c(e),f&&f.d(l),l&&c(t)}}}function me(r){let e,t=r[7](r[1].description)+"",s,f,l,i,o,u;return{c(){e=g("p"),s=G(t),f=P(),l=g("button"),i=G("Read More"),this.h()},l(a){e=y(a,"P",{});var d=T(e);s=U(d,t),d.forEach(c),f=V(a),l=y(a,"BUTTON",{class:!0,type:!0});var v=T(l);i=U(v,"Read More"),v.forEach(c),this.h()},h(){h(l,"class","button"),h(l,"type","button")},m(a,d){k(a,e,d),m(e,s),k(a,f,d),k(a,l,d),m(l,i),o||(u=Q(l,"click",r[19]),o=!0)},p(a,d){d&2&&t!==(t=a[7](a[1].description)+"")&&Z(s,t)},d(a){a&&c(e),a&&c(f),a&&c(l),o=!1,u()}}}function be(r){let e,t=r[1].description+"",s;return{c(){e=g("p"),s=G(t)},l(f){e=y(f,"P",{});var l=T(e);s=U(l,t),l.forEach(c)},m(f,l){k(f,e,l),m(e,s)},p(f,l){l&2&&t!==(t=f[1].description+"")&&Z(s,t)},d(f){f&&c(e)}}}function Ne(r){var M;let e,t=((M=r[5])==null?void 0:M.valueRendered)+"",s,f,l,i,o,u,a=[],d=new ye,v,F,A,q,S,H,D,O,R,w,E,N,b=r[4];const C=n=>n[28].id;for(let n=0;n<b.length;n+=1){let B=ie(r,b,n),L=C(B);d.set(L,a[n]=se(L,B))}let _=r[0].length>0&&oe(r),p=!r[1]&&fe(r),I=r[1]&&ue(r);return{c(){e=g("div"),s=P(),f=g("hr"),l=P(),i=g("div"),o=g("p"),u=G(`Filter by Category*:
		`);for(let n=0;n<a.length;n+=1)a[n].c();v=P(),_&&_.c(),F=P(),A=g("p"),q=G("*Categories autogenerated by Google API"),S=P(),p&&p.c(),H=P(),I&&I.c(),D=P(),O=g("div"),R=g("p"),w=G("Book data provided by "),E=g("a"),N=G("Google Books API"),this.h()},l(n){e=y(n,"DIV",{class:!0});var B=T(e);B.forEach(c),s=V(n),f=y(n,"HR",{}),l=V(n),i=y(n,"DIV",{class:!0});var L=T(i);o=y(L,"P",{});var Y=T(o);u=U(Y,`Filter by Category*:
		`);for(let K=0;K<a.length;K+=1)a[K].l(Y);v=V(Y),_&&_.l(Y),Y.forEach(c),F=V(L),A=y(L,"P",{class:!0});var X=T(A);q=U(X,"*Categories autogenerated by Google API"),X.forEach(c),L.forEach(c),S=V(n),p&&p.l(n),H=V(n),I&&I.l(n),D=V(n),O=y(n,"DIV",{class:!0});var $=T(O);R=y($,"P",{class:!0});var z=T(R);w=U(z,"Book data provided by "),E=y(z,"A",{href:!0,rel:!0,target:!0});var x=T(E);N=U(x,"Google Books API"),x.forEach(c),z.forEach(c),$.forEach(c),this.h()},h(){h(e,"class","mb-4"),h(A,"class","text-sm"),h(i,"class","my-4"),h(E,"href","https://developers.google.com/books"),h(E,"rel","noreferrer noopener"),h(E,"target","_blank"),h(R,"class","text-sm"),h(O,"class","my-8")},m(n,B){k(n,e,B),e.innerHTML=t,k(n,s,B),k(n,f,B),k(n,l,B),k(n,i,B),m(i,o),m(o,u);for(let L=0;L<a.length;L+=1)a[L].m(o,null);m(o,v),_&&_.m(o,null),m(i,F),m(i,A),m(A,q),k(n,S,B),p&&p.m(n,B),k(n,H,B),I&&I.m(n,B),k(n,D,B),k(n,O,B),m(O,R),m(R,w),m(R,E),m(E,N)},p(n,[B]){B&1297&&(b=n[4],a=ve(a,B,C,1,n,b,d,o,ke,se,v,ie)),n[0].length>0?_?_.p(n,B):(_=oe(n),_.c(),_.m(o,null)):_&&(_.d(1),_=null),n[1]?p&&(p.d(1),p=null):p?p.p(n,B):(p=fe(n),p.c(),p.m(H.parentNode,H)),n[1]?I?I.p(n,B):(I=ue(n),I.c(),I.m(D.parentNode,D)):I&&(I.d(1),I=null)},i:W,o:W,d(n){n&&c(e),n&&c(s),n&&c(f),n&&c(l),n&&c(i);for(let B=0;B<a.length;B+=1)a[B].d();_&&_.d(),n&&c(S),p&&p.d(n),n&&c(H),I&&I.d(n),n&&c(D),n&&c(O)}}}function Ce(r,e,t){let{data:s}=e;const{read:f,books:l}=s,i=new Map;l.forEach(_=>{_.categories.forEach(p=>{i.set(p.bookCategory.id,p.bookCategory.category)})});const o=Array.from(i,([_,p])=>({id:_,category:p}));let u=[];const a=f.find(_=>_.name==="currently-reading");let d,v=!0;const F=(_,p)=>p===_.length-1,A=_=>`${_.substring(0,280)}...`,q=_=>{const p=o.filter(I=>I.id===_);t(0,u=[...u,...p])},S=_=>{const p=_.categories.map(M=>M.bookCategory);let I=!1;return p.forEach(M=>{I=!!u.find(n=>n.id===M.id)}),I},H=(_,p)=>!!p.find(I=>I.id===_),D=_=>{t(2,v=!0),t(1,d=l.find(p=>p.id===_))},O=()=>{t(2,v=!v)},R=_=>q(_.id),w=()=>{t(0,u=[])},E=_=>D(_.id),N=_=>D(_.id),b=()=>{t(1,d=void 0)},C=()=>O();return r.$$set=_=>{"data"in _&&t(13,s=_.data)},[u,d,v,l,o,a,F,A,q,S,H,D,O,s,R,w,E,N,b,C]}class Ve extends Ee{constructor(e){super(),Ie(this,e,Ce,Ne,Be,{data:13})}}export{Ve as default};