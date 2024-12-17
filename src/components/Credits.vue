<template>
    <div v-if="show" class="overlay" @click="closeCredits">
    <div class="credits" @click.stop>
        <video autoplay muted loop playsinline :src="creditsVideo" class="videoMedia"></video>
        </div>
    </div>
</template>

<script>
export default {

    data(){
        return {
            creditsVideo: "/Credits_Anim.mp4"
        }
    },
    props: {

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
    z-index: 10;
}

.credits {
    background: black;
    width: 640px;
    height: 360px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 1);
    border-radius: 8px;
    overflow: hidden;
}


.videoMedia {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>
