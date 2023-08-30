<template>
    <Button isIcon>
        <!--font-awesome-icon :icon="['fas', 'list']" /-->
        <IconOrders />
        Orders
    </Button>
</template>

<script>
import Button from './Button.vue';
import IconOrders from '@/components/icons/IconOrders.vue';
export default {
    name: 'ButtonOrder',
    components: {
        Button,
        IconOrders
    }
}
</script>
