"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[698],{5698:function(e,r,n){n.r(r),n.d(r,{default:function(){return V}});var t=n(9439),s=n(2791),i=n(1241),a=n(9434),l=n(7689),o=n(4554),c=n(6927),d=n(7253),u=n(4165),x=n(5861),f=n(5527),m=n(6151),h=n(3400),p=n(3538),j=n(8856),Z=n(890),y=n(9126),v=n(6355),g=n(3853),b=n(184),w=function(e){var r=e.profile;return(0,b.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,b.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(j.Z,{size:"25"}),(0,b.jsx)(Z.Z,{sx:{ml:"5px"},children:r.email})]}),(0,b.jsx)("hr",{style:{border:"none",borderBottom:"1px solid #ccc",margin:"1rem 0"}}),(0,b.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(g.fzv,{size:"25"}),(0,b.jsx)(Z.Z,{sx:{ml:"5px"},children:r.username})]}),(0,b.jsx)("hr",{style:{border:"none",borderBottom:"1px solid #ccc",margin:"1rem 0"}}),(0,b.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(y.t6A,{size:"25"}),(0,b.jsxs)(Z.Z,{sx:{ml:"5px"},children:["Posts ",r.posts.length]})]}),(0,b.jsx)("hr",{style:{border:"none",borderBottom:"1px solid #ccc",margin:"1rem 0"}}),(0,b.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,b.jsx)(v.wN,{size:"25"}),(0,b.jsxs)(Z.Z,{sx:{ml:"5px"},children:["Friends ",r.friends.length]})]}),(0,b.jsx)("hr",{style:{border:"none",borderBottom:"1px solid #ccc",margin:"1rem 0"}})]})},I=n(7892),B=n.n(I),_=n(1134),D=n(2543),S=n(4695),k=(n(3708),n(6727)),C=B()().startOf("day"),O=k.Ry().shape({username:k.Z_("Username must be a string").matches(/^[a-zA-Z0-9_-]{3,16}$/,"Username must be 3-16 characters long and can only contain alphanumeric characters, underscores and hyphens").required("This field can't be empty"),email:k.Z_("Email must be a string").email("Must be a valid email address").required("This field can't be empty"),dateOfBirth:k.nK().nullable(!0).test("valid-date","Date of birth must be a valid date",(function(e){return null===e||B()(e).isValid()})).test("max-date","Date of birth cannot be after today's date",(function(e){return null===e||B()(e).isBefore(C)||B()(e).isSame(C)}))}),F=n(4318),M=(n(2366),n(678)),z=n(1413),E=n(5970),U=n(8996),Y=function(e){var r=e.control,n=e.errors;return(0,b.jsx)(_.Qr,{control:r,name:"dateOfBirth",render:function(e){var r=e.field,t=e.fieldState;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(U.M,(0,z.Z)((0,z.Z)({},r),{},{inputFormat:"yyyy-MM-dd",label:"Date of Birth",sx:{width:"100%"},error:!!t.error})),(0,b.jsx)(E.B,{errors:n,name:"dateOfBirth",render:function(e){var r=e.message;return(0,b.jsx)(Z.Z,{sx:{color:"red"},children:r})}})]})}})},q=function(e){var r=e.setIsEdit,n=(0,l.s0)(),i=(0,a.I0)(),c=(0,a.v9)((function(e){return e.user})),d=(0,a.v9)((function(e){return e.loading})),f=(0,s.useState)(null),h=(0,t.Z)(f,2),j=h[0],y=h[1],v=(0,s.useState)(null),g=(0,t.Z)(v,2),w=g[0],I=g[1],k=(0,_.cI)({defaultValues:{username:c?c.username:"",email:c?c.email:"",dateOfBirth:c?B()(c.dateOfBirth):null},resolver:(0,S.X)(O)}),C=k.handleSubmit,z=(k.reset,k.control),E=k.formState.errors,U=function(){var e=(0,x.Z)((0,u.Z)().mark((function e(t,s){var a,l,o,d;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),a=s.target.username.value,l=s.target.email.value,o=new Date(t.dateOfBirth),d=B()(o).format("YYYY MM DD");try{i((0,M.Nq)(c._id,w,l,a,d,n)),r(!1)}catch(u){y(u.response)}case 6:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}();return c?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(o.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center",padding:"2rem"},children:[(0,b.jsx)(Z.Z,{variant:"h2",children:"Profile"}),(0,b.jsx)(p.Z,{image:w,setImage:I,profile:c}),(0,b.jsxs)(o.Z,{component:"form",noValidate:!0,onSubmit:C(U),sx:{mt:1},children:[(0,b.jsx)(D.Z,{control:z,name:"username",label:"Username",autoFocus:!0}),(0,b.jsx)(D.Z,{control:z,name:"email",label:"Email",autoFocus:!0}),j&&(0,b.jsx)(Z.Z,{sx:{textAlign:"center",color:"red"},position:"center",variant:"h5",children:j}),(0,b.jsx)(Y,{control:z,errors:E}),(0,b.jsx)(m.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",sx:{mt:3,mb:2},disabled:d,children:"Update"})]})]}),(0,b.jsx)(F.Z,{})]}):(0,b.jsx)("div",{children:"Loading..."})},A=n(9272),P=n(8820),R=n(8617),T=function(e){var r=e.profile,n=(0,s.useState)(!1),i=(0,t.Z)(n,2),l=i[0],c=i[1],d=(0,a.I0)(),j=(0,a.v9)((function(e){return e.user})),Z=(0,s.useState)(""),y=(0,t.Z)(Z,2),v=(y[0],y[1]);if(!j||!r)return(0,b.jsx)(A.a,{});if(l)return(0,b.jsx)(q,{setIsEdit:c});var g=function(){var e=(0,x.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d((0,M.SK)(r._id))}catch(n){v(n.response.data.error)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,x.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d((0,M.tJ)(r._id))}catch(n){v(n.response.data.error)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,b.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",margin:"5rem 0"},children:(0,b.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"50%"},children:[(0,b.jsxs)(f.Z,{elevation:3,sx:{padding:"2rem 2rem",display:"flex",flexDirection:{xs:"column",lg:"row"}},children:[(0,b.jsx)(p.Z,{profile:r}),(0,b.jsx)("div",{style:{borderRight:"1px solid #ccc",margin:"0 1rem"}}),(0,b.jsx)(w,{profile:r})]}),r._id===j._id?(0,b.jsx)(m.Z,{variant:"contained",color:"success",sx:{width:{xs:"90vw",lg:"30vw"}},onClick:function(){c(!0)},children:"Edit profile"}):j.friends.some((function(e){return e.friendId===r._id}))?(0,b.jsx)(h.Z,{onClick:I,children:(0,b.jsx)(R.XTR,{style:{color:"red"}})}):(0,b.jsx)(h.Z,{onClick:g,children:(0,b.jsx)(P.vM4,{style:{color:"green"}})})]})})},V=function(){var e=(0,l.s0)(),r=(0,a.v9)((function(e){return e.user})),n=(0,l.UO)().id,u=(0,s.useState)(null),x=(0,t.Z)(u,2),f=x[0],m=x[1];return(0,s.useEffect)((function(){return r?!f&&n&&(0,c.B)(e,{id:n,setProfile:m}):(0,c.B)(e),function(){f&&m(null)}}),[r,n,f,e]),r&&f?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.Z,{}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(T,{profile:f}),(0,b.jsx)("hr",{}),(0,b.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,b.jsx)(d.Z,{userId:f._id})})]}),(0,b.jsx)(F.Z,{})]}):(0,b.jsx)(A.a,{})}}}]);
//# sourceMappingURL=698.19669aec.chunk.js.map