
import MainPage from "./views/MainPage.vue";
import GamePage from "./views/GamePage.vue";
import NotFound from "./views/NotFound.vue";

import { getTransitionRawChildren } from "vue";

export const routes = [
  { path: "/", name: "mainpage", component: MainPage },
  //{ path: "/main", name: "mainpage", component: MainPage },
  {
    path: "/game/:id",
    name: "game",
    component: GamePage,
  },
  { path: "/:path(.*)", component: NotFound },
];
