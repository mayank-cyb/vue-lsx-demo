<template>
    <Button isIcon>
        <font-awesome-icon :icon="['fas', 'desktop']" />
        Kiosks
    </Button>
</template>

<script>
import Button from './Button.vue';
export default {
    name: 'ButtonKiosk',
    components: {
        Button
    }
}
</script>
