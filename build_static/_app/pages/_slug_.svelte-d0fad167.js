import{S as E,i as k,s as w,k as d,e as h,t as B,N as D,d as r,m as p,c as v,a as g,h as H,b,g as m,F as L,j as T,G as j}from"../chunks/vendor-374daa8e.js";function q(n){let a,i,t,s=n[0].title+"",c,u,o,f=n[0].content.html+"";return document.title=a="JCD Blog | "+n[0].title,{c(){i=d(),t=h("h1"),c=B(s),u=d(),o=h("article"),this.h()},l(e){D('[data-svelte="svelte-brtmn5"]',document.head).forEach(r),i=p(e),t=v(e,"H1",{class:!0});var _=g(t);c=H(_,s),_.forEach(r),u=p(e),o=v(e,"ARTICLE",{class:!0});var C=g(o);C.forEach(r),this.h()},h(){b(t,"class","text-4xl font-semibold mb-5"),b(o,"class","prose")},m(e,l){m(e,i,l),m(e,t,l),L(t,c),m(e,u,l),m(e,o,l),o.innerHTML=f},p(e,[l]){l&1&&a!==(a="JCD Blog | "+e[0].title)&&(document.title=a),l&1&&s!==(s=e[0].title+"")&&T(c,s),l&1&&f!==(f=e[0].content.html+"")&&(o.innerHTML=f)},i:j,o:j,d(e){e&&r(i),e&&r(t),e&&r(u),e&&r(o)}}}const J=async({fetch:n,params:a})=>{const{slug:i}=a,t=await n(`/pages/${i}.json`);if(t.ok){const{page:s}=await t.json();return{props:{page:s}}}};function x(n,a,i){let{page:t}=a;return n.$$set=s=>{"page"in s&&i(0,t=s.page)},[t]}class M extends E{constructor(a){super();k(this,a,x,q,w,{page:0})}}export{M as default,J as load};
