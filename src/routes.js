import Main from "./views/Main.vue";
import Game from "./views/Game.vue";

export const routes = [
    { path: "/", name: "main", component: Main },
    { path: "/game/:id", name: "game", component: Game },
    
    // { path: "/:path(.*)", component: NotFound },
  ];
  