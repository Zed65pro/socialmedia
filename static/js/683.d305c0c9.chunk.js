"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[683],{1265:function(e,n,t){var r=t(1413),s=t(4721),i=t(1803),o=(t(2791),t(184)),a=(0,i.Z)((function(e){return{divider:{margin:"1rem 0!important"}}}));n.Z=function(e){var n=e.sx,t=e.props,i=a();return(0,o.jsx)(s.Z,(0,r.Z)({className:i.divider,sx:n},t))}},2543:function(e,n,t){var r=t(1413),s=t(5987),i=t(8496),o=(t(2791),t(1134)),a=t(184),c=["name","control","label"];n.Z=function(e){var n=e.name,t=e.control,l=e.label,u=(0,s.Z)(e,c);return(0,a.jsx)(o.Qr,{name:n,control:t,render:function(e){var t=e.field,s=t.onChange,o=t.value,c=e.fieldState.error;e.formState;return(0,a.jsx)(i.Z,(0,r.Z)({variant:"outlined",margin:"normal",fullWidth:!0,required:!0,value:o,id:n,name:n,label:l,helperText:c?c.message:null,onChange:s,error:!!c},u))}})}},8243:function(e,n,t){t.d(n,{Z:function(){return L}});var r=t(4165),s=t(5861),i=t(9439),o=t(4554),a=t(1889),c=t(5527),l=t(890),u=t(3400),x=t(2791),d=t(7692),f=t(9434),p=(t(678),t(7689)),h=t(1087),m=t(1265),g=t(3853),Z=t(7425),j=t(3538),v=t(8820),b=t(3708),y=t(2366),k=t(916),w=(t(9272),t(8616)),C=(t(640),t(6927)),_=t(3433),S=t(6151),I=t.p+"static/media/background.7b241a6049b1bf3976d3.jpeg",z=t(2543),R=t(1134),E=t(4695),D=t(6727),U=D.Ry().shape({comment:D.Z_("Comment must be a string").min(3,"Must be at least 3 characters").max(50,"Must be a maximum of 50 characters")}),P=t(184),B=function(e){var n=e.onClose,t=e.post_,a=e.profilePicture,c=e.postUser,f=(0,x.useState)(null),p=(0,i.Z)(f,2),m=p[0],Z=p[1],k=(0,x.useState)(!1),C=(0,i.Z)(k,2),D=C[0],B=C[1],A=(0,x.useState)(!1),L=(0,i.Z)(A,2),F=L[0],M=L[1],N=(0,x.useState)(t),H=(0,i.Z)(N,2),O=H[0],T=H[1];console.log(F,D),(0,x.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t,s,i,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,t=null,e.prev=2,e.next=5,y.Z.get("/comments/".concat(O._id,"/comments"));case 5:return o=e.sent,Z(o.data),e.next=9,y.Z.get("/post/liked/".concat(O._id));case 9:return n=e.sent,e.next=12,y.Z.get("/post/disliked/".concat(O._id));case 12:t=e.sent,M(null===(s=n)||void 0===s?void 0:s.data),B(null===(i=t)||void 0===i?void 0:i.data),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}();!m&&e()}),[]);var W=(0,R.cI)({defaultValues:{comment:""},resolver:(0,E.X)(U)}),q=W.handleSubmit,V=(W.reset,W.control),X=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.Z.patch("/post/likes/".concat(O._id));case 2:n=e.sent,T(n.data),M((function(e){return!e})),D&&B((function(e){return!e}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.Z.patch("/post/dislikes/".concat(O._id));case 2:n=e.sent,T(n.data),B((function(e){return!e})),F&&M((function(e){return!e}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,t){var s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,y.Z.post("/comments/".concat(O._id,"/comments"),{body:t.target.comment.value,username:c.username,profilePicture:c.profilePicture});case 4:s=e.sent,i=s.data.comment,Z((function(e){return[].concat((0,_.Z)(e),[i])})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,P.jsxs)(o.Z,{sx:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,P.jsx)(u.Z,{sx:{position:"absolute",top:"0.5rem",right:"0.5rem",color:"#000",backgroundColor:"#fff"},onClick:n,children:(0,P.jsx)(g.q5L,{})}),(0,P.jsxs)(o.Z,{sx:{padding:"1rem",width:"90%",height:"100%",maxHeight:"70vh",maxWidth:"800px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.2)",display:"flex",gap:"1rem",overflow:"hidden"},children:[(0,P.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"grey"},children:(0,P.jsx)("img",{src:O.image?O.image:I,alt:"Post",style:{width:"100%",height:"100%",maxWidth:"500px",objectFit:"contain",borderRadius:"8px"}})}),(0,P.jsxs)(o.Z,{children:[(0,P.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"1rem"},children:[(0,P.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[a&&(0,P.jsx)("img",{src:a,alt:"Profile",style:{width:"32px",height:"32px",borderRadius:"50%",marginRight:"0.5rem"}}),(0,P.jsx)(h.rU,{to:"".concat(b._.BASE_URL,"/").concat(b._.USER,"/").concat(O.user.userId),style:{textDecoration:"none",color:"black"},children:(0,P.jsx)(l.Z,{variant:"subtitle1",sx:{marginBottom:"0.5rem"},children:O.user.username})})]}),(0,P.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center"},children:[(0,P.jsx)(u.Z,{sx:{color:"#fff"},onClick:X,children:(0,P.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,P.jsx)(l.Z,{sx:{fontSize:"1rem",mr:"5px"},color:"green",children:O.likesCount}),F?(0,P.jsx)(v.DZs,{size:"25",style:{color:"green"}}):(0,P.jsx)(v.DZs,{size:"25",style:{color:"black"}})]})}),(0,P.jsx)(u.Z,{sx:{color:"#fff"},onClick:G,children:(0,P.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,P.jsx)(l.Z,{sx:{fontSize:"1rem",mr:"5px"},color:"secondary",children:O.dislikesCount}),D?(0,P.jsx)(d.MZj,{size:"25",style:{color:"red"}}):(0,P.jsx)(d.MZj,{size:"25",style:{color:"black"}})]})})]}),(0,P.jsx)(l.Z,{variant:"subtitle2",sx:{marginTop:"1rem"},children:O.body}),(0,P.jsx)("hr",{sx:{margin:"1rem 0"}})]}),(0,P.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"1rem",height:"250px",maxHeight:"250px",overflow:"auto"},children:m?m.map((function(e){return(0,P.jsx)(o.Z,{sx:{backgroundColor:"#f0f2f5",padding:"0.5rem",borderRadius:"4px",marginBottom:"0.5rem"},children:(0,P.jsxs)(o.Z,{children:[(0,P.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,P.jsx)(u.Z,{children:(0,P.jsx)(j.Z,{profile:c,size:"35",margin:2})}),(0,P.jsx)(l.Z,{children:c.username})]}),(0,P.jsx)("hr",{style:{marginBottom:"1rem"}}),(0,P.jsx)(l.Z,{variant:"body2",children:e.body})]})},e._id)})):(0,P.jsx)(w.Z,{})}),(0,P.jsxs)(o.Z,{component:"form",noValidate:!0,onSubmit:q(J),sx:{padding:"1rem"},children:[(0,P.jsx)(z.Z,{control:V,name:"comment",label:"Add a comment",sx:{marginBottom:"1rem"},fullWidth:!0,variant:"outlined",rows:3,multiline:!0,autoFocus:!0}),(0,P.jsx)(S.Z,{type:"submit",variant:"contained",color:"primary",children:"Post"})]})]})]})]})},A=(0,x.memo)((function(e){var n,t=e.username,_=e.postId,S=e.userId,I=(0,p.s0)(),z=((0,f.I0)(),(0,f.v9)((function(e){return e.user}))),R=(0,x.useState)(null),E=(0,i.Z)(R,2),D=E[0],U=E[1],A=(0,x.useState)(null),L=(0,i.Z)(A,2),F=L[0],M=L[1],N=(0,x.useState)(!1),H=(0,i.Z)(N,2),O=H[0],T=H[1],W=(0,x.useState)(!1),q=(0,i.Z)(W,2),V=q[0],X=q[1],G=(0,x.useState)(!0),J=(0,i.Z)(G,2),K=J[0],Q=J[1],Y=(0,x.useState)(!1),$=(0,i.Z)(Y,2),ee=$[0],ne=$[1];(0,x.useEffect)((function(){function e(){return e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t,s,i,o,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=null,i=null,o=null,a=null,!_){e.next=17;break}return e.next=7,(0,k.u)(_);case 7:return s=e.sent,e.next=10,y.Z.get("/users/".concat(S));case 10:return a=e.sent,e.next=13,y.Z.get("/post/liked/".concat(s._id));case 13:return o=e.sent,e.next=16,y.Z.get("/post/disliked/".concat(s._id));case 16:i=e.sent;case 17:Q(!1),T(null===(n=o)||void 0===n?void 0:n.data),X(null===(t=i)||void 0===t?void 0:t.data),M(s),U(a.data);case 22:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var te=function(){ne((function(e){return!e}))},re=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.Z.patch("/post/likes/".concat(F._id));case 2:n=e.sent,t=n.data,M(t),T((function(e){return!e})),V&&X((function(e){return!e}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.Z.patch("/post/dislikes/".concat(F._id));case 2:n=e.sent,t=n.data,M(t),X((function(e){return!e})),O&&T((function(e){return!e}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.Z.delete("/post/".concat(_));case 2:(0,C.B)(I),M(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return K?(0,P.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"30vh"},children:[(0,P.jsx)(w.Z,{}),";"]}):(0,P.jsxs)(P.Fragment,{children:[ee&&(0,P.jsx)(B,{onClose:te,post_:F,postUser:D,profilePicture:D.profilePicture}),F&&D&&(0,P.jsx)(a.ZP,{item:!0,xs:12,children:(0,P.jsxs)(c.Z,{elevation:5,sx:{display:"flex",flexDirection:"column",background:"linear-gradient(90deg, rgba(40, 120, 150, 0.91) 15%, rgba(0,0,0,1) 85%)",padding:"2rem"},children:[(0,P.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center"},children:[(0,P.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",width:"100%"},children:[(0,P.jsx)(j.Z,{profile:D,size:45,margin:2}),(0,P.jsx)(l.Z,{variant:"h6",sx:{mr:"5px"},children:(0,P.jsx)(h.rU,{to:"".concat(b._.BASE_URL,"/").concat(b._.USER,"/").concat(S),style:{textDecoration:"none",color:"white",":hover":{color:"grey"}},children:t})})]}),z._id===F.user.userId&&(0,P.jsx)(u.Z,{sx:{color:"red",mr:"5px"},onClick:ie,children:(0,P.jsx)(Z.w6k,{})}),(0,P.jsx)(o.Z,{sx:{display:"flex"},children:(0,P.jsx)(u.Z,{sx:{color:"#fff"},onClick:te,children:(0,P.jsx)(g.xqh,{})})})]}),(0,P.jsx)(m.Z,{light:!0,sx:{backgroundColor:"#fff",opacity:"0.4"}}),(0,P.jsx)(o.Z,{sx:{display:"flex",height:"100%",width:"100%",p:"1rem"},children:(0,P.jsx)(l.Z,{variant:"h6",sx:{color:"white",fontSize:"1rem"},children:F.body})}),(0,P.jsx)(m.Z,{light:!0,sx:{backgroundColor:"#fff",opacity:"0.4"}}),F.image&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(o.Z,{component:"img",sx:{height:"100%",width:"100%"},alt:"The house from the offer.",src:F.image}),(0,P.jsx)(m.Z,{light:!0,sx:{backgroundColor:"#fff",opacity:"0.4"}})]}),(0,P.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:null===F||void 0===F||null===(n=F.hashtags)||void 0===n?void 0:n.map((function(e){return(0,P.jsx)(h.rU,{to:"".concat(b._.BASE_URL,"/").concat(b._.HOME),style:{textDecoration:"none"},children:(0,P.jsx)(l.Z,{variant:"h5",sx:{margin:"0 5px",color:"#DEEDF0","&:hover":{color:"#fff"}},children:"#".concat(e)})},e)}))}),(0,P.jsx)(m.Z,{light:!0,sx:{backgroundColor:"#fff",opacity:"0.4"}}),(0,P.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center"},children:[(0,P.jsx)(u.Z,{sx:{color:"#fff"},onClick:re,children:(0,P.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,P.jsx)(l.Z,{sx:{fontSize:"1rem",mr:"5px"},color:"green",children:F.likesCount}),O?(0,P.jsx)(v.DZs,{size:"25",style:{color:"green"}}):(0,P.jsx)(v.DZs,{size:"25"})]})}),(0,P.jsx)(u.Z,{sx:{color:"#fff"},onClick:se,children:(0,P.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,P.jsx)(l.Z,{sx:{fontSize:"1rem",mr:"5px"},color:"secondary",children:F.dislikesCount}),V?(0,P.jsx)(d.MZj,{size:"25",style:{color:"red"}}):(0,P.jsx)(d.MZj,{size:"25"})]})})]})]})})]})})),L=A},3538:function(e,n,t){var r=t(4554),s=(t(2791),t(5880)),i=t(184);n.Z=function(e){var n=e.setImage,t=e.image,o=e.profile,a=e.size,c=e.isPost,l=e.margin;return(0,i.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",margin:"1rem 0"},children:[(0,i.jsx)("label",{htmlFor:"profile-picture-input",children:null!==o&&void 0!==o&&o.profilePicture||t?(0,i.jsx)(r.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",marginRight:l||0},children:(0,i.jsx)("img",{src:t||o.profilePicture,alt:"Profile",style:{marginBottom:a?0:"1rem",borderRadius:c?"0":"50%",objectFit:"cover",cursor:"pointer",imageRendering:["-webkit-optimize-contrast","crisp-edges","pixelated"]},width:a||"300px",height:a||"300px"})}):c?"":(0,i.jsx)(s.Mdg,{size:a||"200",style:{marginBottom:a?0:"1rem",cursor:"pointer"},width:a||"300px",height:a||"300px"})}),n&&(0,i.jsx)("input",{id:"profile-picture-input",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0];if(t&&t.size<=5242880&&["image/jpeg","image/png"].includes(t.type)){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){n(r.result)},r.onerror=function(e){console.log(e)}}else console.log("Invalid file format or size exceeded.")},style:{display:c?"block":"none"}})]})}},915:function(e,n,t){var r=t(3433),s=t(4165),i=t(5861),o=t(9439),a=t(4554),c=t(1889),l=t(3400),u=t(2791),x=(t(2366),t(9272)),d=t(8243),f=t(7692),p=t(916),h=t(184);n.Z=function(e){var n=e.userId,t=(0,u.useState)([]),m=(0,o.Z)(t,2),g=m[0],Z=m[1],j=(0,u.useState)([]),v=(0,o.Z)(j,2),b=v[0],y=v[1],k=(0,u.useState)(!1),w=(0,o.Z)(k,2),C=w[0],_=w[1],S=(0,u.useState)(!0),I=(0,o.Z)(S,2),z=I[0],R=I[1];(0,u.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.S)(n);case 3:t=e.sent,r=D(t),Z(r),y(r.slice(0,3)),_(r.length>3),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:return e.prev=13,R(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var E=function(){var e=g.slice(0,b.length+1);y(e),_(e.length<g.length)},D=(0,u.useCallback)((function(e){for(var n=(0,r.Z)(e),t=n.length-1;t>0;t--){var s=Math.floor(Math.random()*(t+1)),i=[n[s],n[t]];n[t]=i[0],n[s]=i[1]}return n}),[]);return(0,h.jsxs)(h.Fragment,{children:[z&&(0,h.jsx)(x.a,{}),!z&&(0,h.jsx)(a.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:{md:"80vw",lg:"40vw"},height:"100%",margin:"2rem 0"},children:(0,h.jsx)(c.ZP,{container:!0,spacing:6,children:b.map((function(e,n){return(0,h.jsxs)(u.Fragment,{children:[(0,h.jsx)(d.Z,{userId:e.user.userId,username:e.user.username,postId:e._id}),n===b.length-1&&(0,h.jsx)(c.ZP,{item:!0,xs:12,children:C&&(0,h.jsx)(l.Z,{onClick:E,sx:{display:"block",margin:"0 auto"},children:(0,h.jsx)(f.poH,{})})})]},e._id)}))})})]})}},4318:function(e,n,t){var r=t(4554),s=t(890),i=t(1803),o=(t(2791),t(8820)),a=(t(1265),t(184)),c=(0,i.Z)((function(e){return{footerRoot:{position:"relative",height:"80vh",width:"100%"},footer:{display:"flex",padding:"1px",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"absolute",bottom:0,left:0,width:"100%",color:"white",textAlign:"center",background:"linear-gradient(90deg, rgba(241, 134, 13, 1) 15%, rgba(94,22,66,1) 85%)",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"},phone:{display:"flex",justifyContent:"space-between",alignItems:"center"}}}));n.Z=function(){var e=c();return(0,a.jsx)(r.Z,{className:e.footerRoot,children:(0,a.jsxs)(r.Z,{className:e.footer,children:[(0,a.jsxs)(r.Z,{className:e.icons,children:[(0,a.jsx)("a",{style:{color:"inherit"},target:"_blank",href:"https://www.linkedin.com/in/zaid-ibaisi-35592115b",rel:"noreferrer",children:(0,a.jsx)(o.Rti,{size:"25"})}),(0,a.jsx)("a",{style:{color:"inherit"},target:"_blank",href:"https://www.instagram.com/zaidibs_155/",rel:"noreferrer",children:(0,a.jsx)(o.Bpw,{size:"25"})}),(0,a.jsx)("a",{style:{color:"inherit"},target:"_blank",href:"https://github.com/Zed65pro",rel:"noreferrer",children:(0,a.jsx)(o.idJ,{size:"25"})})]}),(0,a.jsx)(s.Z,{sx:{fontSize:".5rem"},children:"Zaid Ibaisi \xa9 2023"})]})})}},1241:function(e,n,t){t.d(n,{Z:function(){return D}});var r=t(4942),s=t(4554),i=t(4395),o=t(4663),a=t(890),c=t(1803),l=t(2791),u=t(1087),x=t(6355),d=t(5880),f=t(1413),p=t(9439),h=t(3767),m=t(3208),g=t(5527),Z=t(8610),j=t(4387),v=t(5028),b=t(1582),y=t(3400),k=t(3853),w=t(7689),C=t(3708),_=t(184);function S(e){var n=e.onLogout,t=l.useState(!1),r=(0,p.Z)(t,2),s=r[0],i=r[1],o=l.useRef(null),a=(0,w.s0)(),c=function(e){o.current&&o.current.contains(e.target)||i(!1)},u=function(){a("".concat(C._.BASE_URL,"/").concat(C._.FRIENDS))},x=function(){a("".concat(C._.BASE_URL,"/").concat(C._.ADDPOST))};function d(e){"Tab"===e.key?(e.preventDefault(),i(!1)):"Escape"===e.key&&i(!1)}var S=l.useRef(s);return l.useEffect((function(){!0===S.current&&!1===s&&o.current.focus(),S.current=s}),[s]),(0,_.jsx)(b.Z,{direction:"row",spacing:2,children:(0,_.jsxs)("div",{children:[(0,_.jsx)(y.Z,{ref:o,id:"composition-button","aria-controls":s?"composition-menu":void 0,"aria-expanded":s?"true":void 0,"aria-haspopup":"true",onClick:function(){i((function(e){return!e}))},children:(0,_.jsx)(k.nbt,{size:"35",color:"white"})}),(0,_.jsx)(Z.Z,{open:s,anchorEl:o.current,role:void 0,placement:"bottom-start",transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,r=e.placement;return(0,_.jsx)(m.Z,(0,f.Z)((0,f.Z)({},t),{},{style:{transformOrigin:"bottom-start"===r?"left top":"left bottom"},children:(0,_.jsx)(g.Z,{children:(0,_.jsx)(h.Z,{onClickAway:c,children:(0,_.jsxs)(v.Z,{autoFocusItem:s,id:"composition-menu","aria-labelledby":"composition-button",onKeyDown:d,children:[(0,_.jsx)(j.Z,{onClick:u,children:"Friend List"}),(0,_.jsx)(j.Z,{onClick:x,children:"Add post"}),(0,_.jsx)(j.Z,{onClick:n,children:"Logout"})]})})})}))}})]})})}var I=t(9434),z=t(6927),R=t(678),E=(t(3538),(0,c.Z)((function(e){return{root:{backgroundColor:"rgb(36,94,156)",background:"linear-gradient(90deg, rgba(20, 163, 214, 0.91) 15%, rgba(0,0,0,1) 85%)",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"},navbar:(0,r.Z)({display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.up("lg"),{display:"flex",justifyContent:"space-between"}),nav_elements:{display:"flex",justifyContent:"space-between",alignItems:"center"},nav_element:{textDecoration:"none",margin:"0 1rem!important"},title:(0,r.Z)({margin:"2rem!important",color:"white",transition:"color 0.4s ease-out","&:hover":{color:"#666"}},e.breakpoints.down("1100"),{display:"none!important"}),icon:{color:"white",transition:"color 0.2s ease-out","&:hover":{color:"#666"}}}}))),D=function(){var e=(0,w.s0)(),n=(0,I.I0)(),t=(0,I.v9)((function(e){return e.user}));(0,l.useEffect)((function(){!t&&(0,z.B)(e)}),[]);var r=E();return(0,_.jsx)(_.Fragment,{children:t&&(0,_.jsx)(s.Z,{sx:{marginBottom:{xs:"40%",md:"20%",lg:"10%"}},children:(0,_.jsx)(i.Z,{className:r.root,children:(0,_.jsxs)(o.Z,{xs:12,className:r.navbar,children:[(0,_.jsx)(u.rU,{to:"".concat(C._.BASE_URL,"/").concat(C._.HOME),className:"".concat(r.title," ").concat(r.nav_element),children:(0,_.jsx)(a.Z,{variant:"h5",sx:{flexGrow:1},children:"SOCIALIX"})}),(0,_.jsxs)(s.Z,{className:r.nav_elements,children:[(0,_.jsx)(u.rU,{to:"".concat(C._.BASE_URL,"/").concat(C._.HOME),className:r.nav_element,children:(0,_.jsx)(x.xng,{size:"35",className:r.icon})}),(0,_.jsx)(u.rU,{to:"".concat(C._.BASE_URL,"/").concat(C._.USER,"/").concat(t._id),className:r.nav_element,children:(0,_.jsx)(d.Mdg,{size:"35",className:r.icon})}),(0,_.jsx)(S,{onLogout:function(){n((0,R.kS)(e))}})]})]})})})})}},916:function(e,n,t){t.d(n,{S:function(){return o},u:function(){return a}});var r=t(4165),s=t(5861),i=t(2366),o=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=7;break}return e.next=4,i.Z.get("/post/user/".concat(n));case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,i.Z.get("/post/");case 9:e.t0=e.sent;case 10:return t=e.t0,e.abrupt("return",t.data);case 14:return e.prev=14,e.t1=e.catch(0),console.error(e.t1),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),a=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/post/".concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()},6927:function(e,n,t){t.d(n,{B:function(){return c}});var r=t(4165),s=t(5861),i=t(2366),o=t(678),a=t(6890),c=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,t){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,i.Z.get("/users/".concat(t.id));case 3:s=e.sent,t.setProfile(s.data),e.next=8;break;case 7:a.ZP.dispatch((0,o.ts)(n));case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},640:function(e,n,t){e.exports=t.p+"static/media/AnkaraUniv.3b6f069243dfc3faa3f0.png"}}]);
//# sourceMappingURL=683.d305c0c9.chunk.js.map