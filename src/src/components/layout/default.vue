<template>
  <div>
    <div class="columns">
      <div class="column is-2">
        <sidebar />
      </div>
      <div class="column is-10">
        <div class="container">
          <div class="notification is-primary">
            This container is <strong>centered</strong> on desktop and larger viewports.
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Sidebar from "../layout/Sidebar";
export default defineComponent({
  components: {
    Sidebar,
  },
});
</script>
