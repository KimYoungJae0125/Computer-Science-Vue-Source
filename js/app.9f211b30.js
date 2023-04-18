(function(){"use strict";var t={2775:function(t,e,n){n.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"menu-ul"},t._l(t.menuList,(function(n){return e("li",{key:n.id,staticClass:"menu-li"},[e("router-link",{staticClass:"menu-a",attrs:{to:n.link}},[t._v(t._s(n.title)+" ")])],1)})),0)},i=[],o={name:"MenuComponent",props:{menuList:Array}},s=o,a=n(1001),l=(0,a.Z)(s,r,i,!1,null,null,null),c=l.exports},6775:function(t,e,n){var r=n(7195),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],s={name:"App"},a=s,l=n(1001),c=(0,l.Z)(a,i,o,!1,null,null,null),u=c.exports,d=n(2241),f=JSON.parse('[{"id":1,"title":"graph","link":"graph"}]'),p=function(){var t=this,e=t._self._c;return e("div",[e("MenuComponent",{attrs:{menuList:t.subMenuList}}),e("main",{attrs:{id:"main"}},[e("router-view")],1)],1)},m=[],v=n(2775),h={name:"MainLayout",components:{MenuComponent:v.Z},props:{subMenuList:Array}},g=h,_=(0,l.Z)(g,p,m,!1,null,"8ebae364",null),b=_.exports,C=function(){var t=this;t._self._c;return t._m(0)},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v("자료구조 페이지")])])}],S={name:"DataStructure",props:{msg:String}},k=S,L=(0,l.Z)(k,C,y,!1,null,"49ee11ee",null),T=L.exports;const w={path:"data-structure",component:b,redirect:"data-structure/main",props:{subMenuList:f},children:[{path:"main",component:T}]};var D=w,O=JSON.parse('[{"id":1,"title":"dfs/bfs","link":"dfs-bfs"}]'),Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("TitleComponent",{attrs:{title:t.title}})],1)},x=[],A=function(){var t=this,e=t._self._c;return e("h1",[t._v(t._s(t.title))])},B=[],F={name:"TitleComponent",props:{title:String}},M=F,E=(0,l.Z)(M,A,B,!1,null,"004a2625",null),P=E.exports,j={name:"AlgorithmPage",components:{TitleComponent:P},props:{title:String}},N=j,H=(0,l.Z)(N,Z,x,!1,null,"9e4e1be4",null),$=H.exports,I=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"wrapper"}},[e("TitleComponent",{attrs:{title:t.title}}),e("DfsComponent",{ref:"dfs",attrs:{title:"깊이 우선 탐색(DFS, Depth-First Search)이란?"}}),e("BfsComponent",{ref:"bfs",attrs:{title:"너비 우선 탐색(BFS, Breadth-First Search)"}}),e("div",[e("h3",[t._v("그림으로 보는 탐색 방법")]),e("button",{on:{click:function(e){return t.searchDFS()}}},[t._v("dfs 탐색")]),e("button",{on:{click:function(e){return t.searchBFS()}}},[t._v("bfs 탐색")]),t._m(0)])],1)},q=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{height:"40vh"}},[e("div",{attrs:{id:"circleWrapper"}},[e("div",{attrs:{id:"circle1"}}),e("div",{attrs:{id:"circle2"}}),e("div",{attrs:{id:"circle3"}}),e("div",{attrs:{id:"circle4"}}),e("div",{attrs:{id:"circle5"}}),e("div",{attrs:{id:"circle6"}}),e("div",{attrs:{id:"circle7"}}),e("div",{attrs:{id:"circle8"}}),e("div",{attrs:{id:"circle9"}}),e("div",{attrs:{id:"circle10"}}),e("div",{staticClass:"line",attrs:{id:"line1"}}),e("div",{staticClass:"line",attrs:{id:"line2"}}),e("div",{staticClass:"line",attrs:{id:"line3"}}),e("div",{staticClass:"line",attrs:{id:"line4"}}),e("div",{staticClass:"line",attrs:{id:"line5"}}),e("div",{staticClass:"line",attrs:{id:"line6"}}),e("div",{staticClass:"line",attrs:{id:"line7"}}),e("div",{staticClass:"line",attrs:{id:"line8"}}),e("div",{staticClass:"line",attrs:{id:"line9"}})])])}],J=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.title))]),e("DescriptionComponent",{attrs:{title:"기본 개념",descriptions:t.descriptions}})],1)},W=[],K=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"descriptionWrapper"}},[e("h3",[t._v(t._s(t.title))]),e("ul",t._l(t.descriptions,(function(n,r){return e("li",{key:r},[t._v(" "+t._s(n)+" ")])})),0)])},Q=[],U={name:"DescriptionComponent",props:{title:String,descriptions:Array}},z=U,G=(0,l.Z)(z,K,Q,!1,null,"3ab3c859",null),R=G.exports;const V=["최대한 깊이 내려간 뒤, 더 이상 깊이 갈 곳이 없을 경우 옆으로 이동한다.","즉, 시작 노드에서 다음 분기로 넘어가기 전까지 해당 분기를 완벽하게 탐색하는 방식","Stack 자료구조 또는 재귀를 이용하여 구현한다."];var X={name:"DfsComponent",components:{DescriptionComponent:R},props:{title:String},data:()=>({descriptions:V}),methods:{search:()=>{for(let t=1;t<=10;t++){const e=document.getElementById(`circle${t}`);null!=e&&(e.innerHTML="",e.classList.remove("search"),setTimeout((()=>{e.innerHTML=t,e.classList.add("search")}),1500*t))}}}},Y=X,tt=(0,l.Z)(Y,J,W,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.title))]),e("DescriptionComponent",{attrs:{title:"기본 개념",descriptions:t.descriptions}})],1)},rt=[];const it=["같은 층을 모두 검색한 다음, 더 이상 갈 수 없으면 다음 층으로 이동","즉, 시작 노드가 존재하는 모든 층의 노드를 검색 한 후 다음 층으로 검색하여 탐색하는 방식","Queue 자료구조를 이용하여 구현한다.."];var ot={name:"BfsComponent",components:{DescriptionComponent:R},props:{title:String},data:()=>({descriptions:it}),methods:{search:()=>{const t=[[5],[1,6,8],[2,9],[3,7,10],[4]].flat();t.forEach(((t,e)=>{e++;const n=document.getElementById(`circle${t}`);null!=n&&(n.innerHTML="",n.classList.remove("search"),setTimeout((()=>{n.innerHTML=e,n.classList.add("search")}),500*e))}))}}},st=ot,at=(0,l.Z)(st,nt,rt,!1,null,null,null),lt=at.exports,ct={name:"DfsBfsPage",components:{TitleComponent:P,DfsComponent:et,BfsComponent:lt},props:{title:String},methods:{searchDFS(){this.$refs.dfs.search()},searchBFS(){this.$refs.bfs.search()}}},ut=ct,dt=(0,l.Z)(ut,I,q,!1,null,"1d642e70",null),ft=dt.exports;const pt={path:"algorithm",component:b,redirect:"algorithm/main",props:{subMenuList:O},children:[{path:"main",component:$,props:{title:"알고리즘"}},{path:"dfs-bfs",component:ft,props:{title:"DFS/BFS"}}]};var mt=pt;r.ZP.use(d.ZP);var vt=new d.ZP({mode:"hash",routes:[{path:"/",name:"home",component:()=>n.e(585).then(n.bind(n,4585))},{path:"/menu",component:()=>n.e(809).then(n.bind(n,4809)),children:[D,mt]},{path:"/:catchAll(.*)",name:"notFound",component:()=>n.e(631).then(n.bind(n,4631))}]});r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(u),router:vt}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{585:"478d19af",631:"74a3f12e",809:"bb77cd5f"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{585:"674afb83",631:"45c19fe5",809:"e4f62089"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="computer-science-vue:";n.l=function(r,i,o,s){if(t[r])t[r].push(i);else{var a,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=r),t[r]=[i];var f=function(e,n){a.onerror=a.onload=null,clearTimeout(p);var i=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,o.parentNode&&o.parentNode.removeChild(o),i(l)}};return o.onerror=o.onload=s,o.href=e,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){i=s[r],o=i.getAttribute("data-href");if(o===t||o===e)return i}},r=function(r){return new Promise((function(i,o){var s=n.miniCssF(r),a=n.p+s;if(e(s,a))return i();t(r,a,null,i,o)}))},i={143:0};n.f.miniCss=function(t,e){var n={585:1,631:1,809:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var s=n.p+n.u(e),a=new Error,l=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,i[1](a)}};n.l(s,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,s=r[0],a=r[1],l=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var u=l(n)}for(e&&e(r);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkcomputer_science_vue"]=self["webpackChunkcomputer_science_vue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6775)}));r=n.O(r)})();
//# sourceMappingURL=app.9f211b30.js.map