<template>
    <Button isIcon>
        <IconCloseLab />
        Close Lab
    </Button>
</template>

<script>
import IconCloseLab from '@/components/icons/IconCloseLab.vue';
import Button from './Button.vue';

export default {
    name: 'ButtonCloseLab',
    components: {
        Button,
        IconCloseLab
    }
}
</script>