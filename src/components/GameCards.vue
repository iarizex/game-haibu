<template>
    <main class="flex-1 bg-principal h-full p-4">
      <div id="GameCards" class="container grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-screen-xl mx-auto border-acento1 border rounded-lg h-fit shadow-md shadow-sombras1">
        <Games v-for="(game, index) in games" :key="index" :game="game" />
      </div>
    </main>
  </template>

<script>
    import Games from './Games.vue'

    export default {
        name: "GameCards",
        data() {
            return {
            games: [
                { title: 'Game 1', description: 'Description 1', thumbnail: '...' },
                { title: 'Game 2', description: 'Description 2', thumbnail: '...' },
                { title: 'Game 3', description: 'Description 3', thumbnail: '...' },
                { title: 'Game 4', description: 'Description 4', thumbnail: '...' },
                { title: 'Game 5', description: 'Description 5', thumbnail: '...' },
                { title: 'Game 6', description: 'Description 6', thumbnail: '...' },
                { title: 'Game 7', description: 'Description 7', thumbnail: '...' },
                { title: 'Game 8', description: 'Description 8', thumbnail: '...' },
                { title: 'Game 9', description: 'Description 9', thumbnail: '...' },
                { title: 'Game 10', description: 'Description 10', thumbnail: '...' },
                { title: 'Game 11', description: 'Description 11', thumbnail: '...' },
                { title: 'Game 12', description: 'Description 12', thumbnail: '...' },
            ],
            };
        },
        components: {
            Games,
        },
    };
</script>