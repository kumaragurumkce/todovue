<template>
    <div>
      <AddTodo @add-todo="addTodo" />
      <ul>
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @delete-todo="deleteTodo"
          @update-todo="updateTodo"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import TodoItem from './TodoItem.vue';
  import AddTodo from './AddTodo.vue';
  
  export default {
    components: { TodoItem, AddTodo },
    computed: {
      ...mapGetters(['allTodos']),
      todos() {
        return this.allTodos;
      },
    },
    methods: {
      ...mapActions(['fetchTodos', 'addTodo', 'deleteTodo', 'updateTodo']),
    },
    created() {
      this.fetchTodos();
    },
  };
  </script>
  