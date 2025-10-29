import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/global.css'

import App from './App.vue'
import router from './router'
import { createSEOPlugin } from './seo/plugin.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createSEOPlugin())

app.mount('#app')
