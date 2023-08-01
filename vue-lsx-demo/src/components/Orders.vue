<template>
    <div class="cards-container">
        <h2>{{ noWaitingOrders }} waiting</h2>
        <ul class="cards">
            <li
                v-for="printDatum in waitingOrders" 
                :key="printDatum.id"
            >
            <Order
                :cardData="printDatum"
            />
            </li>
        </ul>
    </div>
</template>

<script>
import printData from "@/data"
import Order from "./Order.vue"
export default {
    name: 'Orders',
    components: {
        Order
    },
    data() {
        return {
            printData: printData
        }
    },
    computed: {
        waitingOrders() {
            return this.printData.filter(order => !order.isQueued && !order.isCompleted);
        },
        noWaitingOrders() {
            return this.waitingOrders.length
        }
    },
}
</script>