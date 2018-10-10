<template>
  <v-container v-show="isAuthenticated"
               grid-list-lg
               fluid>
    <v-layout wrap>
      <bread-crumb :bread-items="breadItems"
                   :bread-color="breadColor">
      </bread-crumb>
      <server-error v-if="isThereError500"
                    :errorMsgGetter="settingsErrorMsgGetter"
                    :errorsGetter="settingsErrorsGetter"/>
      <router-view v-show="!isThereError500"
                   :isAuthenticated="isAuthenticated"
                   :isThereNewApp="isThereNewApp"
                   :gradient="gradient"
                   :imgSettings="imgSettings"
                   :settings="settings"/>
    </v-layout>
  </v-container>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumbs/BreadCrumbSimple";
import SeverError from "../../components/Cards/CardErrors";
import { mapGetters } from "vuex";

export default {
  name: "Parent",
  components: {
    "bread-crumb": BreadCrumb,
    "server-error": SeverError
  },
  data() {
    return {
      breadColor: "purple--text text--lighten-1",
      gradient: "grad4"
    };
  },
  methods: {
    imgSettings(img) {
      return require(`@/assets/Settings/${img}`);
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      isThereError500: "isThereError500",
      isThereNewApp: "isThereNewApp",
      settingsErrorMsgGetter: "Settings/settingsErrorMsgGetter",
      settingsErrorsGetter: "Settings/settingsErrorsGetter"
    }),
    username() {
      return this.$store.state.username;
    },
    urlName() {
      this.$store.commit("getUrlName", this.$route.name);

      return this.$store.state.urlName;
    },
    routeParamsName() {
      this.$store.commit("getRouteParamsName", this.$route.params.setting);

      return this.$store.state.routeParamsName;
    },
    breadItems() {
      if (this.urlName === "settings") {
        return [
          {
            text: "Settings",
            disabled: true,
            to: ""
          }
        ];
      }

      if (this.urlName === "setting") {
        return [
          {
            text: "Settings",
            disabled: false,
            to: `/settings`
          },
          {
            text: this.settingText,
            disabled: true,
            to: ""
          }
        ];
      }
    },
    settings() {
      return [
        {
          img: "email.svg",
          to: `/settings/email`
        },
        {
          img: "password.svg",
          to: `/settings/edit-password`
        },
        // {
        //   img: "delete.svg",
        //   to: `/settings/delete-account`
        // }
      ];
    },
    settingText() {
      return this.routeParamsName
        .replace(/\w/, c => c.toUpperCase())
        .replace(/\-/g, " ");
    }
  }
};
</script>
