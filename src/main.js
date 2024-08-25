import { createApp } from 'vue'
import router from './router'
import TodoList from './components/TodoList.vue' // Yangi komponentni import qiling

const app = createApp(TodoList) // `TodoList` komponentini ishlatish

app.use(router)

app.mount('#app')
