import { createRouter, createWebHistory } from 'vue-router'
import TodayPage from '@/views/Today'

const routes = [
  {
    path: '/',
    name: 'today',
    components: TodayPage,
  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    components: () => import('../views/Tomorrow.vue'),
  },
  {
    path: '/week',
    name: 'week',
    components: () => import('../views/Week.vue'),
  },
  {
    path: '/month',
    name: 'month',
    components: () => import('../views/Month.vue'),
  },
  {
    path: '/year',
    name: 'year',
    components: () => import('../views/Year.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
