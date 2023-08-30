<template>
    <Button isIcon @click="clickHandler">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </Button>
</template>

<script>
import Button from './Button.vue';
export default {
    emits: ['click'],
    name: 'ButtonChevron',
    components: {
        Button
    },
    methods: {
        clickHandler() {
            console.log("Click from button chevron");
            this.$emit('click');
        }
    }
}
</script>