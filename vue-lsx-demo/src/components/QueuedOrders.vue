<template>
    <div class="queued-orders__wrapper">
        <ul class="queued-orders">
            <li                 
                v-for="order in queuedOrders" 
                :key="order.id"
            >
            <Order 
                :cardData="order"
                :fill="fill"
                :isQueued="true"
            >
                <template #queuedOrder>
                    <PrinterGrid :allocatedPrinters="order.allocatedPrinters" @send-fill-status="sendFillToCustomer" />
                </template>
            </Order>
            </li>
        </ul>
    </div>
</template>

<script>
import printData from "@/data";
import PrinterGrid from "./Printer/PrinterGrid.vue";
import Order from '@/components/Order.vue';

export default {
    name: 'QueuedOrder',
    components: {
        PrinterGrid,
        Order
    },
    data() {
        return {
            printData: printData,
            fill: 0
        }
    },
    props: {
        searchQueuedOrder: {
            type: Object,
            required: false
        }
    },
    computed: {
        queuedOrders() {
            if(this.searchQueuedOrder) {
               return  this.searchQueuedOrder;
            }
            return this.printData.filter(order => order.isQueued);
        }
    },
    methods: {
        sendFillToCustomer({fill}) {
            this.fill= fill;
            //console.log("In QueuedOrder.vue", fill);
            this.$emit('send-fill-status', {
                fill
            });
        }
    },
    unmounted() {
        console.log("unmounted QueuedOrders.vue");
        clearInterval(this.intervalId);
    }

}
</script>