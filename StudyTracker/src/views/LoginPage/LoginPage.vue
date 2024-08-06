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
import { useUserStore, areUserStateMembersFilled } from '@/stores/login.store';
import type { user } from '@/stores/login.store';
import { ref } from 'vue';
import { navigateToPlaygrounds } from '@/router/index.router';

let email = ref('');
let password = ref('');

// const userStore = useUserStore();

const handleSubmit = async (): Promise<void> => {
    if (!email.value || !password.value) {
        alert('Please fill out all the fields');
        return;
    }
    console.log(email.value);
    console.log(password.value);
    const response = await fetch('http://localhost:3000/login', {
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
        console.log('Error in authentication');
    }
    if (response.status == 200) {
        console.log('authentication success');
    }
    //
    // if (response.ok) {
    //     console.log('HERE');
    //     const user = await response.json();
    //     console.log(user);
    //     // userStore.setUserInfo(user);
    // }

    // let user = await fetch(`http://localhost:3000/login/userInfo/${email.value}`);
    // user = await user.json();
    //
    // userStore.setUserInfo(user);
    // console.log('userStore.printUserInfo');
    // userStore.printUserInfo();
    //
    // email.value = '';
    // password.value = '';
    //
    // navigateToPlaygrounds();
};
</script>
