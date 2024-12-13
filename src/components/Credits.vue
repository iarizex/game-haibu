<template>
    <div v-if="show" class="overlay" @click="closeCredits">
    <div class="credits" @click.stop>
        <div class="video">
        <video autoplay muted loop playsinline :src="creditsVideo" class="videoMedia"></video>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: {

    data(){
        return {
            creditsVideo: "/public/Credits_Anim.mp4"
        }
    },

    show: {
        type: Boolean,
        required: true,
    },
    },
    emits: ["close"],
    methods: {
    closeCredits() {
        this.$emit("close");
    },
    },
};
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

}

.credits {
    background: black;
    color: white;
    padding: 15px;
    width: 50%;
    height: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}

.video {

}

.videoMedia {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 20;
}

</style>
