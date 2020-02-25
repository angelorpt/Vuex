<template>
    <div>
        <h1>To Dos List</h1>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        mounted () {
            this.loadDados()
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