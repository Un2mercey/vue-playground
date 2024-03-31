<template>
    <svg
        :viewBox="viewBox"
        :width="width"
        :height="height"
        :class="classList"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <use
            :href="`#icon_${name}`"
            class="svg-icon__use"
            v-bind="{ viewBox, width, height }"
        />
    </svg>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Sizes } from '@/@enums';
import { useSVGStore } from '@/stores';

const {
    name,
    width: initialWidth = Sizes.MD,
    height: initialHeight = Sizes.MD,
    viewBox: initialBox,
    rotation = 0,
    fill,
    hoverFill,
} = defineProps<{
    name: string;
    width?: Sizes;
    height?: Sizes;
    viewBox?: string;
    rotation?: number;
    fill?: string | boolean;
    hoverFill?: string | boolean;
}>();

const sizesMap = new Map<Sizes, number>()
    .set(Sizes.XXL, 32)
    .set(Sizes.XL, 24)
    .set(Sizes.LG, 20)
    .set(Sizes.MD, 16)
    .set(Sizes.SM, 12)
    .set(Sizes.XS, 8);

const { addSVG } = useSVGStore();
addSVG(name);

const isHovered = ref(false);
const width = computed(() => sizesMap.get(initialWidth));
const height = computed(() => sizesMap.get(initialHeight));
const viewBox = computed(() => initialBox || `0 0 ${width.value} ${height.value}`);
const classList = computed(() => ['svg-icon', { rotate: rotation, filled: fill || !!hoverFill }]);
const getRotation = computed(() => (rotation ? `${rotation}deg` : 'none'));
const color = computed(() => {
    if (hoverFill) return isHovered.value ? hoverFill : fill;
    else if (fill) return fill;
    else return 'currentColor';
});
</script>

<style scoped lang="scss">
.svg-icon,
.svg-icon .svg-icon__use {
    transition: 0.3s;
}

.svg-icon.filled .svg-icon__use {
    color: v-bind(color);
}

.rotate {
    transform: rotate(v-bind(getRotation));
}
</style>
