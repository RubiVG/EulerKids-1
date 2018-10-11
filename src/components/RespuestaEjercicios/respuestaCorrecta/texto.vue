<template>
  <span class="title blue--text text--darken-1">
    {{ correct }}
  </span>
</template>

<script>
export default {
  name: "texto",
  props: ["correct"]
};
</script>
