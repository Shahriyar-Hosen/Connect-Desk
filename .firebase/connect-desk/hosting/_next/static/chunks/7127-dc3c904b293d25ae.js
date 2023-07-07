"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7127],{7127:function(e,t,s){s.d(t,{Ti:function(){return c},Dn:function(){return y},cL:function(){return j},r7:function(){return g},Rq:function(){return b},L3:function(){return w},nB:function(){return T},wZ:function(){return N}});var a=s(9268),l=s(6761),n=s(246),r=s(6394),i=s.n(r),o=s(5846),d=s.n(o);let x=e=>{let{label1:t,label2:s,labelLink2:r="/"}=e;return(0,a.jsxs)("div",{className:"flex justify-between items-center my-3 mt",children:[(0,a.jsxs)("div",{className:"flex justify-center items-center gap-2 text-base font-medium",children:[(0,a.jsx)(i(),{src:n.C9,alt:""}),(0,a.jsx)(l.CommonText,{children:t})]}),s?(0,a.jsx)(d(),{href:r,className:"text-error",children:(0,a.jsxs)(l.CommonText,{className:"cursor-pointer",children:[" ",s]})}):null]})},c=e=>{let{leftComponent:t,rightComponent:s}=e;return(0,a.jsxs)("div",{className:"w-[100%] flex flex-col lg:flex-row gap-10",children:[t,s]})},m=e=>{let{btnText:t="Register Now",label:s="Don’t have an account?",link:l="register",otp:r}=e;return(0,a.jsx)("div",{children:r?(0,a.jsx)(d(),{href:"",children:(0,a.jsx)("p",{className:"text-center my-10 text-base font-medium",children:"Resent OTP Again"})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"text-center my-5 md:my-7 lg:my-10 text-base font-medium",children:[s,"\xa0",(0,a.jsx)(d(),{className:"text-primary",href:"".concat(l),children:t})]}),(0,a.jsxs)(d(),{href:"/",className:"flex gap-3",children:[(0,a.jsx)(i(),{src:n.ki,alt:""}),(0,a.jsx)("p",{className:"cursor-pointer",children:"Back to home"})]})]})})},u=["Business Login","Client Login"],h=e=>{let{setUserType:t,userType:s}=e;return(0,a.jsx)("div",{className:"flex w-full max-w-[486px] mx-auto mb-[45px]",children:u.map(e=>(0,a.jsx)(l.Button,{text:"18",size:"lg",width:"full",onClick:()=>t(e),variant:s===e?"primary":"secondary",className:"".concat("Business Login"===e?"rounded-r-none":"rounded-l-none"," transition-all duration-500 capitalize"),children:e},e))})},p=e=>{let{label:t,setUserType:s,userType:n,labelType:r="title",otp:i}=e;return(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,a.jsx)(l.Logo,{}),(0,a.jsxs)("div",{className:"my-[25px] md:my-[30px] text-center",children:[i&&(0,a.jsx)("p",{className:"text-base lg:text-xl font-semibold mb-5",children:"Please Enter the One-Time Password to verify your account"}),"title"===r?(0,a.jsx)("h3",{className:"text-neutral text-base md:text-xl font-semibold",children:t}):(0,a.jsxs)(l.CommonText,{className:"text-center",children:[t," "]})]}),s&&n&&(0,a.jsx)(h,{setUserType:s,userType:n})]})},j=e=>{let{setUserType:t,userType:s,children:n,agreeSectionLabel1:r,authTopLabel:i,btnText:o,maxWidth:c,authNavigateBtnText:u,authNavigateLink:h,authNavigateLabel:j,agreeSectionLabel2:g,agreeSectionLabelLink2:b,authTopLabelType:f,btnLink:w,otp:y}=e;return(0,a.jsx)("section",{className:"w-[90%] md:w-full mx-auto lg:pr-5",children:(0,a.jsxs)("div",{className:"w-full ".concat(c," mx-auto"),children:[(0,a.jsx)(p,{label:i,userType:s,setUserType:t,labelType:f,otp:y}),n,r&&(0,a.jsx)(x,{label1:r,label2:g,labelLink2:b}),(0,a.jsx)("br",{}),(0,a.jsx)(d(),{href:w||"",children:(0,a.jsx)(l.Button,{variant:"primary",width:"full",size:"lg",children:o})}),(0,a.jsx)(m,{label:j,btnText:u,link:h,otp:y})]})})},g=()=>{let e=e=>{};return(0,a.jsx)(j,{authTopLabel:"Change Your Password",authTopLabelType:"title",maxWidth:"max-w-[485px]",btnText:"submit",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(l.InputField,{handleOnChange:e,label:"New Password",type:"password",placeholder:"Enter your password"}),(0,a.jsx)(l.InputField,{handleOnChange:e,label:"Confirm New Password",placeholder:"Enter your password"})]})})},b=()=>(0,a.jsx)(j,{authTopLabel:"Enter the email address or phone associated with your account and we’ll send your a verification code to reset your password.",authTopLabelType:"normal",maxWidth:"max-w-[485px]",btnText:"Continue",btnLink:"/confirm-password",children:(0,a.jsx)("div",{className:"mt-10",children:(0,a.jsx)(l.InputField,{handleOnChange:e=>{},label:"Email or Mobile No",placeholder:"Enter your email or mobile number"})})});var f=s(6006);let w=()=>{let[e,t]=(0,f.useState)("Business Login"),s=e=>{};return(0,a.jsx)(j,{authTopLabel:"Login Your Business Area",btnText:"Login",maxWidth:"max-w-[520px]",setUserType:t,userType:e,agreeSectionLabel1:"Remember me",agreeSectionLabel2:"Forget Password?",agreeSectionLabelLink2:"/forget-password",children:(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center gap-6",children:[(0,a.jsx)(l.InputField,{handleOnChange:s,label:"Email or Mobile No",placeholder:"Enter your email or mobile number"}),(0,a.jsx)(l.InputField,{handleOnChange:s,type:"password",label:"Password",placeholder:"Enter your password"})]})})},y=e=>{let{paragraph:t,isSubTitle:s,image:n,title:r,bottomBtn:o,JSXTitle:d}=e;return(0,a.jsxs)("div",{className:"w-full flex flex-col justify-center items-center text-center bg-gradient-to-t from-white via-base-100 to-white md:px-20 lg:px-0",children:[(0,a.jsx)("div",{className:"md:w-[80%]",children:(0,a.jsx)(i(),{className:"w-[80%] sm:w-full max-w-[328px] md:max-w-[428px] mx-auto",src:n,alt:"dfd"})}),(0,a.jsxs)("div",{className:"w-[100%] px-2",children:[d&&(0,a.jsx)("h3",{className:"text-2xl md:text-[26px] lg:text-[32px] font-semibold",children:d}),r&&(0,a.jsx)("h3",{className:"mt-5 lg:mt-10 text-lg lg:text-2xl font-semibold",children:r}),s?(0,a.jsxs)("p",{className:"text-base md:text-lg lg:text-xl font-semibold text-center max-w-[352px] mx-auto opacity-80 mt-4",children:["Try ConnectDesk Free For ",(0,a.jsx)("span",{className:"text-primary",children:"7 Days"}),". No Payment Required."]}):null,(0,a.jsx)(l.CommonText,{className:"mt-5 max-w-[422px] mx-auto",children:t}),o?(0,a.jsx)("div",{className:"w-full max-w-[380px] mx-auto opacity-90 mt-6",children:(0,a.jsx)(l.Button,{variant:"primary",text:"16",width:"full",children:"Start My Free 7-Days Trial"})}):null]})]})},N=()=>{let[e,t]=(0,f.useState)("Business Login"),s=e=>{};return(0,a.jsx)(j,{maxWidth:"max-w-[602px]",authTopLabel:"Register Your Business Area",setUserType:t,userType:e,agreeSectionLabel1:(0,a.jsxs)(a.Fragment,{children:["I agree with the\xa0",(0,a.jsx)("span",{className:"text-warning",children:"Terms & Condition"})]}),btnText:"Register",authNavigateLabel:"Already have an account?",authNavigateBtnText:"Login",authNavigateLink:"/login",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(l.InputField,{handleOnChange:s,label:"Business Name",placeholder:"Enter your business name"}),(0,a.jsxs)("div",{className:"md:flex gap-5",children:[(0,a.jsx)(l.InputField,{handleOnChange:s,label:"Mobile Number",placeholder:"Enter your number"}),(0,a.jsx)(l.InputField,{handleOnChange:s,label:"Email",placeholder:"Enter your email"})]}),(0,a.jsxs)("div",{className:"md:flex gap-5",children:[(0,a.jsx)(l.InputField,{handleOnChange:s,type:"password",label:"Password",placeholder:"Password (Min. 6 digit)"}),(0,a.jsx)(l.InputField,{handleOnChange:s,label:"Retype Password",type:"password",placeholder:"Retype Password"})]})]})})},T=()=>{let e=e=>{};return(0,a.jsx)(j,{otp:!0,authTopLabel:"We have sent you One Time Password to your email",authTopLabelType:"normal",maxWidth:"max-w-[485px]",btnText:"Verify OTP",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2",children:[(0,a.jsx)(l.CommonText,{children:"Please Enter OTP"}),(0,a.jsx)(l.CommonText,{children:"1:52"})]}),(0,a.jsxs)("div",{className:"flex justify-center gap-2.5 items-center",children:[(0,a.jsx)(l.InputField,{otp:!0,width:"auto",handleOnChange:e}),(0,a.jsx)(l.InputField,{otp:!0,width:"auto",handleOnChange:e}),(0,a.jsx)(l.InputField,{otp:!0,width:"auto",handleOnChange:e}),(0,a.jsx)(l.InputField,{otp:!0,width:"auto",handleOnChange:e}),(0,a.jsx)(l.InputField,{otp:!0,width:"auto",handleOnChange:e}),(0,a.jsx)(l.InputField,{otp:!0,width:"auto",handleOnChange:e})]})]})})}}}]);