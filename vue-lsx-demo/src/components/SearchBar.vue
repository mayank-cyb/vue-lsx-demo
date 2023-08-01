<template>
    <div>
        <input type="text" v-model="searchText" @input="searchByCustomerName"/>
        <font-awesome-icon :icon="['fas', 'search']" />
        {{ getQueuedOrdersLength }} Active Orders
        <!--QueuedOrders /-->
        <h3>Completed Orders</h3>
        <ul class="completed-orders">
            <li v-for="order in getCompletedOrders"
                :key="`order-${order-id}`"
            >
                <CompletedOrder 
                    :order="order"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import orderData from "@/data.json";
import CompletedOrder from "./CompletedOrder.vue";
import QueuedOrders from "./QueuedOrders.vue";
export default {
    name: 'SearchBar',
    components: {
    CompletedOrder,
    QueuedOrders
},
    data() {
        return {
            orders: orderData,
            searchText: '',
            filteredOrders: []
        }
    },
    computed: {
        getOrdersByCustomerNames() {
            return this.filteredOrders;
        },
        getCompletedOrders() {
            console.log(this.filteredOrders.filter(order => order.isCompleted));
            return this.filteredOrders.filter(order => order.isCompleted)
        },
        getQueuedOrders() {
            return this.filteredOrders.filter(order => order.isQueued)
        },
        getQueuedOrdersLength() {
            return this.getQueuedOrders.length;
        }
    },
    methods: {
        searchByCustomerName() {
            const filter = new RegExp(`${this.searchText}`, 'i');
            console.log("Filter", this.searchText);
            this.filteredOrders = this.orders.filter(order => order.first.match(filter) || order.last.match(filter));

            console.log(this.filteredOrders);
        }
    }
}
</script>