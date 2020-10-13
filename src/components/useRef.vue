<template>
    <div>
        <button @click="countAdd">
            {{count}}
        </button>
    </div>
</template>

<script>
import {setup, ref} from 'vue';
export default {
    setup(props, context) {
        let count = ref(0);
        console.log(count, 'ref-count')
        function countAdd() {
            count.value ++;
        };
        return {
            count, 
            countAdd
        }
    }
}
</script>