<template>
  <main>
    <div class="grid">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
    </div>
  </main>
</template>

<script>
export default {
  name: "get-request-set-headers",
  data() {
    return {
      totalVuePackages: null
    };
  },
  created() {
    // GET request using fetch with set headers
    const headers = { "Content-Type": "application/json" };
    fetch("https://api.npms.io/v2/search?q=vue", { headers })
      .then(response => response.json())
      .then(data => (console.log(data)));
  }
};
</script>

<style>
@import 'styles/test.css';
</style>