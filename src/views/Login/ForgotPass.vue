<template>
  <div>
    <spinner v-if="spinner"
             :size="size"
             :width="width" class="mb-2"/>
    <v-layout wrap>
      <v-alert v-if="serverMsgGetter"
               outline
               color="error"
               icon="warning"
               :value="true">
        {{ serverMsgGetter }}
        <ul v-for="error in serverErrorsGetter">
          <li>{{ error.msg }}</li>
        </ul>
      </v-alert>
      <v-alert type="success"
               color="blue darken-1"
               outline
               v-model="success">
        <div>
          We've sent you a message at: <b>{{ email }}</b>
        </div>
        <div>
          Follow the link in that message to reset your password.
        </div>
        <div>
          If you have not received the email, please check your spam folder.
        </div>
      </v-alert>
      <div v-if="!success">
        <div v-if="!spinner"
             class="grey--text text--darken-2 subheading">
          Enter the email address associated with your account, and we’ll email you a
          link to reset your password.
        </div>
        <v-flex v-if="!spinner"
                xs12>
          <v-text-field label="Email"
                        color="blue darken-1"
                        required
                        v-model="email"
                        :error-messages="emailErrors"
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        @keyup.enter="sendLink">
          </v-text-field>
        </v-flex>
      </div>
    </v-layout>
    <div v-if="!success"
         class="text-xs-center">
      <v-btn color="blue darken-1"
             outline
             flat
             :disabled="spinner"
             @click.native="sendLink">
        Send reset link
      </v-btn>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import Spinner from "../../components/Spinners/Spinner";

export default {
  name: "ForgotPass",
  validations: {
    email: { required, email }
  },
  props: [
    "size",
    "width",
    "serverMsgGetter",
    "serverErrorsGetter",
    "resetServerMsgData"
  ],
  components: {
    spinner: Spinner
  },
  data() {
    return {
      spinner: false,
      success: false,
      email: "",
      emailErr1: "Must be a valid email",
      emailErr2: "Email is required"
    };
  },
  methods: {
    clearForm() {
      this.$v.$reset();
      this.email = "";
    },
    sendLink() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.spinner = true;

      this.$store
        .dispatch("sendLink", {
          email: this.email
        })
        .then(response => {
          this.spinner = false;
          this.clearForm();
          this.email = response.data.email;
          this.success = true;
        })
        .catch(err => {
          this.clearForm();
          this.spinner = false;
        });
    }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push(this.emailErr1);
      !this.$v.email.required && errors.push(this.emailErr2);

      return errors;
    }
  },
  destroyed() {
    this.resetServerMsgData();
  }
};
</script>
