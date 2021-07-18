<template>
  <div class="columns">
    <div class="column is-2">
      <sidebar />
    </div>
    <div class="column is-10">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Sidebar from "../Sidebar";
export default defineComponent({
  components: {
    Sidebar,
  },
});
</script>
