<template>
  <NavBar />
  <main v-if="gameData" class="bg-principal min-h-[80vh] text-white">
    <section class="flex justify-center items-center max-w-screen-xl mx-auto p-4 border-acento1 border rounded-lg shadow-lg shadow-sombras1">
      <h1 class="text-4xl px-20">{{ gameData.title }}</h1>
      <img :src="gameData.thumbnail" alt="thumbnail" 
      class="w-30 h-28">
    </section>
    <section class="grid gap-2 grid-cols-4 grid-rows-3 mt-4 max-w-screen-xl mx-auto max-h-[60vh]">
      <aside class="col-start-1 col-end-2 row-start-1 row-end-4 text-small flex flex-col gap-y-2">
        <h3 class="border-acento1 border rounded-lg shadow-lg shadow-sombras1p-2 min-h-14 p-2 flex items-center justify-center" 
        v-for="(info, index) in [gameData.short_description, gameData.game_url, gameData.genre, gameData.platform, gameData.publisher, gameData.developer, gameData.minimum_system_requirements]" :key="index">{{info}}</h3>
        <!-- <h3>{{ gameData.developer }}</h3>
      <h3></h3> -->
      </aside>
      <div class="col-start-2 col-end-4 row-start-1 row-end-3 border-acento1 border rounded-lg shadow-lg shadow-sombras1">VIDEO</div>
      <div class="col-start-4 col-end-5 row-start-1 row-end-3 ">
        <p class="border-acento1 border rounded-lg shadow-lg shadow-sombras1 overflow-y-auto max-h-[19.6rem] mb-2 p-2">{{gameData.description}}</p>
        <div class="border-acento1 border rounded-lg shadow-lg shadow-sombras1 text-center p-2">{{ gameData.release_date }}</div>
      </div>
      <div class="col-start-2 col-end-5 row-start-3 row-end-4 border-acento1 border rounded-lg shadow-lg shadow-sombras1 flex">
        <img v-for="(screenshot, index) in gameData.screenshots" 
     :key="index" 
     :src="screenshot" 
     alt="Screenshot">
      </div>

    </section>
  </main>

  <FooterPage />
    <!-- <h2>Game {{ $route.params.id }}</h2> -->
    <!-- <div v-if="gameData">
      <img :src="gameData.thumbnail" />
      <h3>{{ gameData.title }}</h3>
      <h3>{{ gameData.developer }}</h3>
      <h3>{{ gameData.release_date }}</h3>
    </div> -->
  </template>
  
  <script>
  import axios from "axios";
  import NavBar from '../components/NavBar.vue';
  import FooterPage from '../components/Footer.vue'
  
  export default {
    name: "Game",
    components: {
      NavBar,
      FooterPage
    },
    data() {
      return {
        gameData: null,
      };
    },
    methods: {
      async getGameData(){
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: {
                id: this.$route.params.id,
            },
            headers: {
                'x-rapidapi-key': 'f8228c328cmshc0a5e4c50c5d49fp138794jsne537ce0d3d0f',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
          
        try {
	        const response = await axios.request(options);
	        console.log(response.data);
            console.log(options.params);
            this.gameData = response.data;
        } catch (error) {
	        console.error(error);
        }
  
      },
    },
    mounted() {
      this.getGameData();
    },
  };
  </script>
  
  <style></style>
  