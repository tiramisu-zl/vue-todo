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
                <li class="todo" v-for="todo in todoList" :key="todo.id" :class="{completed: todo.completed}">
                    <Item :todo="todo" @delete="handleDelete"></Item>
                </li>
            </ul>
        </section>
        <Tabs :filter="filter" :todos="todoList"></Tabs>

    </section>
</template>

<script>
    import Item from "./Item"
    import Tabs from "./Tabs"

    export default {
        name: "Todo",
        components: {
            Item,
            Tabs,
        },
        data() {
            return {
                filter: 'all',
                todoList: []
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
            }
        }

    }
</script>

<style scoped>

</style>