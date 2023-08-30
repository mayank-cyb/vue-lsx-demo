<template>
    <div>
        <header role="banner">
            <div class="card-long card">
            <select>
                <option>Customer Name</option>
            </select>
            <p>Order Number</p>
            <div class="product-quantity">
                <p>Qty</p>
            </div>
        </div>
        </header>
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
    export default {
        name: 'CompletedOrders',
        components: {
        CompletedOrder,
    },
        data() {
            return {
                orders: orderData,
                searchText: '',
                filteredOrders: []
            }
        },
        computed: {
            getCompletedOrders() {
                console.log(this.orders.filter(order => order.isCompleted));
                return this.orders.filter(order => order.isCompleted)
            },
            getCompletedOrdersLength() {
                return this.getCompletedOrders.length;
            },

        }
    }
</script>
