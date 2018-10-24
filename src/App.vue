<template>
  <v-app>
    <v-toolbar app
               :clipped-left="clipped">
      <v-toolbar-items>
        <v-btn active-class
               to="/"
               flat
               slot="activator">
          <v-avatar  height="200px">
            <img :src="rocket"
                 alt="logo">
          </v-avatar>
        </v-btn>
      </v-toolbar-items>
      <v-spacer/>
      <v-btn icon
             to="/love"
             class="">
        <v-icon large color="pink">favorite</v-icon>
      </v-btn>
      <v-btn v-if="!isAuthenticated"
             flat
             @click.native.stop="dialogOn">
        Log in
      </v-btn>
      <v-menu v-if="isAuthenticated"
              bottom
              offset-y
              left
              :close-on-content-click="true">
        <v-btn slot="activator"
               icon>
          <v-icon>more_horiz</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-sub-title>
                Welcome!
              </v-list-tile-sub-title>
              <v-list-tile-title>{{ username }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider/>
          <v-list>
            <v-list-tile :to="settings"
                         active-class="purple--text text--lighten-1">
              <v-list-tile-title>
                Settings
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
          <v-divider/>
          <v-list class="mt-1" >
            <v-list-tile  @click.stop="signOut">
              <v-list-tile-title >
                Log out
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <log-in :dialog="showDialog"
            @closeRegisterWindow="dialogOff"/>
    <new-app :snackbar="isThereNewApp"
             :x="snackbar.x"
             :y="snackbar.y"
             :color="snackbar.color"
             :timeout="snackbar.timeout"
             :text="snackbar.text"
             @updateApp="updateApp">
    </new-app>
    <v-footer app
              :absolute="absolute"
              height="auto">
      <v-layout row
                wrap
                class="grey lighten-3">
        <v-flex xs12
                sm6
                offset-sm3>
          <v-layout row
                    wrap>
            <v-flex xs12
                    class="text-xs-center">
              <v-btn small
                     v-for="icon in icons"
                     :key="icon.icon"
                     icon
                     target="_blank"
                     :href="icon.to"
                     class="grey--text lighten-2">
                <v-icon size="24px">{{ icon.icon }}</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs12
                    py-1
                    class="text-xs-center">
              <router-link class="caption grey--text lighten-2 mr-2"
                           to="/help">
                Help
              </router-link>
              <router-link class="caption grey--text lighten-2 mr-2"
                           to="/privacy-policy">
                Privacy
              </router-link>
              <router-link class="caption grey--text lighten-2 mr-1"
                           to="/terms-of-service">
                Terms
              </router-link>
            </v-flex>
            <v-flex xs12
                    text-xs-center
                    grey--text
                    lighten-2>
              &copy;{{ year }} — <strong>Euler Kids</strong> made with <v-icon color="grey" small>favorite</v-icon>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Login from "./views/Login/Parent";
import NewApp from "./components/Snackbars/SimpleSnack";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    "log-in": Login,
    "new-app": NewApp
  },
  data() {
    return {
      clipped: true,
      fixed: false,
      absolute: true,
      newApp: true,
      icons: [
        {
          icon: "fab fa-facebook",
          to: "https://www.facebook.com/eulerkids/"
        },
        {
          icon: "fab fa-instagram",
          to: "https://instagram.com/eulerkids"
        },
        {
          icon: "fab fa-github-alt",
          to: "https://github.com/andresperezc/EulerKids"
        }
      ],
      snackbar: {
        snackbar: true,
        y: "bottom",
        x: "right",
        timeout: 0,
        color: "blue darken-1",
        text: "Euler Kids has a new version. Please update to continue",
        dark: true
      }
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");

      if (this.$route.matched[0].path === "/settings") {
        this.$router.push({ path: "/" });
      }
    },
    updateApp() {
      this.$store.commit("updateAppPayload", false);

      return window.location.reload();
    },
    dialogOn() {
      if (this.$route.matched[0].path === "/reset/:token") {
        this.$router.push({ path: "/" });
      }

      this.$store.commit("dialogPayload", true);
    },
    dialogOff() {
      this.$store.commit("dialogPayload", false);
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "isThereNewApp", "showDialog"]),
    year() {
      const currentTime = new Date();

      return currentTime.getFullYear();
    },
    username() {
      return this.$store.state.username;
    },
    settings() {
      return `/settings`;
    },
    rocket() {
      return require(`@/assets/Landing/rocket.svg`);
    },
  },
  created() {
    this.$store
      .dispatch("getAppVersion")
      .then(appVersion => {
        console.log(appVersion);
      })
      .catch(error => {});
  }
};
</script>

<style>
.images-2 {
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: center;
}
.images-2 img {
  vertical-align: middle;
}

.responsive {
  width: 100%;
}
</style>
