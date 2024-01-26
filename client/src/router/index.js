import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmsView from '../views/FilmsView.vue'
import UpdateView from '../views/UpdateView.vue'
import ShowView from '../views/ShowView.vue'

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
    path: '/film-show/:id',
    name: 'film-show',
    component: ShowView
  },
  {
    path: '/film-edit/:id',
    name: 'film-edit',
    component: UpdateView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
