
import Vue from 'vue'
import Vuex from 'vuex'
// import api from '@/api'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        test: 'test'
    },
    mutations: {
    change(state, payload) {
        state.test = payload
        }
    },
    actions: {
        
    },
    getters: {
        test: state => state.test
    }
})