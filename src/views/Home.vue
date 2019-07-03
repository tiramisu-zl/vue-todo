<template>
    <a-layout>
        <a-layout-header>
            <a-row type="flex" justify="space-between">
                <a-col :span="12">
                    <router-link to="/">
                        <a-icon type="arrow-left" />
                        返回
                    </router-link>
                </a-col>
                <a-col :span="12">
                    Hello, Tom!
                </a-col>
            </a-row>>


        </a-layout-header>
        <a-layout>
            <a-layout-sider>
                <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                    <a-menu-item key="1">
                        <a-icon type="edit" />
                        <span><router-link to="/home" class="color-white">TodoList列表</router-link></span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <a-icon type="user" />
                        <span><router-link to="/profile" class="color-white">我的</router-link></span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout-content><router-view></router-view></a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    export default {
        name: "Home",
    }
</script>

<style scoped>

</style>
