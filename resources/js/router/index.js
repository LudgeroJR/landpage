import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import Arkham from "../Pages/Arkham.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: { title: "Ludgero Junior" },
    },
    {
        path: "/arkham",
        name: "arkham",
        component: Arkham,
        meta: { title: "ARKHAM" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Este trecho altera o <title> da página após cada navegação
router.afterEach((to) => {
    const defaultTitle = "Ludgero Junior";
    document.title = to.meta.title || defaultTitle;
});

export default router;
