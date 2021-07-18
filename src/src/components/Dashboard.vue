<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <slot name="title"></slot>
      </div>
    </section>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dashboard",
  props: {
    msg: String,
  },
});
</script>
