<template>
    <side>
        <router-link to="/">返回</router-link>

        <p>
            <router-link to="/home">TodoList列表</router-link>
            <router-link to="/profile">我的</router-link>
        </p>
        <router-view></router-view>
    </side>
</template>

<script>
    export default {
        name: "Home",
    }
</script>

<style scoped>

</style>