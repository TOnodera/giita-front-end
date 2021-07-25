<template>
  <dashboard>
    <template v-slot:title> リポジトリ</template>
    <template v-slot:default>
      <git-view />
    </template>
  </dashboard>
</template>
<script>
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue";
import GitView from "@/components/parts/git/View.vue";

export default defineComponent({
  components: {
    Dashboard,
    GitView,
  },
});
</script>
