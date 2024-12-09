
<template>
    <div id="app" class="container">
    <!-- Background negro -->
    <div class="background"></div>

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
        class="button"
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
</template>

<script>
export default {
    data() {
    return {
        hoveringButton: false,
        staticImage: "/src/components/Start_Credits_Buttons_Image.png", // Imagen estática para la parte inferior izquierda
        video1: "/src/components/Start_Button.mp4", // Primer video para el hover del botón
        video2: "/src/components/Credits_Button.mp4", // Segundo video para el hover del botón
        topRightVideo: "/src/components/Logo_GH_Animation.mp4", // Video en loop para la parte superior derecha
        currentVideo: "", // Almacena el video actual para el hover
    };
    },
    methods: {
    handleHover(video) {
        this.hoveringButton = true;
        this.currentVideo = video;
    },
    handleLeave() {
        this.hoveringButton = false;
    },
    },
};
</script>

<style scoped>
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

div {
font-family: 'Exo 2', sans-serif;
}

</style>