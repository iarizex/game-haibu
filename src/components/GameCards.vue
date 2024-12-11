<template>
    <main class="flex-1 bg-principal h-full p-4">
      <div id="GameCards" class="container grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-screen-xl mx-auto border-acento1 border rounded-lg h-fit shadow-md shadow-sombras1">
        <Games v-for="game in data" :game="game" />
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