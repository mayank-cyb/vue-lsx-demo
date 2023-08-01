<template>
    <button :class="isIcon ? 'btn-icon' : 'btn'">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        isIcon: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>