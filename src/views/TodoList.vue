<template>
    <section class="todoapp" >
        <Header></Header>
        <Todo></Todo>
    </section>
</template>

<script>
    import Header from "../components/Header"
    import Todo from "../components/Todo"

    export default {
        name: "TodoList",
        components: {
            Header,
            Todo,
        }
    }
</script>

<style scoped>

</style>