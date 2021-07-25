<template>
  <div>
    <svg class="git-view-wrapper">
      <node
        :x="t * lineWidth"
        :y="row * rowHeight"
        color="#01d1b2"
        v-for="t in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
        :key="t"
      />
      <edge
        :startX="t * lineWidth"
        :startY="row * rowHeight"
        :endX="t * lineWidth + lineWidth"
        :endY="row * rowHeight"
        v-for="t in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        :key="t"
      />
    </svg>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Node from "./Node.vue";
import Edge from "./Edge.vue";

const lineWidth = 50;
const row = 1;
const rowHeight = 50;

export default defineComponent({
  components: {
    Node,
    Edge,
  },
  created() {
    this.lineWidth = lineWidth;
    this.row = row;
    this.rowHeight = rowHeight;
  },
});
</script>

<style scoped>
.git-view-wrapper {
  width: 100%;
}
</style>
