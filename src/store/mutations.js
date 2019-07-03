const mutations = {
    addTodo (state, todo) {
        state.todoList.unshift(todo)
    },

    deleteTodo (state, todo) {
        state.todoList.splice(state.todoList.indexOf(todo), 1)
    },

    editTodo (state, { todo, value }) {
        todo.content = value
    }
};

export default mutations;