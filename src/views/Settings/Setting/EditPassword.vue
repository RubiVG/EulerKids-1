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
          <div class="title grey--text text--darken-2">Edit password:</div>
        </div>
      </v-card-title>
      <spinner v-if="spinner"
               :size="size"
               :width="width">
      </spinner>
      <form v-if="!spinner"
            class="ml-2 mr-2">

        <v-flex xs12>
          <v-text-field label="Current password"
                        color="purple lighten-1"
                        type="password"
                        required
                        v-model="password"
                        :error-messages="passwordErrors"
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                        @keyup.enter="editPassword"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        @click:append="() => (e1 = !e1)"
                        :type="e1 ? 'password' : 'text'">
          </v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field label="New password"
                        color="blue darken-1"
                        type="password"
                        required
                        v-model="newPassword"
                        :error-messages="newPasswordErrors"
                        @input="$v.newPassword.$touch()"
                        @blur="$v.newPassword.$touch()"
                        @keyup.enter="editPassword"
                        :append-icon="e2 ? 'visibility' : 'visibility_off'"
                        @click:append="() => (e2 = !e2)"
                        :type="e2 ? 'password' : 'text'">
          </v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field label="Confirm new password"
                        color="blue darken-1"
                        type="password"
                        required
                        v-model="confirmPassword"
                        :error-messages="confirmPasswordErrors"
                        @input="$v.confirmPassword.$touch()"
                        @blur="$v.confirmPassword.$touch()"
                        @keyup.enter="editPassword"
                        :append-icon="e3 ? 'visibility' : 'visibility_off'"
                        @click:append="() => (e3 = !e3)"
                        :type="e3 ? 'password' : 'text'">
          </v-text-field>
        </v-flex>
      </form>
      <v-card-actions>
        <v-btn flat
               outline
               color="purple lighten-1"
               :disabled="spinner"
               @click.native="editPassword">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import Spinner from "../../../components/Spinners/Spinner";

export default {
  name: "EditPassword",
  validations: {
    password: { required, minLength: minLength(8) },
    newPassword: { required, minLength: minLength(8) },
    confirmPassword: {
      sameAsPassword: sameAs("newPassword"),
      required,
      minLength: minLength(8)
    }
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
      e2: true,
      e3: true,
      fail: false,
      serverMsg: null,
      errors: [],
      password: "",
      newPassword: "",
      confirmPassword: "",
      passErr1: "This field is required",
      passErr2: "Password must be at least 8 characters",
      passErr3: "Passwords must be identical"
    };
  },
  methods: {
    clearForm() {
      this.$v.$reset();
      this.password = "";
      this.newPassword = "";
      this.confirmPassword = "";
    },
    editPassword() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.serverMsg = null;
      this.errors = [];
      this.$store
        .dispatch("Settings/editPassword", {
          password: this.password,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword
        })
        .then(response => {
          this.clearForm();
          this.serverMsg = response.data.message;
          this.fail = false;
        })
        .catch(error => {
          this.clearForm();
          this.fail = true;
          this.serverMsg = error.response.data.message;
          this.errors = error.response.data.errors;
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
    },
    newPasswordErrors() {
      const errors = [];
      if (!this.$v.newPassword.$dirty) return errors;
      !this.$v.newPassword.required && errors.push(this.passErr1);
      !this.$v.newPassword.minLength && errors.push(this.passErr2);

      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.required && errors.push(this.passErr1);
      !this.$v.confirmPassword.minLength && errors.push(this.passErr2);
      !this.$v.confirmPassword.sameAsPassword && errors.push(this.passErr3);

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
