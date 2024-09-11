import { createRouter, createWebHistory, type Router } from 'vue-router';
// @ts-ignore
import SignUpPage from '@/views/SignUpPage/SignUpPage.vue';
// @ts-ignore
import LoginPage from '@/views/LoginPage/LoginPage.vue';
// @ts-ignore
import Playground from '@/views/Playgrounds/Playground.vue';
// @ts-ignore
import LandingPage from '@/views/LandingPage/LandingPage.vue';
// @ts-ignore

export const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landingPage',
            component: LandingPage
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
            path: '/playground',
            name: 'playground',
            component: Playground
        }
    ]
});

export function navigateToPlaygrounds(): void {
    router.push('/playground');
}

export function navigateToLogin(): void {
    router.push('/login');
}

export function navigateToSignUp(): void {
    router.push('/signup');
}

export function navigateToLandingPage(): void {
    router.push('/');
}
