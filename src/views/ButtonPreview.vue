<template>
    <PageLayout>
        <grid-row>
            <grid-col class="d-flex flex-column gap-4">
                <template
                    v-for="type in Object.values(ButtonTypes)"
                    :key="type"
                >
                    <template
                        v-for="size in sizes"
                        :key="size"
                    >
                        <grid-row
                            v-for="shape in Object.values(ButtonShapes)"
                            :key="shape"
                            align="stretch"
                            justify="space-around"
                            class="gap-4 flex-nowrap"
                        >
                            <grid-col
                                v-for="col in 5"
                                :key="col"
                                class="d-flex gap-4 flex-grow-0"
                            >
                                <AppButton
                                    v-for="btn in 2"
                                    :key="btn"
                                    :type="type"
                                    :size="size"
                                    :shape="shape"
                                    :disabled="btn === 2"
                                    @click="clickMap.get(type)!()"
                                >
                                    <template
                                        v-if="[1, 2, 5].includes(col)"
                                        #prepend
                                    >
                                        <SVGIcon name="chevron-left" />
                                    </template>
                                    <template
                                        v-if="col !== 5"
                                        #default
                                    >
                                        Button
                                    </template>
                                    <template
                                        v-if="[1, 3].includes(col)"
                                        #append
                                    >
                                        <SVGIcon name="chevron-right" />
                                    </template>
                                </AppButton>
                            </grid-col>
                        </grid-row>
                        <grid-spacer />
                    </template>
                    <grid-spacer />
                </template>
            </grid-col>
        </grid-row>
    </PageLayout>
</template>

<script setup lang="ts">
import { ButtonShapes, ButtonTypes, Sizes, isButtonSize } from '@/@enums';
import { useToastsStore } from '@/stores';
import AppButton from '@/components/button';
import SVGIcon from '@/components/icons';
import { GridCol, GridRow, GridSpacer } from '@/components/layout/grid';
import PageLayout from '@/components/layout/structural/PageLayout.vue';

const { showSuccessToast, showErrorToast, showWarningToast, showInfoToast } = useToastsStore();

const sizes = Object.values(Sizes).filter(isButtonSize).sort();
const clickMap = new Map<ButtonTypes, () => void>()
    .set(ButtonTypes.PRIMARY, success)
    .set(ButtonTypes.CLEAR, info)
    .set(ButtonTypes.SECONDARY, info)
    .set(ButtonTypes.GHOST, warning)
    .set(ButtonTypes.ACCENT, error);

function error() {
    showErrorToast({
        text: 'Error example',
    });
}

function success() {
    showSuccessToast({
        text: 'Success example',
    });
}

function warning() {
    showWarningToast({
        text: 'Warning example',
    });
}

function info() {
    showInfoToast({
        text: 'Info example',
    });
}
</script>
