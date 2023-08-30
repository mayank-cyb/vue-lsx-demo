<template>
    <Button isIcon @click="clickHandler">
        <!--font-awesome-icon :icon="['fas', 'link']" /-->
        <IconLink />
        Links
    </Button>
</template>

<script>
import IconLink from '../icons/IconLink.vue';
import Button from './Button.vue';
export default {
    name: 'ButtonLink',
    emits: ['click'],
    components: {
    Button,
    IconLink
},
    methods: {
        clickHandler() {
            console.log("Click from button level 2");
            this.$emit('click');
        }
    }
}
</script>