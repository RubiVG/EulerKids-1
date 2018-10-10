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
          <div class="title grey--text text--darken-2">Current email:</div>
          <div v-if="!spinner"
               class="subheading grey--text text--darken-2 mt-2">
            {{ currentEmail }}
          </div>
        </div>
      </v-card-title>
      <spinner v-if="spinner"
               :size="size"
               :width="width">
      </spinner>
      <form v-if="!spinner"
           class="ml-2 mr-2">
        <v-flex xs12>
          <v-text-field label="New email"
                        color="purple lighten-1"
                        required
                        v-model="newEmail"
                        :error-messages="emailErrors"
                        @input="$v.newEmail.$touch()"
                        @blur="$v.newEmail.$touch()"
                        @keyup.enter="editEmail">
          </v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field label="Password"
                        color="purple lighten-1"
                        type="password"
                        required
                        v-model="password"
                        :error-messages="passwordErrors"
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                        @keyup.enter="editEmail"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        @click:append="() => (e1 = !e1)"
                        :type="e1 ? 'password' : 'text'">
          </v-text-field>
        </v-flex>
      </form>
      <v-card-actions>
        <v-btn flat
               outline
               color="purple lighten-1"
               :disabled="spinner"
               @click.native="editEmail">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import Spinner from "../../../components/Spinners/Spinner";

export default {
  name: "Email",
  validations: {
    newEmail: { required, email },
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
      newEmail: "",
      passErr1: "Password is required",
      passErr2: "Password must be at least 8 characters",
      emailErr1: "Must be a valid email",
      emailErr2: "Email is required "
    };
  },
  methods: {
    clearForm() {
      this.$v.$reset();
      this.newEmail = "";
      this.password = "";
    },
    getEmail() {
      this.serverMsg = "";
      this.fail = false;

      this.$store
        .dispatch("Settings/getEmail")
        .then(() => {
          this.clearForm();
        })
        .catch(() => {
          this.clearForm();
        });
    },
    editEmail() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.serverMsg = null;
      this.errors = [];
      this.$store
        .dispatch("Settings/editEmail", {
          password: this.password,
          newEmail: this.newEmail
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
    currentEmail() {
      return this.$store.state.Settings.email;
    },
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
    emailErrors() {
      const errors = [];
      if (!this.$v.newEmail.$dirty) return errors;
      !this.$v.newEmail.email && errors.push(this.emailErr1);
      !this.$v.newEmail.required && errors.push(this.emailErr2);

      return errors;
    }
  },
  created() {
    this.$store.commit("error500Data", false);

    if (this.isAuthenticated) {
      this.getEmail();
    }

    if (!this.isAuthenticated) {
      this.$store.commit("dialogPayload", true);
    }
  },
  destroyed() {
    this.$store.commit("Settings/emailData", null);
    this.$store.commit("error500Data", false);
  }
};
</script>
