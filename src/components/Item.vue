<template>
    <div>
        <li
            class="todo"
            :class="{completed: todo.completed, editing: editing}"
        >
            <div class="view">
                <input class="toggle" type="checkbox" v-model="todo.completed">
                <label @dblclick="editing=true">{{todo.content}}</label>
                <button class="destroy" @click="deleteTodo(todo)"></button>
            </div>
            <input
                    v-show="editing"
                    class="edit"
                    type="text"
                    v-model="todo.content"
                    @blur="doneEdit"
                    @keyup.enter="doneEdit"
            >
        </li>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

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
            ...mapMutations([
                'editTodo',
                'deleteTodo'
            ]),
            doneEdit() {
                // 双向绑定所以不用去手动更新store
                // const value = e.target.value.trim();
                // const {todo} = this;
                // if (!value) {
                //     this.deleteTodo(todo)
                // } else if (this.editing) {
                //     this.editTodo({
                //         todo,
                //         value
                //     });
                //     this.editing = false
                // }
                this.editing = false

            },
        },
    }
</script>

<style scoped>

</style>