import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',{
    state: ()=> ({
        items: [],
        movies: []
    }),
    actions: {
        addItemToCart(cantidad, item) {
            this.items.push({...item, cantidad: cantidad})
            console.log(this.items)
        },
        async getMovies() {
            let result = await fetch(URL)
            let data = result.json()
            this.movies = data
        }
    },
    getters:{
        cartSize() {
            return this.items.length
        }
    }
})