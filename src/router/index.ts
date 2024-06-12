import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Connexion from '../pages/connexion/index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/connexion', component: Connexion }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
