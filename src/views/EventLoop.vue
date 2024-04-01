<template>
    <PageLayout>
        <grid-row>
            <grid-col>
                <AnimatedBlock />
            </grid-col>
        </grid-row>
    </PageLayout>
</template>

<script setup lang="ts">
import AnimatedBlock from '@/components/animated-block';
import { GridCol, GridRow } from '@/components/layout/grid';
import PageLayout from '@/components/layout/structural/PageLayout.vue';
</script>
