<template>
    <nav class="bg-principal px-4 pt-4 pb-2 md:pb-4">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-acento1 border rounded-lg shadow-lg shadow-sombras1">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/public/GameHibu_Logo_Navbar.png" class="w-44 btnHover" alt="Game Hibu Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-acento1"></span>
            </a>
            <div class="flex md:order-1">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
                <div class="relative hidden md:block">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-acento2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm border rounded-lg bg-secundario border-acento1 placeholder-acento2 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search...">
                </div>
                <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-search">
                <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm border rounded-lg border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search...">
                </div>
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                    <a href="#" class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 md:text-acento2" aria-current="page"><img src="/public/buttons/home.png" class="w-44 btnHover" alt="Home Button" /></a>
                </li>
                <li>
                    <button class="block py-2 px-3 rounded md:p-0 md:hover:text-acento1 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" @click="$emit('open')"><img src="/public/buttons/Credits.png" class="w-44 btnHover" alt="Credits Button" /></button>
                </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>

.btnHover:hover {
filter: drop-shadow(5px 5px 4px #459857);
}

</style>