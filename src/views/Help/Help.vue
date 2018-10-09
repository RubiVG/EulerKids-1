<template>
  <v-container>
    <v-layout row
              wrap>
      <v-flex xs12
              xl8
              offset-xl2>
        <v-card flat>
          <v-container>
            <v-layout row
                      wrap>
              <v-flex mb-5
                      xs12>
                <v-img contain
                       :src="img(content.img1)"
                       height="50">
                </v-img>
              </v-flex>
              <v-flex xs8>
                <div>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.paragraph1"></span>
                  </p>
                  <br>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.paragraph2"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.paragraph3"></span>
                  </p>
                </div >
              </v-flex>
              <v-flex xs4>
                <v-img contain
                       :src="img(content.img2)"
                       height="250">
                </v-img>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      content: {
        img1: "needHelp.svg",
        img2: "help.svg",
        paragraph1:
          "Euler Kids is driven by the community and we're happy to hear " +
          "about any comments, feedback, exercises, features suggestions, " +
          "issues or bugs. You can reach us by simply writing to <b>help@eulerkids.com</b>",
        paragraph2: "<b>Best Regards!</b>",
        paragraph3: "The Euler Kids Team"
      }
    };
  },
  methods: {
    img(img) {
      return require(`@/assets/Help/${img}`);
    }
  }
};
</script>
