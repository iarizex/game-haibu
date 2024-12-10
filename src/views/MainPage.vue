<template>
    <div class="bg-fondo text-texto min-h-screen flex flex-col">
        <NavBar />
        <GameGenres @get-games="getGames" />
        <GameCards />
        <FooterPage />
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterPage from '../components/Footer.vue'
import GameCards from '../components/GameCards.vue'
import GameGenres from '../components/Genres.vue'

import { RouterLink } from "vue-router";
import axios from 'axios';

export default{
  name: "Main",
  components: {
    NavBar,
    FooterPage,
    GameCards,
    GameGenres
  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async getGames(evt, genre) {
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
  },

};
</script>