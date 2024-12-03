<template>
    <div id="GameCards">
        <div class="container flex flex-wrap justify-center columns-1 md:columns-2 gap-4">
            <GameCard v-for="game in games" :key="game.id" :game="game" />
        </div>
    </div>
</template>