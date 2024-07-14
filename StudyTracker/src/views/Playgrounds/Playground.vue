<template>
  <section class="grid h-full w-full sm: sm-playgrounds-layout">
    <!-- Header -->
    <section class="grid h-full w-full sm: sm-playgrounds-header">
      <button class="sm: sm-playgrounds-header-close-button">
<!--        <img :src="x" alt="menu button">-->
          <ChevronRightIcon alt="menu button" class="icon-color-theme"/>
      </button>
      <p class="sm: sm-playgrounds-header-title">Playgrounds</p>
    </section>

    <!-- List of playgrounds  -->
    <section class="sm-playgrounds-widget">
      <Playground_widget playground-name="one" last-modified="today"/>
      <Playground_widget playground-name="two" last-modified="today"/>
      <Playground_widget playground-name="three" last-modified="today"/>
      <Playground_widget playground-name="four" last-modified="today"/>
      <Playground_widget playground-name="five" last-modified="today"/>
      <Playground_widget playground-name="six" last-modified="today"/>
    </section>
  </section>
</template>

<script setup lang="ts">
import "./playgrounds.css"
import Playground_widget from "@/views/Playgrounds/Playground_widget.vue";

import { useIconBasedOffColorScheme } from "@/utils/themeUtils";

import menu_icon_white from "../../assets/images/menu-icon-white.png"
import menu_icon_black from "../../assets/images/menu-icon-black.png"

import { ChevronRightIcon } from '@heroicons/vue/24/solid'

let menuIcon = useIconBasedOffColorScheme({
    white_mode_icon_path: menu_icon_white,
    black_mode_icon_path: menu_icon_black,
})

</script>