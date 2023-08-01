<template>
    <nav class="bg-blue navigation">
        <ul class="navigation-links">
            <li>
                <router-link to="/orders">
                    <OrderButton />
                </router-link>
            </li>
            <li>
                <router-link to="/kiosk">
                    <KioskButton />
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import OrderButton from './buttons/OrderButton.vue'
import KioskButton from './buttons/KioskButton.vue'
export default {
    components: {
        OrderButton,
        KioskButton
    }
}
</script>

<style>

</style>