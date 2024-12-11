<template>
  <div id="Genres" class="bg-principal p-4">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto border-acento1 border rounded-lg shadow-md shadow-sombras1">
      <div class="text-acento1 text-center font-bold mb-2 w-full p-4">GÉNEROS</div>
      <div class="flex items-center">
        <button @click="$emit('get-games', $event, 'mmorpg')" class="border-2 p-1 m-4">mmorpg</button>
        <button @click="$emit('get-games', $event, 'first-person')" class="border-2 p-1 m-4">first-person</button>
        <button @click="$emit('get-games', $event, 'third-Person')" class="border-2 p-1 m-4">third-person</button>
        <button @click="$emit('get-games', $event, 'shooter')" class="border-2 p-1 m-4">shooter</button>
        <button @click="$emit('get-games', $event, 'sports')" class="border-2 p-1 m-4">sports</button>
        <button @click="$emit('get-games', $event, 'action-rpg')" class="border-2 p-1 m-4">action-rpg</button>
      </div>
      <div class="bg-secundario p-2 rounded text-sm text-texto w-full">Home \ Main Page</div>
    </div>
  </div>
</template>