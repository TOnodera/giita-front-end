<template>
  <circle class="circle" :cx="x" :cy="y" :stroke="color" :fill="color" />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.circle {
  r: 5px;
  stroke-width: 5px;
}
</style>
