<template>
    <nav class="bg-blue navigation">
        <ul class="navigation-links__top navigation-links">
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
                    <ButtonSystem />
                </router-link>

            </li>
            <li>
                <router-link to="#">
                    <ButtonLink @click="clickHandler"/>
                </router-link>

            </li>
        </ul>
        <ul class="navigation-links__bottom navigation-links">
            <li>
                <router-link to="/orders/active">
                    <ButtonPassport />
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <ButtonHelp />
                </router-link>
            </li>
            <li>
                <router-link to="/orders/completed">
                    <ButtonCloseLab />
                </router-link>
            </li>
            <li>
                <span>V.11.00.00</span>
            </li>
        </ul>
    </nav>
</template>

<script>
import ButtonOrder from './buttons/ButtonOrder.vue'
import ButtonKiosk from './buttons/ButtonKiosk.vue'
import ButtonSystem from './buttons/ButtonSystem.vue'
import ButtonLink from './buttons/ButtonLink.vue'
import ButtonPassport from './buttons/ButtonPassport.vue'
import ButtonHelp from './buttons/ButtonHelp.vue'
import ButtonCloseLab from './buttons/ButtonCloseLab.vue'

export default {
    emits: ['click'],
    components: {
        ButtonOrder,
        ButtonKiosk,
        ButtonLink,
        ButtonSystem,
        ButtonPassport,
        ButtonHelp,
        ButtonCloseLab
    },
    methods: {
        clickHandler() {
            console.log("Click from Side Navigation");
            this.$emit('click');
        }
    }
}
</script>