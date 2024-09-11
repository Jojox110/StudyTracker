<template>
    <PlaygroundTemplate v-show="currentComponent === 'playground'" @switch="switchComponent" />
    <MenuTemplate v-show="currentComponent === 'menu'" @switch="switchComponent" />
</template>

<script setup lang="ts">
import PlaygroundTemplate from '@/views/Playgrounds/PlaygroundTemplate.vue';
import MenuTemplate from '@/views/Menu/MenuTemplate.vue';

import { ref } from 'vue';

const currentComponent = ref('playground');

const switchComponent = () => {
    currentComponent.value = currentComponent.value === 'playground' ? 'menu' : 'playground';
};
</script>
