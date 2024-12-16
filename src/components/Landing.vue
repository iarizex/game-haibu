
<template>
    <div id="app" class="container modal-overlay" v-if="show">
        <div class="modal-content">
            <!-- Background negro -->
            <div class="background flex flex-col items-center justify-between">
                <div id="bigvideo" class="flex">
                    <video autoplay muted loop playsinline :src="topRightVideo" class="top-right-media"></video>
                </div>
                <div class="hero-container flex flex-col md:flex-row text-texto gap-4 rounded-lg p-4 mx-4 [background:linear-gradient(45deg,theme(colors.secundario),theme(colors.secundario)_50%,theme(colors.secundario))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.acento1/.48)_80%,theme(colors.acento2)_86%,theme(colors.acento2)_90%,theme(colors.acento2)_94%,theme(colors.acento1/.48))_border-box] border-8 border-transparent animate-border justify-center w-2/3" :style="{ animationDelay: `${(index % 5) * 0.5}s` }">
                    <div class="hero-text">
                    in Game Hibu you will be able to find all the Free to Play games on PC and Browser ordered by genre and much more. Start your Free to Play Gaming experience with Game Hibu!
                    </div>
                </div>
                <div id="buttons" class="relative md:flex md:justify-left">
                    <!-- Static image or video -->
                    <img 
                        v-if="!hoveringButton" 
                        :src="staticImage" 
                        alt="Static Background" 
                        class="media w-full h-auto" 
                    />
                    <video 
                        v-else 
                        autoplay 
                        muted 
                        loop 
                        playsinline 
                        :src="currentVideo" 
                        class="media w-full h-auto"
                    ></video>

                    <!-- Buttons -->
                    <div class="buttons absolute inset-0 flex flex-col justify-between items-center p-4">
                        <!-- Button 1 -->
                        <button 
                            class="button close-btn text-transparent py-2 px-4 rounded shadow-lg w-[50%] h-[50%]" 
                            @click="closeModal" 
                            @mouseover="handleHover(video1)" 
                            @mouseleave="handleLeave" 
                        ></button>
                        <!-- Button 2 -->
                        <button 
                            class="button text-black py-2 px-4 rounded shadow-lg w-[50%] h-[50%]" 
                            @mouseover="handleHover(video2)" 
                            @mouseleave="handleLeave" 
                        >
                        </button>
                    </div>
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

        openCredits() {
            this.$emit
        }
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
</style>