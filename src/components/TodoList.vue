<template>
    <section class="todoapp" >
        <Header></Header>
        <Todo></Todo>
    </section>
</template>

<script>
    import Header from "./Header"
    import Todo from "./Todo"

    export default {
        name: "TodoList",
        components: {
            Header,
            Todo,
        },
    }
</script>

<style scoped>

</style>