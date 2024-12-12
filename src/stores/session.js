import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session',{
    state: ()=> ({
        filter: '',
        landingModalShown: false,
    }),
    actions: {
        switchLandingModalShown() {
            this.landingModalShown = !this.landingModalShown
        },

        setFilter(genre) {
            this.filter = genre
        },
    },
    getters:{
        getLandingModalShown() {
            return this.landingModalShown
        },

        getFilter() {
            return this.filter
        }
    }
})