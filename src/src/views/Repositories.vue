<template>
  <dashboard>
    <template v-slot:title> リポジトリ一覧</template>
    <template v-slot:default></template>
  </dashboard>
</template>
<script>
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue";
export default defineComponent({
  components: {
    Dashboard,
  },
});
</script>
