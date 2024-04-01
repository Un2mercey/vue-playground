<template>
    <div
        v-if="data"
        ref="infoRef"
        class="info"
    >
        <grid-row justify="space-between">
            <grid-col class="d-flex flex-column gap-1 flex-0-0">
                <span class="regular-subtitle-1 text-primary">Positioning</span>
                <grid-row class="pl-2">
                    <grid-col class="d-flex gap-1">
                        <span>x:</span>
                        <span class="text-success">{{ data.posX?.toFixed() }}</span>
                    </grid-col>
                </grid-row>
                <grid-row class="pl-2">
                    <grid-col class="d-flex gap-1">
                        <span>y:</span>
                        <span class="text-success">{{ data.posY?.toFixed() }}</span>
                    </grid-col>
                </grid-row>
            </grid-col>
            <grid-col class="d-flex flex-column gap-1 flex-0-0">
                <span class="regular-subtitle-1 text-primary align-self-end">Radius</span>
                <grid-row class="pr-2">
                    <grid-col class="d-flex gap-1 justify-end">
                        <span>rx:</span>
                        <span class="text-info">{{ data.rx.toFixed(2) }}</span>
                    </grid-col>
                </grid-row>
            </grid-col>
        </grid-row>
        <grid-row
            justify="space-between"
            class="gap-8"
        >
            <grid-col class="d-flex flex-column gap-1 flex-0-0">
                <span class="regular-subtitle-1 text-primary text-nowrap">Opacity#1</span>
                <grid-row class="pl-2">
                    <grid-col>
                        <span class="text-success">{{ data.opacities[0].toFixed(2) }}</span>
                    </grid-col>
                </grid-row>
            </grid-col>
            <grid-col class="d-flex flex-column gap-1 flex-0-0">
                <span class="regular-subtitle-1 text-primary text-nowrap align-self-end">Opacity#2</span>
                <grid-row class="pr-2">
                    <grid-col class="d-flex justify-end">
                        <span class="text-info">{{ data.opacities[1].toFixed(2) }}</span>
                    </grid-col>
                </grid-row>
            </grid-col>
        </grid-row>
        <grid-row
            justify="space-between"
            class="gap-8"
        >
            <grid-col class="d-flex flex-column gap-1 flex-0-0">
                <span class="regular-subtitle-1 text-primary text-nowrap">Color#1</span>
                <grid-row class="pl-2">
                    <grid-col class="d-flex gap-1">
                        <span>x1:</span>
                        <span :style="{ color: data.colors[0] }">{{ data.coords[0].toFixed(2) }}%</span>
                    </grid-col>
                </grid-row>
                <grid-row class="pl-2">
                    <grid-col class="d-flex gap-1">
                        <span>y1:</span>
                        <span :style="{ color: data.colors[0] }">{{ data.coords[1].toFixed(2) }}%</span>
                    </grid-col>
                </grid-row>
            </grid-col>
            <grid-col class="d-flex flex-column gap-1 flex-0-0">
                <span class="regular-subtitle-1 text-primary text-nowrap align-self-end">Color#2</span>
                <grid-row class="pr-2">
                    <grid-col class="d-flex gap-1 justify-end">
                        <span>x2:</span>
                        <span :style="{ color: data.colors[1] }">{{ data.coords[2].toFixed(2) }}%</span>
                    </grid-col>
                </grid-row>
                <grid-row class="pr-2">
                    <grid-col class="d-flex gap-1 justify-end">
                        <span>y2:</span>
                        <span :style="{ color: data.colors[1] }">{{ data.coords[3].toFixed(2) }}%</span>
                    </grid-col>
                </grid-row>
            </grid-col>
        </grid-row>
        <grid-row
            justify="space-between"
            class="gap-8"
        >
            <grid-col class="d-flex flex-column gap-1 flex-0-0">
                <span class="regular-subtitle-1 text-primary text-nowrap">Hex#1</span>
                <grid-row class="pl-2">
                    <grid-col class="d-flex gap-2 align-center">
                        <div
                            class="rect"
                            :style="{ background: data.colors[0] }"
                        />
                        <span :style="{ color: data.colors[0] }">{{ data.colors[0] }}</span>
                    </grid-col>
                </grid-row>
            </grid-col>
            <grid-col class="d-flex flex-column gap-1 flex-0-0">
                <span class="regular-subtitle-1 text-primary text-nowrap align-self-end">Hex#2</span>
                <grid-row class="pr-2">
                    <grid-col class="d-flex gap-2 align-center justify-end">
                        <div
                            class="rect"
                            :style="{ background: data.colors[1] }"
                        />
                        <span :style="{ color: data.colors[1] }">{{ data.colors[1] }}</span>
                    </grid-col>
                </grid-row>
            </grid-col>
        </grid-row>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { TooltipData } from '@/@interfaces';
import { GridCol, GridRow } from '@/components/layout/grid';

const { data } = defineProps<{
    data?: TooltipData;
}>();

const infoRef = ref<HTMLDivElement>();
const offsetTop = ref(24);
const offsetLeft = computed(() => infoRef.value?.getBoundingClientRect().width);
const leftPos = computed(() => (data?.posX ? `calc(${data.posX}px - ${offsetLeft.value}px / 2)` : 0));
const topPos = computed(() => (data?.posY ? `calc(${data.posY}px + ${offsetTop.value}px)` : 0));
</script>

<style lang="scss" scoped>
@import '@/styles/colors';
@import '@/styles/typography';
@import '@/styles/flex';

$color: rgba($app-background-secondary, 0.9);

.info {
    @extend #{'.gap-2', '.regular-body'};
    position: absolute;
    left: v-bind(leftPos);
    top: v-bind(topPos);
    padding: 0.5rem 0.75rem;
    border-radius: 0.625rem;
    background: $color;
    box-shadow: 0 7px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    min-width: 220px;

    &:before {
        content: '';
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        border-style: solid;
        border-width: 0 0.375rem 0.375rem 0.375rem;
        border-color: transparent transparent $color transparent;
        top: -0.375rem;
        left: calc(50% - 0.375rem);
    }

    .rect {
        width: 16px;
        height: 16px;
        outline: 1px solid currentColor;
        border-radius: 2px;
    }
}
</style>
