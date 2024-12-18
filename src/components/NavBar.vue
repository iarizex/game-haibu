<template>
    <nav class="bg-principal px-4 pt-4 pb-2 md:pb-4">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-acento1 border rounded-lg shadow-lg shadow-sombras1">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/public/GameHibu_Logo_Navbar.png" class="w-44 btnHover" alt="Game Hibu Logo" />
        </a>
        <div class="flex md:order-1">
          <button 
            type="button"
            @click="toggleMenu"
            class="md:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            <span class="sr-only">Open main menu</span>
          </button>
        </div>
        <div
          :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}"
          class="items-center justify-between w-full md:flex md:w-auto md:order-2"
          id="navbar-search"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 items-center">
            <li>
              <a href="/" class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 md:text-acento2" aria-current="page">
                <img src="/public/buttons/home.png" class="w-44 btnHover" alt="Home Button" />
              </a>
            </li>
            <li>
              <button
                class="block py-2 px-3 rounded md:p-0 md:hover:text-acento1 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                @click="$emit('open')"
              >
                <img src="/public/buttons/Credits.png" class="w-44 btnHover" alt="Credits Button" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style>
  .btnHover:hover {
    filter: drop-shadow(5px 5px 4px #459857);
  }
  </style>