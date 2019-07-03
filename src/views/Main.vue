<template>
    <div>
        <a-row type="flex" justify="center">
            <a-avatar :size="64" icon="user" />
        </a-row>
        <a-row type="flex" justify="center">
            <a-col :span="12">
                <a-input type="text" placeholder="请输入姓名" />
            </a-col>
        </a-row>
        <a-row type="flex" justify="center">
            <a-col :span="12">
                <a-button type="primary"><router-link to="/home">开始使用</router-link></a-button>
            </a-col>
        </a-row>
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
