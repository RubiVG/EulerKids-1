<template>
  <div>
    <spinner v-if="spinner" class="mb-3" :size="size" :width="width" />
    <v-alert
      v-if="serverMsgGetter"
      outline
      :color="alertColor(isThereNewApp)"
      icon="warning"
      :value="true"
    >
      {{ serverMsgGetter }}
      <ul v-for="error in serverErrorsGetter">
        <li>{{ error.msg }}</li>
      </ul>
    </v-alert>
    <v-layout v-if="!spinner" wrap>
      <v-flex xs12>
        <v-text-field
          label="Username"
          color="blue darken-1"
          required
          v-model="username"
          :error-messages="usernameErrors"
          @input="$v.username.$touch();"
          @blur="$v.username.$touch();"
          @keyup.enter="login"
        >
        </v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="Password"
          color="blue darken-1"
          type="password"
          required
          v-model="password"
          :error-messages="passwordErrors"
          @input="$v.password.$touch();"
          @blur="$v.password.$touch();"
          @keyup.enter="login"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          @click:append="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
        >
        </v-text-field>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
      <v-btn
        color="blue darken-1"
        outline
        flat
        :disabled="spinner"
        @click.native="login"
      >
        Log in
      </v-btn>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Spinner from "../../components/Spinners/Spinner";

export default {
  name: "Login",
  validations: {
    username: {
      required,
      noSpaces: value => {
        if (typeof value === "undefined" || value === null || value === "") {
          return true;
        }
        return /^\w+$/.test(value);
      }
    },
    password: { required }
  },
  props: [
    "size",
    "width",
    "alertColor",
    "isThereNewApp",
    "serverMsgGetter",
    "serverErrorsGetter",
    "resetServerMsgData"
  ],
  components: {
    spinner: Spinner
  },
  data() {
    return {
      e1: true,
      color: "",
      spinner: false,
      errors: [],
      username: "",
      password: "",
      passErr: "Password is required",
      userErr1: "Username is required",
      userErr2: "Username has invalid characters"
    };
  },
  methods: {
    clearForm() {
      this.$v.$reset();
      this.username = "";
      this.password = "";
    },
    login() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.spinner = true;

      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.spinner = false;
          this.clearForm();
          this.$emit("closeRegisterWindowLogin", false);
        })
        .catch(err => {
          this.clearForm();
          this.spinner = false;
        });
    }
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push(this.passErr);

      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push(this.userErr1);
      !this.$v.username.noSpaces && errors.push(this.userErr2);

      return errors;
    }
  },
  destroyed() {
    this.resetServerMsgData();
  }
};
</script>
