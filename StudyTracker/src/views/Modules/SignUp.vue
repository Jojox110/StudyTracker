<template>
    <main>
        <p>Enter email:</p>
        <textarea @input="modifyEmail($event.target.value)"></textarea>
        <p>Enter password:</p>
        <textarea @input="modifyPwd($event.target.value)"> </textarea>
        <button @click="onClick">Submit</button>
    </main>
</template>

<script setup>
import { useLoginStore } from "@/stores/login";
let store = useLoginStore()

function onClick() {
    console.log(store.email)
    console.log(store.password)
}

function modifyEmail(email){
    store.email = email
}

function modifyPwd(pwd) {
    store.password = pwd
}
</script>