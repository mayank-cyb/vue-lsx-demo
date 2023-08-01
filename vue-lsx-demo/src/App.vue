<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="content">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
        </nav>
      </div>
    </header>
    <aside>
      <SideNavigation />
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>
<script>
  import SideNavigation from './components/SideNavigation.vue';
  export default {
    components: {
      SideNavigation
    }
  }
</script>
<!--style scoped>

</style-->
