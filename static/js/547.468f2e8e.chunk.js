"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[547],{74:function(n,e,t){t.d(e,{O:function(){return d}});var r,a,o,i=t(168),c=t(934),u=t(87),s=c.Z.p(r||(r=(0,i.Z)(["\n  padding: 2px;\n  margin-top: 4px;\n  margin-bottom: 0;\n  color: #38598b;\n  margin-bottom: 0;\n\n  &:hover {\n    color: #ff9a3c; \n    font-weight: 500;\n  }\n"]))),f=(0,c.Z)(u.rU)(a||(a=(0,i.Z)(["\n  \n&:hover {\ntext-decoration: none;\n}\n"]))),p=c.Z.li(o||(o=(0,i.Z)(["\n \n  &:hover {\n    color: #ff9a3c;\n  }\n"]))),l=t(689),h=t(184),d=function(n){var e=n.movies,t=(0,l.TH)();return(0,h.jsx)("ul",{children:e.map((function(n){return(0,h.jsx)(p,{children:(0,h.jsx)(f,{to:"/movies/".concat(n.id),state:{from:t},children:(0,h.jsxs)(s,{children:[n.title," (",n.release_date.slice(0,4),")"]})})},n.id)}))})}},547:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r,a=t(439),o=t(87),i=t(791),c=t(74),u=t(913),s=t(168),f=t(934).Z.input(r||(r=(0,s.Z)(["\n margin-right: 3px;\n"]))),p=t(686),l=t.n(p),h=t(184);l().Notify.init({width:"550px",position:"center-top",distance:"10px",timeout:1500,fontSize:"20px"});var d=function(){var n=(0,i.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],s=(0,o.lr)(),p=(0,a.Z)(s,2),d=p[0],m=p[1],v=d.get("name");return(0,i.useEffect)((function(){v&&(0,u.XT)(v).then((function(n){r(n.results),n.results.length>0?l().Notify.success("We have found the ".concat(n.results.length," movies by your request")):l().Notify.failure("Sorry, we have not found any movies for you...please, try again!")})).catch((function(n){console.log(n)}))}),[v]),(0,h.jsx)("main",{children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target.name.value;""!==e.trim()?(m({name:e}),n.target.reset()):l().Notify.warning("Please enter search data")},children:[(0,h.jsx)(f,{type:"text",name:"name",placeholder:"enter movie name "}),(0,h.jsx)("button",{type:"submit",children:"Search"})]}),(0,h.jsx)(c.O,{movies:t})]})})}},913:function(n,e,t){t.d(e,{XT:function(){return p},Df:function(){return s}});var r=t(861),a=t(687),o=t.n(a),i=t(243),c="https://api.themoviedb.org/3/",u="2051bbcb32f4c1cda2d3fefb48b3cd3d";function s(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"trending/movie/day?api_key=").concat(u,"\n"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/search/movie?api_key=").concat(u,"&page=1&query=").concat(e,"\n"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=547.468f2e8e.chunk.js.map