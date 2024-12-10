<template>
  <div class="bg-secundario text-texto p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4  shadow-sombras2">
    <div class="flex-1">
      <RouterLink :to="{
        name: 'game',
        params: { id: game.id }
      }">
      <h2 class="font-bold text-lg mb-2">{{ game.title }}</h2>
      <p class="text-sm">{{ game.short_description }}</p>
      </RouterLink>
    </div>
    <div class="flex-shrink-1 md:w-48 h-auto">
      <RouterLink :to="{
        name: 'game',
        params: { id: game.id }
      }">
      <img :src="game.thumbnail" alt="Thumbnail" class="w-full h-auto rounded" />
      </RouterLink>
    </div>
  </div>
</template>  
  <script>
  import { RouterLink } from "vue-router";

  export default {
    props: {
      game: {
        type: Object,
        required: true,
      },
    },
  };
  </script>