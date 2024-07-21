<template>
  <section class="sm: sm-playground-widget-layout">
    <p class="grid-rows-1">Playground name: {{ playgroundName }}</p>
    <p class="grid-rows-2">Last modified: {{ lastModified }}</p>
  </section>
</template>

<script setup lang="ts">
import "./playgroundsWidget.css"

import { defineProps } from "vue";

defineProps<{
    playgroundName: string;
    lastModified: string;
}>();

</script>