<template>
    <div>
      <input v-model="title" placeholder="Add a new todo" />
      <button @click="addTodo">Add</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
      };
    },
    methods: {
      addTodo() {
        if (this.title.trim() !== '') {
          this.$emit('add-todo', this.title);
        //   console.log(this.title,'.........!');
          
          this.title = '';
        }
      },
    },
  };
  </script>
  