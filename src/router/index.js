import Vue from "vue";
import VueRouter from "vue-router";
import projects from "../views/projects.vue";
import dashBoard from "../views/dashBoardView.vue";
import teams from "../views/teamView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashBoard",
    component: dashBoard,
  },
  {
    path: "/projects",
    name: "projects",
    component: projects,
  },
  {
    path: "/teams",
    name: "teams",
    component: teams,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
