import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue3-lazyload'
import VueVirtualScroller from 'vue-virtual-scroller'

import router from './router'
import App from './App.vue'

import './assets/main.css'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import loading from './assets/loading-spin.svg'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyLoad, {
  loading: loading,
})
app.use(VueVirtualScroller)

app.mount('#app')
