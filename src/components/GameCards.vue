<template>
    <main class="bg-principal p-4">
      <div id="GameCards" class=" flex-1 container grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-screen-xl mx-auto border-acento1 border rounded-lg shadow-md shadow-sombras1  overflow-y-auto max-h-[44vh]
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-sombras1
      [&::-webkit-scrollbar-thumb]:bg-acento1
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-track]:rounded-full">
      <Games v-for="(game, index) in data" :key="game.id" :game="game" :index="index" />
      </div>
    </main>
  </template>

<script>
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
};
</script>