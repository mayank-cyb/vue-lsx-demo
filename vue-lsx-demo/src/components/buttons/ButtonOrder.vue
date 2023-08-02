<template>
    <Button isIcon>
        <font-awesome-icon :icon="['fas', 'list']" />
        Orders
    </Button>
</template>

<script>
import Button from './Button.vue';
export default {
    name: 'OrderButton',
    components: {
        Button
    }
}
</script>
