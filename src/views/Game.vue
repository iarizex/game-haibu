<template>
    <h2>Game {{ $route.params.id }}</h2>
    <div v-if="gameData">
      <img :src="gameData.thumbnail" />
      <h3>{{ gameData.title }}</h3>
      <h3>{{ gameData.developer }}</h3>
      <h3>{{ gameData.release_date }}</h3>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Game",
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
  