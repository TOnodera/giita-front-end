<template>
  <div class="modal" v-if="isShow">
    <div class="modal-background"></div>
    <div class="modal-card mt-5">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button
          class="delete"
          aria-label="close"
          @click.stop="closeButtonClicked"
        ></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    isShow: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    closeButtonClicked() {
      this.$emit("github-login-modal-close");
    },
  },
});
</script>

<style scoped>
.modal {
  display: block !important;
}
</style>
