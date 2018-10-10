<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12
              sm8
              offset-sm2
              md6
              offset-md3
              xl4
              offset-xl4>
        <v-card>
          <v-container>
            <v-alert v-if="serverMsgGetter"
                     outline
                     :color="alertColor(success)"
                     :icon="alertIcon(success)"
                     :value="true">
              {{ serverMsgGetter }}
              <ul v-for="error in serverErrorsGetter">
                <li>{{ error.msg }}</li>
              </ul>
            </v-alert>
          </v-container>
          <v-container v-if="!successOrFail"
                       grid-list-lg>
            <div class="grey--text text--darken-1 title mb-1">
              {{ username }} - Reset your password
            </div>
            <spinner v-if="spinner"
                     :size="size"
                     :width="width">
            </spinner>
            <v-layout v-if="!spinner"
                      row
                      wrap>
              <v-flex xs12>
                <v-text-field label="New password"
                              color="blue darken-1"
                              type="password"
                              required
                              v-model="newPassword"
                              :error-messages="newPasswordErrors"
                              @input="$v.newPassword.$touch()"
                              @blur="$v.newPassword.$touch()"
                              @keyup.enter="reset"
                              :append-icon="e1 ? 'visibility' : 'visibility_off'"
                              @click:append="() => (e1 = !e1)"
                              :type="e1 ? 'password' : 'text'">
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
                              @keyup.enter="reset"
                              :append-icon="e2 ? 'visibility' : 'visibility_off'"
                              @click:append="() => (e2 = !e2)"
                              :type="e2 ? 'password' : 'text'">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions v-if="!successOrFail">
            <v-btn color="blue darken-1"
                   outline
                   flat
                   :disabled="spinner"
                   @click.native="reset">
              Reset
            </v-btn>
          </v-card-actions>
          <v-card-actions v-if="success">
            <v-btn color="blue darken-1"
                   outline
                   flat
                   to="/">
              Home
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import Spinner from "../../components/Spinners/Spinner";
import { mapGetters } from "vuex";
import { store } from "../../store/store";
import axios from "axios";

export default {
  name: "ResetPassword",
  validations: {
    newPassword: { required, minLength: minLength(8) },
    confirmPassword: {
      sameAsPassword: sameAs("newPassword"),
      required,
      minLength: minLength(8)
    }
  },
  components: {
    spinner: Spinner
  },
  data() {
    return {
      size: 60,
      width: 2,
      e1: true,
      e2: true,
      newPassword: "",
      confirmPassword: "",
      passErr1: "This field is required",
      passErr2: "Password must be at least 8 characters",
      passErr3: "Passwords must be identical",
      spinner: false,
      success: false,
      fail: false,
      errors: [],
      username: ""
    };
  },
  methods: {
    clearForm() {
      this.$v.$reset();
      this.newPassword = "";
      this.confirmPassword = "";
    },
    reset() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.spinner = true;

      this.$store
        .dispatch("setNewPassword", {
          token: this.$route.params.token,
          username: this.username,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword
        })
        .then(() => {
          this.clearForm();
          this.spinner = false;
          this.success = true;
        })
        .catch(error => {
          if (error.response.status === 401) {
            this.fail = true;
          }

          this.clearForm();
          this.spinner = false;
        });
    },
    alertColor(success) {
      return success ? "blue darken-1" : "error";
    },
    alertIcon(success) {
      return success ? "check_circle" : "warning";
    }
  },
  computed: {
    ...mapGetters({
      serverMsgGetter: "serverMsgGetter",
      serverErrorsGetter: "serverErrorsGetter"
    }),
    successOrFail() {
      return this.success || this.fail;
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
  beforeRouteEnter(to, from, next) {
    next(vm => {
      axios
        .post("/validateToken", {
          token: vm.$route.params.token
        })
        .then(response => {
          vm.username = response.data.username;
        })
        .catch(error => {
          vm.fail = true;
          store.dispatch("getServerMsgError", error);
        });
    });
  },
  destroyed() {
    this.$store.dispatch("resetServerMsg");
  }
};
</script>
