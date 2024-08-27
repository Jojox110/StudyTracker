<template>
    <div class="flex space-x-5" v-bind="$attrs">
        <div class="flex flex-col flex-grown">
            <Year @selected="changeYear"/>
            <Month @selected="changeMonth"/>
            <Dates :selectedValues="selectedValues" :selectedDate="selectedDateValue" @selected="changeDate"/>
        </div>
        <div class="w-1/4">
            <span v-if="selectedDateValue">
                You have selected <br>
                {{`${selectedDateValue}-${selectedValues.month + 1}-${selectedValues.year}`}}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue"
import Year from "./Year.vue"
import Month from "./Month.vue"
import Dates from "./Dates.vue"
import dayjs from "dayjs"

const selectedDateValue = ref<number | null>(dayjs().date())

const selectedValues = reactive({
    month: dayjs().month(),
    year: dayjs().year()
})

function changeYear(v: number) {
    selectedDateValue.value = null
    selectedValues.year = v
}

function changeMonth(v: number) {
    selectedDateValue.value = null
    selectedValues.month = v
}

function changeDate(v: number) {
    selectedDateValue.value = v
}
</script>
