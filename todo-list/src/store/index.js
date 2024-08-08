import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
      console.log(todos,'.......');
      
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    UPDATE_TODO(state, updatedTodo) {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      console.log(updatedTodo.id);
      
      console.log(state);
    
      console.log(index,'index..');
      
      if (index !== -1) {
        state.todos.splice(index, 1, updatedTodo);
      }
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      commit('SET_TODOS', response.data);
    },
    async addTodo({ commit }, title) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
      commit('ADD_TODO', response.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('DELETE_TODO', id);
    },
    async updateTodo({ commit }, todo) {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
      commit('UPDATE_TODO', response.data);
    },
  },
  getters: {
    allTodos: state => state.todos,
  },
});
