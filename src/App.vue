<template>
  <div id="app">
    <VideoBackground videoSrc="./assets/Logo_GH_Animation.mp4" />
    <div class="content">
      <h1>¡Bienvenido a mi sitio web!</h1>
    </div>
  </div>
</template>

<script>
import VideoBackground from "./components/VideoBackground.vue";

export default {
  name: "App",
  components: {
    VideoBackground,
  },
};
</script>

<style>
#app {
  background-color: #f81414; /* Cambia este color según tus necesidades */
  color: white; /* Ajusta el color del texto para contraste */
  font-family: Arial, sans-serif;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  margin: 0;
  overflow: hidden; /* Evita scroll si los elementos se desbordan */
  position: relative;
}

.content {
  text-align: center;
  padding-top: 20px;
  position: relative;
  z-index: 1; /* Asegura que el texto esté sobre el video */
}
</style>

