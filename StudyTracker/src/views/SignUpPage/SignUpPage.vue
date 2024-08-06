<template>
    <form @submit.prevent="handleSubmit" class="sm: sm-signup-page-layout">
        <p class="sm: sm-signup-page-title">Sign Up</p>
        <input
            v-model="first_name"
            type="text"
            class="input-color-theme sm: sm-signup-page-first-name"
            placeholder="Enter your first name"
        />
        <input
            v-model="last_name"
            type="text"
            class="input-color-theme sm: sm-signup-page-last-name"
            placeholder="Enter your last name"
        />
        <input
            v-model="email"
            type="email"
            class="input-color-theme sm: sm-signup-page-email"
            placeholder="Enter your email"
        />
        <input
            v-model="password"
            type="password"
            class="input-color-theme sm: sm-signup-page-password"
            placeholder="Enter your password"
        />
        <input
            v-model="confirmPassword"
            type="password"
            class="input-color-theme sm: sm-signup-page-confirm-password"
            placeholder="Confirm your password"
        />
        <button class="button-color-theme sm: sm-signup-page-signup-button">Sign up</button>
    </form>
</template>

<script setup lang="ts">
import './signUpPage.css';
import { ref } from 'vue';

// TODO Implement password confirmation with password and confirmPassword

let first_name = ref('');
let last_name = ref('');
let email = ref('');
let password = ref('');
let confirmPassword = ref('');

const handleSubmit = async (): Promise<void> => {
    if (
        !first_name.value ||
        !last_name.value ||
        !email.value ||
        !password.value ||
        !confirmPassword.value
    ) {
        alert('Please fill out all the fields');
        return;
    }

    if (password.value != confirmPassword.value) {
        alert('The password and password confirmation do not match');
        return;
    }

    const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            password: password.value
        }),
        credentials: 'include'
    });

    if (response.status == 201) {
        console.log('Signup successful');
    } else if (response.status == 500) {
        console.log('Signup unsuccessful');
    }

    // const isEmailInUse = await fetch(`http://localhost:3000/signup/isEmailInUse/${email.value}`);
    // const isEmailInUseJSON = await isEmailInUse.json();
    // if (isEmailInUseJSON) {
    //     alert('This email is already in use');
    //     return;
    // }
    //
    // const response = await fetch('http://localhost:3000/signup/createUser', {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         email: email.value,
    //         first_name: first_name.value,
    //         last_name: last_name.value,
    //         password: password.value
    //     })
    // });
    // console.log('HERE');
    // if (response.status === 400) {
    //     alert('There is an error in the provided data; bad request');
    // } else if (response.status === 500) {
    //     alert('There was an internal server error');
    // }
};
</script>
