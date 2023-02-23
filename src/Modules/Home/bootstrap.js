import intlMessagesEN from "./i18n/localization/en.json";
import intlMessagesVi from "./i18n/localization/vi.json";
import initReducer from "./Store/initReducer";
import initSagas from "./Store/initSagas";

export default {
  name: "Home",
  dir: "Home",
  pathRoot: "",
  routes: [
    {
      url: "",
      component: "Page/index",
      layout: "BlankLayout",
      meta: {
        authRoute: true,
      },
      props: {
        title: "Đăng nhập Admin",
        titleI18n: "Login Admin",
        headerStyle: "fill",
        exact: true,
      },
    },
  ],
  lang: { vi: intlMessagesVi, en: intlMessagesEN },
  isAuthenticate: true,
  redux: initReducer,
  sagas: initSagas,
};
