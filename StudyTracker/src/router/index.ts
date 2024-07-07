import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Playgrounds from '@/views/Playgrounds.vue'
// @ts-ignore
import Dashboard from '@/views/Dashboard.vue'
// @ts-ignore
import Grades from '@/views/Grades.vue'
// @ts-ignore
import Calendar from '@/views/Calendar.vue'
// @ts-ignore
import SignUp from '@/views/Modules/SignUp.vue'
// @ts-ignore
import Menu from '@/views/Menu/Menu.vue'
// @ts-ignore
import Playground from "@/views/Playgrounds/Playground.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Playground
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/grades',
      name: 'grades',
      component: Grades
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
})

export default router
