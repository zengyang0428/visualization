import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "default-passive-events"
import App from './App.vue'


const app = createApp(App)

app.use(createPinia())

app.mount('#app')
