import { createRouter, createWebHistory } from 'vue-router'
// Import qilingan komponentlar
import Home from '../components/Home.vue'
import TodoList from '../components/TodoList.vue'
import About from '../components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home // Home sahifasi uchun komponent
    },
    {
      path: '/todos',
      name: 'todo-list',
      component: TodoList // Todo list sahifasi uchun komponent
    },
    {
      path: '/about',
      name: 'about',
      component: About // About sahifasi uchun komponent
    }
  ]
})

export default router
