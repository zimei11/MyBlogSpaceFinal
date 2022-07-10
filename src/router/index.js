import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView'
import NotFoundView from '@/views/NotFoundView'
import RegistView from '@/views/RegistView'
import UserListView from '@/views/UserListView'
import UserProfileView from '@/views/UserProfileView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userlist/',
    name: 'userlist',
    component: UserListView
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/regist/',
    name: 'regist',
    component: RegistView
  },
  {
    path: '/userprofile/',
    name: 'userprofile',
    component: UserProfileView
  },
  {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/:catchAll(.*)',
    redirect:"/404/",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
