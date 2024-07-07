<template>
  <section class="grid h-full w-full sm: grid-cols-1 sm: grid-rows-9">
    <!-- Header -->
    <section class="grid h-full w-full sm: sm-playgrounds-header bg-red-900">
      <button class="sm: sm-playgrounds-header-close-button">
        <img src="../../assets/images/close-btn-white.png" alt="menu button">
      </button>
      <p class="sm: sm-playgrounds-header-title">Playgrounds</p>
    </section>

    <!-- List of playgrounds  -->
    <section class="sm-playgrounds-widget">
      <Playground_widget />
    </section>
  </section>
</template>

<script setup lang="ts">
import "./playgrounds.css"
import Playground_widget from "@/views/Playgrounds/Playground_widget.vue";

</script>