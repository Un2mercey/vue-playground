<template>
    <MainLayout>
        <template #nav>
            <NavigationDrawer
                v-model="rail"
                v-bind="{ style: { '--width': width, '--background-color': color } }"
            />
        </template>
        <slot :style="{ '--padding-left': width }" />
    </MainLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import NavigationDrawer from '@/components/layout/blocks/NavigationDrawer.vue';
import MainLayout from '@/components/layout/functional/MainLayout.vue';

const NAV_MIN_WIDTH = 72;
const NAV_MAX_WIDTH = 256;

const rail = ref(false);
const width = computed(() => (rail.value ? NAV_MAX_WIDTH : NAV_MIN_WIDTH) + 'px');
const color = computed(() => (rail.value ? '#2C2E35FF' : '#393B40FF'));
</script>
