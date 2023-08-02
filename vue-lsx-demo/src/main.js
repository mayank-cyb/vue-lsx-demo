//import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import library from '@/utils/fontAwesomeIconsLib';

// Create a new store instance.
const store = createStore({
    state () {
      return {
        sliderShow: true
      }
    },
    getters: {
        sliderShowStatus () {
            return state.sliderShow;
        }
    },
    actions: {
        updateSliderShow (context) {
            context.commit('sliderShowUpdate');
        }
    },
    mutations: {
      sliderShowUpdate (state) {
        state.sliderShow = !state.sliderShow;
      }
    }
  })

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(store)

app.mount('#app')


