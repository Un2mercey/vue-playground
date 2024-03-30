<template>
    <div :class="classList">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Aligns = 'start' | 'center' | 'end';
type Justifies = 'start' | 'center' | 'end' | 'space-around' | 'space-between';

const { align, justify } = defineProps<{
    align?: Aligns;
    justify?: Justifies;
}>();

const classList = computed(() => ['grid-row', align && `align-${align}`, justify && `justify-${justify}`]);
</script>

<style scoped lang="scss">
@import 'index';

.grid-row {
    display: flex;
    flex-wrap: wrap;
}
</style>
