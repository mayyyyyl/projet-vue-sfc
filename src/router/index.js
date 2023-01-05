import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import SeismicView from '../views/SeismicView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/seismic',
    name: 'seismic',
    component: SeismicView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
