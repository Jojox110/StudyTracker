import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginStore = defineStore('login', () => {
    let isLoggedIn = ref(false)
    let password = ref("")
    let email = ref("")
    function changeLoginStatus() {
        isLoggedIn.value = !isLoggedIn.value
        console.log(isLoggedIn.value)
    }

    return {
        isLoggedIn,
        changeLoginStatus,
        email,
        password
    }
})