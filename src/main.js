import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from 'pinia'

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Remove previous body classes
  document.body.className = '';

  // Add class based on the route
  if (to.name === 'mainpage') {
    document.body.classList.add('bg-black'); // Tailwind class
  } else {
    document.body.classList.add('bg-secundario'); // Default
  }

  next();
});

app.use(router);
app.mount("#app");
app.use(createPinia())
