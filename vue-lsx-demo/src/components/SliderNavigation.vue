<template>
    <div 
        class="slider-navigation"
        :class="sliderShow ? 'slideRight' : 'slideLeft'"
    >
        <button-chevron isIcon @click="toggleSliderClass" />
        <ul>
            <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Port</a>
            </li>
            <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">One Wallmart</a>
            </li>
            <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Service Portal</a>
            </li>
            <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Yes Video</a>
            </li>
            <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Order Status</a>
            </li>
            <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">Marketing</a>
            </li>
        </ul>
    </div>
</template>

<script>
import ButtonChevron from './buttons/ButtonChevron.vue';
//import { mapGetters, mapActions } from 'vuex';
export default {
    emits: ['click'],
    components: {
        ButtonChevron
    },
    props: {
        sliderShow: {
            type: Boolean
        }
    },
    computed: {
        //...mapGetters['sliderShowStatus']
    },
    methods: {
        //...mapActions(['updateSliderShow']),
        toggleSliderClass() {
            //this.slideRight = !this.sliderShow;
            //this.updateSliderShow();
            console.log("in toggle slider class", this.sliderShowStatus);
            this.$emit('click');
        },
    }
}
</script>