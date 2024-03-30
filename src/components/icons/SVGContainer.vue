<template>
    <div
        v-for="[key, value] in svgList.entries()"
        :key="key"
        class="svg-container"
        v-html="value"
    />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useSVGStore } from '@/stores';

const { svgList } = storeToRefs(useSVGStore());
</script>

<style scoped>
.svg-container {
    display: none;
}
</style>
