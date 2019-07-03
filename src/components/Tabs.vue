<template>
    <footer class="footer">
            <span class="todo-count">
                <strong> {{remaining}} </strong> items left
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
            remaining: Number,
        },
        data() {
            return {
                states: ['all', 'active', 'completed'],
            }
        },
        methods: {
            toggleState(state){
                this.$emit('toggle', state)
            }
        }
    }
</script>

<style scoped>

</style>