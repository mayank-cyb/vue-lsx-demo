<template>
  <div class="about">
    <QueuedCustomers />
    <Customers />
  </div>
</template>
<script>
  import TheProgressBar from '@/components/TheProgressBar.vue';
  import QueuedCustomers from '@/components/QueuedCustomers.vue';
  import Customers from '@/components/Customers.vue';
  import PrinterGrid from '@/components/PrinterGrid.vue';

  export default {
    components: {
      TheProgressBar,
      Customers,
      PrinterGrid,
      QueuedCustomers
    },

  }

</script>
