<template>
  <div class="Dashboard">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Dashboard msg="test"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Index",
  components: {
    Dashboard
  },
});
</script>
