"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[598],{1265:function(e,n,t){var r=t(1413),i=t(4721),a=t(1803),s=(t(2791),t(184)),o=(0,a.Z)((function(e){return{divider:{margin:"1rem 0!important"}}}));n.Z=function(e){var n=e.sx,t=e.props,a=o();return(0,s.jsx)(i.Z,(0,r.Z)({className:a.divider,sx:n},t))}},2543:function(e,n,t){var r=t(1413),i=t(5987),a=t(8496),s=(t(2791),t(1134)),o=t(184),c=["name","control","label"];n.Z=function(e){var n=e.name,t=e.control,l=e.label,u=(0,i.Z)(e,c);return(0,o.jsx)(s.Qr,{name:n,control:t,render:function(e){var t=e.field,i=t.onChange,s=t.value,c=e.fieldState.error;e.formState;return(0,o.jsx)(a.Z,(0,r.Z)({variant:"outlined",margin:"normal",fullWidth:!0,required:!0,value:s,id:n,name:n,label:l,helperText:c?c.message:null,onChange:i,error:!!c},u))}})}},4318:function(e,n,t){var r=t(4554),i=t(890),a=t(1803),s=(t(2791),t(8820)),o=(t(1265),t(184)),c=(0,a.Z)((function(e){return{footerRoot:{position:"relative",height:"80vh",width:"100%"},footer:{display:"flex",padding:"1px",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"absolute",bottom:0,left:0,width:"100%",color:"white",textAlign:"center",background:"linear-gradient(90deg, rgba(241, 134, 13, 1) 15%, rgba(94,22,66,1) 85%)",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"},phone:{display:"flex",justifyContent:"space-between",alignItems:"center"}}}));n.Z=function(){var e=c();return(0,o.jsx)(r.Z,{className:e.footerRoot,children:(0,o.jsxs)(r.Z,{className:e.footer,children:[(0,o.jsxs)(r.Z,{className:e.icons,children:[(0,o.jsx)("a",{style:{color:"inherit"},target:"_blank",href:"https://www.linkedin.com/in/zaid-ibaisi-35592115b",rel:"noreferrer",children:(0,o.jsx)(s.Rti,{size:"25"})}),(0,o.jsx)("a",{style:{color:"inherit"},target:"_blank",href:"https://www.instagram.com/zaidibs_155/",rel:"noreferrer",children:(0,o.jsx)(s.Bpw,{size:"25"})}),(0,o.jsx)("a",{style:{color:"inherit"},target:"_blank",href:"https://github.com/Zed65pro",rel:"noreferrer",children:(0,o.jsx)(s.idJ,{size:"25"})})]}),(0,o.jsx)(i.Z,{sx:{fontSize:".5rem"},children:"Zaid Ibaisi \xa9 2023"})]})})}},1241:function(e,n,t){t.d(n,{Z:function(){return A}});var r=t(4942),i=t(4554),a=t(4395),s=t(4663),o=t(890),c=t(1803),l=t(2791),u=t(1087),d=t(6355),x=t(5880),f=t(1413),m=t(9439),p=t(3767),h=t(3208),g=t(5527),j=t(8610),b=t(5022),v=t(5028),Z=t(1582),y=t(3400),w=t(3853),_=t(7689),k=t(3708),C=t(184);function E(e){var n=e.onLogout,t=l.useState(!1),r=(0,m.Z)(t,2),i=r[0],a=r[1],s=l.useRef(null),o=(0,_.s0)(),c=function(e){s.current&&s.current.contains(e.target)||a(!1)},u=function(){o("".concat(k._.BASE_URL,"/").concat(k._.FRIENDS))},d=function(){o("".concat(k._.BASE_URL,"/").concat(k._.ADDPOST))};function x(e){"Tab"===e.key?(e.preventDefault(),a(!1)):"Escape"===e.key&&a(!1)}var E=l.useRef(i);return l.useEffect((function(){!0===E.current&&!1===i&&s.current.focus(),E.current=i}),[i]),(0,C.jsx)(Z.Z,{direction:"row",spacing:2,children:(0,C.jsxs)("div",{children:[(0,C.jsx)(y.Z,{ref:s,id:"composition-button","aria-controls":i?"composition-menu":void 0,"aria-expanded":i?"true":void 0,"aria-haspopup":"true",onClick:function(){a((function(e){return!e}))},children:(0,C.jsx)(w.nbt,{size:"35",color:"white"})}),(0,C.jsx)(j.Z,{open:i,anchorEl:s.current,role:void 0,placement:"bottom-start",transition:!0,disablePortal:!0,children:function(e){var t=e.TransitionProps,r=e.placement;return(0,C.jsx)(h.Z,(0,f.Z)((0,f.Z)({},t),{},{style:{transformOrigin:"bottom-start"===r?"left top":"left bottom"},children:(0,C.jsx)(g.Z,{children:(0,C.jsx)(p.Z,{onClickAway:c,children:(0,C.jsxs)(v.Z,{autoFocusItem:i,id:"composition-menu","aria-labelledby":"composition-button",onKeyDown:x,children:[(0,C.jsx)(b.Z,{onClick:u,children:"Friend List"}),(0,C.jsx)(b.Z,{onClick:d,children:"Add post"}),(0,C.jsx)(b.Z,{onClick:n,children:"Logout"})]})})})}))}})]})})}var I=t(9434),S=t(6927),R=t(678),N=(0,c.Z)((function(e){return{root:{backgroundColor:"rgb(36,94,156)",background:"linear-gradient(90deg, rgba(20, 163, 214, 0.91) 15%, rgba(0,0,0,1) 85%)",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"},navbar:(0,r.Z)({display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.up("lg"),{display:"flex",justifyContent:"space-between"}),nav_elements:{display:"flex",justifyContent:"space-between",alignItems:"center"},nav_element:{textDecoration:"none",margin:"0 1rem!important"},title:(0,r.Z)({margin:"2rem!important",color:"white",transition:"color 0.4s ease-out","&:hover":{color:"#666"}},e.breakpoints.down("1100"),{display:"none!important"}),icon:{color:"white",transition:"color 0.2s ease-out","&:hover":{color:"#666"}}}})),A=function(){var e=(0,_.s0)(),n=(0,I.I0)(),t=(0,I.v9)((function(e){return e.user}));(0,l.useEffect)((function(){!t&&(0,S.B)(e)}),[]);var r=N();return(0,C.jsx)(C.Fragment,{children:t&&(0,C.jsx)(i.Z,{sx:{marginBottom:{xs:"40%",md:"20%",lg:"10%"}},children:(0,C.jsx)(a.Z,{className:r.root,children:(0,C.jsxs)(s.Z,{xs:12,className:r.navbar,children:[(0,C.jsx)(u.rU,{to:"".concat(k._.BASE_URL,"/").concat(k._.HOME),className:"".concat(r.title," ").concat(r.nav_element),children:(0,C.jsx)(o.Z,{variant:"h5",sx:{flexGrow:1},children:"SOCIALIX"})}),(0,C.jsxs)(i.Z,{className:r.nav_elements,children:[(0,C.jsx)(u.rU,{to:"".concat(k._.BASE_URL,"/").concat(k._.HOME),className:r.nav_element,children:(0,C.jsx)(d.xng,{size:"35",className:r.icon})}),(0,C.jsx)(u.rU,{to:"".concat(k._.BASE_URL,"/").concat(k._.USER,"/").concat(t._id),className:r.nav_element,children:(0,C.jsx)(x.Mdg,{size:"35",className:r.icon})}),(0,C.jsx)(E,{onLogout:function(){n((0,R.kS)(e))}})]})]})})})})}},598:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(4165),i=t(5861),a=t(1889),s=t(4554),o=t(890),c=t(6151),l=t(2791),u=t(7689),d=t(9434),x=t(6927),f=t(1134),m=t(4695),p=t(8007),h=p.Ry().shape({email:p.Z_("Email must be a string").email("Must be a valid email address").required("This field can't be empty")}),g=t(2543),j=(t(2366),t(1241)),b=t(4318),v=t(3708),Z=t(184),y=function(){var e=(0,u.s0)(),n=(0,d.v9)((function(e){return e.user}));return(0,Z.jsx)("div",{children:n&&0!==n.friends.length?(0,Z.jsx)(s.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:n.friends.map((function(n,t){return(0,Z.jsxs)(s.Z,{sx:{width:"40%",padding:"2rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"2rem 0"},elevation:3,children:[(0,Z.jsxs)(o.Z,{sx:{mb:"1rem"},children:["Username: ",n.friendName]}),(0,Z.jsxs)(o.Z,{sx:{mb:"1rem"},children:["Email: ",n.friendEmail]}),(0,Z.jsx)(c.Z,{onClick:function(){return t=n.friendId,void e("".concat(v._.BASE_URL,"/").concat(v._.USER,"/").concat(t));var t},variant:"contained",children:"Visit Profile"}),(0,Z.jsx)("hr",{style:{width:"100%",margin:"1rem 0"}})]},n.friendId)}))}):(0,Z.jsx)(o.Z,{sx:{margin:"4rem 0",textAlign:"center",width:"100%"},children:"User has no friends"})})},w=t(9272),_=t(6355),k=t(678),C=function(){var e=(0,u.s0)(),n=(0,d.I0)(),t=(0,d.v9)((function(e){return e.user}));(0,l.useEffect)((function(){!t&&(0,x.B)(e)}),[]);var p=(0,f.cI)({defaultValues:{username:"",email:"",password:"",confirmPassword:""},resolver:(0,m.X)(h)}),v=p.handleSubmit,C=(p.reset,p.control),E=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,i){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.preventDefault(),a=i.target.email.value,n((0,k.jy)(a));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return t?(0,Z.jsxs)("div",{children:[(0,Z.jsx)(j.Z,{}),(0,Z.jsx)(a.ZP,{container:!0,sx:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,Z.jsx)(a.ZP,{item:!0,children:(0,Z.jsxs)(s.Z,{component:"form",onSubmit:v(E),sx:{display:"flex",flexDirection:"column",padding:"5rem",justifyContent:"center",alignItems:"center"},children:[(0,Z.jsxs)(o.Z,{variant:"h3",sx:{textAlign:"center"},children:[" ","ADD YOUR FRIEND"]}),(0,Z.jsx)(g.Z,{control:C,name:"email",label:"Enter a friend's email address",autoComplete:"email",autoFocus:!0,sx:{mb:"1rem",mt:"1rem"}}),(0,Z.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",children:"Add friend"})]})})}),(0,Z.jsx)("hr",{style:{marginTop:"2rem"}}),(0,Z.jsxs)(s.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,Z.jsx)(_.wN,{size:"55",style:{marginRight:"10px"}}),(0,Z.jsx)(o.Z,{variant:"h4",children:"Friends"})]}),(0,Z.jsx)(y,{}),(0,Z.jsx)(b.Z,{})]}):(0,Z.jsx)(w.a,{})}},6927:function(e,n,t){t.d(n,{B:function(){return c}});var r=t(4165),i=t(5861),a=t(2366),s=t(678),o=t(6890),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,a.Z.get("/users/".concat(t.id));case 3:i=e.sent,t.setProfile(i.data),e.next=8;break;case 7:o.ZP.dispatch((0,s.ts)(n));case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=598.464ca5d7.chunk.js.map