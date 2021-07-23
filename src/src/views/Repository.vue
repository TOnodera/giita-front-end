<template>
  <dashboard>
    <template v-slot:title> リポジトリ</template>
    <template v-slot:default> test </template>
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
