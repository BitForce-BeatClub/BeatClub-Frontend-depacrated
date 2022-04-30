import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import firebase from "firebase/compat";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/:pathMatch(.*)*',
      redirect:'/login',
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta:{
        authTrue:true,
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../beatclub/pages/login-component.vue"),
    },
  ],
});


export default router;
