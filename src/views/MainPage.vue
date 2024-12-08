<template>
    <div class="bg-fondo text-texto min-h-screen flex flex-col">
        <NavBar />
        <GameGenres />
        <GameCards />
        <FooterPage />
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterPage from '../components/Footer.vue'
import GameCards from '../components/GameCards.vue'
import GameGenres from '../components/Genres.vue'

export default{
    components: {
        NavBar,
        FooterPage,
        GameCards,
        GameGenres
    }
}
</script>