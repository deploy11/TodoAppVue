<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <div class="input-container">
      <input v-model="newTask" placeholder="Add a new task" class="input" />
      <button @click="addTodo" class="add-button">Add</button>
    </div>

    <ul class="todo-items">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <input type="checkbox" v-model="todo.done" @change="updateTodo(todo)" />
        <span :class="{ done: todo.done }">{{ todo.task }}</span>
        <button @click="removeTodo(todo.id)" class="delete-button">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      newTask: '',
    };
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await axios.get('https://todoapi-w6rq.onrender.com/todos/');
        this.todos = response.data;
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    },
    async addTodo() {
      if (this.newTask.trim()) {
        try {
          const response = await axios.post('https://todoapi-w6rq.onrender.com/todos/', {
            task: this.newTask,
            done: false,
          });
          this.todos.push(response.data);
          this.newTask = '';
        } catch (error) {
          console.error('Error adding todo:', error);
        }
      }
    },
    async updateTodo(todo) {
      try {
        await axios.put(`https://todoapi-w6rq.onrender.com/todos/${todo.id}`, todo);
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    },
    async removeTodo(id) {
      try {
        await axios.delete(`https://todoapi-w6rq.onrender.com/todos/${id}`);
        this.todos = this.todos.filter(todo => todo.id !== id);
      } catch (error) {
        console.error('Error removing todo:', error);
      }
    }
  },
  mounted() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.input-container {
  display: flex;
  margin-bottom: 20px;
}

.input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.add-button {
  padding: 10px 20px;
  background-color: #1976D2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #155a8a;
}

.todo-items {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.todo-item input[type="checkbox"] {
  margin-right: 10px;
}

.done {
  text-decoration: line-through;
  color: #888;
}

.delete-button {
  margin-left: auto;
  padding: 5px 10px;
  background-color: #FF5252;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c62828;
}
</style>
