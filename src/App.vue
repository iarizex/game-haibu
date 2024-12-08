<script setup>
import LandingPage from './views/LandingPage.vue'
import MainPage from './views/MainPage.vue'
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <body class="bg-fondo">
    <MainPage />
  </body>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>