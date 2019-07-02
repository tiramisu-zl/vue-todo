<template>
    <div class="view">
        <input class="toggle" type="checkbox" v-model="todo.completed">
        <label>{{todo.content}}</label>
        <button class="destroy" @click="deleteTodo"></button>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: {
            todo: {
                type: Object,
                required: true,
            }
        },
        methods: {
            deleteTodo() {}
        }
    }
</script>

<style scoped>

</style>