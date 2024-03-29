import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
import './style.css'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/dark/css-vars.css'
import 'highlight.js/styles/github-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

console.log('call me by your name: i#ganto.me')
console.log('look: https://ganto.me')

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(hljsVuePlugin)
app.mount('#app')
