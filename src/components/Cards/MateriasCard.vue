<template>
  <v-card tile
          :to="to"
          exact
          :id="title"
          @mouseover.native="ascender(title)"
          @mouseleave.native="descender(title)"
          hover
          ripple
          :class="gradient"
          class="white--text">
    <v-container fluid
                 grid-list-lg>
      <v-layout >
        <v-flex xs4>
          <v-img :src="img"
                 height="110px"
                 contain
                 class="ma-2">
          </v-img>
        </v-flex>
        <v-flex xs8>
          <div class="headline ">{{ title }}</div>
          <v-divider/>
          <br/>
          <div>{{ description}} </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { TweenMax } from "gsap";

export default {
  name: "MateriasCard",
  props: ["title", "description", "img", "gradient", "to"],
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
  background: #00acc1;
  background: -webkit-linear-gradient(
    left top,
    #00acc1,
    #b2ff59
  );
  background: -o-linear-gradient(
    bottom right,
    #00acc1,
    #b2ff59
  );
  background: -moz-linear-gradient(
    bottom right,
    #00acc1,
    #b2ff59
  );
  background: linear-gradient(
    to bottom right,
    #00acc1,
    #b2ff59
  );
}
.grad4 {
  background: #40e0d0;
  background: -webkit-linear-gradient(
    to right,
    #ff0080,
    #fbc02d
  );
  background: linear-gradient(
    to right,
    #ff0080,
    #fbc02d
  );
}

.grad5 {
  background: #fc466b;
  background: -webkit-linear-gradient(
    left top,
    #3f5efb,
    #fc466b
  );
  background: linear-gradient(
    to bottom right,
    #3f5efb,
    #fc466b
  );
}

.grad6 {
  background: #3494e6;
  background: -webkit-linear-gradient(
    left top,
    #ec6ead,
    #3494e6
  );
  background: linear-gradient(
    to bottom right,
    #ec6ead,
    #3494e6
  );
}

.grad7 {
  background: #00acc1;
  background: -webkit-linear-gradient(
    left top,
    #00acc1,
    #84ffff
  );
  background: linear-gradient(
    to bottom right,
    #00acc1,
    #84ffff
  );
}

.grad8 {
  background: #7b1fa2;
  background: -webkit-linear-gradient(
    left top,
    #7b1fa2,
    #ea80fc
  );
  background: linear-gradient(
    to bottom right,
    #7b1fa2,
    #ea80fc
  );
}
</style>
