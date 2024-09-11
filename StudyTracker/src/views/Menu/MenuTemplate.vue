<template>
    <section class="grid h-full w-full sm: grid-cols-1 sm: grid-rows-9">
        <!-- First layer with the X and the menu header -->
        <section class="grid h-full w-full sm: sm-menu-header-container">
            <button class="sm: sm-menu-header-close-button">
                <XMarkIcon class="icon-color-theme" alt="close menu" @click="emitSwitch" />
            </button>
            <p class="sm: sm-menu-header-title">Menu</p>
        </section>

        <!-- User layer -->
        <section class="grid h-full w-full sm: sm-menu-user-container">
            <div class="sm: sm-menu-user-icon"></div>
            <div class="sm: sm-menu-user-info-container">
                <div class="font-bold w-full sm: text-xl">Welcome back username</div>
                <button class="button-color-theme sm: sm-menu-user-logout" @click="logout">
                    Sign out
                </button>
            </div>
        </section>

        <!-- Routers -->
        <section
            class="grid h-full w-full p-8 sm: grid-cols-1 sm: grid-rows-8 sm: row-start-4 sm: row-span-6 sm: col-start-1 sm: col-span-1"
        >
            <div
                v-for="(item, index) in menuItems"
                :key="index"
                class="sm-menu-item-container sm:row-start-index-{{index}} sm:row-span-1"
            >
                <ChevronRightIcon alt="menu item" class="icon-color-theme sm: sm-menu-item-icon" />
                <div class="sm: sm-menu-item">{{ item }}</div>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import './menu.css';
import { ref, defineEmits } from 'vue';
import { useUserStore } from '@/stores/user.store';
const userStore = useUserStore();
const userId = userStore.getUserId();
import { navigateToLandingPage } from '@/router/index.router';

const emit = defineEmits(['switch']);

const emitSwitch = () => {
    emit('switch');
};

import { ChevronRightIcon, XMarkIcon } from '@heroicons/vue/24/solid';

let menuItems = ref([
    'Playgrounds',
    'Dashboard',
    'Grades',
    'Calendar',
    'To-Do List',
    'Statistics',
    'Methods',
    'Daily Review'
]);

async function logout() {
    const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
    if (response.status != 200) {
        alert('Something went wrong');
    } else {
        navigateToLandingPage();
    }
}
</script>
