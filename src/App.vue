<template>
    <ApplicationLayout #="{ style }">
        <router-view #="{ Component }">
            <transition name="fade">
                <Component
                    :is="Component"
                    v-bind="{ style }"
                />
            </transition>
        </router-view>
    </ApplicationLayout>
</template>

<script setup lang="ts">
import ApplicationLayout from '@/components/layout/functional/ApplicationLayout.vue';
</script>
