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
import AnimatedBlock from '@/components/AnimatedBlock.vue';
import GridCol from '@/components/layout/grid/GridCol.vue';
import GridRow from '@/components/layout/grid/GridRow.vue';
import PageLayout from '@/components/layout/structural/PageLayout.vue';
</script>
