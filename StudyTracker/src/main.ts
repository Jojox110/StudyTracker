import { createApp } from 'vue'
import { createPinia } from "pinia";
const pinia = createPinia()

// @ts-ignore
import App from '../src/App.vue'    
import router from './router'
import '../index.css'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount("#app")
