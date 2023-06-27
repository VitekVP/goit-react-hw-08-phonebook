"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{8743:function(e,n,t){t.d(n,{u:function(){return o}});var i,r=t(168),l=t(8789).ZP.p(i||(i=(0,r.Z)(["\n  font-size: 20px;\n  color: red;\n\n  text-align: center;\n"]))),a=t(3329),o=function(e){var n=e.message;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l,{children:n})})}},6947:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var i,r,l,a,o,s,d=t(9439),u=t(2791),c=t(9434),p=t(9085),h=t(8402),m=t(1148),f=t(7601),v=t(7806),x=t(4224),g=t(2991),Z=t(6351),b=t(8743),y=t(168),I=t(1087),j=t(6088),k=j.Z.div(i||(i=(0,y.Z)(["\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n\n  display: flex;\n  flex-direction: column;\n\n  border: 2px solid teal;\n  border-radius: 4px;\n  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.75);\n"]))),R=j.Z.h2(r||(r=(0,y.Z)(["\n  margin-bottom: 20px;\n\n  text-align: center;\n  font-size: 26px;\n  font-weight: 700;\n  color: #020c59;\n"]))),w=j.Z.form(l||(l=(0,y.Z)(["\n  padding: 10px;\n  margin-bottom: 10px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n\n  border-radius: 4px;\n"]))),C=j.Z.label(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  font-size: 14px;\n  font-weight: 600;\n  color: #020c59;\n"]))),_=j.Z.p(o||(o=(0,y.Z)(["\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  color: #020c59;\n"]))),N=(0,j.Z)(I.OL)(s||(s=(0,y.Z)(["\n  text-decoration: underline;\n  font-size: 18px;\n  font-weight: 400;\n  color: teal;\n"]))),S=t(3329),F=function(){var e=(0,u.useState)(""),n=(0,d.Z)(e,2),t=n[0],i=n[1],r=(0,u.useState)(""),l=(0,d.Z)(r,2),a=l[0],o=l[1],s=(0,u.useState)(!1),y=(0,d.Z)(s,2),I=y[0],j=y[1],F=(0,c.v9)(Z.NH),E=(0,c.v9)(Z.zh),q=(0,c.I0)(),z=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"email":i(r);break;case"password":o(r);break;default:return}};return(0,S.jsxs)(k,{children:[(0,S.jsx)(R,{children:"Login"}),E&&(0,S.jsx)(b.u,{message:E}),(0,S.jsxs)(w,{onSubmit:function(e){e.preventDefault(),q((0,g.Ib)({email:t,password:a})).unwrap().then((function(){p.Am.info("Wellcome"),i(""),o("")}))},children:[(0,S.jsxs)(C,{children:["Email",(0,S.jsx)(m.I,{type:"email",name:"email",value:t,onChange:z,required:!0,variant:"filled",focusBorderColor:"teal",placeholder:"Enter your email",color:"teal",_placeholder:{opacity:.7,color:"inherit"}})]}),(0,S.jsxs)(C,{children:["Password",(0,S.jsxs)(f.B,{children:[(0,S.jsx)(m.I,{name:"password",value:a,onChange:z,required:!0,type:I?"text":"password",placeholder:"Enter password",variant:"filled",focusBorderColor:"teal",color:"teal",_placeholder:{opacity:.7,color:"inherit"}}),(0,S.jsx)(v.x,{width:"4.5rem",children:(0,S.jsx)(x.z,{h:"1.75rem",size:"sm",onClick:function(){return j(!I)},children:I?"Hide":"Show"})})]})]}),(0,S.jsxs)(x.z,{type:"submit",colorScheme:"teal",children:[F&&(0,S.jsx)(h.s5,{strokeColor:"white",width:"16"})," Log In"]})]}),(0,S.jsxs)(_,{children:["Don't have an account? ",(0,S.jsx)(N,{to:"/register",children:"Register!"})]})]})},E=function(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(F,{})})}},7601:function(e,n,t){t.d(n,{B:function(){return b},m:function(){return Z}});var i=t(1413),r=t(4925),l=t(9439),a=t(9886),o=t(7200),s=t(7872),d=t(9219),u=t(2996),c=t(8161),p=t(6992);var h=t(2791),m=t(3329),f=["children","className"],v=(0,a.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),x=(0,l.Z)(v,2),g=x[0],Z=x[1],b=(0,s.G)((function(e,n){var t=(0,d.jC)("Input",e),l=(0,u.Lr)(e),a=l.children,s=l.className,v=(0,r.Z)(l,f),x=(0,p.cx)("chakra-input__group",s),Z={},b=(0,o.W)(a),y=t.field;b.forEach((function(e){var n,i;t&&(y&&"InputLeftElement"===e.type.id&&(Z.paddingStart=null!=(n=y.height)?n:y.h),y&&"InputRightElement"===e.type.id&&(Z.paddingEnd=null!=(i=y.height)?i:y.h),"InputRightAddon"===e.type.id&&(Z.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(Z.borderStartRadius=0))}));var I=b.map((function(n){var t,i,r=function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(i=n.props)?void 0:i.variant)||e.variant});return"Input"!==n.type.id?(0,h.cloneElement)(n,r):(0,h.cloneElement)(n,Object.assign(r,Z,n.props))}));return(0,m.jsx)(c.m.div,(0,i.Z)((0,i.Z)({className:x,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0},v),{},{children:(0,m.jsx)(g,{value:t,children:I})}))}));b.displayName="InputGroup"},1148:function(e,n,t){t.d(n,{I:function(){return S}});var i=t(1413),r=t(4925),l=t(9439),a=t(9886),o=t(4591),s=t(7872),d=t(9219),u=t(2996),c=t(8161),p=t(6992),h=t(2791),m=t(3329),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],v=["getRootProps","htmlProps"],x=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),g=(0,l.Z)(x,2),Z=g[0],b=g[1],y=(0,a.k)({strict:!1,name:"FormControlContext"}),I=(0,l.Z)(y,2),j=I[0],k=I[1];var R=(0,s.G)((function(e,n){var t=(0,d.jC)("Form",e),a=function(e){var n=e.id,t=e.isRequired,a=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,r.Z)(e,f),c=(0,h.useId)(),m=n||"field-".concat(c),v="".concat(m,"-label"),x="".concat(m,"-feedback"),g="".concat(m,"-helptext"),Z=(0,h.useState)(!1),b=(0,l.Z)(Z,2),y=b[0],I=b[1],j=(0,h.useState)(!1),k=(0,l.Z)(j,2),R=k[0],w=k[1],C=(0,h.useState)(!1),_=(0,l.Z)(C,2),N=_[0],S=_[1],F=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:g},e),{},{ref:(0,o.lq)(n,(function(e){e&&w(!0)}))})}),[g]),E=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,p.PB)(N),"data-disabled":(0,p.PB)(s),"data-invalid":(0,p.PB)(a),"data-readonly":(0,p.PB)(d),id:void 0!==e.id?e.id:v,htmlFor:void 0!==e.htmlFor?e.htmlFor:m})}),[m,s,N,a,d,v]),q=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,o.lq)(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[x]),z=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),P=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!a,isReadOnly:!!d,isDisabled:!!s,isFocused:!!N,onFocus:function(){return S(!0)},onBlur:function(){return S(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:R,setHasHelpText:w,id:m,labelId:v,feedbackId:x,helpTextId:g,htmlProps:u,getHelpTextProps:F,getErrorMessageProps:q,getRootProps:z,getLabelProps:E,getRequiredIndicatorProps:P}}((0,u.Lr)(e)),s=a.getRootProps,x=(a.htmlProps,(0,r.Z)(a,v)),g=(0,p.cx)("chakra-form-control",e.className);return(0,m.jsx)(j,{value:x,children:(0,m.jsx)(Z,{value:t,children:(0,m.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},s({},n)),{},{className:g,__css:t.container}))})})}));R.displayName="FormControl",(0,s.G)((function(e,n){var t=k(),r=b(),l=(0,p.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==t?void 0:t.getHelpTextProps(e,n)),{},{__css:r.helperText,className:l}))})).displayName="FormHelperText";var w=["isDisabled","isInvalid","isReadOnly","isRequired"],C=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function _(e){var n=function(e){var n,t,l,a=k(),o=e.id,s=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,h=e.isInvalid,m=e.isReadOnly,f=e.isDisabled,v=e.onFocus,x=e.onBlur,g=(0,r.Z)(e,C),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&Z.push(a.feedbackId);(null==a?void 0:a.hasHelpText)&&Z.push(a.helpTextId);return(0,i.Z)((0,i.Z)({},g),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=o?o:null==a?void 0:a.id,isDisabled:null!=(n=null!=s?s:f)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(t=null!=d?d:m)?t:null==a?void 0:a.isReadOnly,isRequired:null!=(l=null!=u?u:c)?l:null==a?void 0:a.isRequired,isInvalid:null!=h?h:null==a?void 0:a.isInvalid,onFocus:(0,p.v0)(null==a?void 0:a.onFocus,v),onBlur:(0,p.v0)(null==a?void 0:a.onBlur,x)})}(e),t=n.isDisabled,l=n.isInvalid,a=n.isReadOnly,o=n.isRequired,s=(0,r.Z)(n,w);return(0,i.Z)((0,i.Z)({},s),{},{disabled:t,readOnly:a,required:o,"aria-invalid":(0,p.Qm)(l),"aria-required":(0,p.Qm)(o),"aria-readonly":(0,p.Qm)(a)})}var N=["htmlSize"],S=(0,s.G)((function(e,n){var t=e.htmlSize,l=(0,r.Z)(e,N),a=(0,d.jC)("Input",l),o=_((0,u.Lr)(l)),s=(0,p.cx)("chakra-input",e.className);return(0,m.jsx)(c.m.input,(0,i.Z)((0,i.Z)({size:t},o),{},{__css:a.field,ref:n,className:s}))}));S.displayName="Input",S.id="Input"},7806:function(e,n,t){t.d(n,{x:function(){return x}});var i=t(4942),r=t(1413),l=t(4925),a=t(7601),o=t(8161),s=t(7872),d=t(6992),u=t(3329),c=["placement"],p=["className"],h=["className"],m=(0,o.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),f=(0,s.G)((function(e,n){var t,o,s,d=e.placement,p=void 0===d?"left":d,h=(0,l.Z)(e,c),f=(0,a.m)(),v=f.field,x="left"===p?"insetStart":"insetEnd",g=(0,r.Z)((t={},(0,i.Z)(t,x,"0"),(0,i.Z)(t,"width",null!=(o=null==v?void 0:v.height)?o:null==v?void 0:v.h),(0,i.Z)(t,"height",null!=(s=null==v?void 0:v.height)?s:null==v?void 0:v.h),(0,i.Z)(t,"fontSize",null==v?void 0:v.fontSize),t),f.element);return(0,u.jsx)(m,(0,r.Z)({ref:n,__css:g},h))}));f.id="InputElement",f.displayName="InputElement";var v=(0,s.G)((function(e,n){var t=e.className,i=(0,l.Z)(e,p),a=(0,d.cx)("chakra-input__left-element",t);return(0,u.jsx)(f,(0,r.Z)({ref:n,placement:"left",className:a},i))}));v.id="InputLeftElement",v.displayName="InputLeftElement";var x=(0,s.G)((function(e,n){var t=e.className,i=(0,l.Z)(e,h),a=(0,d.cx)("chakra-input__right-element",t);return(0,u.jsx)(f,(0,r.Z)({ref:n,placement:"right",className:a},i))}));x.id="InputRightElement",x.displayName="InputRightElement"},7200:function(e,n,t){t.d(n,{W:function(){return r}});var i=t(2791);function r(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}}}]);
//# sourceMappingURL=947.7280577a.chunk.js.map