"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[910],{4290:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2043),a=n(184);function o(){return(0,a.jsx)(r.v,{enabled:!0,size:"100",color:"#490D9A",thickness:"150",style:{display:"block",marginTop:"20",marginLeft:"auto",marginRight:"auto"}})}},3414:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2791),a=n(4164),o="Modal_backdrop__xTnIT",i="Modal_modal__DJDMv",c=n(184),s=document.querySelector("#modal-root");function l(e){var t=e.posterPath,n=e.altCaption,l=e.closeModal;return(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&l()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[l]),(0,a.createPortal)((0,c.jsx)("div",{className:o,onClick:function(e){e.target===e.currentTarget&&l()},children:(0,c.jsx)("div",{className:i,children:(0,c.jsx)("img",{src:t,alt:n})})}),s)}},2918:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(885),a=n(2791);function o(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],o=t[1],i=(0,a.useState)(null),c=(0,r.Z)(i,2),s=c[0],l=c[1];return{posterPath:n,altCaption:s,closeModal:(0,a.useCallback)((function(){o(null),l(null)}),[]),selectImage:function(e,t){o(e),l(t)}}}},2910:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(6871),a=n(8819),o=n(3414),i=n(2918),c=n(4290),s=n(501),l=n(2791);var u=n.p+"static/media/no-poster.1dcba25d84dd77efb1f61f8ef4dfe501.svg",d="MovieCard_card__G6MP-",p="MovieCard_title__mQEBM",f="MovieCard_image__ZrmcG",v="MovieCard_caption__-ABlu",h="MovieCard_aside__dTTcY",m="MovieCard_aside_title__H-1MH",g="MovieCard_list__Sduoj",x="MovieCard_item__c3tx6",y=n(184);function _(e){var t=e.movie,n=e.selectImage,r=t.poster_path,a=t.title,o=t.release_date,i=t.vote_average,c=t.overview,l=t.genres;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:d,children:[(0,y.jsx)("img",{className:f,src:r?"https://image.tmdb.org/t/p/w342".concat(r):u,alt:"".concat(a," Poster"),loading:"lazy",onClick:function(){return n("https://image.tmdb.org/t/p/original".concat(r),a)}}),(0,y.jsxs)("div",{className:v,children:[(0,y.jsxs)("h2",{className:p,children:[a," (",o?o.slice(0,4):"No Release Year Available",")"]}),(0,y.jsxs)("p",{children:["User Score: ",Math.round(10*i),"%"]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:c||"No Overview Available"}),(0,y.jsx)("h3",{children:"Genres"}),(0,y.jsx)("p",{children:l?l.map((function(e){return e.name})).join(", "):"No Genres Available"})]})]}),(0,y.jsxs)("div",{className:h,children:[(0,y.jsx)("h2",{className:m,children:"Additional information"}),(0,y.jsxs)("ul",{className:g,children:[(0,y.jsx)("li",{className:x,children:(0,y.jsx)(s.rU,{to:"cast",replace:!0,children:"Cast"})}),(0,y.jsx)("li",{className:x,children:(0,y.jsx)(s.rU,{to:"reviews",replace:!0,children:"Reviews"})})]})]})]})}var b=n(7552),j="BackButton_button__5Jmp+";function w(){var e=(0,r.s0)();return(0,y.jsx)("button",{className:j,type:"button",onClick:function(){return e(-1)},children:"Go Back"})}var k=n(885),C=n(2690);var M="MovieDetails_section__3J5A0";function S(){var e=function(){var e=(0,r.UO)().movieId,t=(0,l.useState)(null),n=(0,k.Z)(t,2),a=n[0],o=n[1],i=(0,l.useState)(null),c=(0,k.Z)(i,2),s=c[0],u=c[1],d=(0,l.useState)(!1),p=(0,k.Z)(d,2),f=p[0],v=p[1],h=window.history.state.idx;return(0,l.useEffect)((function(){v(!0),(0,C.Mc)(e).then(o).catch(u).finally(v(!1))}),[e]),{movie:a,error:s,isLoading:f,isPrevPage:h}}(),t=e.movie,n=e.error,s=e.isLoading,u=e.isPrevPage,d=(0,i.Z)(),p=d.posterPath,f=d.altCaption,v=d.closeModal,h=d.selectImage;return(0,y.jsxs)("section",{className:M,children:[s&&(0,y.jsx)(c.Z,{}),n&&(0,y.jsx)(b.Z,{text:"Something went wrong. Error message: ".concat(n.message,".")}),u>0&&(0,y.jsx)(w,{}),t&&(0,y.jsx)(_,{movie:t,selectImage:h}),p&&t.poster_path&&(0,y.jsx)(a.Z,{children:(0,y.jsx)(o.Z,{posterPath:p,altCaption:f,closeModal:v})})]})}function Z(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S,{}),(0,y.jsx)(r.j3,{})]})}},2690:function(e,t,n){n.d(t,{Ad:function(){return h},LI:function(){return d},Mc:function(){return f},mo:function(){return g},wr:function(){return l}});var r=n(5861),a=n(7757),o=n.n(a),i=n(4569),c=n.n(i),s="fdf0e898687a376156944fbb1ab25196";function l(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(o().mark((function e(){var t,n,r,a,i,l=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,n=l.length>1&&void 0!==l[1]?l[1]:"movie",r=l.length>2&&void 0!==l[2]?l[2]:"day",e.next=5,c()("https://api.themoviedb.org/3/trending/".concat(n,"/").concat(r,"?api_key=").concat(s,"&page=").concat(t));case 5:return a=e.sent,i=a.data,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(o().mark((function e(t){var n,r,a,i,l=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:1,r=l.length>2&&void 0!==l[2]?l[2]:"en-US",e.next=4,c()("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=").concat(r,"&query=").concat(t,"&page=").concat(n));case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(o().mark((function e(t){var n,r,a,i=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"en-US",e.next=3,c()("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=").concat(n));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(o().mark((function e(t){var n,r,a,i=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"en-US",e.next=3,c()("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&language=").concat(n));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(o().mark((function e(t){var n,r,a,i,l=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:1,r=l.length>2&&void 0!==l[2]?l[2]:"en-US",e.next=4,c()("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=").concat(r,"&page=").concat(n));case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}},2043:function(e,t,n){n.d(t,{v:function(){return d}});var r=n(2791),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}var i={color:"#38ad48",enabled:!0,size:50,style:{}},c=function(e){return parseFloat(e.toString()).toString()===e.toString()?e+"px":e.toString()},s={speed:100,still:!1,thickness:100};a(a({},s),{secondaryColor:"rgba(0,0,0,0.44)"});!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("@keyframes spinners-react-dotted-center{0%,15%,85%,to{transform:scale(0)}40%,50%{transform:scale(1)}84%{transform:scale(.45)}}@keyframes spinners-react-dotted-shrink{50%{transform:translate(0)}}");var l=[{x:22,y:-20},{x:29,y:0},{x:22,y:20},{x:0,y:30},{x:-23,y:20},{x:-30,y:0},{x:-23,y:-20},{x:0,y:-30}],u=function(e){var t=e.speed,n=e.still,i=e.thickness,c=o(e,["speed","still","thickness"]),s=200/t,u=function(e){return n?{}:{animation:"spinners-react-dotted-shrink "+s+"s cubic-bezier(0, 0.9, 0, 0.9) "+s/20*e+"s infinite"}},d=n?{display:"none"}:{animation:"spinners-react-dotted-center "+s+"s ease-out infinite",transformOrigin:"center"};return r.createElement("svg",a({fill:"none",viewBox:"0 0 66 66"},c),l.map((function(e,t){return r.createElement("circle",{key:e.x+"-"+e.y,cx:"33",cy:"33",fill:"currentColor",r:i/100*3,style:a({transform:"translate("+e.x+"px, "+e.y+"px)"},u(t))})})),r.createElement("circle",{cx:"33",cy:"33",fill:"currentColor",r:i/100*6,style:d}))};u.defaultProps=s;var d=function(e){var t=function(t){var n=t.color,i=t.enabled,s=t.size,l=t.style,u=o(t,["color","enabled","size","style"]),d=a(a({},u),{style:a({color:n,overflow:"visible",width:c(s)},l)});return i?r.createElement(e,a({},d)):null};return t.defaultProps=i,t}(u)}}]);
//# sourceMappingURL=910.b595493c.chunk.js.map