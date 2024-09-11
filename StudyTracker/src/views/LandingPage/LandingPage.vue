<template>
    <section class="sm: sm-landing-page-layout">
        <p class="sm: sm-landing-page-welcome">Welcome to StudyTracker!</p>
        <button class="sm-landing-page-login" @click="navigateToLogin">Login</button>
        <button class="sm: sm-landing-page-signup" @click="navigateToSignUp">Sign up</button>
    </section>
</template>

<script setup lang="ts">
import './landingPage.css';
import { navigateToSignUp, navigateToLogin } from '@/router/index.router';
</script>
