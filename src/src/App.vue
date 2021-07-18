<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>

<script>
import { defineComponent } from "vue";
import DefaultLayout from "./components/layout/default";

export default defineComponent({
  components: {
    DefaultLayout,
  },
});
</script>
