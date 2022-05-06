import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

//import firebase from "firebase/compat";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: "/login",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: {
        authTrue: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../beatclub/views/SignIn-component.vue"),
    },
    {
      path: "/signup",
      name: "signUp",
      component: () => import("../beatclub/views/SignUp-component.vue"),
    },
    {
      path: "/homebeatclub",
      name: "homebeatclub",
      component: () => import("../beatclub/views/BeatClub-home.vue"),
    },
    {
      path: "/message",
      name: "messages",
      component:()=> import("../beatclub/views/Message-component.vue"),
    },
    {
      path: "/profile",
      name: "profiles",
      component:()=> import("../beatclub/views/Profile-component.vue"),
    },
  ],
});

export default router;
