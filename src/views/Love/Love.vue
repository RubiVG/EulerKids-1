<template>
  <v-container grid-list-lg
               fluid
               mt-2>
    <v-layout wrap>
      <v-layout row
                wrap
                class="ml-0 mr-0">
        <v-flex xs12
                sm6
                md4
                v-for="element in elements"
                :key="element.to">
          <love-card
                  :img="img(element.img)"
                  :gradient="element.gradient"
                  :to="element.to">
          </love-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import Cards from "../../components/Cards/CardTemas";

export default {
  name: "Love",
  components: {
    "love-card": Cards
  },
  data() {
    return {
      elements: [
        {
          img: "aboutUsIcon.svg",
          gradient: "grad2",
          to: "/about-us"
        },
        {
          img: "donateIcon.svg",
          gradient: "grad2",
          to: "/donate"
        }
      ]
    };
  },
  methods: {
    img(img) {
      return require(`@/assets/Love/${img}`);
    }
  }
};
</script>
