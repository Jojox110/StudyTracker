<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <main>
        <!--This handles the general routing. The TS code behind the routing is in router/index.router.ts-->
        <RouterView />
    </main>
</template>

<style scoped></style>
