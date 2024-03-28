<script setup lang="ts">
// @ts-ignore
import Menu from "@/views/Modules/Menu.vue";
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
    <div class="grid">
      <Menu class="menu" />
      <Login class="login" />
       <button @click="store.changeLoginStatus">testing</button>
    </div>
  </main>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: 0.75fr 10fr 0.5fr;
  grid-template-rows: 1.5fr 1fr 10fr;
}
</style>