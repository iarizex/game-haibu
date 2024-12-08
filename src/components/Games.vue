<template>
  <div class="bg-secundario text-texto p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
    <div class="flex-1">
      <h2 class="font-bold text-lg mb-2">{{ game.title }}</h2>
      <p class="text-sm">{{ game.description }}</p>
    </div>
    <div class="flex-shrink-0 md:w-48 md:h-auto">
      <img :src="game.thumbnail" alt="Thumbnail" class="w-full h-auto rounded" />
    </div>
  </div>
</template>  
  <script>
  export default {
    props: {
      game: {
        type: Object,
        required: true,
      },
    },
  };
  </script>