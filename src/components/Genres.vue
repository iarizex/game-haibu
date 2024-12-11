<template>
  <div id="Genres" class="bg-principal p-4">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto border-acento1 border rounded-lg shadow-md shadow-sombras1">
      <div class="text-acento1 text-center font-bold mb-2 w-full p-4 text-lg md:text-xl lg:text-2xl">
        GÉNEROS
      </div>
      <div class="flex flex-wrap justify-center gap-4 p-4 w-full">
        <button 
          v-for="genre in ['mmorpg', 'first-person', 'third-person', 'shooter', 'sports', 'action-rpg']"
          :key="genre"
          @click="$emit('get-games', $event, genre)"
          class="border-2 p-2 rounded-md text-sm md:text-base lg:text-lg hover:bg-acento1 hover:text-white transition-all">
          {{ genre }}
        </button>
      </div>
      <div class="bg-secundario p-2 rounded text-xs md:text-sm lg:text-base text-texto w-full text-center">
        Home \ Main Page
      </div>
    </div>
  </div>
</template>