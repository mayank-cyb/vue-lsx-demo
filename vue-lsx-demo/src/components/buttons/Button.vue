<template>
    <button :class="isIcon ? 'btn-icon' : 'btn'" @click="clickHandler">
        <slot></slot>
    </button>
</template>

<script>
export default {
    inheritedAttrs: true,
    emits: ['click'],
    props: {
        isIcon: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        clickHandler() {
            console.log("Click from button level 1");
            this.$emit('click');
        }
    }
}
</script>