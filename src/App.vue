<template>
    <MainLayout>
        <template #nav>
            <NavigationDrawer />
        </template>
        <router-view #="{ Component }">
            <transition name="fade">
                <Component :is="Component" />
            </transition>
        </router-view>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/components/layout/MainLayout.vue';
import NavigationDrawer from '@/components/layout/NavigationDrawer.vue';
</script>
