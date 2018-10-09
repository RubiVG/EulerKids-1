<template>
  <v-layout row
            justify-center>
    <v-dialog v-model="dialog"
              persistent
              max-width="500px">
      <v-card>
        <v-card-text>
          <v-flex xs1
                  offset-xs11>
            <v-btn flat
                   icon
                   color="grey darken-1"
                   @click.native="closeRegistration">
              <v-icon>close</v-icon>
            </v-btn>
          </v-flex>
          <v-container grid-list-md>
            <login v-if="login"
                   :size="size"
                   :width="width"
                   :alertColor="alertColor"
                   :isThereNewApp="isThereNewApp"
                   :serverMsgGetter="serverMsgGetter"
                   :serverErrorsGetter="serverErrorsGetter"
                   :resetServerMsgData="resetServerMsgData"
                   @closeRegisterWindowLogin="closeRegistration"/>
            <sign-up v-if="signUp"
                     :size="size"
                     :width="width"
                     :alertColor="alertColor"
                     :isThereNewApp="isThereNewApp"
                     :serverMsgGetter="serverMsgGetter"
                     :serverErrorsGetter="serverErrorsGetter"
                     :resetServerMsgData="resetServerMsgData"
                     @closeRegisterWindowSignUp="closeRegistration"/>
            <forgot-pass v-if="forgotPass"
                         :size="size"
                         :width="width"
                         :serverMsgGetter="serverMsgGetter"
                         :serverErrorsGetter="serverErrorsGetter"
                         :resetServerMsgData="resetServerMsgData"/>
            <div v-if="login"
                 class="text-xs-center mt-1">
              <router-link to=""
                           @click.native="forgotPassword">
                Forgot password?
              </router-link>
            </div>
          </v-container>
          <v-divider/>
          <div v-if="login"
               class="text-xs-center">
            Don’t have an account?
            <v-btn color="blue darken-1"
                   flat
                   @click.native="toSignUp">
              Sign up
            </v-btn>
          </div>
          <div v-if="signUp"
               class="text-xs-center">
            Already have an account?
            <v-btn color="blue darken-1"
                   flat
                   @click.native="toLogin">
              Log in
            </v-btn>
          </div>
          <div v-if="forgotPass"
               class="text-xs-center">
            <v-btn color="blue darken-1"
                   flat
                   @click.native="toLogin">
              Back to log in
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Login from "./Login";
import SignUp from "./SignUp";
import Forgot from "./ForgotPass";
import { mapGetters } from "vuex";

export default {
  name: "Parent",
  props: ["dialog"],
  components: {
    login: Login,
    "sign-up": SignUp,
    "forgot-pass": Forgot
  },
  data() {
    return {
      size: 60,
      width: 2,
      login: true,
      signUp: false,
      forgotPass: false
    };
  },
  methods: {
    closeRegistration: function() {
      this.$emit("closeRegisterWindow", false);
      this.allOff();
    },
    toSignUp() {
      this.login = false;
      this.signUp = true;
      this.forgotPass = false;
    },
    toLogin() {
      this.login = true;
      this.signUp = false;
      this.forgotPass = false;
    },
    forgotPassword() {
      this.login = false;
      this.signUp = false;
      this.forgotPass = true;
    },
    allOff() {
      this.resetServerMsgData();
      this.login = false;
      this.signUp = false;
      this.forgotPass = false;
    },
    resetServerMsgData() {
      this.$store.commit("serverMsgPayload", {
        message: null,
        errors: []
      });
    },
    alertColor(isThereNewApp) {
      return isThereNewApp ? "blue darken-1" : "error";
    }
  },
  computed: {
    ...mapGetters({
      isThereNewApp: "isThereNewApp",
      serverMsgGetter: "serverMsgGetter",
      serverErrorsGetter: "serverErrorsGetter"
    })
  },
  watch: {
    dialog(val) {
      if (val) {
        this.toLogin();
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
