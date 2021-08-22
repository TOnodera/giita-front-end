<template>
  <svg class="git-view-wrapper">
    <Branch row="1" />
    <Branch row="2" />
  </svg>
</template>

<script>
import { defineComponent } from "vue";
import Branch from "./Branch.vue";
import dummy from "./dummy.ts";

export default defineComponent({
  components: {
    Branch,
  },
  data() {
    return {
      commitNums: 0,
    };
  },
  methods: {
    init() {
      for (const commit of dummy) {
        console.log(commit.commit);
      }
    },
  },
  mounted() {
    this.init();
  },
});
</script>

<style scoped>
.git-view-wrapper {
  width: 100%;
  height: 100%;
}
</style>
