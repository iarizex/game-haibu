
<template>
    <div id="app" class="container modal-overlay" v-if="show">
    <div class="modal-content">

    <!-- Background negro -->
    <div class="background"></div>


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
            staticImage: "public/Start_Credits_Buttons_Image.png", // Imagen estática para la parte inferior izquierda
            video1: "public/Start_Button.mp4", // Primer video para el hover del botón
            video2: "public/Credits_Button.mp4", // Segundo video para el hover del botón
            topRightVideo: "public/Logo_GH_Animation.mp4", // Video en loop para la parte superior derecha
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
            this.$emit('close');
        }, 
    },
    }

</script>

<style scoped>

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 500px;
    width: 90%;
}

  /* Contenedor principal */
.container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
}

  /* Fondo negro */
.background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -1;
}

  /* Video en la parte superior derecha */
.top-right-video {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 300px;
    height: 200px;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.7);
}

.top-right-media {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  /* Video en la parte inferior izquierda */
.bottom-left-video {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 400px;
    height: 300px;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.7);
}

.media {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  /* Botones */
.buttons {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 10;
}

.button {
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.7);
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s, border-color 0.3s;
}

.button:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: white;
}

.hero-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Exo 2', sans-serif;
    overflow: hidden;
}

.hero-text {
    font-size: 3rem;
    text-align: center;
    opacity: 0;
    transform: scale(0.5);
    transition: transform 1.5s ease-out, opacity 1.5s ease-out;
}

.hero-text.zoomed {
    opacity: 1;
    transform: scale(1);
}

</style>