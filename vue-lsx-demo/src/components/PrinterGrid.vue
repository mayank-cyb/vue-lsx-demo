<template>
    <div class="printer-grid">
        <Printer 
            v-for="printer in printers"
            :key="printer"
            :printerData="printer"
            :fill="fill"
            @click="clickHandler"
        >
            <template v-if="allocatedPrinters.includes(printer)" #printer>
                <TheProgressBar @send-fill-status="sendFillToCustomer" />
            </template>
        </Printer>
    </div>
</template>

<script>
import fetchPrintersList from '@/utils/printersList';
import Printer from './Printer.vue';
import Customer from './Customer.vue';
import TheProgressBar from './TheProgressBar.vue';

export default {
    components: {
    Printer,
    Customer,
    TheProgressBar
},
    data() {
      return {
        printers: fetchPrintersList(),
        fill: 0
      }
    },
    mounted() {
      console.log("printers", this.allocatedPrinters); 
    },
    props: {
        allocatedPrinters: {
            type: Array,
            required: true
        }
    },
    methods: {
        sendFillToCustomer({fill}) {
            this.fill= fill;
            console.log("In PrinterGrid.vue", fill);
            this.$emit('send-fill-status', {
                fill
            });
        },
        clickHandler() {
        console.log("clicked");
    }
    },

}
</script>

<style>

</style>