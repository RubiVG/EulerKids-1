<template>
  <component :isAuthenticated="isAuthenticated"
             :isThereNewApp="isThereNewApp"
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
  computed: {
    currentView() {
      return this.$route.params.setting;
    }
  }
};
</script>
