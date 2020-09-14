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
        setTodos (state, listaDeTodos) {
            state.todos = listaDeTodos
        },
        changeTodo(state, task) {
            state.todos.forEach(element => {
                if (element.id === task.id) {
                    element.completed = !element.completed
                }
            });
        },
        setLoading(state, booleanValue) {
            state.loading = booleanValue
        }
    },
    actions: {
        
        async loadTodos ( { dispatch, commit, state } ) {
            
            if (state.todos.length) { return }

            // dispatch('loadingOn') // dispatch > chama actions
            commit('setLoading', true);
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                commit('setTodos', response.data);
            } catch (error) {
                console.log(error.response);
            }
            commit('setLoading', false);
        },

        changeTodo ({ commit, dispatch }, task) {
            dispatch('loadingOn')
            setTimeout(() => {
                commit('changeTodo', task)
                dispatch('loadingOff')
            }, 750);
        },
        loadingOn (context) {
            context.commit('loading', true) // commit > chama mutations
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
