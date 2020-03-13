import Vue from 'vue'
import App from './App.vue'
import router from './router'
//样式重设与图标
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
//去掉延迟
import fastClick from 'fastclick'
fastClick.attach(document.body)
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
