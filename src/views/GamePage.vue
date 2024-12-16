<template>
  <NavBar />
  <main v-if="gameData" class="bg-principal text-white px-2">
    <section class="grid gap-3 grid-cols-4 max-w-screen-xl mx-auto">
      <h1 class="col-start-1 lg:col-start-2 col-end-5 row-start-1 row-end-1 flex justify-center items-center p-2  mx-2 border-acento1 border rounded-lg shadow-lg shadow-sombras1">
        {{ gameData.title }}
      </h1>
      
      <aside class=" row-start-3 col-start-1 col-end-3 lg:col-end-2 lg:row-start-1 lg:row-end-4 text-sm flex flex-col gap-3">
  <div
    class="border-acento1 border rounded-lg shadow-lg shadow-sombras1 flex items-start justify-center flex-col p-2 h-full"
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

      <div class="col-start-1 col-end-5 lg:col-start-2 lg:col-end-4 row-start-2 lg:row-end-3 p-1 border-acento1 border rounded-lg shadow-lg shadow-sombras1 flex justify-center items-center">
        <video class="rounded-lg" :src="'https://www.freetogame.com/g/' + gameData.id + '/videoplayback.webm'" controls autoplay loop muted type="video/webm"></video>
      </div>

      <div class="col-start-3 lg:col-start-4 col-end-5 row-start-3 lg:row-start-2 lg:row-end-3">
        <p class="border-acento1 border rounded-lg shadow-lg shadow-sombras1 h-[40rem] lg:max-h-[27.2rem] overflow-y-auto p-2 mb-2 [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-sombras1
      [&::-webkit-scrollbar-thumb]:bg-acento1
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-track]:rounded-full"><strong class="uppercase text-acento1">game description: </strong>
      {{gameData.description}}</p>
        <div class="border-acento1 border rounded-lg shadow-lg shadow-sombras1 text-center p-2"><strong class="uppercase text-acento1">release date: </strong> {{ gameData.release_date }}</div>
      </div>
      <div class="col-start-1 lg:col-start-2 col-end-5 row-start-4 lg:row-start-3 lg:row-end-4 p-2 overflow-hidden border-acento1 border rounded-lg shadow-lg shadow-sombras1 flex justify-center ">
        <img class="h-40" v-for="(screenshot, index) in gameData.screenshots" 
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
  