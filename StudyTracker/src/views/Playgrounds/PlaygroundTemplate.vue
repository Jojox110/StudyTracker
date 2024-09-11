<template>
    <section class="grid h-full w-full sm: sm-playgrounds-layout">
        <!-- Header -->
        <section class="grid h-full w-full sm: sm-playgrounds-header">
            <button class="sm: sm-playgrounds-header-close-button">
                <Bars3Icon alt="menu button" class="icon-color-theme" @click="emitSwitch" />
            </button>
            <p class="sm: sm-playgrounds-header-title">Playgrounds</p>
        </section>

        <button
            @click="showCreatePlaygroundClick"
            class="sm: sm-playgrounds-create-playground-button"
        >
            Create Playground
        </button>

        <section
            v-show="showCreatePlayground"
            class="sm: sm-playgrounds-create-playground-container"
        >
            <CreatePlayground @newPlayground="handleNewPlayground" />
        </section>

        <!-- List of playgrounds  -->
        <section class="sm-playgrounds-widget">
            <div v-for="(item, index) in listOfPlaygrounds" :key="index">
                <PlaygroundWidget
                    :playground-name="item.playground_name"
                    :last-modified="formatDate(item.updated_at)"
                />
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { isUserAuthenticated } from '@/utils/auth.utils';

import { type Ref, ref, defineEmits } from 'vue';
import { useUserStore } from '@/stores/user.store';
import { navigateToLandingPage } from '@/router/index.router';

import './playgrounds.css';
import PlaygroundWidget from '@/views/Playgrounds/PlaygroundWidget.vue';
import CreatePlayground from '@/views/Playgrounds/Submenu/CreatePlayground.vue';

import { Bars3Icon } from '@heroicons/vue/24/solid';

async function init() {
    // Check if the user is authenticated
    if (!(await isUserAuthenticated())) {
        // TODO idk why this alert doesnt pop up - not important though
        alert('You are not authenticated. Please login or signup');
        navigateToLandingPage();
        return; // Exit the function if the user is not authenticated
    }

    userStore.fetchUserInfo();
    await getPlaygrounds();
}
const emit = defineEmits(['switch']);
const userStore = useUserStore();

interface Playground {
    created_by: number;
    playground_id: number;
    playground_name: string;
    created_at: string;
    updated_at: string;
}

const listOfPlaygrounds: Ref<Playground[]> = ref([]);
const showCreatePlayground = ref(false);
const showCreatePlaygroundButton = ref(false);

function handleNewPlayground() {
    showCreatePlayground.value = false;
    getPlaygrounds();
}

function showCreatePlaygroundClick() {
    showCreatePlayground.value = !showCreatePlayground.value;
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-CA'); // en-CA format gives yyyy-mm-dd
}

const emitSwitch = () => {
    emit('switch');
};

async function getPlaygrounds() {
    const user_id = userStore.getUserId();
    const res = await fetch(`http://localhost:3000/playground/getAllUserPlaygrounds/${user_id}`, {
        credentials: 'include'
    });
    if (res.status === 400) {
        showCreatePlaygroundButton.value = true;
    }
    if (res.status === 200) {
        listOfPlaygrounds.value = await res.json();
        showCreatePlaygroundButton.value = false;
    }
}

init();
</script>
