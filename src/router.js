import Profile from './views/Profile.vue'
import Home from './views/Home.vue'
import Main from './views/Main';
import TodoList from './views/TodoList';
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: Main },
    {
        component: Home,
        path: '/home',
        children: [
            {path: '/', component: TodoList},
            {path: '/profile', component: Profile}
        ]
    },

];

export default new VueRouter({
    routes,
});
