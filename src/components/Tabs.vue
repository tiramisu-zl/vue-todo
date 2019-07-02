<template>
    <footer class="footer">
            <span class="todo-count">
                <strong> {{activeLength}} </strong> item left
            </span>
        <ul class="filters">
            <li v-for="state in states" :key="state">
                <a href="#" @click="toggleState(state)" :class="{selected: filter === state}">{{state}}</a>
            </li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "Tabs",
        props: {
            filter: String,
            todos: Array,
        },
        data() {
            return {
                states: ['all', 'active', 'completed'],
            }
        },
        computed: {
          activeLength: function(){
              return this.todos.filter(todo => !todo.completed).length
          }
        },
        methods: {
            toggleState(){}
        }
    }
</script>

<style scoped>

</style>