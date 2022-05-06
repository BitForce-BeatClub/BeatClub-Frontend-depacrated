import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: "/main",
    },

    {
      path: "/signIn",
      name: "signIn",
      component: () => import("../beatclub/views/SignIn-component.vue"),
    },
    {
      path: "/signup",
      name: "signUp",
      component: () => import("../beatclub/views/SignUp-component.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../beatclub/views/Main-component.vue"),
    },
    {
      path: "/userHome",
      name: "userHome",
      component: () => import("../beatclub/views/UserHome-component.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../beatclub/views/Profile-component.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../beatclub/views/Settings-component.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../beatclub/views/Message-component.vue"),
    },
  ],
});

export default router;