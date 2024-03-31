<template>
    <ApplicationLayout #="{ style }">
        <router-view #="{ Component }">
            <transition
                name="fade"
                mode="out-in"
            >
                <Component
                    :is="Component"
                    v-bind="{ style }"
                />
            </transition>
        </router-view>
    </ApplicationLayout>
</template>

<script setup lang="ts">
import { useDocumentTitle } from '@/composable';
import ApplicationLayout from '@/components/layout/functional/ApplicationLayout.vue';

useDocumentTitle();
</script>
