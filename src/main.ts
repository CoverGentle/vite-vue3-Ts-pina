import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import vant from './ui/vantUI/index'
import 'vant/lib/index.css';

createApp(App).use(router).use(vant).mount('#app')
