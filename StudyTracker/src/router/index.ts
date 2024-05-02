import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Playgrounds from '@/views/Playgrounds.vue'
import Dashboard from '@/views/Dashboard.vue'
import Grades from '@/views/Grades.vue'
import Calendar from '@/views/Calendar.vue'
import SignUp from '@/views/Modules/SignUp.vue'
import Menu from "@/views/Modules/Menu.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Playgrounds
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
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    }
  ]
})

export default router
