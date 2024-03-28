<template>
  <main class="login">
    <button @click="loginClick">button</button>
  </main>
</template>

<style></style>

<script setup>
import {useRouter} from 'vue-router'
let router = useRouter()

const loginClick = () => {
  router.push('signup')
}
</script>