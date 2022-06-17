"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[547],{4290:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(2043),a=t(184);function i(){return(0,a.jsx)(r.v,{enabled:!0,size:"100",color:"#490D9A",thickness:"150",style:{display:"block",marginTop:"20",marginLeft:"auto",marginRight:"auto"}})}},4766:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(501),a=t(6048),i=t.n(a),o="MoviesGallery_list__aM+SO",s="MoviesGallery_item__rY1Lr",c="MoviesGallery_link__0igYa",u="MoviesGallery_pagination_list__Sq6zw",l="MoviesGallery_pagination_item__Zhe2n",p="MoviesGallery_pagination_active_item__zUfLa",v="MoviesGallery_disabled_item__7RsbI",f=t(184);function g(e){var n=e.movies,t=e.page,a=e.pageCount,g=e.onPageClick;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("ul",{className:o,children:n.map((function(e){var n=e.id,t=e.title;return(0,f.jsx)("li",{className:s,children:(0,f.jsx)(r.rU,{to:"/movies/".concat(n),className:c,children:t})},n)}))}),a>1&&(0,f.jsx)(i(),{breakLabel:"...",nextLabel:">",onPageChange:function(e){g(e.selected+1)},pageCount:a,forcePage:t-1,marginPagesDisplayed:2,previousLabel:"<",renderOnZeroPageCount:null,containerClassName:u,pageClassName:l,activeClassName:p,breakClassName:l,previousClassName:l,nextClassName:l,disabledClassName:v})]})}},2547:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(4766),a=t(4290),i=t(7552),o=t(885),s=t(2791),c=t(2690),u=t(6409);var l=t(184);function p(){var e=function(){var e=(0,s.useState)("idle"),n=(0,o.Z)(e,2),t=n[0],r=n[1],a=(0,s.useState)([]),i=(0,o.Z)(a,2),l=i[0],p=i[1],v=(0,s.useState)(null),f=(0,o.Z)(v,2),g=f[0],d=f[1];return(0,s.useEffect)((function(){r("pending"),(0,c.wr)(1).then((function(e){if(0===e.total_results)return u.Am.warning("Found 0 trending movies! Please, try again later.");p(e.results),r("resolved")})).catch((function(e){u.Am.error(e.message),d(e.message),r("rejected")}))}),[]),{status:t,movies:l,error:g}}(),n=e.status,t=e.movies,p=e.error;return(0,l.jsxs)(l.Fragment,{children:["pending"===n&&(0,l.jsx)(a.Z,{}),"rejected"===n&&(0,l.jsx)(i.Z,{text:"Error getting information from server: ".concat(p)}),"resolved"===n&&t.length>0&&(0,l.jsx)(r.Z,{movies:t})]})}},2690:function(e,n,t){t.d(n,{Ad:function(){return d},LI:function(){return p},Mc:function(){return f},mo:function(){return m},wr:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),s=t.n(o),c="fdf0e898687a376156944fbb1ab25196";function u(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(i().mark((function e(){var n,t,r,a,o,u=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>0&&void 0!==u[0]?u[0]:1,t=u.length>1&&void 0!==u[1]?u[1]:"movie",r=u.length>2&&void 0!==u[2]?u[2]:"day",e.next=5,s()("https://api.themoviedb.org/3/trending/".concat(t,"/").concat(r,"?api_key=").concat(c,"&page=").concat(n));case 5:return a=e.sent,o=a.data,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(i().mark((function e(n){var t,r,a,o,u=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2&&void 0!==u[2]?u[2]:"en-US",e.next=4,s()("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=").concat(r,"&query=").concat(n,"&page=").concat(t));case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(i().mark((function e(n){var t,r,a,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"en-US",e.next=3,s()("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(c,"&language=").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(i().mark((function e(n){var t,r,a,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"en-US",e.next=3,s()("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(c,"&language=").concat(t));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return _=(0,r.Z)(i().mark((function e(n){var t,r,a,o,u=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2&&void 0!==u[2]?u[2]:"en-US",e.next=4,s()("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(c,"&language=").concat(r,"&page=").concat(t));case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}}}]);
//# sourceMappingURL=547.6eeeb1d7.chunk.js.map