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
                <Item
                        v-for="todo in filteredTodos"
                        :key="todo.id"
                        :todo="todo"
                />
            </ul>
        </section>
        <Tabs :filter="filter" @toggle="handleToggle"></Tabs>

    </section>
</template>

<script>
    import Item from "./Item"
    import Tabs from "./Tabs"
    import { mapState } from 'vuex'

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
            }
        },
        mounted () {
            this.$store.dispatch('getTodos')
        },
        computed: {
            ...mapState([
                'todoList'
            ]),
            filteredTodos() {
                return todoFilter[this.filter](this.todoList)
            },
            remaining() {
                return todoFilter.active(this.todoList).length
            }
        },
        methods: {
            addTodo(e) {
                const content = e.target.value;
                const id = this.todoList.length + 1;
                if (content.trim()) {
                    this.$store.dispatch('addTodo', {id, content})
                }
                e.target.value = ''
            },
            handleToggle(filter) {
                this.filter = filter;
            },
        },

    }
</script>

<style scoped>

</style>