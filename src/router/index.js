import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import firebase from "firebase/compat";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/:pathMatch(.*)*',
      redirect:'/Main',
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
      component: () => import("../beatclub/views/SignUp-component.vue")
    },
    {
      path: "/Main",
      name: "Main",
      component: () => import("../beatclub/views/Main-component.vue")
    },
    {
      path: "/UserHome",
      name: "UserHome",
      component: () => import("../beatclub/views/UserHome-component.vue")
    },
    {
      path: "/Profile",
      name: "Profile",
      component: () => import("../beatclub/views/Profile-component.vue")
    },
    {
      path: "/Settings",
      name: "Settings",
      component: () => import("../beatclub/views/Settings-component.vue")
    },
  ],
});


export default router;
