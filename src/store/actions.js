import api from '../api/todoApi'
import axios from "axios";

const baseUrl = "https://5d1c3b35f31e7f00147eb3a1.mockapi.io/api/v1/todos";

const actions = {
    async getTodos({ commit }) {
        api.getTodos(commit, 'loadTodo');
    },

    async addTodo({ commit }, { id, content }) {
        api.addTodo(commit, 'addTodo', { id, content });
    },

    async deleteTodo({ commit }, todo) {
        const url = `${baseUrl}/${todo.id}`;
        axios.delete(url).then(r => r.data)
            .then(r => {
                commit('deleteTodo', todo);
            })
    },

    async editTodo({ commit }, { todo, content }) {
        const url = `${baseUrl}/${todo.id}`;
        const data = {
            ...todo,
            content,
        };
        axios.put(url, data).then(r => r.data)
            .then(newTodo => {
                commit('editTodo', { todo, newTodo});
            })
    },

    async toggleTodo({ commit }, todo) {
        const url = `${baseUrl}/${todo.id}`;
        const data = {
            ...todo,
            completed: !todo.completed,
        };
        axios.put(url, data).then(r => r.data)
            .then(newTodo => {
                debugger;
                commit('editTodo', { todo, newTodo} );
            })
    }
};

export default actions;