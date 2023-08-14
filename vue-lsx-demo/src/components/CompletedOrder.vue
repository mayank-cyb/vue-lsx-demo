<template>
    <div class="card-long card">
        <h2>{{ fullName }}</h2>
        <p>{{ order.id }}</p>
        <div class="product-quantity">
            <h3>Products</h3>
            <p>{{ productTotalQuantity }}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CompletedOrder',
    props: {
        order: {
            type: Object,
            required: true
        }
    },
    computed: {
        fullName() {
            return this.order.first + " " + this.order.last;
        },
        productTotalQuantity() {
            console.log("this.order.products.length", this.order.products.length);
            if (this.order.products.length > 1) {
                return this.order.products.reduce((accumulator, currentValue) => accumulator.quantity + currentValue.quantity);
            }
            return this.order.products[0].quantity;
        }
    },
}
</script>