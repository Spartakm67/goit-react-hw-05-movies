"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{74:function(n,t,e){e.d(t,{O:function(){return l}});var r,c,a,o=e(168),u=e(934),i=e(87),s=u.Z.p(r||(r=(0,o.Z)(["\n  padding: 2px;\n  margin-top: 4px;\n  margin-bottom: 0;\n  color: #38598b;\n  margin-bottom: 0;\n\n  &:hover {\n    color: #ff9a3c; \n    font-weight: 500;\n  }\n"]))),f=(0,u.Z)(i.rU)(c||(c=(0,o.Z)(["\n  \n&:hover {\ntext-decoration: none;\n}\n"]))),p=u.Z.li(a||(a=(0,o.Z)(["\n \n  &:hover {\n    color: #ff9a3c;\n  }\n"]))),d=e(689),h=e(184),l=function(n){var t=n.movies,e=(0,d.TH)();return(0,h.jsx)("ul",{children:t.map((function(n){return(0,h.jsx)(p,{children:(0,h.jsx)(f,{to:"/movies/".concat(n.id),state:{from:e},children:(0,h.jsxs)(s,{children:[n.title," (",n.release_date.slice(0,4),")"]})})},n.id)}))})}},820:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r,c=e(439),a=e(913),o=e(791),u=e(74),i=e(168),s=e(934).Z.h2(r||(r=(0,i.Z)(["\n   font-size: 28px;\n   color: #155263;\n"]))),f=e(184),p=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,o.useEffect)((function(){(0,a.Df)().then((function(n){r(n.results)})).catch((function(n){console.log(n)}))}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)(s,{children:"Tranding today"}),(0,f.jsx)(u.O,{movies:e})]})}},913:function(n,t,e){e.d(t,{zv:function(){return v},TP:function(){return h},XT:function(){return p},Df:function(){return s}});var r=e(861),c=e(687),a=e.n(c),o=e(243),u="https://api.themoviedb.org/3/",i="2051bbcb32f4c1cda2d3fefb48b3cd3d";function s(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"trending/movie/day?api_key=").concat(i,"\n"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&page=1&query=").concat(t,"\n"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i,"\n"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i,"\n"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=820.52f905e7.chunk.js.map