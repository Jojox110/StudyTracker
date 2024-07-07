<script setup lang="ts">
// @ts-ignore
import Menu from "@/views/Menu/Menu.vue";
// @ts-ignore
import Login from "@/views/Modules/Login.vue";
import Dashboard from "@/views/Modules/Dashboard.vue";
// @ts-ignore
import { useLoginStore } from "@/stores/login";

const store = useLoginStore()
store.changeLoginStatus()
</script>

<template>
  <main>
    <section class="text-xl text-purple-500 grid h-full w-full justify-center items-center"> Testing testing testing </section>
  </main>
</template>
