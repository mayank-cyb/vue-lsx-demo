<template>
    <Button isIcon>
        <!--font-awesome-icon :icon="['fas', 'desktop']" /-->
        <IconKiosk />   
        Kiosks
    </Button>
</template>

<script>
import Button from './Button.vue';
import IconKiosk from '@/components/icons/IconKiosk.vue';

export default {
    name: 'ButtonKiosk',
    components: {
        Button,
        IconKiosk
    }
}
</script>
