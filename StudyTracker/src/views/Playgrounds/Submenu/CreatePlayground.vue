<template>
    <section class="sm: sm-create-playground-layout">
        <p class="sm: sm-create-playground-label">Enter the name of your new playground</p>
        <input
            v-model="playgroundName"
            class="input-color-theme sm: sm-create-playground-input"
            placeholder="Enter the name here"
        />
        <button
            class="button-color-theme sm: sm-create-playground-submit-button"
            @click="
                async () => {
                    await createPlayground();
                    sendPlaygroundInfoToParent();
                }
            "
        >
            Submit
        </button>
    </section>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import type { Ref } from 'vue';
import '@/views/Playgrounds/Submenu/createPlayground.css';
import { useUserStore } from '@/stores/user.store';
const playgroundName: Ref<string> = ref('');
import { isUserAuthenticated } from '@/utils/auth.utils';
import { navigateToLandingPage } from '@/router/index.router';

const userStore = useUserStore();
const emit = defineEmits(['newPlayground']);

async function init() {
    if (!(await isUserAuthenticated())) {
        alert('You are not authenticated. Please login or signup');
        navigateToLandingPage();
        return;
    }

    userStore.fetchUserInfo();
}

function sendPlaygroundInfoToParent() {
    emit('newPlayground');
}

async function createPlayground() {
    console.log('checkpoint three');
    const userID: string | null = userStore.getUserId();
    if (userID == null) {
        console.log("no user id is in localStorage. This shouldn't happen");
        return;
    }
    const response = await fetch('http://localhost:3000/playground/createPlayground', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            createdBy: userID,
            playgroundName: playgroundName.value
        }),
        credentials: 'include'
    });
    if (response.status == 201) {
        // It doesn't work without this
        // It won't automatically add the new playground to the UI without refreshing the page otherwise
        // I guess it needs the status to be accounted for for some reason?
        console.log('');
    } else if (response.status == 400) {
        alert('You already have a playground with that name');
    }
}

init();
</script>
