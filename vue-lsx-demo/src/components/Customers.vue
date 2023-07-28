<template>
    <div class="cards-container">
        <h2>{{ noWaitingCustomers }} waiting</h2>
        <ul class="cards">
            <li
                v-for="printDatum in waitingCustomers" 
                :key="printDatum.id"
            >
            <Customer
                :cardData="printDatum"
            />
            </li>
        </ul>
    </div>
</template>

<script>
import printData from "@/data"
import Customer from "./Customer.vue"
export default {
    name: 'Cards',
    components: {
        Customer
    },
    data() {
        return {
            printData: printData
        }
    },
    computed: {
        waitingCustomers() {
            return this.printData.filter(customer => !customer.isQueued);
        },
        noWaitingCustomers() {
            return this.waitingCustomers.length
        }
    },
}
</script>