
<template>
    <div id="app" class="container modal-overlay" v-if="show">
    <div class="modal-content">

    <!-- Background negro -->
<div class="background">


    <!-- Texto para el "hero" -->
    <div class="hero-container">
    <div class="hero-text" :class="{ zoomed: isZoomed }">
    in Game Hibu you will be able to find all the Free to Play games on PC and Browser ordered by genre and much more. Start your Free to Play Gaming experience with Game Hibu!
    </div>
    </div>

    <!-- Video superior derecho en loop -->
    <div class="top-right-video">
        <video autoplay muted loop playsinline :src="topRightVideo" class="top-right-media"></video>
    </div>

    <!-- Video dinámico en la parte inferior izquierda -->
    <div class="bottom-left-video">
        <img v-if="!hoveringButton" :src="staticImage" alt="Static Background" class="media" />
        <video
        v-else
        autoplay
        muted
        loop
        playsinline
        :src="currentVideo"
        class="media"
        ></video>
    </div>

    <!-- Botones -->
    <div class="buttons">
        <button
        class="button close-btn" @click="closeModal"
        @mouseover="handleHover(video1)"
        @mouseleave="handleLeave"
        style="bottom: 120px;"
        >
        Button 1
        </button>
        <button
        class="button"
        @mouseover="handleHover(video2)"
        @mouseleave="handleLeave"
        >
        Button 2
        </button>
    </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
    show: {
        type: Boolean,
        default: false,
    },
},

    data() {

    return {
            isZoomed: false,
            hoveringButton: false,
            staticImage: "/Start_Credits_Buttons_Image.png", // Imagen estática para la parte inferior izquierda
            video1: "/Start_Button.mp4", // Primer video para el hover del botón
            video2: "/Credits_Button.mp4", // Segundo video para el hover del botón
            topRightVideo: "/Logo_GH_Animation.mp4", // Video en loop para la parte superior derecha
            currentVideo: "", // Almacena el video actual para el hover
        };
    },

    mounted() {
        // Activa la clase para la animación cuando el componente se monta
        setTimeout(() => {
            this.isZoomed = true;
        }, 100);
    },

    methods: {

        handleHover(video) {
            this.hoveringButton = true;
            this.currentVideo = video;
        },

        handleLeave() {
            this.hoveringButton = false;
        },

        closeModal() {
            this.hoveringButton = false;
            this.$emit('close');
        },
    },
    }

</script>

<style scoped>

  /* Contenedor principal */
.container {
    overflow: hidden;
}

  /* Fondo negro */
.background {
    overflow: hidden;
    position: absolute;
    top:0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
}

  /* Video en la parte superior derecha */
.top-right-video {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 1000px;
    height: 600px;
    overflow: hidden;
}

.top-right-media {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  /* Video en la parte inferior izquierda */
.bottom-left-video {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 400px;
    height: 300px;
    overflow: hidden;
}

.media {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  /* Botones */
.buttons {
    position: absolute;
    bottom: 40px;
    left: 60px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 10;
}

.button {
    background-color: transparent;
    color: transparent;
    padding: 35px 100px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}


.hero-container {
    position: absolute;
    top: 230px;
    left: 100px;
    height: 200px;
    width: 40vw;
    font-family: 'Exo 2', sans-serif;
    overflow: hidden;
    z-index: 1;
    border-radius: 15px;
    background-color: rgba(20, 20, 20, 0.5);
    box-shadow:
    5px 5px 25px #84FF01,
    0px 0px 15px #F8CD2A;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: white;
    animation: glow 1.5s infinite alternate;
    backdrop-filter: blur(10px);
}

@keyframes glow {
from {
    box-shadow:
    5px 5px 25px #84FF01,
    0px 0px 15px #F8CD2A;
}
to {
    box-shadow:
    1px 1px 1px #84FF01,
    5px 5px 25px #F8CD2A;
}
}

.hero-text {
    font-size: 22px;
    text-align: center;
    justify-content: center;
    opacity: 0;
    z-index: 2;
    color: white;
    transform: scale(0.1);
    transition: transform 1.5s ease-out, opacity 1.5s ease-out;
    text-shadow:
    1px 1px 1px white,
    0 0 0.5em green;
}

.hero-text.zoomed {
    opacity: 1;
    transform: scale(1);
}

</style>