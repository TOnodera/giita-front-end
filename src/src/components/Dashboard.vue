<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <h1 class="title"><slot name="title"></slot></h1>
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
