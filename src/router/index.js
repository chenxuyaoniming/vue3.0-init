import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import {routerList} from './config';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      ...routerList
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
