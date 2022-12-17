import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://8080-borgarelli-provaspringv-b21dwbezjlp.ws-us79.gitpod.io' //Assim que rodar o backend e rodar ele em uma porta em si, basta copiar o link da porta e adiciona-lo aqui

axios.interceptors.request.use(config => {
  if(store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
})
axios.interceptors.response.use(res => {
  return res
}, error => {
  if(error.response.status === 403) {
    alert('Não autorizado!')
  }
  else if (error.response.status === 401) {
    store.commit('logout')
    router.push('/login')
  }
  throw error
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
