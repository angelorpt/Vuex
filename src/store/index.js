import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        loading: true
    },
    mutations: {
        setTodos (state, dados) {
            state.todos = dados
        },
        changeTodo(state, task) {
            state.todos.forEach(element => {
                if (element.id === task.id) {
                    element.completed = !element.completed
                }
            });
        },
        loading (state, payload) {
            state.loading = payload
        }
    },
    actions: {
        loadTodos ( { dispatch } ) {
            dispatch('loadingOn')
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(response => {
                    this.commit('setTodos', response.data)
                    dispatch('loadingOff')
                })
        },
        changeTodo ({ commit, dispatch }, task) {
            dispatch('loadingOn')
            setTimeout(() => {
                commit('changeTodo', task)
                dispatch('loadingOff')
            }, 1500);
        },
        loadingOn ({commit}) {
            commit('loading', true)
        },
        loadingOff ({commit}) {
            commit('loading', false)
        }

    },
    getters: {
        todoCount(state) {
            return state.todos.length
        },
        getAllTodos(state) {
            return state.todos
        },
    },
    modules: {
    }
})
