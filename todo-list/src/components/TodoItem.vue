<template>
    <li>
      <input
        type="checkbox"
        v-model="completed"
        @change="updateTodoStatus"
      />
      <span v-if="!isEditing">{{ todo.title }}</span>
      <input
        v-if="isEditing"
        v-model="editedTitle"
        @keyup.enter="saveEdit"
        @blur="saveEdit"
      />
      <button @click="deleteTodo">Delete</button>
      <button @click="toggleEdit">{{ isEditing ? 'Cancel' : 'Edit' }}</button>
      <button v-if="isEditing" @click="saveEdit">Save</button>
    </li>
  </template>
  
  <script>
  export default {
    props: ['todo'],
    data() {
      return {
        completed: this.todo.completed,
        isEditing: false,
        editedTitle: this.todo.title,
      };
    },
    methods: {
      deleteTodo() {
        this.$emit('delete-todo', this.todo.id);
      },
      updateTodoStatus() {
        this.$emit('update-todo', { ...this.todo, completed: this.completed });
        console.log(this.completed,'.......complete');
        
      },
      toggleEdit() {
        this.isEditing = !this.isEditing;
        if (!this.isEditing) {
          this.editedTitle = this.todo.title;
        }
      },
      saveEdit() {
        if (this.editedTitle.trim() !== '') {
          this.$emit('update-todo', { ...this.todo, title: this.editedTitle });
          this.isEditing = false;
        }
      },
    },
  };
  </script>
  