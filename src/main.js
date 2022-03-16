import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import axios from  'axios'

const app = createApp(App)
//引入网络请求
app.config.globalProperties.$axios = axios

app.use(store)
  // .use(VueAxios,axios)
  .use(router)
  // .use(axios)
  .mount('#app')