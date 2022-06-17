"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[910],{4290:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2043),a=n(184);function i(){return(0,a.jsx)(r.v,{enabled:!0,size:"80",color:"#490D9A",thickness:"150",style:{display:"block",marginTop:"20",marginLeft:"auto",marginRight:"auto"}})}},3414:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2791),a=n(4164),i="Modal_backdrop__xTnIT",c="Modal_modal__DJDMv",o=n(184),s=document.querySelector("#modal-root");function u(e){var t=e.posterPath,n=e.altCaption,u=e.closeModal;return(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&u()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[u]),(0,a.createPortal)((0,o.jsx)("div",{className:i,onClick:function(e){e.target===e.currentTarget&&u()},children:(0,o.jsx)("div",{className:c,children:(0,o.jsx)("img",{src:t,alt:n})})}),s)}},2918:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(885),a=n(2791);function i(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],i=t[1],c=(0,a.useState)(null),o=(0,r.Z)(c,2),s=o[0],u=o[1];return{posterPath:n,altCaption:s,closeModal:(0,a.useCallback)((function(){i(null),u(null)}),[]),selectImage:function(e,t){i(e),u(t)}}}},2910:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(6871),a=n(8819),i=n(3414),c=n(2918),o=n(4290),s=n(501),u=n(2791);var l=n.p+"static/media/no-poster.1dcba25d84dd77efb1f61f8ef4dfe501.svg",d="MovieCard_card__G6MP-",p="MovieCard_title__mQEBM",v="MovieCard_image__ZrmcG",h="MovieCard_caption__-ABlu",f="MovieCard_aside__dTTcY",m="MovieCard_aside_title__H-1MH",g="MovieCard_list__Sduoj",_="MovieCard_item__c3tx6",x=n(184);function j(e){var t=e.movie,n=e.selectImage,r=t.poster_path,a=t.title,i=t.release_date,c=t.vote_average,o=t.overview,u=t.genres;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("img",{className:v,src:r?"https://image.tmdb.org/t/p/w342".concat(r):l,alt:"".concat(a," Poster"),loading:"lazy",onClick:function(){return n("https://image.tmdb.org/t/p/original".concat(r),a)}}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsxs)("h2",{className:p,children:[a," (",i?i.slice(0,4):"No Release Year Available",")"]}),(0,x.jsxs)("p",{children:["User Score: ",Math.round(10*c),"%"]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:o||"No Overview Available"}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:u.length>0?u.map((function(e){return e.name})).join(", "):"No Genres Available"})]})]}),(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)("h2",{className:m,children:"Additional information"}),(0,x.jsxs)("ul",{className:g,children:[(0,x.jsx)("li",{className:_,children:(0,x.jsx)(s.rU,{to:"cast",replace:!0,children:"Cast"})}),(0,x.jsx)("li",{className:_,children:(0,x.jsx)(s.rU,{to:"reviews",replace:!0,children:"Reviews"})})]})]})]})}var w=n(7552),b="BackButton_button__5Jmp+";function y(){var e=(0,r.s0)();return(0,x.jsx)("button",{className:b,type:"button",onClick:function(){return e(-1)},children:"Go Back"})}var k=n(885),M=n(2690);var C="MovieDetails_section__3J5A0";function Z(){var e=function(){var e=(0,r.UO)().movieId,t=(0,u.useState)(null),n=(0,k.Z)(t,2),a=n[0],i=n[1],c=(0,u.useState)(null),o=(0,k.Z)(c,2),s=o[0],l=o[1],d=(0,u.useState)(!1),p=(0,k.Z)(d,2),v=p[0],h=p[1],f=(0,r.s0)(),m=window.history.state.idx;return(0,u.useEffect)((function(){isNaN(e)?f("/"):(h(!0),(0,M.Mc)(e).then(i).catch(l).finally(h(!1)))}),[e,f]),{movie:a,error:s,isLoading:v,isPrevPage:m}}(),t=e.movie,n=e.error,s=e.isLoading,l=e.isPrevPage,d=(0,c.Z)(),p=d.posterPath,v=d.altCaption,h=d.closeModal,f=d.selectImage;return(0,x.jsxs)("section",{className:C,children:[s&&(0,x.jsx)(o.Z,{}),n&&(0,x.jsx)(w.Z,{text:"Something went wrong. Error message: ".concat(n.message,".")}),l>0&&(0,x.jsx)(y,{}),t&&(0,x.jsx)(j,{movie:t,selectImage:f}),p&&t.poster_path&&(0,x.jsx)(a.Z,{children:(0,x.jsx)(i.Z,{posterPath:p,altCaption:v,closeModal:h})})]})}function N(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Z,{}),(0,x.jsx)(r.j3,{})]})}},2690:function(e,t,n){n.d(t,{Ad:function(){return f},LI:function(){return d},Mc:function(){return v},mo:function(){return g},wr:function(){return u}});var r=n(5861),a=n(7757),i=n.n(a),c=n(4569),o=n.n(c),s="fdf0e898687a376156944fbb1ab25196";function u(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(i().mark((function e(){var t,n,r,a,c,u=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,n=u.length>1&&void 0!==u[1]?u[1]:"movie",r=u.length>2&&void 0!==u[2]?u[2]:"day",e.next=5,o()("https://api.themoviedb.org/3/trending/".concat(n,"/").concat(r,"?api_key=").concat(s,"&page=").concat(t));case 5:return a=e.sent,c=a.data,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(i().mark((function e(t){var n,r,a,c,u=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2&&void 0!==u[2]?u[2]:"en-US",e.next=4,o()("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=").concat(r,"&query=").concat(t,"&page=").concat(n));case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(i().mark((function e(t){var n,r,a,c=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"en-US",e.next=3,o()("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=").concat(n));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(i().mark((function e(t){var n,r,a,c=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"en-US",e.next=3,o()("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&language=").concat(n));case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return _=(0,r.Z)(i().mark((function e(t){var n,r,a,c,u=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2&&void 0!==u[2]?u[2]:"en-US",e.next=4,o()("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=").concat(r,"&page=").concat(n));case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}}}]);
//# sourceMappingURL=910.4a051ba5.chunk.js.map