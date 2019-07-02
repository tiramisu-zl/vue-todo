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
                    <Item :todo="todo"></Item>
                </li>
            </ul>
        </section>
        <Tabs :filter="filter"></Tabs>

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
                todoList: [{
                    id: 1,
                    content: 'todo item 1',
                    completed: false,
                }, {
                    id: 2,
                    content: 'todo item 2',
                    completed: false,
                }]
            }
        },
        methods: {
            addTodo() {
            }
        }

    }
</script>

<style scoped>

</style>