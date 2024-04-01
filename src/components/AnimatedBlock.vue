<template>
    <svg
        viewBox="0 0 100 100"
        width="100"
        height="100"
        :fill="fill"
        @mouseover="isHovered = true"
        @mouseout="isHovered = false"
        @click="toggleAnimations"
    >
        <defs>
            <linearGradient
                :id="SVGIds.GRADIENT"
                :x1="`${isHovered ? 0 : coords[0]}%`"
                :y1="`${isHovered ? 0 : coords[1]}%`"
                :x2="`${isHovered ? 50 : coords[2]}%`"
                :y2="`${isHovered ? 100 : coords[3]}%`"
            >
                <stop
                    offset="0"
                    :stop-color="isHovered ? Colors.SUCCESS : colors[0]"
                    :stop-opacity="isHovered ? 1 : opacities[0]"
                />
                <stop
                    offset="1"
                    :stop-color="isHovered ? Colors.INFO : colors[1]"
                    :stop-opacity="isHovered ? 1 : opacities[1]"
                />
            </linearGradient>
        </defs>
        <rect
            x="0"
            y="0"
            width="100"
            height="100"
            :rx="rx"
        />
    </svg>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, ref, toRaw } from 'vue';
import { useToastsStore } from '@/stores';

enum SVGIds {
    GRADIENT = 'gradient',
}

enum Colors {
    SUCCESS = '#42d392',
    INFO = '#647eff',
    WHITE = '#ffffff',
}

enum AnimationPlayState {
    PAUSED = 'paused',
    RUNNING = 'running',
}

const { showSuccessToast, showWarningToast } = useToastsStore();

const isHovered = ref(false);
const fill = ref(`url(#${SVGIds.GRADIENT})`);

// Rect rx ticking
const rx = ref(25);
const borderRadius = computed(() => `${rx.value}px`);
const rxStep = ref(0.05);
const rxIncrement = ref(true);
function updateRx() {
    if (rx.value <= 0) rxIncrement.value = true;
    if (rx.value >= 50) rxIncrement.value = false;

    if (rxIncrement.value) rx.value += rxStep.value;
    else rx.value -= rxStep.value;

    rx.value = Number(rx.value.toFixed(3));
}
let rxInterval = setInterval(updateRx);

// Rect gradient opacity ticking
const opacities = reactive<[number, number]>([0.25, 0.75]);
const opacitiesIncrements = reactive<[boolean, boolean]>([true, true]);
const opacityStep = ref(0.001);
function updateOpacities() {
    opacities.forEach((value, index) => {
        if (value <= 0) opacitiesIncrements[index] = true;
        if (value >= 1) opacitiesIncrements[index] = false;

        if (opacitiesIncrements[index]) opacities[index] += opacityStep.value;
        else opacities[index] -= opacityStep.value;

        opacities[index] = Number(opacities[index].toFixed(3));
    });
}
let opacitiesInterval = setInterval(updateOpacities);

// Rect gradient coords ticking
const coords = reactive<[number, number, number, number]>([0, 0, 50, 100]);
const coordsIncrements = reactive<[boolean, boolean, boolean, boolean]>([true, true, true, false]);
const coordsSteps = reactive<[number, number, number, number]>([0.001, 0.004, 0.005, 0.01]);
function updateGradientCoords() {
    coords.forEach((value, index) => {
        if (value <= 0) coordsIncrements[index] = true;
        if (value >= 100) coordsIncrements[index] = false;

        if (coordsIncrements[index]) coords[index] += coordsSteps[index];
        else coords[index] -= coordsSteps[index];

        coords[index] = Number(coords[index].toFixed(3));
    });
}
let coordsInterval = setInterval(updateGradientCoords);

// Rect gradient colors ticking
const colors = reactive<[string, string]>([Colors.SUCCESS, Colors.INFO]);
const colorsIncrements = reactive<[boolean, boolean]>([true, true]);
const colorStep = ref(255);
function updateColors() {
    colors.forEach((value, index) => {
        const value16 = parseInt(value, 16);

        if (value16 <= 0) colorsIncrements[index] = true;
        if (value16 >= parseInt(Colors.WHITE.slice(1), 16)) colorsIncrements[index] = false;

        if (colorsIncrements[index])
            colors[index] = '#' + (parseInt(colors[index].slice(1), 16) + colorStep.value).toString(16);
        else colors[index] = '#' + (parseInt(colors[index].slice(1), 16) - colorStep.value).toString(16);
    });
}
let colorsInterval = setInterval(updateColors, 50);

const slideAnimationState = ref(AnimationPlayState.RUNNING);
const isAnimationsActive = ref(true);
function toggleAnimations() {
    if (isAnimationsActive.value) {
        clearIntervals();
        viewLog();
        slideAnimationState.value = AnimationPlayState.PAUSED;
        showWarningToast({ text: 'Intervals has been stopped' });
    } else {
        rerunIntervals();
        slideAnimationState.value = AnimationPlayState.RUNNING;
        showSuccessToast({ text: 'Intervals has been started' });
    }

    isAnimationsActive.value = !isAnimationsActive.value;
}

function rerunIntervals() {
    rxInterval = setInterval(updateRx);
    opacitiesInterval = setInterval(updateOpacities);
    coordsInterval = setInterval(updateGradientCoords);
    colorsInterval = setInterval(updateColors, 50);
}

function viewLog() {
    console.info(
        'rx:',
        rx.value,
        '\nopacities:',
        toRaw(opacities),
        '\ngradient coords:',
        toRaw(coords),
        '\ncolors:',
        toRaw(colors),
    );
}

function clearIntervals() {
    [rxInterval, opacitiesInterval, coordsInterval, colorsInterval].forEach((interval) => clearInterval(interval));
}

onBeforeUnmount(clearIntervals);
</script>

<style lang="scss" scoped>
@import '@/styles/utilities';

@keyframes slide {
    from {
        margin-left: 0;
    }

    to {
        margin-left: calc(100% - 100px);
    }
}

svg {
    @extend .cursor-pointer;
    animation: 2s linear 0s infinite alternate slide;
    animation-play-state: v-bind(slideAnimationState);
    border-radius: v-bind(borderRadius);
    outline: 4px solid transparent;
    transition: outline-color 50ms;

    &:hover {
        outline-color: currentColor;
    }
}
</style>
