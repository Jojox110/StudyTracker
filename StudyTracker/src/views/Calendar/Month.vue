<template>
    <div class="bg-gray-700 p-3 grid place-items-center">
        <span class="flex items-center space-x-3 select-none text-gray-50">
            <ChevronLeftIcon class="h-5 w-5 text-gray-400 cursor-pointer icon-color-theme" @click="()=>modifyMonth(-1)"/>
            <span class="w-20 text-center">{{computedMonth}}</span>
            <ChevronRightIcon class="h-5 w-5 text-gray-400 cursor-pointer icon-color-theme" @click="()=>modifyMonth(1)"/>
        </span>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs"
import {ref, computed} from "vue"
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/vue/24/outline"

const monthEmit = defineEmits<{(e: "selected", v: number):void}>()

const month = ref<number>(dayjs().month())
const computedMonth = computed(()=>dayjs().month(month.value).format("MMMM"))

function modifyMonth(v: number) {
    if (v == 1 && (month.value + 1) == 12) {
        month.value = 0
    }
    else if (v == -1 && (month.value + 1) == 1) {
        month.value = 11
    }
    else {
        month.value += v
    }
    monthEmit("selected", month.value)
}
</script>
