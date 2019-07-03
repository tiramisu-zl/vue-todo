const mutations = {
    loadTodo(state, todos) {
        state.todoList = todos;
    },
    addTodo (state, todo) {
        state.todoList.unshift(todo)
    },

    deleteTodo (state, todo) {
        state.todoList.splice(state.todoList.indexOf(todo), 1)
    },

    editTodo (state, { todo, newTodo }) {
        todo.content = newTodo.content;
        todo.completed = newTodo.completed;
    }
};

export default mutations;