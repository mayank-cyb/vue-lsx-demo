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
import Order from '@/components/Order.vue';
import TheProgressBar from '@/components/TheProgressBar.vue';

export default {
    components: {
    Printer,
    Order,
    TheProgressBar
},
    data() {
      return {
        printers: fetchPrintersList(),
        fill: 0
      }
    },
    created() {
        //console.log("In created PrinterGrid", this.$el);
        //console.log("printers", this.allocatedPrinters); 
    },
    mounted() {
        //console.log("In mounted PrinterGrid", this.$el);
        console.log("printers", this.allocatedPrinters); 
    },
    beforeUpdate() {
        //console.log("In beforeupdated PrinterGrid", this.$el);
    },
    // updated() {
    //     console.log("In updated PrinterGrid", this.$el);
    // },
    props: {
        allocatedPrinters: {
            type: Array,
            required: true
        }
    },
    methods: {
        sendFillToCustomer({fill}) {
            this.fill= fill;
            //console.log("In PrinterGrid.vue", fill);
            this.$emit('send-fill-status', {
                fill
            });
        },
        clickHandler() {
            console.log("clicked");
        }
    },
    unmounted() {
        //console.log("unmounted PrinterGrid.vue");
        clearInterval(this.intervalId);
    }
}
</script>

<style>

</style>