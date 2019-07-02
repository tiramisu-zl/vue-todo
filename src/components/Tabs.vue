<template>
    <footer class="footer">
            <span class="todo-count">
                <strong> 2 </strong> item left
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
        },
        data() {
            return {
                states: ['all', 'active', 'completed'],
            }
        },
        methods: {
            toggleState(){}
        }
    }
</script>

<style scoped>

</style>