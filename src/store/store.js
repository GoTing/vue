import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    // 存放公用的状态
    state: {
        count: 0
    },
    // 存放如何更改状态
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
    }
})
