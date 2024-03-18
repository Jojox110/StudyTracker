import './assets/main.css'

import { createApp } from 'vue'

// @ts-ignore
import App from '../src/App.vue'    
import router from './router'

const app = createApp(App)

app.use(router)

app.mount("#app")
