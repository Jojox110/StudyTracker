<template>
  <main>
    <div v-if="a">{{ a }}</div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      a: null // Initialize a with null
    };
  },
  async created() {
    // GET request using fetch with set headers
    const headers = { "Content-Type": "application/json" };
    await fetch("http://localhost:3000/", { headers })
      .then(response => response.json())
      .then(data => this.a = data.message);
  }
};
</script>
