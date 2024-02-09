import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/icons/bootstrap-icons-1.11.3/font/bootstrap-icons.css"

const app = createApp(App)

app.use(router)

app.mount('#app')
