//import './assets/main.css'

import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import library from '@/utils/fontAwesomeIconsLib';



const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(store)

app.mount('#app')


