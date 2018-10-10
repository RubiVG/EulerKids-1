<template>
  <component :isAuthenticated="isAuthenticated"
             :isThereNewApp="isThereNewApp"
             :colorAlert="colorAlert"
             :iconAlert="iconAlert"
             :is="currentView">
  </component>
</template>

<script>
const Email = () => import("./Email");
const EditPassword = () => import("./EditPassword");
const DeleteAccount = () => import("./DeleteAccount");

export default {
  name: "Setting",
  props: ["isAuthenticated", "isThereNewApp"],
  components: {
    email: Email,
    "edit-password": EditPassword,
    "delete-account": DeleteAccount
  },
  methods: {
    colorAlert(isThereNewApp, fail) {
      return isThereNewApp || !fail ? "blue darken-1" : "error";
    },
    iconAlert(isThereNewApp, fail) {
      return isThereNewApp || !fail ? "check_circle" : "warning";
    }
  },
  computed: {
    currentView() {
      return this.$route.params.setting;
    }
  }
};
</script>
