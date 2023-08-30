<template>
    <Button isIcon>
        <IconHelp />
        Help
    </Button>
</template>

<script>
import IconHelp from '@/components/icons/IconHelp.vue';
import Button from './Button.vue';

export default {
    name: 'ButtonHelp',
    components: {
        Button,
        IconHelp
    }
}
</script>