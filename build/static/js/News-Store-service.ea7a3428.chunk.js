(this["webpackJsonpwebsite-hitacamp"]=this["webpackJsonpwebsite-hitacamp"]||[]).push([[84,85],{129:function(e,t,n){"use strict";n.r(t),t.default={CREATE_NEWS:"/news/create-news",GET_DETAIL_NEWS:"/news/get-detail-new",UPDATE_DETAIL_NEWS:"/news/update-detail-new",DELETE_DETAIL_NEWS:"/news/delete-detail-new",GET_LIST_NEWS:"/news/get-list-new"}},132:function(e,t,n){"use strict";n.r(t),n.d(t,"createNews",(function(){return s})),n.d(t,"getDetailNews",(function(){return E})),n.d(t,"updateDetailNews",(function(){return o})),n.d(t,"deleteDetailNews",(function(){return d})),n.d(t,"getListNews",(function(){return f}));var r=n(3),a=n(332),u=n(129),i=n(10),c=["idNews"],s=function(e){return i.a.post(u.default.CREATE_NEWS,e)},E=function(e){var t=(e||{}).idNews;return i.a.get(u.default.GET_DETAIL_NEWS+"/".concat(t))},o=function(e){var t=e||{},n=t.idNews,s=Object(a.a)(t,c);return i.a.put(u.default.UPDATE_DETAIL_NEWS+"/".concat(n),Object(r.a)({},s))},d=function(e){var t=(e||{}).idNews;return i.a.delete(u.default.DELETE_DETAIL_NEWS+"/".concat(t))},f=function(e){return i.a.post(u.default.GET_LIST_NEWS,e)}},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(24);function a(e,t){if(null==e)return{};var n,a,u=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}}}]);
//# sourceMappingURL=News-Store-service.ea7a3428.chunk.js.map