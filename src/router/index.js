import { createRouter, createWebHashHistory } from "vue-router";

import StartGameView from "@/views/StartGameView.vue";
import GameBoardView from "@/views/GameBoardView.vue";

const routes = [
  {
    path: "/",
    name: "StartGame",
    component: StartGameView,
  },
  {
    path: "/gameboard",
    name: "GameBoard",
    component: GameBoardView,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
