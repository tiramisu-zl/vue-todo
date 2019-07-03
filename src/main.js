import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueRouter from 'vue-router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/todoStyle.css'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Antd);

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
