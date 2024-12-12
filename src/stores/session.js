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
    },
    getters:{
        getLandingModalShown() {
            return this.landingModalShown
        }
    }
})