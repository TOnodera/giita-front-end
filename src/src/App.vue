<template>
  <default-layout>
    <Index />
  </default-layout>
</template>

<script>
import { defineComponent } from "vue";
import DefaultLayout from "./components/layout/default";
import Index from '@/views/Index';

export default defineComponent({
  components: {
    DefaultLayout,
    Index
  },
});
</script>
