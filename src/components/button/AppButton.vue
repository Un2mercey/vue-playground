<template>
    <button
        :class="classList"
        :disabled="disabled"
    >
        <span class="btn__content">
            <grid-row
                justify="center"
                align="center"
                class="flex-nowrap"
            >
                <grid-col
                    v-if="slots.prepend"
                    class="d-flex"
                >
                    <slot name="prepend" />
                </grid-col>
                <grid-col
                    v-if="slots.default"
                    class="d-flex"
                >
                    <slot />
                </grid-col>
                <grid-col
                    v-if="slots.append"
                    class="d-flex"
                >
                    <slot name="append" />
                </grid-col>
            </grid-row>
        </span>
    </button>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { Sizes } from '@/@enums';
import { ButtonShapes, ButtonSizes, ButtonTypes } from '@/@enums/button.ts';
import GridCol from '@/components/layout/grid/GridCol.vue';
import GridRow from '@/components/layout/grid/GridRow.vue';

const {
    type = ButtonTypes.PRIMARY,
    shape = ButtonShapes.DEFAULT,
    size = Sizes.MD,
    disabled,
} = defineProps<{
    type?: ButtonTypes;
    shape?: ButtonShapes;
    size?: ButtonSizes;
    disabled?: boolean;
}>();

const slots = useSlots();
const isIcon = computed(() => Boolean(!slots.default && (slots.prepend || slots.append)));
const classList = computed(() => ['btn', type, shape, size, { '--icon': isIcon.value }]);
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
