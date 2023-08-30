<template>
    <Button isIcon>
        <IconPassport />
        Passport
    </Button>
</template>

<script>
import IconPassport from '@/components/icons/IconPassport.vue';
import Button from './Button.vue';

export default {
    name: 'ButtonPassport',
    components: {
        Button,
        IconPassport
    }
}
</script>