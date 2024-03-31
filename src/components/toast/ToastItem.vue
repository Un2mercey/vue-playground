<template>
    <div
        v-show="toast"
        class="toast-item"
    >
        <grid-row
            align="center"
            class="toast-item__text gap-6"
        >
            <grid-col class="d-flex align-center gap-3">
                <SVGIcon
                    v-if="toast.type"
                    :name="toast.type"
                    :fill="fill"
                    :width="Sizes.LG"
                    :height="Sizes.LG"
                />
                {{ toast.text }}
            </grid-col>
            <grid-col
                class="d-flex flex-grow-0 cursor-pointer"
                @mouseover="hideHover = true"
                @mouseleave="hideHover = false"
                @click="hide"
            >
                <SVGIcon
                    name="close"
                    :fill="closeFill"
                />
            </grid-col>
        </grid-row>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { Sizes, ToastTypes } from '@/@enums';
import { Toast } from '@/@interfaces';
import { useToastsStore } from '@/stores';
import SVGIcon from '@/components/icons/SVGIcon.vue';
import GridCol from '@/components/layout/grid/GridCol.vue';
import GridRow from '@/components/layout/grid/GridRow.vue';

const { toast } = defineProps<{
    toast: Toast;
}>();

const fillMap = new Map<ToastTypes, string>()
    .set(ToastTypes.ERROR, '#d64d4d')
    .set(ToastTypes.SUCCESS, '#42d392')
    .set(ToastTypes.INFO, '#647eff')
    .set(ToastTypes.WARNING, '#f38b01');

const toastsStore = useToastsStore();
const { hideToast } = toastsStore;

const hideHover = ref(false);
const closeFill = computed(() => (hideHover.value ? '#d64d4d' : '#9d9ea1'));
const fill = computed(() => fillMap.get(toast.type));
const hideDelay = computed(() => toast.timeout || 4700);
const animationDuration = computed(() => `${(hideDelay.value + 300) / 1000}s`);

function hide() {
    hideToast(toast.id);
}

function hideAfter() {
    setTimeout(hide, hideDelay.value);
}

onMounted(hideAfter);
</script>

<style lang="scss" scoped>
@import '@/styles/colors/variables';

.toast-item {
    position: relative;
    overflow: hidden;
    margin-bottom: 16px;
    padding: 13px 16px 13px 20px;
    line-height: 1;
    border-radius: 19px;
    background: $app-background-secondary;
    color: $app-color;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0;
        background-color: $app-background-light;
        animation: fillWidth v-bind(animationDuration) ease-out forwards;
    }

    &__text {
        position: relative;
    }
}
</style>
