<template>
    <div>
      <h1>Main page</h1>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import axios from 'axios';

export default {
  name: "Main",
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async getGames() {
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        // params: {
        //   tag: '3d.mmorpg.fantasy.pvp',
        //   platform: 'pc'
        // },
        headers: {
          'x-rapidapi-key': 'f8228c328cmshc0a5e4c50c5d49fp138794jsne537ce0d3d0f',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
        };

      try {
	      const response = await axios.request(options);
	      console.log(response.data);
        this.data = response.data;
      } catch (error) {
	      console.error(error);
      }
      console.log('Hello world');

    },
    
    mounted() {
    this.getGames();
    },
  }
};
</script>
