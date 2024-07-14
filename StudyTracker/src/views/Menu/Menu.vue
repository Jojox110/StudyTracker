<template>
  <section class="grid h-full w-full sm: grid-cols-1 sm: grid-rows-9">
    <!-- First layer with the X and the menu header -->
    <section class="grid h-full w-full sm: sm-menu-header-container">
      <button class="sm: sm-menu-header-close-button">
        <img :src="closeButtonImage" alt="close button" />
      </button>
      <p class="sm: sm-menu-header-title">Menu</p>
    </section>

    <!-- User layer -->
    <section class="grid h-full w-full sm: sm-menu-user-container">
      <div class="sm: sm-menu-user-icon"></div>
      <div class="sm: sm-menu-user-info-container">
        <div class="font-bold w-full sm: text-xl">Welcome back username</div>
        <div class="sm: sm-menu-user-options">
          <button class="">View profile</button>
          <button class="">Edit profile</button>
          <button class="">Sign out</button>
        </div>
      </div>
    </section>

    <!-- Routers -->
    <section
      class="grid h-full w-full p-8 sm: grid-cols-1 sm: grid-rows-8 sm: row-start-4 sm: row-span-6 sm: col-start-1 sm: col-span-1"
    >
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="sm-menu-item-container sm:row-start-index-{{index}} sm:row-span-1"
      >
        <img class="sm: sm-menu-item-icon" :src="menuItemImage" alt="item" />
        <div class="sm: sm-menu-item">{{ item }}</div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import './menu.css'
import { useIconBasedOffColorScheme } from "../../utils/themeUtils"

import { ref, watchEffect } from '@vue/runtime-core'
import close_btn_black from '@/assets/images/close-btn-black.png'
import close_btn_white from '@/assets/images/close-btn-white.png'
import menu_item_black from '@/assets/images/item-black.png'
import menu_item_white from '@/assets/images/item-white.png'

console.log("asadfasdffdfasd")
console.log(typeof(close_btn_black))

let menuItems = ref([
  'Playgrounds',
  'Dashboard',
  'Classes',
  'Calendar',
  'To-Do List',
  'Statistics',
  'Methods',
  'Daily Review'
])

let closeButtonImage = useIconBasedOffColorScheme({
    white_mode_icon_path: close_btn_white,
    black_mode_icon_path: close_btn_black,
})

let menuItemImage = useIconBasedOffColorScheme({
    white_mode_icon_path: menu_item_white,
    black_mode_icon_path: menu_item_black,
})

// const prefersDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
//
// console.log("prefersDark: " + prefersDark.value)
// const closeButtonImage = ref(prefersDark.value ? close_btn_white : close_btn_black)
// const menuItemImage = ref(prefersDark.value ? menu_item_white : menu_item_black)
//
// console.log(closeButtonImage.value)
// console.log(menuItemImage.value)
//
// function updateImageSource() {
//   closeButtonImage.value = prefersDark.value ? close_btn_white : close_btn_black
//   menuItemImage.value = prefersDark.value ? menu_item_white : menu_item_black
// }
//
// watchEffect(() => {
//   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
//   mediaQuery.addEventListener('change', (e) => {
//     prefersDark.value = e.matches
//     updateImageSource()
//   })
//
//   // Cleanup function to remove event listener when the component unmounts
//   return () => {
//     mediaQuery.removeEventListener('change', updateImageSource)
//   }
// })
</script>