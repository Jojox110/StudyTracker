<template>
    <button id="menu-btn" @click="toggleMenuVisibility">
        Menu Menu
    </button>
    <div id="menu" v-if="menuVisible">
        <router-view />
        <button id="menu-items">
            <RouterLink to="/">Playground</RouterLink>
        </button>
        <button id="menu-items">
            <RouterLink to="/dashboard">Dashboard</RouterLink>
        </button>
        <button id="menu-items">
            <RouterLink to="/calendar">Calendar</RouterLink>
        </button>
        <button id="menu-items">Todo List</button>
        <button id="menu-items">Statistics</button>
        <button id="menu-items">
            <RouterLink to="/grades">Grades</RouterLink>
        </button>
        <button id="menu-items">Study Methods</button>
        <button id="menu-items">Daily Review</button>
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

<style scoped>
#menu {
}

#menu {
    grid-column: 1;
    grid-row: 2;

    background-color: white;
    color: black;
    display: grid;
    height: 100%;
    width: 100%;
    z-index: 2;

    justify-content: space-evenly;
    text-align: center;
    flex-direction: column;
}

#menu-items {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: white;
    color: black;
    border: 0;
    align-items: center;
    justify-content: center;
}

#profile {
    grid-area: profile;
    background-color: green;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

#homepage {
    grid-area: homepage;
    background-color: red;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
</style>
