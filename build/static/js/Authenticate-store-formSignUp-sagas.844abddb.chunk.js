(this["webpackJsonpwebsite-hitacamp"]=this["webpackJsonpwebsite-hitacamp"]||[]).push([[55,24,54,57],{126:function(e,t,c){"use strict";c.r(t),t.default={POST_AUTH_SIGN_IN:"/SieuTriNhoHocDuong/login",POST_SEND_OTP:"/SieuTriNhoHocDuong/SendOTP",POST_SIGN_UP_TRIAL_ACCOUNT:"/SieuTriNhoHocDuong/Register",POST_SIGN_UP_TRIAL_ACCOUNT_OTP:"/SieuTriNhoHocDuong/RegisterWithOTP",POST_UPDATE_TO_TRIAL_ACCOUNT:"/SieuTriNhoHocDuong/UpdateUserExperience",GET_TRIAL_ACCOUNT_INFO:"/SieuTriNhoHocDuong/GetUserExperience",POST_ACTIVE_CODE:"/SieuTriNhoHocDuong/ActiveCode",POST_CHECK_ACTIVE_CODE:"/SieuTriNhoHocDuong/CheckCode",GET_VIDEO_TUTORIAL_ACTIVE_CODE:"/SieuTriNhoHocDuong/ActiveCodeTutorial",POST_AUTH_FORGOT_USERNAME:"/AccountHelper/ForgetUsername",POST_AUTH_FORGOT_PASSWORD:"/AccountHelper/ForgetPassword",POST_AUTH_VERIFY_ACCOUNT:"/AccountHelper/OTPConfirmAccount",POST_AUTH_VERIFY_PASSWORD:"/AccountHelper/OTPConfirmPassword",POST_AUTH_VERIFY_ACCOUNT_EMAIL:"/AccountHelperEmail/OTPConfirmAccount",POST_AUTH_VERIFY_PASSWORD_EMAIL:"/AccountHelperEmail/OTPConfirmPassword",POST_AUTH_FORGOT_USERNAME_EMAIL:"/AccountHelperEmail/ForgetUsername",POST_AUTH_FORGOT_PASSWORD_EMAIL:"/AccountHelperEmail/ForgetPassword",LOG_OUT:"",SIGN_IN_ACCOUNT:"/auth/signin"}},154:function(e,t,c){"use strict";c.r(t),c.d(t,"types",(function(){return s})),c.d(t,"actions",(function(){return i}));var a=c(3),n=c(268),o=c(346),r=Object(o.a)("formSignUp"),s=Object(a.a)({},r.types),i=Object(a.a)({},r.actions),O=Object(a.a)({},r.defaultState);t.default=Object(n.a)(Object(a.a)({},r.handleActions),O)},155:function(e,t,c){"use strict";c.r(t),c.d(t,"formSignUpCallMethod",(function(){return s}));var a=c(3),n=c(126),o=c(10),r=c(20),s=function(e){var t=e.payload,c=e.codeLanguage,s=t.otpSetup,i={email:t.username,password:t.password,fullName:t.parent_fullname,child1_ClassId:parseInt(t.class_name),cityId:parseInt(t.city),districtId:parseInt(t.district),address:t.address,phone:null===t||void 0===t?void 0:t.phone,appID:r.a,otp:null===t||void 0===t?void 0:t.otp,inviteUserCode:(null===t||void 0===t?void 0:t.codeInvite)||void 0},O={email:t.username,password:t.password,fullName:t.parent_fullname,child1_ClassId:parseInt(t.class_name),cityId:parseInt(t.city),districtId:parseInt(t.district),address:t.address,phone:null===t||void 0===t?void 0:t.phone,appID:r.a,inviteUserCode:(null===t||void 0===t?void 0:t.codeInvite)||void 0};return delete O.otpSetup,"firebase"===s&&(O.uid=t.uid,O.token=t.token),console.log("payload_register",t),o.a.post(c+"".concat("otp"===s?n.default.POST_SIGN_UP_TRIAL_ACCOUNT_OTP:n.default.POST_SIGN_UP_TRIAL_ACCOUNT),"otp"===s?Object(a.a)({},i):Object(a.a)({},O))}},182:function(e,t,c){"use strict";c.r(t),c.d(t,"submitForm",(function(){return _})),c.d(t,"default",(function(){return d}));var a=c(4),n=c(5),o=c(346),r=c(154),s=c(155),i=Object(a.a)().mark(d),O="formSignUp",u=O.toUpperCase(),_=Object(o.b)(O,r.actions,s)["".concat(O,"CallMethod")];function d(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.e)(r.types["".concat(u,"_METHOD")],_);case 2:case"end":return e.stop()}}),i)}},346:function(e,t,c){"use strict";c.d(t,"a",(function(){return _})),c.d(t,"b",(function(){return d}));var a=c(17),n=c(4),o=c(27),r=c(3),s=c(72),i=c(5),O=c(20),u=c(28),_=(O.c,O.b,function(e){var t,c,n,i,O=e.toUpperCase();return{types:(t={},Object(o.a)(t,"".concat(O,"_METHOD"),"".concat(O,"_METHOD")),Object(o.a)(t,"".concat(O,"_LOADING"),"".concat(O,"_LOADING")),Object(o.a)(t,"".concat(O,"_SUCCESS"),"".concat(O,"_SUCCESS")),Object(o.a)(t,"".concat(O,"_ERROR"),"".concat(O,"_ERROR")),Object(o.a)(t,"".concat(O,"_RESET"),"".concat(O,"_RESET")),t),actions:(c={},Object(o.a)(c,"".concat(e,"FnMethod"),Object(s.a)("".concat(O,"_METHOD"))),Object(o.a)(c,"".concat(e,"FnLoading"),Object(s.a)("".concat(O,"_LOADING"))),Object(o.a)(c,"".concat(e,"FnSuccess"),Object(s.a)("".concat(O,"_SUCCESS"))),Object(o.a)(c,"".concat(e,"FnError"),Object(s.a)("".concat(O,"_ERROR"))),Object(o.a)(c,"".concat(e,"FnReset"),Object(s.a)("".concat(O,"_RESET"))),c),defaultState:(n={},Object(o.a)(n,"".concat(e,"Loading"),!1),Object(o.a)(n,"".concat(e,"Success"),!1),Object(o.a)(n,"".concat(e,"Error"),!1),Object(o.a)(n,"".concat(e,"DataResponse"),null),n),handleActions:(i={},Object(o.a)(i,"".concat(O,"_LOADING"),(function(t,c){var a=c.payload;return Object(r.a)(Object(r.a)({},t),{},Object(o.a)({},"".concat(e,"Loading"),a))})),Object(o.a)(i,"".concat(O,"_SUCCESS"),(function(t,c){var n,s=c.payload;return Object(r.a)(Object(r.a)({},t),{},(n={},Object(o.a)(n,"".concat(e,"Error"),!1),Object(o.a)(n,"".concat(e,"Success"),!0),Object(o.a)(n,"".concat(e,"DataResponse"),Array.isArray(s)?Object(a.a)(s):"object"===typeof s?Object(r.a)({},s):s),n))})),Object(o.a)(i,"".concat(O,"_ERROR"),(function(t,c){var a,n=c.payload;return Object(r.a)(Object(r.a)({},t),{},(a={},Object(o.a)(a,"".concat(e,"Success"),!1),Object(o.a)(a,"".concat(e,"Error"),!0),Object(o.a)(a,"".concat(e,"DataResponse"),"object"===typeof n?Object(r.a)({},n):n),a))})),Object(o.a)(i,"".concat(O,"_RESET"),(function(t,c){var a,n=c.payload;return a={},Object(o.a)(a,"".concat(e,"Loading"),!1),Object(o.a)(a,"".concat(e,"Success"),!1),Object(o.a)(a,"".concat(e,"Error"),!1),Object(o.a)(a,"".concat(e,"DataResponse"),null!==n&&void 0!==n&&n.keepDataResponse?t["".concat(e,"DataResponse")]:null),a})),i)}}),d=function(e,t,c){return Object(o.a)({},"".concat(e,"CallMethod"),(function(a){var o=a.payload;return Object(n.a)().mark((function a(){var r,s,_;return Object(n.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(i.b)(t["".concat(e,"FnLoading")](!0));case 3:return a.next=5,Object(i.c)(u.a);case 5:return r=a.sent,a.next=8,Object(i.a)(c["".concat(e,"CallMethod")],{payload:o,codeLanguage:r});case 8:if(s=a.sent,_=s.data,s.status!==O.e){a.next=20;break}if(_.retCode!==O.d){a.next=16;break}return a.next=14,Object(i.b)(t["".concat(e,"FnSuccess")](_.data));case 14:a.next=18;break;case 16:return a.next=18,Object(i.b)(t["".concat(e,"FnError")]({error:_}));case 18:a.next=22;break;case 20:return a.next=22,Object(i.b)(t["".concat(e,"FnError")]({error:"system_error"}));case 22:a.next=29;break;case 24:return a.prev=24,a.t0=a.catch(0),console.error(a.t0),a.next=29,Object(i.b)(t["".concat(e,"FnError")]({error:"system_error"}));case 29:return a.prev=29,a.next=32,Object(i.b)(t["".concat(e,"FnLoading")](!1));case 32:return a.finish(29);case 33:case"end":return a.stop()}}),a,null,[[0,24,29,33]])}))()}))}}}]);
//# sourceMappingURL=Authenticate-store-formSignUp-sagas.844abddb.chunk.js.map