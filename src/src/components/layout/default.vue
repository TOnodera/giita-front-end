<template>
  <div>
    <div class="columns">
      <div class="column is-one-quarter" v-if="isShowSideMenu">
        <Sidebar/>
      </div>
      <div class="column is-12main-contents">
        <Header @hamberger-clicked="menuClicked" />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

export default defineComponent({
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      isShowSideMenu: false,
    };
  },
  methods: {
    menuClicked() {
      this.isShowSideMenu = !this.isShowSideMenu;
    },
  },
});
</script>
