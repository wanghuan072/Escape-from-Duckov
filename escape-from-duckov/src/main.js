import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/global.css'

import App from './App.vue'
import router from './router'
import { useSEO } from './seo/composables.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// SEO初始化
app.config.globalProperties.$seo = useSEO()

app.mount('#app')
