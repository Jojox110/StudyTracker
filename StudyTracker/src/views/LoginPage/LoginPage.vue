<template>
    <form @submit.prevent="handleSubmit" class="sm: sm-login-page-layout">
        <p class="sm: sm-login-page-title">Login</p>
        <input
            v-model="email"
            type="email"
            class="input-color-theme sm: sm-login-page-email"
            placeholder="Enter your email here"
        />
        <input
            v-model="password"
            type="password"
            class="input-color-theme sm: sm-login-page-password"
            placeholder="Enter your password"
        />
        <button class="button-color-theme sm: sm-login-page-login-button">Login</button>
    </form>
</template>

<script setup lang="ts">
import './loginPage.css';
import { ref } from 'vue';
import { navigateToPlaygrounds } from '@/router/index.router';
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();
const userId = userStore.getUserId();

let email = ref('');
let password = ref('');

const handleSubmit = async (): Promise<void> => {
    if (!email.value || !password.value) {
        alert('Please fill out all the fields');
        return;
    }
    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
        credentials: 'include'
    });

    if (response.status == 401) {
        alert('Error in authentication');
        return;
    }

    const user_response = await fetch(`http://localhost:3000/user/userInfo/${userId}`, {
        credentials: 'include'
    });

    if (user_response.status == 401) {
        alert('You are not authenticated');
        return;
    }

    if (user_response.status == 400) {
        alert('A user with that email was not found');
        return;
    }

    let user = await user_response.json();
    user = user['user'];
    userStore.setUserId(user.user_id);

    navigateToPlaygrounds();
};
</script>
