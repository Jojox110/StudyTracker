<template>
  <section class="sm: sm-playground-widget-layout">
    <p class="grid-rows-1">{{ playgroundName }}</p>
    <p class="grid-rows-2">{{ lastModified }}</p>
  </section>
</template>

<script setup lang="ts">
import "./playgrounds_widget.css"

import { defineProps } from "vue";

defineProps<{
    playgroundName: string;
    lastModified: string;
}>();

</script>