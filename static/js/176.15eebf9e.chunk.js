"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[176],{8176:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(9439),s=t(2791),i=t(7689),c=t(9434),a=t(3708),o=t(2143),l=t(1241),x=t(4318),d=t(6927),h=(t(1750),t(184)),u=t(4554),f=t(915),p=t(4165),j=t(5861),m=t(8496),g=t(3466),Z=t(890),y=t(6151),v=t(8820),k=t(2366),_=function(){var e=(0,s.useState)(""),n=(0,r.Z)(e,2),t=n[0],c=n[1],o=(0,s.useState)([]),l=(0,r.Z)(o,2),x=l[0],d=l[1],f=(0,s.useState)([]),_=(0,r.Z)(f,2),S=_[0],b=_[1],I=(0,s.useState)(""),w=(0,r.Z)(I,2),R=w[0],E=w[1],U=(0,i.s0)();(0,s.useEffect)((function(){var e=setTimeout((function(){E(t)}),300);return function(){clearTimeout(e)}}),[t]),(0,s.useEffect)((function(){var e=function(){var e=(0,j.Z)((0,p.Z)().mark((function e(){var n,t,r,s;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=4;break}return d([]),b([]),e.abrupt("return");case 4:return e.prev=4,e.next=7,k.Z.get("/search/".concat(R));case 7:n=e.sent,t=n.data,r=t.users,s=t.posts,d(s),b(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[R]);return(0,h.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"1rem"},children:[(0,h.jsx)(m.Z,{id:"search",variant:"outlined",name:"search",label:"Search ..",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},value:t,onChange:function(e){return c(e.target.value)},InputProps:{startAdornment:(0,h.jsx)(g.Z,{position:"start",children:(0,h.jsx)(v.RB5,{})})}}),(0,h.jsxs)(u.Z,{sx:{width:"15vw",border:"1px solid black"},children:[S.length>0&&(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(u.Z,{sx:{width:"100%",padding:"15px",backgroundColor:"grey"},children:(0,h.jsx)(Z.Z,{children:"USERS"})}),(0,h.jsx)(u.Z,{sx:{textAlign:"center"},children:S.map((function(e){return(0,h.jsx)(y.Z,{fullWidth:!0,variant:"filled",color:"primary",onClick:function(){return U("".concat(a._.BASE_URL,"/").concat(a._.USER,"/").concat(e._id))},sx:{borderBottom:"solid black 1px",padding:"15px"},children:e.username},e._id)}))})]}),x.length>0&&(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(u.Z,{sx:{width:"100%",padding:"15px",backgroundColor:"grey"},children:(0,h.jsx)(Z.Z,{children:"POSTS"})}),(0,h.jsx)(u.Z,{sx:{textAlign:"center"},children:x.map((function(e){return(0,h.jsx)(u.Z,{sx:{borderBottom:"solid black 1px",padding:"15px"},children:(0,h.jsx)(Z.Z,{children:e.body},e._id)})}))})]})]})]})},S=t(1582),b=t(5527),I=t(3400),w=t(3538),R=t(7692),E=t(6355),U=t(1087),A=t(5880),C=function(){var e=(0,c.v9)((function(e){return e.user})),n=(0,s.useState)(2),t=(0,r.Z)(n,2),o=t[0],l=t[1],x=(0,i.s0)(),d=e.friends.slice(0,o);return(0,h.jsxs)(S.Z,{sx:{width:"20%",height:"100vh",padding:"3rem",display:{xs:"none",sm:"none",md:"none",lg:"block"}},elevation:3,component:b.Z,children:[(0,h.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,h.jsx)(w.Z,{size:85,profile:e}),(0,h.jsx)(Z.Z,{variant:"h5",sx:{marginLeft:"1rem",textTransform:"capitalize"},children:e.username})]}),(0,h.jsx)("hr",{}),(0,h.jsx)(u.Z,{children:(0,h.jsx)(y.Z,{sx:{margin:"3rem 0"},children:(0,h.jsxs)(U.rU,{to:"".concat(a._.BASE_URL,"/").concat(a._.USER,"/").concat(e._id),style:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center"},children:[(0,h.jsx)(A.Mdg,{size:"35",style:{margin:"0 1rem"}}),(0,h.jsx)(Z.Z,{children:"Profile"})]})})}),(0,h.jsx)("hr",{}),(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(y.Z,{sx:{margin:"3rem 0"},children:(0,h.jsxs)(U.rU,{to:"".concat(a._.BASE_URL,"/").concat(a._.FRIENDS),style:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center"},children:[(0,h.jsx)(E.wN,{size:"35",style:{margin:"0 1rem"}}),(0,h.jsx)(Z.Z,{children:"Friends"})]})}),(0,h.jsx)("hr",{}),(0,h.jsxs)(u.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:[d.map((function(e,n){return(0,h.jsxs)(y.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},color:"success",onClick:function(){return x("".concat(a._.BASE_URL,"/").concat(a._.USER,"/").concat(e.friendId))},children:[(0,h.jsx)(Z.Z,{children:e.friendName}),(0,h.jsx)("hr",{style:{width:"100%"}})]},n)})),o<e.friends.length&&(0,h.jsxs)(I.Z,{onClick:function(){o+2<=e.friends.length?l(o+2):l(e.friends.length)},children:[(0,h.jsx)(R.poH,{}),(0,h.jsx)(Z.Z,{children:"Show more friends"})]})]}),e.friends.length<=0&&(0,h.jsx)("hr",{})]}),(0,h.jsx)(u.Z,{children:(0,h.jsx)(y.Z,{sx:{margin:"3rem 0"},children:(0,h.jsxs)(U.rU,{to:"".concat(a._.BASE_URL,"/").concat(a._.ADDPOST),style:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center"},children:[(0,h.jsx)(R.poH,{size:"35",style:{margin:"0 1rem"}}),(0,h.jsx)(Z.Z,{children:"Add a post"})]})})}),(0,h.jsx)("hr",{})]})},B=t(3853),D=t(678),L=[{path:t(640),link:"http://comp.eng.ankara.edu.tr/",alt:"Ankara University"},{path:t(8632),link:"https://react.dev/",alt:"React JS"},{path:t(8644),link:"https://react-icons.github.io/react-icons",alt:"React Icons"}],z=function(){(0,c.v9)((function(e){return e.user}));var e=(0,c.I0)(),n=(0,i.s0)();return(0,h.jsxs)(S.Z,{sx:{width:"20%",height:"100vh",padding:"3rem",display:{xs:"none",sm:"none",md:"none",lg:"block"}},elevation:3,component:b.Z,children:[(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(Z.Z,{variant:"h4",color:"primary",children:"Sponsered"}),(0,h.jsx)("hr",{style:{margin:"1rem 0"}}),L.map((function(e){return(0,h.jsx)(u.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,h.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,h.jsx)("img",{src:e.path,alt:e.alt,style:{marginBottom:"2rem",objectFit:"cover",cursor:"pointer",borderRadius:"10%",imageRendering:["-webkit-optimize-contrast","crisp-edges","pixelated"]},width:"100%",height:"200px"})})},e.alt)}))]}),(0,h.jsx)("hr",{}),(0,h.jsx)(u.Z,{children:(0,h.jsxs)(y.Z,{onClick:function(){e((0,D.kS)(n))},sx:{display:"flex",alignItems:"center",margin:"1rem 0"},children:[(0,h.jsx)(B.xqh,{size:"35",style:{margin:"0 1rem"}}),(0,h.jsx)(Z.Z,{children:"Logout"})]})})]})},N=t(8616),P=t(9272),F=function(){var e=(0,i.s0)(),n=(0,c.v9)((function(e){return e.user})),t=(0,c.v9)((function(e){return e.loading})),p=(0,s.useState)(!1),j=(0,r.Z)(p,2),m=j[0];j[1];return(0,s.useEffect)((function(){!(0,o.LP)()&&e("".concat(a._.BASE_URL,"/").concat(a._.SIGN_IN)),!n&&e("".concat(a._.BASE_URL,"/").concat(a._.SIGN_IN)),!n&&(0,d.B)(e)}),[]),n?m?(0,h.jsx)(P.a,{label:"Failed to connect to database motherfucker"}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.Z,{}),t&&(0,h.jsx)(N.Z,{}),(0,h.jsx)(_,{}),(0,h.jsx)("hr",{style:{margin:"3rem 0"}}),(0,h.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"space-around"},children:[(0,h.jsx)(C,{}),(0,h.jsx)(f.Z,{}),(0,h.jsx)(z,{})]}),(0,h.jsx)(x.Z,{})]}):(0,h.jsx)(P.a,{})}},8632:function(e,n,t){e.exports=t.p+"static/media/react2.8aa659a4278a7132e6f4.webp"},640:function(e,n,t){e.exports=t.p+"static/media/AnkaraUniv.3b6f069243dfc3faa3f0.png"},8644:function(e,n,t){e.exports=t.p+"static/media/reacticons.78c673e7864b1fb643c5.png"}}]);
//# sourceMappingURL=176.15eebf9e.chunk.js.map