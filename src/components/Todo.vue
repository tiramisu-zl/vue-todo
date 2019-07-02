<template>
    <section>
        <input
                class="new-todo"
                autofocus
                autocomplete="off"
                placeholder="What needs to be done?"
                @keyup.enter="addTodo"
        >

        <section class="main">
            <ul class="todo-list">
                <li
                        class="todo"
                        v-for="todo in filteredTodos"
                        :key="todo.id"
                        :class="{completed: todo.completed, editing: todo == editingTodo}"
                >
                    <Item
                            :todo="todo"
                            :editingTodo="editingTodo"
                            @delete="handleDelete"
                            @edit="handleEdit"
                            @editDone="handleEditDone"
                    />
                </li>
            </ul>
        </section>
        <Tabs :filter="filter" :todos="todoList" @toggle="handleToggle"></Tabs>

    </section>
</template>

<script>
    import Item from "./Item"
    import Tabs from "./Tabs"

    const todoFilter = {
        all: todos => todos,
        active: todos => todos.filter(todo => !todo.completed),
        completed: todos => todos.filter(todo => todo.completed)
    };

    export default {
        name: "Todo",
        components: {
            Item,
            Tabs,
        },
        data() {
            return {
                filter: 'all',
                editingTodo: null,
                todoList: [],
            }
        },
        computed: {
            filteredTodos: function () {
                return todoFilter[this.filter](this.todoList);
            }
        },
        methods: {
            addTodo(e) {
                this.todoList.unshift({
                    id: this.todoList.length + 1,
                    content: e.target.value,
                    completed: false,
                });
                e.target.value = '';
            },
            handleDelete(todo) {
                const index = this.todoList.indexOf(todo);
                this.todoList.splice(index, 1);
            },
            handleToggle(filter){
                this.filter = filter;
            },
            handleEdit(todo){
                this.editingTodo = todo;
            },
            handleEditDone() {
                this.editingTodo = null;
            }
        }

    }
</script>

<style scoped>

</style>