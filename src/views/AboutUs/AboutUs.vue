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
                       height="110">
                </v-img>
              </v-flex>
              <v-flex mt-5
                      mb-5
                      xs12>
                <div>
                  <p class="grey--text text--darken-2 headline text-xs-center">
                    <span v-html="content.subtitulo1"></span>
                  </p>
                  <p class="grey--text text--darken-2 headline text-xs-center">
                    <span v-html="content.subtitulo2"></span>
                  </p>
                </div>
              </v-flex>
              <v-flex mt-3
                      mb-5
                      xs12>
                <v-img class="mb-3"
                       contain
                       :src="img(content.img2)"
                       height="45">
                </v-img>
                <div >
                  <p class="grey--text text--darken-2 subheading text-xs-center">
                    <span v-html="content.parrafo1"></span>
                  </p>
                </div>
              </v-flex>
              <v-flex mt-3
                      mb-5
                      xs12
                      sm4>
                <v-img contain
                       :src="img(content.img3)"
                       height="150">
                </v-img>
                <p class="grey--text text--darken-2 subheading text-xs-center">
                  <span v-html="content.descripcion1"></span>
                </p>
              </v-flex>
              <v-flex mt-3
                      mb-5
                      xs12
                      sm4>
                <v-img contain
                       :src="img(content.img4)"
                       height="150">
                </v-img>
                <p class="grey--text text--darken-2 subheading text-xs-center">
                  <span v-html="content.descripcion2"></span>
                </p>
              </v-flex>
              <v-flex mt-3
                      mb-5
                      xs12
                      sm4>
                <v-img contain
                       :src="img(content.img5)"
                       height="150">
                </v-img>
                <p class="grey--text text--darken-2 subheading text-xs-center">
                  <span v-html="content.descripcion3"></span>
                </p>
              </v-flex>
              <v-flex mt-5
                      mb-5
                      xs6>
                <v-img contain
                       :src="img(content.img7)"
                       height="280">
                </v-img>
              </v-flex>
              <v-flex mt-5
                      xs6>
                <v-img class="mb-3"
                       contain
                       :src="img(content.img6)"
                       height="50">
                </v-img>
                <div>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo2"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo3"></span>
                  </p>
                </div>
              </v-flex>
              <v-flex mt-5
                      xs6>
                <v-img class="mb-3"
                       contain
                       :src="img(content.img8)"
                       height="50">
                </v-img>
                <div >
                  <p class="grey--text text--darken-2 subheading">
                    <span v-html="content.parrafo4"></span>
                  </p>
                </div>
              </v-flex>
              <v-flex xs6>
                <v-img class="mt-5 mb-5"
                       contain
                       :src="img(content.img9)"
                       height="150">
                </v-img>
              </v-flex>
              <v-flex mt-5
                      xs12>
                <v-img class="mb-3"
                       contain
                       :src="img(content.img10)"
                       height="50">
                </v-img>
              </v-flex>
              <v-flex xs12>
                <div >
                  <p class="grey--text text--darken-2 subheading text-xs-center">
                    <span v-html="content.parrafo5"></span>
                  </p>
                  <p class="grey--text text--darken-2 subheading text-xs-center">
                    <span v-html="content.parrafo6"></span>
                  </p>
                </div>
              </v-flex>
              <v-flex mt-3
                      mb-5
                      xs12
                      sm4>
                <v-img class="mb-2"
                       contain
                       :src="img(content.img11)"
                       height="150">
                </v-img>
                <p class="grey--text text--darken-2 title text-xs-center">
                  <span v-html="content.parrafo7"></span>
                </p>
                <p class="grey--text text--darken-2 subheading text-xs-center">
                  <span v-html="content.parrafo8"></span>
                </p>
              </v-flex>
              <v-flex mt-3
                      mb-5
                      xs12
                      sm4>
                <v-img class="mb-2"
                       contain
                       :src="img(content.img12)"
                       height="150">
                </v-img>
                <p class="grey--text text--darken-2 title text-xs-center">
                  <span v-html="content.parrafo9"></span>
                </p>
                <p class="grey--text text--darken-2 subheading text-xs-center">
                  <span v-html="content.parrafo10"></span>
                </p>
              </v-flex>
              <v-flex mt-3
                      mb-5
                      xs12
                      sm4>
                <v-img class="mb-2"
                       contain
                       :src="img(content.img13)"
                       height="150">
                </v-img>
                <p class="grey--text text--darken-2 title text-xs-center">
                  <span v-html="content.parrafo11"></span>
                </p>
                <p class="grey--text text--darken-2 subheading text-xs-center">
                  <span v-html="content.parrafo12"></span>
                </p>
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
  name: "AboutUs",
  data() {
    return {
      content: {
        img1: "fuel.svg",
        subtitulo1:
          "In Euler Kids we believe that if education is a universal right,",
        subtitulo2: " educational technology must be too.",
        img2: "what.svg",
        parrafo1:
          "We create adaptable lessons, exercises, and learning experiences to elevate " +
          "and empower comprehension and education. We also developed analytics to help " +
          "parents to identify the kid's progress and struggles. " +
          "Our skills are specific " +
          "and fine-tuned. We are programers, teachers, designers and parents. " +
          "We have 100% commitment to making our hand-crafted website the best " +
          "it can be, no matter what it takes to get there.",
        img3: "lessons.svg",
        descripcion1: "High-Quality Content & Analytics",
        img4: "noAdd.svg",
        descripcion2: "100% Free & Free of Advertising",
        img5: "exercises.svg",
        descripcion3: "Interactive Lessons & Exercises",
        img6: "why.svg",
        img7: "earth.svg",
        parrafo2:
          "We thrive on building " +
          "a world-class website using the best technologies. We dream of " +
          "inspiring and helping good people succeed in life. We want to " +
          "transform the way the world learns.",
        parrafo3:
          "In Euler Kids we know that the differences in students " +
          "performance are affected by how much they engage in practice. " +
          "Practice is necessary for acquiring expertise and we are here to help.",
        img8: "how.svg",
        img9: "donate.svg",
        parrafo4:
          "We believe in the power of free education. But we need your support, " +
          "Euler Kids’ work is 100% funded through the generosity of people like you. ",
        img10: "who.svg",
        parrafo5:
          "We are a small team of creative professionals, " +
          "committed and passionate about education. We are " +
          "on a mission to give free access to a funny, interactive, " +
          "world-class educational website where every child in " +
          "the world can practice what they learned in class, " +
          "in a secure, add-free environment, and completely FREE.",
        parrafo6:
          "Meet our talented team of creatives, fun-lovers, and star reachers",
        img11: "andres.svg",
        img12: "valentina.svg",
        img13: "rubi.svg",
        parrafo7: "Andrés Pérez",
        parrafo8: "Founder, Developer & UI Designer",
        parrafo9: "Valentina Pérez",
        parrafo10: "Inspiration, Student & Beta Tester",
        parrafo11: "Rubí Villanueva",
        parrafo12: "Founder, Educator & Illustrator"
      }
    };
  },
  methods: {
    img(img) {
      return require(`@/assets/AboutUs/${img}`);
    }
  }
};
</script>
