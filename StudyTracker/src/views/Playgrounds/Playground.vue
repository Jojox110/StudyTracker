<template>
  <section class="grid h-full w-full sm: sm-playgrounds-layout">
    <!-- Header -->
    <section class="grid h-full w-full sm: sm-playgrounds-header">
      <button class="sm: sm-playgrounds-header-close-button">
        <!--        <img :src="x" alt="menu button">-->
        <Bars3Icon alt="menu button" class="icon-color-theme" />
      </button>
      <p class="sm: sm-playgrounds-header-title">Playgrounds</p>
    </section>

    <!-- List of playgrounds  -->
    <section class="sm-playgrounds-widget">
      <div
          v-for="(item, index) in listOfPlaygrounds"
          :key="index">
          <Playground_widget :playground-name="item.playground_name" :last-modified="formatDate(item.updated_at)" />
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import {type Ref, ref} from 'vue'

import './playgrounds.css'
import Playground_widget from '@/views/Playgrounds/PlaygroundWidget.vue'

import { Bars3Icon } from '@heroicons/vue/24/solid'

interface Playground {
    created_by: number;
    playground_id: number;
    playground_name: string;
    created_at: string;
    updated_at: string;
}

const listOfPlaygrounds: Ref<Playground[]> = ref([])

async function getPlaygrounds() {
    const res = await fetch('http://localhost:3000/playground/1')
    listOfPlaygrounds.value = await res.json()
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-CA'); // en-CA format gives yyyy-mm-dd
}

getPlaygrounds()
</script>