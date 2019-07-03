<template>
    <div>
        <li
            class="todo"
            :class="{completed: todo.completed, editing: editing}"
        >
            <div class="view">
                <input class="toggle" type="checkbox" :value="todo.completed" @change="toggleTodo(todo)">
                <label @dblclick="editing=true">{{todo.content}}</label>
                <button class="destroy" @click="deleteTodo(todo)"></button>
            </div>
            <input
                    v-show="editing"
                    class="edit"
                    type="text"
                    :value="todo.content"
                    @blur="doneEdit"
                    @keyup.enter="doneEdit"
            >
        </li>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "Item",
        props: {
            todo: {
                type: Object,
                required: true,
            },
            editingTodo: Object,
        },
        data() {
            return {
                editing: false,
            }
        },
        methods: {
            ...mapActions([
                'editTodo',
                'toggleTodo',
                'deleteTodo'
            ]),
            doneEdit(e) {
                const content = e.target.value.trim();
                const {todo} = this;
                if (!content) {
                    this.deleteTodo(todo)
                } else if (this.editing) {
                    this.editTodo({
                        todo,
                        content
                    });
                    this.editing = false
                }
                this.editing = false

            },
        },
    }
</script>

<style scoped>

</style>