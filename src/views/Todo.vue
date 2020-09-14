<template>
    <div class="container">
        {{todoCount}}
        <h3>To Do List Completa</h3>

        <div>
            <ul>
                <li>Nome: {{nome}}</li>
                <li>Sobrenome: {{snome}}</li>
                <li>Completo: {{nome_completo}}</li>
            </ul>
        </div>

        <legend class="right">Total: {{ total }}</legend>
        <legend class="left">Baseada na API: https://jsonplaceholder.typicode.com/todos</legend>
        <div>
            <div class="progress" v-show="loading">
                <div class="indeterminate"></div>
            </div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>TÍTULO</th>
                    <th>USUÁRIO</th>
                    <th>Concluir</th>
                </thead>
                <tbody>
                    <tr v-for="todo in lstTodo" :key="todo.id" :class="{'blue lighten-5' : todo.completed}">
                        <td>{{ todo.id }}</td>
                        <td>{{ todo.title }}</td>
                        <td>{{ todo.userId }}</td>
                        <td>
                            <button  class="btn darken-1 waves-effect"
                                    :class="todo.completed ? 'grey' : 'blue'"
                                    @click="toggleCompleted(todo)" >
                                {{ todo.completed ? 'Desfazer' : 'Concluir' }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
                nome : 'Rafael', 
                snome: 'Souza',
            }
        },
        mounted () {
            this.carregarDados()
        },
        computed: {

            ...mapState(['loading', 'todos']),

            ...mapGetters(['todoCount']),
            
            ...mapGetters({
                total: 'todoCount',
                lstTodo: 'getAllTodos',
            }),

            nome_completo() {
                return `${this.nome} ${this.snome}`;
            },
        },
        methods: {
            loadDados () {
                this.$store.dispatch('loadTodos')
            },
            ...mapActions ({
                toggleCompleted: 'changeTodo',
                carregarDados: 'loadTodos'
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>