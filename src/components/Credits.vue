<template>
    <div v-if="isVisibleCredits" class="overlay" @click="closeCredits">
    <div class="credits" @click.stop>
    </div>
    </div>
</template>

<script>
export default {
    props: {
    isVisibleCredits: {
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
    z-index: 20;
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
</style>
