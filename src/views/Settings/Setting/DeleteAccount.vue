<template>
  <v-flex xs12 sm8
          offset-sm2
          md4
          offset-md4>
    <v-card>
      <v-container v-if="serverMsg">
        <v-layout>
          <v-alert v-if="serverMsg"
                   outline
                   :color="colorAlert(isThereNewApp, fail)"
                   :icon="iconAlert(isThereNewApp, fail)"
                   :value="true">
            {{ serverMsg }}
            <ul v-for="error in errors">
              <li>{{ error.msg }}</li>
            </ul>
          </v-alert>
        </v-layout>
      </v-container>
      <v-card-title primary-title>
        <div>
          <div class="title grey--text text--darken-2">Delete account:</div>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="grey--text text--darken-2 subheading">
          Are you sure you want to delete your account?
          Deleting your account is a permanent decision.
          You will no longer be able to login, and your profile page
          will no longer be accessible.
        </div>
      </v-card-text>
      <spinner v-if="spinner"
               :size="size"
               :width="width">
      </spinner>
      <form v-if="!spinner"
            class="ml-2 mr-2">
        <v-flex xs12>
          <v-text-field label="Password"
                        color="purple lighten-1"
                        type="password"
                        required
                        v-model="password"
                        :error-messages="passwordErrors"
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                        @keyup.enter="deleteAccount"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        @click:append="() => (e1 = !e1)"
                        :type="e1 ? 'password' : 'text'">
          </v-text-field>
        </v-flex>
        <v-checkbox class="ml-1"
                    label="Yes, I want to delete my account"
                    v-model="checkbox">
        </v-checkbox>
      </form>
      <v-card-actions>
        <v-btn flat
               outline
               color="purple lighten-1"
               :disabled="!checkbox"
               @click.native="deleteAccount">
          Delete account
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import Spinner from "../../../components/Spinners/Spinner";

export default {
  name: "DeleteAccount",
  validations: {
    password: { required, minLength: minLength(8) }
  },
  props: ["isAuthenticated", "isThereNewApp", "colorAlert", "iconAlert"],
  components: {
    spinner: Spinner
  },
  data() {
    return {
      size: 60,
      width: 2,
      e1: true,
      fail: false,
      serverMsg: null,
      errors: [],
      password: "",
      passErr1: "Password is required",
      passErr2: "Password must be at least 8 characters",
      checkbox: false
    };
  },
  methods: {
    clearForm() {
      this.$v.$reset();
      this.password = "";
    },
    deleteAccount() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.serverMsg = null;
      this.errors = [];
      this.$store
        .dispatch("Settings/deleteAccount", {
          password: this.password
        })
        .then(() => {
          this.clearForm();
          this.fail = false;
          this.$router.push({ path: "/" });
          this.$store.commit("notAuthorized");
        })
        .catch(error => {
          this.clearForm();
          this.fail = true;
          this.checkbox = false;
          if (error.response.status === 500 || error.response.status === 422) {
            this.serverMsg = error.response.data.message;
            this.errors = error.response.data.errors;
          } else {
            this.serverMsg = null;
            this.errors = [];
          }
        });
    }
  },
  computed: {
    spinner() {
      return this.$store.state.Settings.spinner;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push(this.passErr1);
      !this.$v.password.minLength && errors.push(this.passErr2);

      return errors;
    }
  },
  created() {
    this.$store.commit("error500Data", false);

    if (!this.isAuthenticated) {
      this.$store.commit("dialogPayload", true);
    }
  },
  destroyed() {
    this.$store.commit("error500Data", false);
  }
};
</script>
