import { createRouter, createWebHistory } from 'vue-router'
import AddTutoForm from '@/pages/addTuto/index.vue'

const routes = [
  // Autres routes
  {
    path: '/add-tuto',
    name: 'index',
    component: AddTutoForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
