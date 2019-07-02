<template>
    <div>
        <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo">{{todo.content}}</label>
            <button class="destroy" @click="deleteTodo"></button>
        </div>
        <input class="edit" type="text" v-model="todo.content"
               @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)">
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: {
            todo: {
                type: Object,
                required: true,
            },
            editingTodo: Object,
        },
        methods: {
            deleteTodo() {
                this.$emit('delete', this.todo)
            },
            editTodo() {
                this.$emit('edit', this.todo)
            },
            doneEdit() {
                this.$emit('editDone', this.todo)
            },
        }
    }
</script>

<style scoped>

</style>