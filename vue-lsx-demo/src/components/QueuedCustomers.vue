<template>
    <div class="queued-customers--wrapper">
        <ul class="queued-customers">
            <li                 
                v-for="customer in queuedCustomers" 
                :key="customer.id"
            >
            <Customer 
                :cardData="customer"
                :fill="fill"
                isQueued="true"
            >
                <template #queuedCustomer>
                    <PrinterGrid :allocatedPrinters="customer.allocatedPrinters" @send-fill-status="sendFillToCustomer" />
                </template>
            </Customer>
            </li>
        </ul>
    </div>
</template>

<script>
import printData from "@/data";
import PrinterGrid from "./PrinterGrid.vue";
import Customer from "./Customer.vue";

export default {
    name: 'QueuedCustomer',
    components: {
        PrinterGrid,
        Customer
    },
    data() {
        return {
            printData: printData,
            fill: 0
        }
    },
    computed: {
        queuedCustomers() {
            console.log(this.printData.filter(customer => customer.isQueued));
            return this.printData.filter(customer => customer.isQueued);
        }
    },
    methods: {
        sendFillToCustomer({fill}) {
            this.fill= fill;
            console.log("In QueuedCustomer.vue", fill);
            this.$emit('send-fill-status', {
                fill
            });
        }
    }

}
</script>

<style>

</style>