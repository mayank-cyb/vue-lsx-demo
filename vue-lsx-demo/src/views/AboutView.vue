<template>
  <div class="about">
    <QueuedOrders />
    <Orders />
  </div>
</template>
<script>
  import QueuedOrders from '@/components/QueuedOrders.vue';
  import Orders from '@/components/Orders.vue';

  export default {
    components: {
      Orders,
      QueuedOrders,
    },

  }

</script>
