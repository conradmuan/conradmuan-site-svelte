import{S as me,i as be,s as pe,k,q as I,a as S,e as q,l as E,m as w,r as N,h as c,c as T,n as g,b as D,J as u,B as x,L as z,P as ee,Q as ve,u as H}from"../../../../../chunks/index-3ff34f59.js";import{n as U}from"../../../../../chunks/notifications-1daaa43e.js";function te(f,t,s){const n=f.slice();return n[5]=t[s],n[7]=s,n}function le(f,t,s){const n=f.slice();return n[8]=t[s],n[10]=s,n}function ie(f,t,s){const n=f.slice();return n[11]=t[s],n[13]=s,n}function oe(f){let t,s=f[0],n=[];for(let o=0;o<s.length;o+=1)n[o]=_e(te(f,s,o));return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=q()},l(o){for(let l=0;l<n.length;l+=1)n[l].l(o);t=q()},m(o,l){for(let e=0;e<n.length;e+=1)n[e].m(o,l);D(o,t,l)},p(o,l){if(l&7){s=o[0];let e;for(e=0;e<s.length;e+=1){const i=te(o,s,e);n[e]?n[e].p(i,l):(n[e]=_e(i),n[e].c(),n[e].m(t.parentNode,t))}for(;e<n.length;e+=1)n[e].d(1);n.length=s.length}},d(o){z(n,o),o&&c(t)}}}function se(f){let t,s=f[5].subtitle+"",n;return{c(){t=k("h2"),n=I(s),this.h()},l(o){t=E(o,"H2",{class:!0});var l=w(t);n=N(l,s),l.forEach(c),this.h()},h(){g(t,"class","mb-2 font-bold")},m(o,l){D(o,t,l),u(t,n)},p(o,l){l&1&&s!==(s=o[5].subtitle+"")&&H(n,s)},d(o){o&&c(t)}}}function ne(f){let t,s,n=f[5].authors,o=[];for(let l=0;l<n.length;l+=1)o[l]=ae(ie(f,n,l));return{c(){t=k("h3"),s=I(`By:
						`);for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){t=E(l,"H3",{class:!0});var e=w(t);s=N(e,`By:
						`);for(let i=0;i<o.length;i+=1)o[i].l(e);e.forEach(c),this.h()},h(){g(t,"class","mb-2")},m(l,e){D(l,t,e),u(t,s);for(let i=0;i<o.length;i+=1)o[i].m(t,null)},p(l,e){if(e&3){n=l[5].authors;let i;for(i=0;i<n.length;i+=1){const a=ie(l,n,i);o[i]?o[i].p(a,e):(o[i]=ae(a),o[i].c(),o[i].m(t,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(l){l&&c(t),z(o,l)}}}function fe(f){let t;return{c(){t=I(",")},l(s){t=N(s,",")},m(s,n){D(s,t,n)},d(s){s&&c(t)}}}function ae(f){let t=f[11].author.name+"",s,n=!f[1](f[5].authors,f[13]),o,l=n&&fe();return{c(){s=I(t),l&&l.c(),o=q()},l(e){s=N(e,t),l&&l.l(e),o=q()},m(e,i){D(e,s,i),l&&l.m(e,i),D(e,o,i)},p(e,i){i&1&&t!==(t=e[11].author.name+"")&&H(s,t),i&1&&(n=!e[1](e[5].authors,e[13])),n?l||(l=fe(),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},d(e){e&&c(s),l&&l.d(e),e&&c(o)}}}function re(f){let t,s=f[5].description+"",n;return{c(){t=k("p"),n=I(s),this.h()},l(o){t=E(o,"P",{class:!0});var l=w(t);n=N(l,s),l.forEach(c),this.h()},h(){g(t,"class","mb-2")},m(o,l){D(o,t,l),u(t,n)},p(o,l){l&1&&s!==(s=o[5].description+"")&&H(n,s)},d(o){o&&c(t)}}}function ce(f){let t,s,n,o,l=f[5].categories,e=[];for(let i=0;i<l.length;i+=1)e[i]=he(le(f,l,i));return{c(){t=k("p"),s=k("strong"),n=I("Filed under:"),o=S();for(let i=0;i<e.length;i+=1)e[i].c()},l(i){t=E(i,"P",{});var a=w(t);s=E(a,"STRONG",{});var r=w(s);n=N(r,"Filed under:"),r.forEach(c),o=T(a);for(let v=0;v<e.length;v+=1)e[v].l(a);a.forEach(c)},m(i,a){D(i,t,a),u(t,s),u(s,n),u(t,o);for(let r=0;r<e.length;r+=1)e[r].m(t,null)},p(i,a){if(a&3){l=i[5].categories;let r;for(r=0;r<l.length;r+=1){const v=le(i,l,r);e[r]?e[r].p(v,a):(e[r]=he(v),e[r].c(),e[r].m(t,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=l.length}},d(i){i&&c(t),z(e,i)}}}function ue(f){let t;return{c(){t=I(",")},l(s){t=N(s,",")},m(s,n){D(s,t,n)},d(s){s&&c(t)}}}function he(f){let t=f[8].bookCategory.category+"",s,n=!f[1](f[5].categories,f[10]),o,l=n&&ue();return{c(){s=I(t),l&&l.c(),o=q()},l(e){s=N(e,t),l&&l.l(e),o=q()},m(e,i){D(e,s,i),l&&l.m(e,i),D(e,o,i)},p(e,i){i&1&&t!==(t=e[8].bookCategory.category+"")&&H(s,t),i&1&&(n=!e[1](e[5].categories,e[10])),n?l||(l=ue(),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},d(e){e&&c(s),l&&l.d(e),e&&c(o)}}}function _e(f){let t,s,n=f[5].id+"",o,l,e,i,a,r,v,h,y,V=f[5].title+"",j,J,A,F,G,L,O,C,M,Q,R,K,d=f[5].subtitle&&se(f),m=f[5].authors.length>0&&ne(f),b=f[5].description&&re(f),p=f[5].categories.length>0&&ce(f);function de(){return f[4](f[5])}return{c(){t=k("div"),s=k("div"),o=I(n),l=S(),e=k("div"),i=k("img"),v=S(),h=k("div"),y=k("h1"),j=I(V),J=S(),d&&d.c(),A=S(),m&&m.c(),F=S(),b&&b.c(),G=S(),p&&p.c(),L=S(),O=k("div"),C=k("button"),M=I("Delete"),Q=S(),this.h()},l(P){t=E(P,"DIV",{class:!0});var _=w(t);s=E(_,"DIV",{});var W=w(s);o=N(W,n),W.forEach(c),l=T(_),e=E(_,"DIV",{});var X=w(e);i=E(X,"IMG",{src:!0,alt:!0}),X.forEach(c),v=T(_),h=E(_,"DIV",{class:!0});var B=w(h);y=E(B,"H1",{class:!0});var Y=w(y);j=N(Y,V),Y.forEach(c),J=T(B),d&&d.l(B),A=T(B),m&&m.l(B),F=T(B),b&&b.l(B),G=T(B),p&&p.l(B),B.forEach(c),L=T(_),O=E(_,"DIV",{});var Z=w(O);C=E(Z,"BUTTON",{class:!0,type:!0});var $=w(C);M=N($,"Delete"),$.forEach(c),Z.forEach(c),Q=T(_),_.forEach(c),this.h()},h(){ee(i.src,a=f[5].thumbnail)||g(i,"src",a),g(i,"alt",r=f[5].title),g(y,"class","mb-2 font-bold text-xl"),g(h,"class","flex-1 w-1/4"),g(C,"class","button-danger"),g(C,"type","button"),g(t,"class","flex space-x-4 mb-8")},m(P,_){D(P,t,_),u(t,s),u(s,o),u(t,l),u(t,e),u(e,i),u(t,v),u(t,h),u(h,y),u(y,j),u(h,J),d&&d.m(h,null),u(h,A),m&&m.m(h,null),u(h,F),b&&b.m(h,null),u(h,G),p&&p.m(h,null),u(t,L),u(t,O),u(O,C),u(C,M),u(t,Q),R||(K=ve(C,"click",de),R=!0)},p(P,_){f=P,_&1&&n!==(n=f[5].id+"")&&H(o,n),_&1&&!ee(i.src,a=f[5].thumbnail)&&g(i,"src",a),_&1&&r!==(r=f[5].title)&&g(i,"alt",r),_&1&&V!==(V=f[5].title+"")&&H(j,V),f[5].subtitle?d?d.p(f,_):(d=se(f),d.c(),d.m(h,A)):d&&(d.d(1),d=null),f[5].authors.length>0?m?m.p(f,_):(m=ne(f),m.c(),m.m(h,F)):m&&(m.d(1),m=null),f[5].description?b?b.p(f,_):(b=re(f),b.c(),b.m(h,G)):b&&(b.d(1),b=null),f[5].categories.length>0?p?p.p(f,_):(p=ce(f),p.c(),p.m(h,null)):p&&(p.d(1),p=null)},d(P){P&&c(t),d&&d.d(),m&&m.d(),b&&b.d(),p&&p.d(),R=!1,K()}}}function ge(f){let t,s,n,o,l,e=f[0].length>0&&oe(f);return{c(){t=k("div"),s=k("a"),n=I("Create a book record"),o=S(),e&&e.c(),l=q(),this.h()},l(i){t=E(i,"DIV",{class:!0});var a=w(t);s=E(a,"A",{href:!0,class:!0});var r=w(s);n=N(r,"Create a book record"),r.forEach(c),a.forEach(c),o=T(i),e&&e.l(i),l=q(),this.h()},h(){g(s,"href","/admin/books/create"),g(s,"class","button"),g(t,"class","mb-4")},m(i,a){D(i,t,a),u(t,s),u(s,n),D(i,o,a),e&&e.m(i,a),D(i,l,a)},p(i,[a]){i[0].length>0?e?e.p(i,a):(e=oe(i),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},i:x,o:x,d(i){i&&c(t),i&&c(o),e&&e.d(i),i&&c(l)}}}function ke(f,t,s){let{data:n}=t,{books:o}=n;const l=(a,r)=>r===a.length-1,e=async a=>{if(!o.find(V=>V.id===a)){U.warning("Book not found");return}if(!confirm("Are you sure? This cannot be undone"))return;const v=await fetch("/api/books",{method:"DELETE",headers:{"content-type":"appliction/json"},body:JSON.stringify({id:a})});if(v.status>299){U.danger(`Something went wrong: ${v.status} - ${v.statusText}`);return}const h=await v.json(),y=o.filter(V=>V.id!==h.id);s(0,o=y),U.success("Success!")},i=a=>e(a.id);return f.$$set=a=>{"data"in a&&s(3,n=a.data)},[o,l,e,n,i]}class we extends me{constructor(t){super(),be(this,t,ke,ge,pe,{data:3})}}export{we as default};