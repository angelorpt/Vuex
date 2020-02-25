<template>
    <div>
        <h1>To Dos List - {{ total }}</h1>
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>TÍTULO</th>
                    <th>USUÁRIO</th>
                </thead>
                <tbody>
                    <tr v-for="todo in lstTodo">
                        <td>{{ todo.id }}</td>
                        <td>{{ todo.title }}</td>
                        <td>{{ todo.userId }}</td>
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