<template>
  <div class="about">
    <QueuedOrders />
    <Orders />
  </div>
</template>
<script>
  import TheProgressBar from '@/components/TheProgressBar.vue';
  import QueuedOrders from '@/components/QueuedOrders.vue';
  import Orders from '@/components/Orders.vue';
  import PrinterGrid from '@/components/Printer/PrinterGrid.vue';

  export default {
    components: {
      Orders,
      QueuedOrders,
    },

  }

</script>
