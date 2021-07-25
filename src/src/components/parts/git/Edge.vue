<template>
  <line class="line" :x1="startX" :y1="startY" :x2="endX" :y2="endY" />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    startX: {
      type: Number,
      required: true,
    },
    startY: {
      type: Number,
      required: true,
    },
    endX: {
      type: Number,
      required: true,
    },
    endY: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.line {
  stroke: #00d1b2;
  stroke-width: 3px;
}
</style>
