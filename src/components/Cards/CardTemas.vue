<template>
  <v-card tile
          :to="to"
          exact
          :id="to"
          @mouseover.native="ascender(to)"
          @mouseleave.native="descender(to)"
          hover
          ripple
          :class="gradient"
          class="white--text ">
    <v-container fluid grid-list-lg>
      <v-layout>
        <v-flex>
          <v-img :src="img"
                 height="150px"
                 contain>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { TweenMax } from "gsap";
export default {
  name: "CardTemas",
  props: ["img", "gradient", "to"],
  methods: {
    ascender(id) {
      let card = document.getElementById(id);
      TweenMax.to(card, 0.2, {
        y: -1,
        ease: Sine.easeInOut
      });
    },
    descender(id) {
      let card = document.getElementById(id);
      TweenMax.to(card, 0.2, {
        y: 0,
        ease: Sine.easeInOut
      });
    }
  }
};
</script>

<style scoped>
.grad1 {

  background: #e91e63;
  background: -webkit-linear-gradient(
    left top,
    #e91e63,
    #fbc02d
  );
  background: -o-linear-gradient(
    bottom right,
    #e91e63,
    #fbc02d
  );
  background: -moz-linear-gradient(
    bottom right,
    #e91e63,
    #fbc02d
  );
  background: linear-gradient(
    to bottom right,
    #e91e63,
    #fbc02d
  );
}

.grad2 {

  background: #9c27b0;
  background: -webkit-linear-gradient(
    left top,
    #9c27b0,
    #29b6f6
  );
  background: -o-linear-gradient(
    bottom right,
    #9c27b0,
    #29b6f6
  );
  background: -moz-linear-gradient(
    bottom right,
    #9c27b0,
    #29b6f6
  );
  background: linear-gradient(
    to bottom right,
    #9c27b0,
    #29b6f6
  );
}

.grad3 {

  background: #00c853;
  background: -webkit-linear-gradient(
    left top,
    #00c853,
    #b2ff59
  );
  background: -o-linear-gradient(
    bottom right,
    #00c853,
    #b2ff59
  );
  background: -moz-linear-gradient(
    bottom right,
    #00c853,
    #b2ff59
  );
  background: linear-gradient(
    to bottom right,
    #00c853,
    #b2ff59
  );
}

.grad4 {
  background: #7b1fa2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
          left top,
          #7b1fa2,
          #ea80fc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
          to bottom right,
          #7b1fa2,
          #ea80fc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
