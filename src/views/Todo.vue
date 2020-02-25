<template>
    <div class="container">
        <h3>To Dos List Completa</h3>
        <legend class="right">Total: {{ total }}</legend>
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
                            <button v-if="!todo.completed" class="btn blue darken-1 waves-effect" @click="toggleCompleted(todo)">Concluir</button>
                            <button v-else class="btn grey darken-1 waves-effect" @click="toggleCompleted(todo)">Desfazer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import { mapMutations, mapGetters, mapActions } from 'vuex'
    export default {
        mounted () {
            this.carregarDados()
        },
        computed: {
            loading() {
                return this.$store.state.loading
            },
            ...mapGetters({
                total: 'todoCount',
                lstTodo: 'getAllTodos',
                
            })
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