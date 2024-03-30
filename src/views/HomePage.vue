<template>
    <PageLayout>
        <grid-row>
            <grid-col>
                <h1 class="text-primary">Playground</h1>
            </grid-col>
        </grid-row>
    </PageLayout>
</template>

<script setup lang="ts">
import GridCol from '@/components/layout/grid/GridCol.vue';
import GridRow from '@/components/layout/grid/GridRow.vue';
import PageLayout from '@/components/layout/structural/PageLayout.vue';
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
}
</style>
