<template>
    <main class="bg-principal px-4 py-2 md:py-4">
      <div id="GameCards" class="gamecards grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-screen-xl mx-auto border-acento1 border rounded-lg shadow-md shadow-sombras1  overflow-y-auto 
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-sombras1
      [&::-webkit-scrollbar-thumb]:bg-acento1
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-track]:rounded-full min-h-96">
      <Games v-for="(game, index) in data" :key="game.id" :game="game" :index="index" />
      </div>
    </main>
  </template>

<script>
  import { onMounted, onUnmounted } from 'vue';
  import Games from './Games.vue'
  import { RouterLink } from "vue-router";


  export default {
    props: {
      data: {
        required: true,
      },
    },
    name: "GameCards",
    components: {
      Games,
    },
    setup() {
      function adjustGamesLayout() {
        const navbar = document.querySelector('nav');
        const genres = document.querySelector('.genres');
        const footer = document.querySelector('footer');
        const games = document.querySelector('.gamecards');
        if (navbar && genres && footer && games) {
          const availableHeight = window.innerHeight - (navbar.offsetHeight + genres.offsetHeight + footer.offsetHeight + 30);
          games.style.height = `${availableHeight}px`;
        }
      }

      onMounted(() => {
        adjustGamesLayout();
        window.addEventListener('resize', adjustGamesLayout);
      });

      onUnmounted(() => {
        window.removeEventListener('resize', adjustGamesLayout);
      });
    },
  };
</script>

<style scoped>
#app{
  background-color: blue !important;
}
</style>