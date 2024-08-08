<!-- src/App.vue -->
<template>
  <div id="app">
    <TodoList />
    <!-- <TodoItem /> -->
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
// import TodoList from './components/TodoItem.vue';

export default {
  name: 'App',
  components: {
    TodoList,
    // TodoItem,
  },
};
</script>
