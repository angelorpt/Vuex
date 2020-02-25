import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        setTodos (state, dados) {
            state.todos = dados
        }
    },
    actions: {
        loadTodos () {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(response => {
                    this.commit('setTodos', response.data)
                })
        }
    },
    getters: {
        todoCount(state) {
            return state.todos.length
        },
        getAllTodos(state) {
            return state.todos
        }
    },
    modules: {
    }
})
