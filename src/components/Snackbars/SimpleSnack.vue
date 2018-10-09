<template>
  <v-snackbar v-model="snackbar"
              :bottom="y === 'bottom'"
              :left="x === 'left'"
              :right="x === 'right'"
              :top="y === 'top'"
              :color="color"
              :timeout="timeout">
    {{ text }}
    <v-btn dark
           flat
           @click="update">
      Update
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "SimpleSnack",
  props: ["snackbar", "y", "x", "color", "timeout", "text"],
  methods: {
    update() {
      this.$emit("updateApp");
    }
  }
};
</script>
