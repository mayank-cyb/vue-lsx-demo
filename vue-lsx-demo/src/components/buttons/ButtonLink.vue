<template>
    <Button isIcon @click="clickHandler">
        <font-awesome-icon :icon="['fas', 'link']" />
        Links
    </Button>
</template>

<script>
import Button from './Button.vue';
export default {
    name: 'LinkButton',
    emits: ['click'],
    components: {
        Button
    },
    methods: {
        clickHandler() {
            console.log("Click from button level 2");
            this.$emit('click');
        }
    }
}
</script>