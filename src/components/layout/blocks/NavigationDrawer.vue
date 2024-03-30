<template>
    <nav class="navigation-drawer">
        <div class="navigation-drawer__content">
            <div
                class="open-icon"
                :class="{ '--opened': modelValue }"
                @click="emit(Emits.UPDATE_MODEL_VALUE, !modelValue)"
            >
                <SVGIcon
                    name="chevron-right"
                    :width="Sizes.XXL"
                    :height="Sizes.XXL"
                    :rotation="modelValue ? 180 : 0"
                />
            </div>
            <div
                class="nav-list"
                role="listbox"
            ></div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { Sizes } from '@/@enums';
import SVGIcon from '@/components/icons/SVGIcon.vue';

enum Emits {
    UPDATE_MODEL_VALUE = 'update:modelValue',
}

const { modelValue } = defineProps<{
    modelValue: boolean;
}>();

const emit = defineEmits<{
    (e: Emits.UPDATE_MODEL_VALUE, value: typeof modelValue): void;
}>();
</script>

<style scoped lang="scss">
@import '@/styles/utilities';

.navigation-drawer {
    left: 0;
    z-index: 1000;
    position: fixed;
    height: 100%;
    top: 0;
    bottom: 0;
    display: flex;
    width: var(--width);
    background-color: var(--background-color);
    transition: all 0.3s;

    &__content {
        display: flex;
        flex-direction: column;
        flex: 0 1 auto;
        height: 100%;
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
        overflow-y: auto;

        .open-icon {
            @extend .cursor-pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 1rem 0.25rem;

            &.--opened {
                justify-content: end;
            }
        }

        .nav-list {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            flex: 1;
            gap: 1rem;
            height: 100%;
            overflow: hidden;
            position: relative;
        }
    }
}
</style>
