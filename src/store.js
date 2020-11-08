
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import axiosAPI from '@/axios'

Vue.use(Vuex)
 const store = new Vuex.Store({
    state: {
        resultado: null,
        informacoes: null,
        carregando: false
    },
    mutations: {
        resultado(state, payload) {
            state.resultado = payload
        },
        informacoes(state, payload) {
            state.informacoes = payload
        },
        carregando(state) {
            state.carregando = !state.carregando
        },
    },
    actions: {
        simular({commit},payload){
            commit('carregando')
            axiosAPI.post('/', { "expr": payload.mensalidade + " * (((1 + 0.00517) ^ " + payload.tempo + " - 1) / 0.00517)" })
              .then(function (response) {
                commit('resultado', response.data)
                commit('informacoes', payload)
                
              }).then(function () {
                router.push('/simular')
                commit('carregando')
              })
              .catch(function (error) {
                console.log(error);
                commit('carregando')
              });
        }
    },
    getters: {
        resultado: state => state.resultado,
        informacoes: state => state.informacoes,
        carregando: state => state.carregando
    }
})
export default store