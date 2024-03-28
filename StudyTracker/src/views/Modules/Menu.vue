<template>
    <button class="menu-btn" @click="toggleMenuVisibility">
        Menu
    </button>
    <div class="menu" v-if="menuVisible">
        <router-view />
        <button class="menu-items">
            <RouterLink to="/">Playground</RouterLink>
        </button>
        <button class="menu-items">
            <RouterLink to="/dashboard">Dashboard</RouterLink>
        </button>
        <button class="menu-items">
            <RouterLink to="/calendar">Calendar</RouterLink>
        </button>
        <button class="menu-items">Todo List</button>
        <button class="menu-items">Statistics</button>
        <button class="menu-items">
            <RouterLink to="/grades">Grades</RouterLink>
        </button>
        <button class="menu-items">Study Methods</button>
        <button class="menu-items">Daily Review</button>
    </div>
</template>
<script>
import { RouterLink, useRoute, useRouter } from 'vue-router'
let route
let router

export default {
    setup() {
        route = useRoute()
        router = useRouter()
    },

    data() {
        return {
            a: null, // Initialize a with null
            menuVisible: false
        };
    },
    async created() {
        // router.push('/dashboard')
        console.log("here")
        // GET request using fetch with set headers
        const headers = { "Content-Type": "application/json" };
        await fetch("http://localhost:3000/", { headers })
            .then(response => response.json())
            .then(data => this.a = data.message);
    },

    methods: {
        toggleMenuVisibility() {
            this.menuVisible = !this.menuVisible;
        }
    }
};
</script>

<style>
.menu {
    grid-row: 2 / 4;
    grid-column: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    background-color: white;
}

.menu-btn {
    grid-column: 1;
    grid-row: 1;
}

.menu-items {
    border: 0;
    background-color: white;
}
</style>
