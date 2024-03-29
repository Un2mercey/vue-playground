import { RouteComponent, RouteRecordRaw, Router, createRouter, createWebHistory } from 'vue-router';
import { RouteNames, RouteUrls } from './types.ts';

type RouteView = Promise<RouteComponent>;

const HomePage: () => RouteView = () => import('@/views/HomePage.vue');

const routes: RouteRecordRaw[] = [
    {
        path: RouteUrls.HOME,
        name: RouteNames.HOME,
        component: HomePage,
    },
    {
        path: RouteUrls.NOT_FOUND,
        name: RouteNames.NOT_FOUND,
        redirect: { name: RouteNames.HOME },
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
