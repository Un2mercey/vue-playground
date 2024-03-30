<template>
    <PageLayout>
        <grid-row>
            <grid-col>
                <h1>Playground</h1>
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
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 64px;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: -1.5px;
    margin: 0;
    text-align: center;
}
</style>
