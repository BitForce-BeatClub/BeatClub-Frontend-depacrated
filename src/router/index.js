import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: "/main",
    },

    {
      path: "/sign_in",
      name: "sign_in",
      component: () => import("../beatclub/views/sign-in.compenent.vue"),
    },
    {
      path: "/sign_up",
      name: "sign_up",
      component: () => import("../beatclub/views/sign-up.component.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../beatclub/views/main.component.vue"),
    },
    {
      path: "/user_home",
      name: "user_home",
      component: () => import("../beatclub/views/user-home.component.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../beatclub/views/profile.component.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../beatclub/views/settings.component.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../beatclub/views/message.component.vue"),
    },
  ],
});

export default router;
