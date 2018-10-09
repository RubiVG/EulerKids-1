import Vue from "vue";
import {
  Vuetify,
  VApp,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VAvatar,
  VCard,
  VImg,
  VDivider,
  VBreadcrumbs,
  VMenu,
  VProgressCircular,
  VTabs,
  VDialog,
  VTextField,
  VAlert,
  VDataTable,
  VSnackbar,
  VParallax,
  transitions
} from "vuetify";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  components: {
    VApp,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VAvatar,
    VCard,
    VImg,
    VDivider,
    VBreadcrumbs,
    VMenu,
    VProgressCircular,
    VTabs,
    VDialog,
    VTextField,
    VAlert,
    VDataTable,
    VSnackbar,
    VParallax,
    transitions
  },
  iconfont: "md"
});
