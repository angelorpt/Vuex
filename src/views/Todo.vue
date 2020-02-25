<template>
    <div class="container">
        <h3>To Dos List Completa</h3>
        <legend class="right">Total: {{ total }}</legend>
        <div>
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
                            <button v-if="!todo.completed" class="btn blue darken-1 waves-effect">Concluir</button>
                            <button v-else class="btn grey darken-1 waves-effect">Desfazer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    export default {
        mounted () {
            this.loadDados()
        },
        computed: {
            ...mapGetters({
                total: 'todoCount',
                lstTodo: 'getAllTodos'
            })
        },
        methods: {
            loadDados () {
                this.$store.dispatch('loadTodos')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>