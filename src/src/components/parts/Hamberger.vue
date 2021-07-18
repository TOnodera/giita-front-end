<template>
  <div class="m-4 buttons">
    <div class="button is-info" @click.stop="click">
      <fa icon="bars" class="is-size-5" />
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
export default defineComponent({
   methods: {
       click(){
           this.$emit("hamberger-clicked");
       }
   } 
});
</script>