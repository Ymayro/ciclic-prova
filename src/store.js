
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import axiosAPI from '@/axios'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        resultado: null,
        informacoes: null
    },
    mutations: {
        resultado(state, payload) {
            state.resultado = payload
        },
        informacoes(state, payload) {
            state.informacoes = payload
        },
    },
    actions: {
        simular({commit},payload){
            axiosAPI.post('/', { "expr": payload.mensalidade + " * (((1 + 0.00517) ^ " + payload.tempo + " - 1) / 0.00517)" })
              .then(function (response) {
                console.log(response);
                commit('resultado', response.data)
                commit('informacoes', payload)
                router.push('simular')
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    },
    getters: {
        resultado: state => state.resultado,
        informacoes: state => state.informacoes
    }
})