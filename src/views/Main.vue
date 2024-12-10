<template>

  <!-- Modal Component -->
  <LandingModal :show="showModal" @close="handleModalClose"/>

  <div v-if="!showModal">
    <h1>Main page</h1>

    <button @click="openModal">Abrir Modal</button>

    <div class="flex items-center">
    <button @click="getGames('mmorpg')" class="border-2 p-1 m-4">mmorpg</button>
    <button @click="getGames('first-person')" class="border-2 p-1 m-4">first-person</button>
    <button @click="getGames('third-Person')" class="border-2 p-1 m-4">third-person</button>
    <button @click="getGames('shooter')" class="border-2 p-1 m-4">shooter</button>
    <button @click="getGames('sports')" class="border-2 p-1 m-4">sports</button>
    <button @click="getGames('action-rpg')" class="border-2 p-1 m-4">action-rpg</button>
  </div>

  <div v-if="this.data">
    <ul class="grid grid-cols-4 gap-3 justify-items-center">
      <li v-for="game in this.data" class="border-2 p-1 w-[300px] text-center">
        {{ game.title }}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { RouterLink } from "vue-router";
import axios from 'axios';
import LandingModal from "../components/Landing.vue";

export default {
name: "Main",
components: { LandingModal },
data() {
  return {
    showModal: true,
    data: null,
    //genre: '',
    //platform: '',
  };
},
methods: {

  openModal() {
      this.showModal = true;
    },
    handleModalClose() {
      this.showModal = false;
    },

  async getGames(genre) {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      // params: {
      //   tag: '',
      //   platform: ''
      // },
      headers: {
        'x-rapidapi-key': 'f8228c328cmshc0a5e4c50c5d49fp138794jsne537ce0d3d0f',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
      };

    if (genre) {
      options.url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter';
      const params = {tag: genre};
      options.params = params;
    }

    try {
      const response = await axios.request(options);
      //console.log(response.data);
      this.data = response.data;
      console.log('getGames: ', genre);
    } catch (error) {
      console.error(error);
    }
  },
},
mounted() {
  this.getGames();
  //console.log('Mounted:', genre);

  // Verificar si ya se mostró el modal en la sesión actual
  if (!sessionStorage.getItem("landingModalShown")) {
    this.showModal = true;
    sessionStorage.setItem("landingModalShown", "true");
  }
},
};
</script>
