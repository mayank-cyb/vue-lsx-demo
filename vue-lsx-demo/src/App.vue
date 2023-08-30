<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="content">
    <header role="banner">
      <!--img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /-->

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
        </nav>
      </div>
    </header>
    <aside>
      <SideNavigation @click="updateSliderNavigationState" />
      <slider-navigation :sliderShow="sliderShow" @click="updateSliderNavigationState"/>
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<script>
  import SideNavigation from './components/SideNavigation.vue';
  import SliderNavigation from './components/SliderNavigation.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    components: {
      SideNavigation,
      SliderNavigation
    },
    data() {
      return {
        sliderShow: false,
      }
    },
    computed: {
      ...mapGetters(['sliderShowStatus']),
    }, 
    methods: {
      ...mapActions(['updateSliderShow']),
      updateSliderNavigationState() {
        //this.updateSliderShow();
        this.sliderShow = !this.sliderShow;
        //console.log("sliderShow", this.sliderShowStatus);
      }
    }
  }
</script>
<!--style scoped>

</style-->
