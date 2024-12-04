/*import Home from "./views/Home.vue";
import Film from "./views/Film.vue";
import Character from "./views/Character.vue";
*/
import LandingPage from "./views/LandingPage.vue";
import MainPage from "./views/MainPage.vue";
import GamePage from "./views/GamePage.vue";
import NotFound from "./views/NotFound.vue";

import { getTransitionRawChildren } from "vue";

export const routes = [
  { path: "/", name: "home", component: LandingPage },
  { path: "/main", name: "main", component: MainPage },
  {
    path: "/game/:id",
    name: "game",
    component: GamePage,
  },
  { path: "/:path(.*)", component: NotFound },
];
