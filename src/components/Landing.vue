<template>
    <div id="app" class="container modal-overlay" v-if="show">
        <div class="modal-content">
            <!-- Background negro -->
            <div class=" flex flex-col justify-between ">
                <div class="flex flex-col min-h-screen bg-black background justify-between max-w-screen-2xl bigcenter">
                    <!-- Row 1: Text and Video -->
                    <div class="flex flex-col md:flex-row w-full h-full">
                        <!-- Video Div (appears first on mobile and desktop) -->
                        <div class="w-full bg-black flex items-center justify-center order-1 md:order-2 md:w-2/3">
                            <video autoplay muted loop playsinline :src="topRightVideo" class="max-w-full h-auto">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <!-- Text Div (appears second on mobile and first in desktop) -->
                         <div id="text" class="p-4 flex items-center justify-center order-2 md:order-1 md:w-1/3 w-full h-full">
                            <div class="bg-black p-4 w-2/3 text-texto gap-4 rounded-lg [background:linear-gradient(45deg,theme(colors.secundario),theme(colors.secundario)_50%,theme(colors.secundario))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.acento1/.48)_80%,theme(colors.acento2)_86%,theme(colors.acento2)_90%,theme(colors.acento2)_94%,theme(colors.acento1/.48))_border-box] border-8 border-transparent animate-border" :style="{ animationDelay: `${(index % 5) * 0.5}s` }">
                                <p class="text-center textosombra">in Game Hibu you will be able to find all the Free to Play games on PC and Browser ordered by genre and much more. Start your Free to Play Gaming experience with Game Hibu!</p>
                            </div>
                        </div>
                    </div>
                
                    <div class="w-full md:w-[400px] bg-black flex items-center justify-center md:justify-left">
                        <div class="relative md:flex gap-4">
                            <img v-if="!hoveringButton" :src="staticImage" alt="Static Background" class="media w-full h-auto" />
                            <video v-else autoplay muted loop playsinline :src="currentVideo" class="media w-full h-auto"></video>
                            <div class="buttons absolute inset-0 flex flex-col justify-between items-center p-4">
                                <button class="button close-btn text-transparent py-2 px-4 rounded shadow-lg w-[80%] h-[50%]" @click="closeModal" @mouseover="handleHover(video1)"  @mouseleave="handleLeave">Start</button>
                                <button class="button text-transparent py-2 px-4 rounded shadow-lg w-[80%] h-[50%]" @mouseover="handleHover(video2)" @mouseleave="handleLeave" @click="openCredits">Credits</button>
                            </div>
                        </div>
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
              this.$emit('open');
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
      left: 0;
      width: 100%;
      height: 100%;
  }
  </style>