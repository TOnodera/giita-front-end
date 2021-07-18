<template>
  <div>
    <github-login-modal
      :isShow="isShow"
      @github-login-modal-close="githubLoginModalClose"
    >
      <div class="card">
        <div class="card-content">
          <div class="content">
            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
            Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Cras mattis consectetur purus sit amet fermentum.
          </div>
        </div>
      </div>
    </github-login-modal>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GithubLoginModal from "../Modal/LoginGithubModal.vue";
export default defineComponent({
  components: {
    GithubLoginModal,
  },
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    githubLoginModalClose() {
      this.$emit("github-login-modal-close");
    },
  },
});
</script>
