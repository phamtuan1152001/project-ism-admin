(this["webpackJsonpwebsite-hitacamp"]=this["webpackJsonpwebsite-hitacamp"]||[]).push([[32,24,33],{126:function(e,t,n){"use strict";n.r(t),t.default={POST_AUTH_SIGN_IN:"/SieuTriNhoHocDuong/login",POST_SEND_OTP:"/SieuTriNhoHocDuong/SendOTP",POST_SIGN_UP_TRIAL_ACCOUNT:"/SieuTriNhoHocDuong/Register",POST_SIGN_UP_TRIAL_ACCOUNT_OTP:"/SieuTriNhoHocDuong/RegisterWithOTP",POST_UPDATE_TO_TRIAL_ACCOUNT:"/SieuTriNhoHocDuong/UpdateUserExperience",GET_TRIAL_ACCOUNT_INFO:"/SieuTriNhoHocDuong/GetUserExperience",POST_ACTIVE_CODE:"/SieuTriNhoHocDuong/ActiveCode",POST_CHECK_ACTIVE_CODE:"/SieuTriNhoHocDuong/CheckCode",GET_VIDEO_TUTORIAL_ACTIVE_CODE:"/SieuTriNhoHocDuong/ActiveCodeTutorial",POST_AUTH_FORGOT_USERNAME:"/AccountHelper/ForgetUsername",POST_AUTH_FORGOT_PASSWORD:"/AccountHelper/ForgetPassword",POST_AUTH_VERIFY_ACCOUNT:"/AccountHelper/OTPConfirmAccount",POST_AUTH_VERIFY_PASSWORD:"/AccountHelper/OTPConfirmPassword",POST_AUTH_VERIFY_ACCOUNT_EMAIL:"/AccountHelperEmail/OTPConfirmAccount",POST_AUTH_VERIFY_PASSWORD_EMAIL:"/AccountHelperEmail/OTPConfirmPassword",POST_AUTH_FORGOT_USERNAME_EMAIL:"/AccountHelperEmail/ForgetUsername",POST_AUTH_FORGOT_PASSWORD_EMAIL:"/AccountHelperEmail/ForgetPassword",LOG_OUT:"",SIGN_IN_ACCOUNT:"/auth/signin"}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"signIn",(function(){return O})),n.d(t,"sendOtp",(function(){return i})),n.d(t,"signInDev",(function(){return s})),n.d(t,"sendOtpDev",(function(){return _}));var r=n(3),a=n(126),c=n(10),o=n(48),u=n(20),O=function(e){var t=e.codeLanguage,n=e.payload;return c.a.post(t+a.default.POST_AUTH_SIGN_IN,Object(r.a)(Object(r.a)({},n),{},{appID:u.a}))},i=function(e){var t=e.codeLanguage,n=e.payload;return c.a.post(t+a.default.POST_SEND_OTP,{phoneNumber:n})},s=function(e){var t=e.codeLanguage,n=e.payload;return o.a.post(t+a.default.POST_AUTH_SIGN_IN,Object(r.a)(Object(r.a)({},n),{},{appID:u.a}))},_=function(e){var t=e.codeLanguage,n=e.payload;return o.a.post(t+a.default.POST_SEND_OTP,{phoneNumber:n})}},171:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var r=n(4),a=(n(1),n(5)),c=n(25),o=n(50),u=n(143),O=n(20),i=n(28),s=n(10),_=n(120),T=n(416),d=n(26),S=Object(r.a)().mark(l),p=Object(r.a)().mark(I);function A(e){var t=e.payload;return Object(r.a)().mark((function e(){var n,o,T;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(a.c)(i.a);case 3:return n=e.sent,e.next=6,Object(a.a)(u.signIn,{payload:t,codeLanguage:n});case 6:if(o=e.sent,T=o.data,o.status!==O.e||T.retCode!==O.d){e.next=17;break}return s.a.defaults.headers.common.Authorization="Bearer ".concat(T.data.token),_.a.defaults.headers.common.Authorization="Bearer ".concat(T.data.token),e.next=13,Object(a.b)({type:c.SIGN_IN_SUCCESS,payload:T.data});case 13:return e.next=15,Object(a.b)(d.a.setInfoData(T.data));case 15:e.next=19;break;case 17:return e.next=19,Object(a.b)({type:c.SIGN_IN_ERROR,error:T.retText});case 19:e.next=26;break;case 21:return e.prev=21,e.t0=e.catch(0),console.log("LOGIN ERR",e.t0),e.next=26,Object(a.b)({type:c.SIGN_IN_ERROR,error:e.t0});case 26:case"end":return e.stop()}}),e,null,[[0,21]])}))()}function l(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(a.c)(T.a);case 3:return e.sent,e.next=6,Object(a.b)(d.a.clearUserData({}));case 6:return e.next=8,Object(a.b)(o.authLogoutSuccess({}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("LOGOUT ERR",e.t0);case 13:case"end":return e.stop()}}),S,null,[[0,10]])}function I(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.d)(c.CALL_SIGN_IN_METHOD,A);case 2:return e.next=4,Object(a.d)(c.CALL_LOGOUT_METHOD,l);case 4:case"end":return e.stop()}}),p)}},416:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(21),a=function(e){return e.user},c=Object(r.a)(a,(function(e){return null===e||void 0===e?void 0:e.userData}));Object(r.a)(a,(function(e){return(null===e||void 0===e?void 0:e.loading)||null}))}}]);
//# sourceMappingURL=Authenticate-store-auth-sagas.979d7b44.chunk.js.map