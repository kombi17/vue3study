// main.js : 어플리케이션의 진입점
// 전역 컴포넌트나 부가적인 vue 라이브러리를 등록

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
