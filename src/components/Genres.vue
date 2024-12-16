<template>
  <div id="Genres" class="bg-principal  genres">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto border-acento1 border rounded-lg shadow-md shadow-sombras1">
      <div class="text-acento2 text-center font-bold mb-1 w-full p-1 text-lg md:text-xl lg:text-2xl">
        CHOOSE GENERE:
      </div>
      <div class="flex flex-wrap justify-center gap-1 w-full">
        <button 
          v-for="(genre,index) in ['allf2p','mmorpg', 'first-person', 'third-Person', 'shooter', 'sports', 'action-rpg']"
          :key="genre"
          @click="$emit('get-games', genre)"
          v-bind:class="{'bg-acento1': genre==sessionStore.getFilter,  'bg-transparent': genre!=sessionStore.getFilter}"
          class=" hover:bg-acento1 transition-all mb-2">
          <img 
          :src="btnImages[index]" 
          class="w-44"
          :alt="`${genre} button image`">
        </button>
      </div>
      <div class="bg-secundario p-1 rounded text-xs md:text-sm lg:text-base text-texto w-full text-center">
        Home \ Main Page
      </div>
    </div>
  </div>
</template>

<script>
import {useSessionStore} from "../stores/session";
import {mapStores} from "pinia";

export default {
  data(){
    return{
      btnImages:[
        "/buttons/all_f2p.png",
        "/buttons/mmorpg.png",
        "/buttons/first_person.png",
        "/buttons/third_Person.png",
        "/buttons/shooter.png",
        "/buttons/sports.png",
        "/buttons/actionrpg.png",
      ],
    }
  },

  computed: {
    ...mapStores(useSessionStore)  //un objeto sessionStore donde tiene todo lo del store
  },

}

</script>