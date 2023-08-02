<template>
    <nav class="bg-blue navigation">
        <ul class="navigation-links">
            <li>
                <router-link to="/orders">
                    <ButtonOrder />
                </router-link>
            </li>
            <li>
                <router-link to="/kiosk">
                    <ButtonKiosk />
                </router-link>
            </li>
            <li>
                <router-link to="#">
                    <ButtonLink @click="clickHandler"/>
                </router-link>

            </li>
        </ul>
    </nav>
</template>

<script>
import ButtonOrder from './buttons/ButtonOrder.vue'
import ButtonKiosk from './buttons/ButtonKiosk.vue'
import ButtonLink from './buttons/ButtonLink.vue'
export default {
    emits: ['click'],
    components: {
        ButtonOrder,
        ButtonKiosk,
        ButtonLink
    },
    methods: {
        clickHandler() {
            console.log("Click from Side Navigation");
            this.$emit('click');
        }
    }
}
</script>

<style>

</style>