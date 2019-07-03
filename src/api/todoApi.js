import axios from 'axios';

const baseUrl = 'https://5d1c3b35f31e7f00147eb3a1.mockapi.io/api/v1/todos';

const api = {
    getTodos(commit, mutation) {
        axios.get(baseUrl)
            .then(res => {
                commit(mutation, res.data)
            }).catch(error => console.log(error));
    },
};

export default api;
