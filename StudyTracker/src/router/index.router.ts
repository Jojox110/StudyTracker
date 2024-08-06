import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import SignUpPage from '@/views/SignUpPage/SignUpPage.vue';
// @ts-ignore
import LoginPage from '@/views/LoginPage/LoginPage.vue';
// @ts-ignore
import Menu from '@/views/Menu/Menu.vue';
// @ts-ignore
import Playground from '@/views/Playgrounds/Playground.vue';
// @ts-ignore
import LandingPage from '@/views/LandingPage/LandingPage.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Playground
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpPage
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Menu
        },
        {
            path: '/grades',
            name: 'grades',
            component: LandingPage
        }
    ]
});

export function navigateToPlaygrounds(): void {
    router.push('/');
}
