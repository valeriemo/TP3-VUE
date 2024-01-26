import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmsView from '../views/FilmsView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/films',
    name: 'films',
    component: FilmsView
  },
  {
    path: '/film-edit/:id',
    name: 'film-edit',
    component: FilmsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
