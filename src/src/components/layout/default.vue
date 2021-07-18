<template>
  <div>
    <div class="columns">
      <div class="column is-2">
        <Sidebar />
      </div>
      <div class="column is-10 main-contents">
        <Header />
        <slot></slot>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
export default defineComponent({
  components: {
    Header,
    Sidebar,
    Footer
  },
});
</script>

<style lang="scss" scoped>
.main-contents{
  min-height: 100vh;
}
</style>
