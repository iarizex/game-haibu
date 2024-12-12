
import MainPage from "./views/MainPage.vue";
import GamePage from "./views/GamePage.vue";
import NotFound from "./views/NotFound.vue";
import Main from "./views/Main.vue";
import Game from "./views/Game.vue";

import { getTransitionRawChildren } from "vue";

export const routes = [
  { path: "/", name: "landingpage", component: LandingPage },
  { path: "/main", name: "mainpage", component: MainPage },
  {
    path: "/game/:id",
    name: "game",
    component: GamePage,
  },
  { path: "/:path(.*)", component: NotFound },
];
