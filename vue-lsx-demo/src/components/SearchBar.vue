<template>
    <div class="search-wrapper">
        <div class="search-bar">
            <input type="text" name="search" v-model="searchText" autocomplete />
            <ButtonSearch @click="searchByCustomerName" />
        </div>
        <h2>{{ getQueuedOrdersLength }} Active {{ getQueuedOrdersLength > 1 ? 'Orders': 'Order' }}</h2>
        <QueuedOrders :search-queued-order="getQueuedOrders"/>
        <h3>{{ getCompletedOrdersLength }} Completed {{ getCompletedOrdersLength > 1 ? 'Orders': 'Order' }}</h3>
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
import ButtonSearch from './buttons/ButtonSearch.vue';
export default {
    name: 'SearchBar',
    components: {
    CompletedOrder,
    QueuedOrders,
    ButtonSearch
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
        getCompletedOrdersLength() {
            return this.getCompletedOrders.length;
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