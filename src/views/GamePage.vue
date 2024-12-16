<template>
  <NavBar />
  <main v-if="gameData" class="bg-principal text-white">
    <section class="flex justify-center items-center max-w-screen-xl mx-auto p-4 border-acento1 border rounded-lg shadow-lg shadow-sombras1">
      <h1 class="text-4xl px-20">{{ gameData.title }}</h1>
      <img :src="gameData.thumbnail" alt="thumbnail" 
      class="w-30 h-28">
    </section>
    <section class="grid gap-2 grid-cols-4 grid-rows-3 mt-4 max-w-screen-xl mx-auto h-[61.9vh]">
      <aside class="col-start-1 col-end-2 row-start-1 row-end-4 text-sm flex flex-col gap-y-2">
  <div
    class="border-acento1 border rounded-lg shadow-lg shadow-sombras1 p-2 flex items-start justify-center flex-col h-full"
    v-for="(item, index) in infoArray"
    :key="index"
  >
    <!-- Handle URL -->
    <a
      v-if="item.name === 'Link'"
      :href="item.value"
      target="_blank"
      rel="noopener noreferrer"
      class="underline"
    >
    <strong class="uppercase text-acento1">link: </strong> PLAY NOW
    </a>

    <!-- Handle Minimum System Requirements -->
    <div
      v-else-if="item.name === 'Requirement'"
      v-for="(require, reqIndex) in item.value"
      :key="reqIndex"
    >
      <p>
        <strong class="uppercase text-acento1">{{ reqIndex }}:</strong>
        {{ require }}
      </p>
    </div>

    <!-- Handle Other Fields -->
    <p v-else>
      <strong class="uppercase text-acento1">{{ item.name }}:</strong>
      {{ item.value }}
    </p>
  </div>
</aside>

      <div class="col-start-2 col-end-4 row-start-1 row-end-3 border-acento1 border rounded-lg shadow-lg shadow-sombras1 flex justify-center items-center">
        <video class="" :src="'https://www.freetogame.com/g/' + gameData.id + '/videoplayback.webm'" controls autoplay loop muted type="video/webm"></video>
      </div>
      <div class="col-start-4 col-end-5 row-start-1 row-end-3 ">
        <p class="border-acento1 border rounded-lg shadow-lg shadow-sombras1 overflow-y-auto max-h-[19rem] mb-2 p-2  [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-sombras1
      [&::-webkit-scrollbar-thumb]:bg-acento1
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-track]:rounded-full"><strong class="uppercase text-acento1">game description: </strong>
      {{gameData.description}}</p>
        <div class="border-acento1 border rounded-lg shadow-lg shadow-sombras1 text-center p-2"><strong class="uppercase text-acento1">release date: </strong> {{ gameData.release_date }}</div>
      </div>
      <div class="col-start-2 col-end-5 row-start-3 row-end-4 border-acento1 border rounded-lg shadow-lg shadow-sombras1 flex justify-center">
        <img v-for="(screenshot, index) in gameData.screenshots" 
     :key="index" 
     :src="screenshot.image" 
     alt="Screenshot">
      </div>

    </section>
  </main>

  <FooterPage />
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
    computed: {
    infoArray() {
      return [
        { name: "Mini desc", value: this.gameData?.short_description || "No description available" },
        { name: "Link", value: this.gameData?.game_url },
        { name: "Genre", value: this.gameData?.genre },
        { name: "Platform", value: this.gameData?.platform },
        { name: "Publisher", value: this.gameData?.publisher },
        { name: "Developer", value: this.gameData?.developer },
        { name: "Requirement", value: this.gameData?.minimum_system_requirements || {} },
      ];
    },
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
  