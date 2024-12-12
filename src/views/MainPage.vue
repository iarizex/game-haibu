<template>

    <!-- Modal Component -->
    <LandingModal :show="showModal" @close="handleModalClose" />

    <div v-if="!showModal">
        <div class="bg-fondo text-texto h-screen grid overflow-hidden grid-rows-[auto,auto,1fr,auto]">
            <NavBar />
            <GameGenres @get-games="getGames" />
            <GameCards :data="data" />
            <FooterPage />
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterPage from '../components/Footer.vue'
import GameCards from '../components/GameCards.vue'
import GameGenres from '../components/Genres.vue'
import LandingModal from "../components/Landing.vue";

import axios from 'axios';

export default{
  name: "MainPage",
  components: {
    NavBar,
    FooterPage,
    GameCards,
    GameGenres,
    LandingModal,
  },
  data() {
    return {
      data: null,
      showModal: true,
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
	    console.log(response.data);
        this.data = response.data;
        console.log('getGames: ', genre);
      } catch (error) {
	      console.error(error);
      }
    },
  },
  mounted() {
    this.getGames();

    // Verificar si ya se mostró el modal en la sesión actual
    if (!sessionStorage.getItem("landingModalShown")) {
        this.showModal = true;
        sessionStorage.setItem("landingModalShown", "true");
    }
  },

};
</script>