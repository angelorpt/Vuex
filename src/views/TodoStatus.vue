<template>
    <div class="container">
        <div class="progress" v-show="loading">
            <div class="indeterminate"></div>
        </div>
        <div class="row">
            <div class="col l6">
                <label for="">Por Fazer</label>
                <legend class="left">Total: {{ doneCount }}</legend>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="todo in todosUndone" :key="todo.id" class="orange lighten-4">
                            <td scope="row">{{ todo.id }}</td>
                            <td>{{ todo.title }}</td>
                        </tr>
                    </tbody>
                </table>                
            </div>
            <div class="col l6">
                <label for="">Concluídas</label>
                <legend class="right">Total: {{ undoneCount }}</legend>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="todo in todosDone" :key="todo.id" class="blue lighten-4">
                            <td scope="row">{{ todo.id }}</td>
                            <td>{{ todo.title }}</td>
                        </tr>
                    </tbody>
                </table>                
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex'
    export default {
        mounted() {
            this.loadTodos()
        },
        computed: {
            ...mapGetters(['todosDone', 'todosUndone', 'doneCount', 'undoneCount']),
            ...mapState(['loading'])
        },
        methods: {
            ...mapActions(['loadTodos'])
        }
    }
</script>

<style lang="scss" scoped>

</style>