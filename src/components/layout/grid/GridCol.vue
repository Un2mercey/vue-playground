<template>
    <div :class="classList">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Cols = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
type Aligns = 'self-start' | 'self-center' | 'self-end';

const { cols, offset, align } = defineProps<{
    cols?: Cols;
    offset?: Cols;
    align?: Aligns;
}>();

const classList = computed(() => [
    'grid-col',
    cols && `grid-col-${cols}`,
    offset && `offset-${offset}`,
    align && `align-${align}`,
]);
</script>

<style scoped lang="scss">
@import 'index';
@include grid-col-x;
@include offset-x;

.grid-col {
    flex-basis: 0;
    flex-grow: 1;
    width: 100%;
}
</style>
