<template>
    <h1>HOLA</h1>
    <div class="video-container">
    <video class="background-video" autoplay loop muted>
        <source :src="videoSrc" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    </div>
</template>

<script>
export default {
    name: "VideoBackground",
    props: {
    videoSrc: {
        type: String,
        required: true,
    },
    },
};
</script>

<style scoped>
.video-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 65%; /* Reduce el tamaño al 50% del contenedor original */
     height: auto; /* Mantiene las proporciones del video */
    overflow: hidden;
}

.background-video {
    width: 100%;
    height: auto;
    object-fit: cover; /* Asegura que el video se ajuste al contenedor */
}
</style>
