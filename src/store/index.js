import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        name: '',
        todoList: []
    },
    mutations,
    actions,
})
