<template>
    <div>
        <router-link to="/home">开始使用</router-link>
        <input type="text" placeholder="请输入姓名">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>

</style>