import { RouteComponent, RouteRecordRaw, Router, createRouter, createWebHistory } from 'vue-router';
import { RouteNames, RouteUrls } from '@/@enums';

type RouteView = Promise<RouteComponent>;

const HomePage: () => RouteView = () => import('@/views/HomePage.vue');
const ButtonPreview: () => RouteView = () => import('@/views/ButtonPreview.vue');
const EventLoop: () => RouteView = () => import('@/views/EventLoop.vue');

const routes: RouteRecordRaw[] = [
    {
        path: RouteUrls.HOME,
        name: RouteNames.HOME,
        component: HomePage,
    },
    {
        path: RouteUrls.BUTTON_PREVIEW,
        name: RouteNames.BUTTON_PREVIEW,
        component: ButtonPreview,
        meta: { title: 'Button Preview' },
    },
    {
        path: RouteUrls.EVENT_LOOP,
        name: RouteNames.EVENT_LOOP,
        component: EventLoop,
        meta: { title: 'Event Loop' },
    },
    {
        path: RouteUrls.NOT_FOUND,
        name: RouteNames.NOT_FOUND,
        redirect: { name: RouteNames.HOME },
    },
];

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
});

export default router;
