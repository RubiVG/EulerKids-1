<template>
  <v-layout row
            justify-center>
    <v-dialog v-model="dialog"
              persistent
              max-width="390">
      <v-card>
        <v-card-title class="grey--text text--darken-2 title">
          <div class="text-xs-center">
            Hay una actualización disponible
          </div>
        </v-card-title>
        <v-card-text class="grey--text text--darken-1 subheading">
          <div class="text-xs-center title mb-2">
            ٩(^ᴗ^)۶
          </div>
          <div>
            Haz click para obtener las últimas funciones
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1"
                 outline
                 flat
                 @click.native="actualizar">
            Actualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "NewApp",
  props: ["dialog"],
  methods: {
    actualizar() {
      this.$emit("actualizar");
    }
  }
};
</script>
