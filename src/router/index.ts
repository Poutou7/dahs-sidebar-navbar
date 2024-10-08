/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/Error.vue"),
    },
    {
      path: "/main",
      redirect: "/main",
      component: () => import("@/layouts/full/FullLayout.vue"),
      children: [
        {
          name: "home",
          path: "/",
          component: () => import("@/views/DashboardHome.vue"),
        },
      ],
    },
  ],
});
