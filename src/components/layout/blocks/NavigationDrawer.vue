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
                    :fill="modelValue && '#647eff'"
                    :rotation="modelValue ? 180 : 0"
                />
            </div>
            <div
                class="nav-list"
                role="listbox"
            >
                <grid-row
                    v-for="{ name, text, icon, isActive } in items"
                    :key="name"
                >
                    <grid-col>
                        <div
                            class="nav-list__item"
                            :class="{ '--active': isActive }"
                        >
                            <SVGIcon
                                :name="icon"
                                :width="Sizes.XL"
                                :height="Sizes.XL"
                                :fill="isActive && '#42d392'"
                            />
                            <span>{{ text }}</span>
                        </div>
                    </grid-col>
                </grid-row>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { RouteNames, Sizes } from '@/@enums';
import SVGIcon from '@/components/icons/SVGIcon.vue';
import GridCol from '@/components/layout/grid/GridCol.vue';
import GridRow from '@/components/layout/grid/GridRow.vue';

enum Emits {
    UPDATE_MODEL_VALUE = 'update:modelValue',
}

const { modelValue } = defineProps<{
    modelValue: boolean;
}>();

const emit = defineEmits<{
    (e: Emits.UPDATE_MODEL_VALUE, value: typeof modelValue): void;
}>();

const route = useRoute();
const routeName = computed(() => String(route.name));
const items = computed(() => [
    {
        name: RouteNames.HOME,
        text: 'Playground',
        icon: `${RouteNames.HOME}`.toLowerCase(),
        isActive: routeName.value === RouteNames.HOME,
    },
]);
</script>

<style scoped lang="scss">
@import '@/styles/typography';
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

            &__item {
                display: flex;
                align-items: center;
                padding: 0.5rem;
                height: 24px;
                overflow: hidden;
                white-space: nowrap;
                flex-wrap: nowrap;
                position: relative;
                cursor: default;

                svg {
                    display: block;
                    position: fixed;
                }

                span {
                    margin-left: calc(24px + 0.75rem);
                    @extend .regular-subtitle-1;
                }

                &:not(.--active) {
                    @extend .cursor-pointer;
                }

                &.--active {
                    span {
                        @extend .text-primary;
                    }
                }
            }
        }
    }
}
</style>
