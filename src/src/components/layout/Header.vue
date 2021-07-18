<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/">Home</router-link>
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Github </a>
          <div class="navbar-dropdown">
            <a class="navbar-item"
              ><router-link to="/repositories">リポジトリ</router-link></a
            >
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <Hamberger @hamberger-clicked="click" />
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import Hamberger from "../parts/Hamberger.vue";
export default defineComponent({
  name: "Header",
  components: {
    Hamberger,
  },
  methods: {
    click() {
      this.$emit("hamberger-clicked");
    },
  },
});
</script>
