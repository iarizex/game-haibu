<script setup>
import LandingPage from './views/LandingPage.vue'
import MainPage from './views/MainPage.vue'
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <MainPage />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');
body{
  font-family: 'Exo 2', sans-serif;
  background-color: #f0f0f0;
}

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