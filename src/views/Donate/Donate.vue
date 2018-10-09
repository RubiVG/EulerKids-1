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
              <v-flex xs12>
                <v-img class="mb-5"
                       contain
                       :src="img(content.img1)"
                       height="85">
                </v-img>
              </v-flex>
              <v-flex xs12>
                <div>
                  <p class="grey--text text--darken-2 title text-xs-center">
                    <span v-html="content.parrafo0"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo1"></span>
                  </p>
                  <v-img class="mb-5"
                         contain
                         :src="img(content.img2)"
                         height="300">
                  </v-img>
                  <v-img class="mb-3"
                         contain
                         :src="img(content.img3)"
                         height="40">
                  </v-img>
                  <p class="grey--text text--darken-2 subheading text-xs-center">
                    <span v-html="content.parrafo2"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo3 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo4"></span>
                  </p>
                  <v-img class="mt-5 mb-3"
                         contain
                         :src="img(content.img4)"
                         height="40">
                  </v-img>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo5 }}
                  </p>
                  <p class="grey--text text--darken-2 headline text-xs-center">
                    <span v-html="content.parrafo6"></span>
                  </p>
                  <v-img class="mt-5 mb-3"
                         contain
                         :src="img(content.img5)"
                         height="40">
                  </v-img>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo7 }}
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    {{ content.parrafo8 }}
                  </p>
                  <v-img contain
                         :src="img(content.img6)"
                         height="250">
                  </v-img>
                  <div class="grey--text text--darken-1 title mt-3">
                    <v-btn dark
                           depressed
                           class="red lighten-1"
                           href="https://www.patreon.com/eulerkids"
                           target="_blank">
                      <i class="fab fa-patreon mr-3"></i>
                      Become a patreon
                    </v-btn>
                    or
                    <v-btn dark
                           depressed
                           class="blue darken-1"
                           href="https://www.paypal.me/eulerkids"
                           target="_blank">
                      <i class="fab fa-paypal mr-3"></i>
                      Paypal
                    </v-btn>
                  </div>
                  <div class="mt-3">
                    <v-img contain
                           :src="img(content.img7)"
                           height="50">
                    </v-img>
                  </div>
                </div>
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
  name: "Donate",
  data() {
    return {
      content: {
        img1: "support.svg",
        parrafo0:
          "<b>Free and Quality Educational Technology for Everyone</b> is why Euler Kids exists.",
        parrafo1:
          "But we need your support because our astronauts have not found the " +
          "<b>Infinite Money planet</b> yet, to be able to pay for the expenses " +
          "(although they keep looking).",
        img2: "astronaut.svg",
        img3: "challenge.svg",
        parrafo2:
          "<b> More than 250 million</b> children have some kind of educational " +
          "gap.",
        parrafo3:
          "One of the biggest problems in education is the lack of practice. The curriculum is " +
          "extensive, and the topics aren't practiced enough, which leaves gaps " +
          "in the learning process.",
        parrafo4:
          "There are numerous of educational websites, however, they are either " +
          "expensive, or they are full of publicity that besides being a factor of " +
          "distraction, it can sometimes be inappropriate for the kids. ",
        img4: "dream.svg",
        parrafo5:
          "Offer through our platform, high quality education and the best learning " +
          "experience for any child, anywhere in the world completely free " +
          "in a fun and secure environment.",
        parrafo6:
          "<b>Your contribution is vital to the success of this dream.</b>",
        img5: "uHelp.svg",
        parrafo7:
          "Euler Kids’ work is 100% funded through the generosity of people " +
          "like you. Every dollar you donate to Euler Kids is used to build new lessons, " +
          "exercises and server payments.",
        parrafo8:
          "You can make the dream of improving education of children all over " +
          "the world come true. Your support of Euler Kids will make a world " +
          "of difference.",
        img6: "reach.svg",
        img7: "thanks.svg"
      }
    };
  },
  methods: {
    img(img) {
      return require(`@/assets/Donate/${img}`);
    }
  }
};
</script>
