<template>
    <div class="flex flex-col md:flex-row text-texto gap-4 rounded-lg p-4 [background:linear-gradient(45deg,theme(colors.secundario),theme(colors.secundario)_50%,theme(colors.secundario))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.acento1/.48)_80%,theme(colors.acento2)_86%,theme(colors.acento2)_90%,theme(colors.acento2)_94%,theme(colors.acento1/.48))_border-box] border-2 border-transparent animate-border"
    :style="{ animationDelay: `${(index % 5) * 0.5}s` }">
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
      game: Object,
      index: Number,
    },
  };
  </script>

  <!--<div class="gamecard bg-secundario text-texto p-4 rounded-lg flex flex-col md:flex-row gap-4">-->