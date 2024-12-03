/*import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import Film from "./views/Film.vue";
import Character from "./views/Character.vue";
*/
import { getTransitionRawChildren } from "vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/film/:id",
    name: "film",
    component: Film,
    children: [
      {
        name: "character",
        path: "character/:characterId",
        component: Character,
      }
    ],
  },
  { path: "/:path(.*)", component: NotFound },
];
