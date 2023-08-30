<template>
    <Button isIcon>
        <IconSystem />
        System
    </Button>
</template>

<script>
import IconSystem from '@/components/icons/IconSystem.vue';
import Button from './Button.vue';

export default {
    name: 'ButtonSystem',
    components: {
        Button,
        IconSystem
    }
}
</script>