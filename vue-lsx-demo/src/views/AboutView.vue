<template>
  <div class="about">
    <SearchBar />
    <QueuedOrders />
    <Orders />
  </div>
</template>
<script>
  import TheProgressBar from '@/components/TheProgressBar.vue';
  import QueuedOrders from '@/components/QueuedOrders.vue';
  import Orders from '@/components/Orders.vue';
  import PrinterGrid from '@/components/Printer/PrinterGrid.vue';
  import SearchBar from '@/components/SearchBar.vue';

  export default {
    components: {
      TheProgressBar,
      Orders,
      PrinterGrid,
      QueuedOrders,
      SearchBar
    },

  }

</script>
