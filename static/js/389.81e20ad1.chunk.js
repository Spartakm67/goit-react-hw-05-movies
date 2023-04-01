"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[389],{389:function(n,t,e){e.r(t),e.d(t,{default:function(){return G}});var r,i,a,o,c,s,p,u,d,l,f,h,x=e(683),v=e(439),g=e(686),m=e.n(g),Z=e(689),j=e(168),b=e(128),w=e(87),y=e(934),k=e(184),_=(0,y.Z)(w.rU)(r||(r=(0,j.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: #8b00ff;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: orangered;\n  }\n"]))),T=function(n){var t=n.to,e=n.children;return(0,k.jsxs)(_,{to:t,children:[(0,k.jsx)(b.jTe,{size:"24"}),e]})},z=e(791),C=e(913),U=e(198),S=y.Z.h2(i||(i=(0,j.Z)(["\n  margin: 0;\n  color: #155263;\n"]))),N=y.Z.div(a||(a=(0,j.Z)(["\n  display: flex;\n  padding: 10px;\n"]))),O=y.Z.div(o||(o=(0,j.Z)(["\n  padding: 20px 40px;\n"]))),P=y.Z.ul(c||(c=(0,j.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n  gap: 16px;\n  font-weight: 500;\n  color: #f95959;\n"]))),q=(y.Z.button(s||(s=(0,j.Z)(["\n  margin-top: 16px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 10px;\n  font-weight: 500;\n  &:hover {\n    background-color: #63c5da;\n  }\n"]))),y.Z.div(p||(p=(0,j.Z)(["\n  padding: 0px;\n"])))),A=y.Z.h4(u||(u=(0,j.Z)(["\n  margin-top: 30px;\n  margin-bottom: 15px;\n  font-size: 20px;\n  color: #155263;\n"]))),B=y.Z.ul(d||(d=(0,j.Z)(["\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),D=y.Z.li(l||(l=(0,j.Z)(["\n    &:hover {\n    color: #ff9a3c;\n  }\n"]))),E=(0,y.Z)(w.rU)(f||(f=(0,j.Z)(["\n  text-decoration: none;\n  padding-left: 0px;\n  color: black;\n  &:hover {\n    color: #ff9a3c;\n    font-weight: 500;\n  }\n"]))),F=y.Z.img(h||(h=(0,j.Z)(["\n  min-width: 300px;\n  height: auto;\n"])));m().Notify.init({width:"550px",position:"center-top",distance:"10px",timeout:1e3,fontSize:"20px"});var G=function(){var n,t,e=(0,z.useState)({}),r=(0,v.Z)(e,2),i=r[0],a=r[1],o=(0,Z.UO)().movieId,c=(0,Z.TH)(),s=null!==(n=null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";(0,z.useEffect)((function(){!function(){try{(0,C.TP)(o).then((function(n){a(n)}))}catch(n){m().Notify.failure(n)}}()}),[o]);var p=i.original_title,u=i.overview,d=i.genres,l=i.poster_path,f=(10*i.vote_average).toFixed(0);return(0,k.jsxs)("main",{children:[(0,k.jsx)(T,{to:s,children:"Back to movies"}),(0,k.jsxs)(N,{children:[(0,k.jsx)(F,{src:l?"https://image.tmdb.org/t/p/w300".concat(l):U,alt:p}),(0,k.jsxs)(O,{children:[(0,k.jsx)(S,{children:p}),(0,k.jsxs)("h3",{children:["User score: ",f,"%"]}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsxs)("p",{children:[u," "]}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)(P,{children:d&&d.length&&d.map((function(n){var t=n.id,e=n.name;return(0,k.jsx)("li",{children:e},t)}))}),(0,k.jsxs)(q,{children:[(0,k.jsx)(A,{children:"Additional information"}),(0,k.jsxs)(B,{children:[(0,k.jsx)(D,{children:(0,k.jsxs)(E,{to:"cast",state:(0,x.Z)({},c.state),children:[" ","Cast"]})}),(0,k.jsx)(D,{children:(0,k.jsxs)(E,{to:"reviews",state:(0,x.Z)({},c.state),children:[" ","Reviews"]})})]})]})]})]}),(0,k.jsx)(z.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading subpage..."}),children:(0,k.jsx)(Z.j3,{})})]})}},913:function(n,t,e){e.d(t,{zv:function(){return x},TP:function(){return f},XT:function(){return d},Df:function(){return p}});var r=e(861),i=e(687),a=e.n(i),o=e(243),c="https://api.themoviedb.org/3/",s="2051bbcb32f4c1cda2d3fefb48b3cd3d";function p(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"trending/movie/day?api_key=").concat(s,"\n"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/search/movie?api_key=").concat(s,"&page=1&query=").concat(t,"\n"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(s,"\n"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(s,"\n"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},198:function(n,t,e){n.exports=e.p+"static/media/Cat.7504207453489442bede.png"}}]);
//# sourceMappingURL=389.81e20ad1.chunk.js.map