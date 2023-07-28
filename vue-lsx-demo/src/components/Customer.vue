<template>
    <div class="customer">
        <div class="card">
            <div class="btn-wrapper">
                <OrderMode>
                    <template
                        v-if="data.web"
                    >
                        Web | <span class="green">PAID</span>
                    </template>
                    <template
                        v-else
                    >
                        Kiosk
                    </template>
                </OrderMode>
                <button class="btn btn-express">Express</button>
            </div> 
            <div :class="isQueued? 'bottom-wrapper' : null">
                <div class="left-section">
                <h2 class="name">{{ fullName }}</h2>
                <p class="due-date">Due: {{ data.due }}</p>
                <hr />
                <p>Products</p>
                <ul class="printsQueued">
                    <li 
                        v-for="(product, index) in data.products"
                        :key="`product-${index}`"
                    >
                        {{ product }}
                    </li>
                </ul>
                </div>
                <template
                    v-if="isQueued"
                >
                <div class="right-section">
                    <span class="large_text blue">{{ status }}%</span>
                </div>
                </template>
            </div>
        </div>
        <slot name="queuedCustomer"></slot>
    </div>
</template>

<script>
import OrderMode from "./OrderMode.vue";
export default {
    name: 'Card',
    components : {
        OrderMode
    },
    data() {
        return {
            data: this.cardData,
            status:  0
        }
    },
    watch: {
        fill(newValue) {
            if(newValue >=  100) {
                this.status = 100;
            }
        }
    },
    props: {
        cardData: {
            type: Object,
            required: true,
        },
        fill: {
            type: Number,
            default: 0,
            required: false,
        },
        isQueued: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        fullName() {
            return this.data.first + ' ' + this.data.last
        },
        status() {
            if(this.fill <= 100) {
                this.status = this.fill
            } else {
                this.status = 100;
            }
            return this.status;
        }
    },
}
</script>

<style>

</style>