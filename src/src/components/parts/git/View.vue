<template>
    <div>
        <node />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Node from './Node.vue';
export default defineComponent({
    components: {
        Node
    }
});
</script>