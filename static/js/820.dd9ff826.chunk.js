"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{1074:function(n,t,e){e.d(t,{O:function(){return l}});var r,c,a,o=e(168),i=e(4934),u=e(1087),s=i.Z.p(r||(r=(0,o.Z)(["\n  padding: 2px;\n  margin-top: 4px;\n  margin-bottom: 0;\n  color: #38598b;\n  margin-bottom: 0;\n\n  &:hover {\n    color: #ff9a3c; \n    font-weight: 500;\n  }\n\n  &.active {\n    color: #f95959;\n    background-color: orangered;\n}\n"]))),p=(0,i.Z)(u.OL)(c||(c=(0,o.Z)(["\n  \n&:hover {\ntext-decoration: none;\n}\n\n&.active {\n    color: #f95959;\n    background-color: orangered;\n}\n"]))),f=i.Z.li(a||(a=(0,o.Z)(["\n \n  &:hover {\n    color: #ff9a3c;\n  }\n"]))),d=e(7689),h=e(184),l=function(n){var t=n.movies,e=(0,d.TH)();return(0,h.jsx)("ul",{children:t.map((function(n){return(0,h.jsx)(f,{children:(0,h.jsx)("nav",{children:(0,h.jsx)(p,{to:"/movies/".concat(n.id),state:{from:e},children:(0,h.jsxs)(s,{children:[n.title," (",n.release_date.slice(0,4),")"]})})})},n.id)}))})}},3820:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,c=e(9439),a=e(6913),o=e(2791),i=e(1074),u=e(168),s=e(4934).Z.h2(r||(r=(0,u.Z)(["\n   font-size: 28px;\n   color: #155263;\n"]))),p=e(1686),f=e.n(p),d=e(184);f().Notify.init({width:"550px",position:"center-top",distance:"10px",timeout:1500,fontSize:"20px"});var h=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,o.useEffect)((function(){(0,a.Df)().then((function(n){r(n.results),f().Notify.success("Hi!")})).catch((function(n){console.log(n)}))}),[]),(0,d.jsxs)("main",{children:[(0,d.jsx)(s,{children:"Tranding today"}),(0,d.jsx)(i.O,{movies:e})]})}},6913:function(n,t,e){e.d(t,{zv:function(){return v},TP:function(){return h},tx:function(){return x},XT:function(){return f},Df:function(){return s}});var r=e(5861),c=e(4687),a=e.n(c),o=e(1243),i="https://api.themoviedb.org/3/",u="2051bbcb32f4c1cda2d3fefb48b3cd3d";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"trending/movie/day?api_key=").concat(u,"\n"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/search/movie?api_key=").concat(u,"&page=1&query=").concat(t,"\n"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(u,"\n"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(u,"\n"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(u,"\n"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=820.dd9ff826.chunk.js.map