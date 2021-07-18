<template>
  <div>
    <github-login-modal
      :isShow="isShow"
      @github-login-modal-close="githubLoginModalClose"
    >
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="columns is-flex-direction-column">
              <div>
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="メールアドレス"
                />
              </div>
              <div class="mt-2">
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="パスワード"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </github-login-modal>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GithubLoginModal from "../modal/LoginGithubModal.vue";
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
