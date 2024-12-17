<template>

    <!-- Modal Component -->
    <LandingModal :show="!sessionStore.getLandingModalShown" @close="handleLandingModalClose" @open="togglecredits" />
    <Credits :show="creditsShow" @close="togglecredits" @open="togglecredits" />

    <div v-if="sessionStore.getLandingModalShown">
        <div class="bg-fondo text-texto h-screen grid overflow-hidden grid-rows-[auto,auto,1fr,auto]">
            <NavBar @open="togglecredits" />
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
import LandingModal from "../components/Landing.vue"
import Credits from "../components/Credits.vue";

import { onMounted, onUnmounted } from 'vue';

import axios from 'axios';

import {useSessionStore} from "../stores/session";
import {mapStores} from "pinia";

export default{
  name: "MainPage",
  components: {
    NavBar,
    FooterPage,
    GameCards,
    GameGenres,
    LandingModal,
    Credits,
  },
  data() {
    return {
      data: null,
      creditsShow: false,
    };
  },
  computed: {
    ...mapStores(useSessionStore)  //un objeto sessionStore donde tiene todo lo del store
  },
  methods: {
    togglecredits() {
      this.creditsShow=!this.creditsShow;

    },

    async getGames(genre) {

      this.sessionStore.setFilter(genre);

      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
          'x-rapidapi-key': 'f8228c328cmshc0a5e4c50c5d49fp138794jsne537ce0d3d0f',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

      if (this.sessionStore.getFilter) {
        options.url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter';
        const params = {tag: genre};
        options.params = params;
      };

      try {
	    const response = await axios.request(options);
	    console.log(response.data);
        this.data = response.data;
      } catch (error) {
	      console.error(error);
      };
    },
    handleLandingModalClose() {
      this.sessionStore.switchLandingModalShown();
      setTimeout(() => {
        this.adjustGamesLayout();
      }, 3000);
    },

    adjustGamesLayout() {
      const navbar = document.querySelector('nav');
      const genres = document.querySelector('.genres');
      const footer = document.querySelector('footer');
      const games = document.querySelector('.gamecards');
      if (navbar && genres && footer && games) {
        const availableHeight = window.innerHeight - (navbar.offsetHeight + genres.offsetHeight + footer.offsetHeight + 30);
        games.style.height = `${availableHeight}px`;
      }
    },
  },
  mounted() {
    this.getGames(this.sessionStore.getFilter);
    setTimeout(() => {
      this.adjustGamesLayout();
    }, 1000);
  },
  updated() {
    // Wait for the DOM to be updated before adjusting the layout
    this.$nextTick(() => {
      this.adjustGamesLayout();
    });
  },
  setup() {
    function adjustGamesLayout() {
        const navbar = document.querySelector('nav');
        const genres = document.querySelector('.genres');
        const footer = document.querySelector('footer');
        const games = document.querySelector('.gamecards');
        if (navbar && genres && footer && games) {
          const availableHeight = window.innerHeight - (navbar.offsetHeight + genres.offsetHeight + footer.offsetHeight + 30);
          games.style.height = `${availableHeight}px`;
        }
      }

      onMounted(() => {
        adjustGamesLayout();
        window.addEventListener('resize', adjustGamesLayout);
      });

      onUnmounted(() => {
        window.removeEventListener('resize', adjustGamesLayout);
      });
  },

};
</script>