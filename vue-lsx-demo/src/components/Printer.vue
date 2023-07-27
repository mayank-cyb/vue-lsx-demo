<template>
    <div class="printer">            
        <h2>{{ printerData }}</h2>
        <slot name="printer"></slot>
    </div>
</template>

<script>
export default {
    name: "Printer",
    props: {
        printerData: {
            type: [Object, String],
            required: true
        },
        fill: {
            type: Number,
            default: 0,
            required: false,
        }
    },
}
</script>

<style>

</style>