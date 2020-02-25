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
        loadTodos ( { dispatch, state } ) {
            if (state.todos.length) { return }
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
            }, 750);
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
        todosDone(state) {
            return state.todos.filter(element => element.completed)
        },
        todosUndone(state) {
            return state.todos.filter(element => !element.completed)
        },
        doneCount(state) {
            return state.todos.filter(element => element.completed).length
        },
        undoneCount(state) {
            return state.todos.filter(element => !element.completed).length
        }
    },
    modules: {
    }
})
