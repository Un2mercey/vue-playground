<template>
    <PageLayout>
        <grid-row>
            <grid-col class="d-flex flex-column gap-4">
                <template
                    v-for="type in Object.values(ButtonTypes)"
                    :key="type"
                >
                    <template
                        v-for="size in Object.values(Sizes)
                            .filter((value) => ![Sizes.XXL, Sizes.XL].includes(value))
                            .sort()"
                        :key="size"
                    >
                        <template
                            v-for="shape in Object.values(ButtonShapes)"
                            :key="shape"
                        >
                            <grid-row
                                align="stretch"
                                justify="space-around"
                                class="gap-4 flex-nowrap"
                            >
                                <grid-col class="d-flex gap-4 flex-grow-0">
                                    <AppButton
                                        :type="type"
                                        :size="size"
                                        :shape="shape"
                                        @click="clickMap.get(type)!()"
                                    >
                                        <template #prepend>
                                            <SVGIcon name="chevron-left" />
                                        </template>
                                        Button
                                        <template #append>
                                            <SVGIcon name="chevron-right" />
                                        </template>
                                    </AppButton>
                                    <AppButton
                                        :type="type"
                                        :size="size"
                                        :shape="shape"
                                        disabled
                                        @click="clickMap.get(type)!()"
                                    >
                                        <template #prepend>
                                            <SVGIcon name="chevron-left" />
                                        </template>
                                        Button
                                        <template #append>
                                            <SVGIcon name="chevron-right" />
                                        </template>
                                    </AppButton>
                                </grid-col>
                                <grid-col class="d-flex gap-4 flex-grow-0">
                                    <AppButton
                                        :type="type"
                                        :size="size"
                                        :shape="shape"
                                        @click="clickMap.get(type)!()"
                                    >
                                        <template #prepend>
                                            <SVGIcon name="chevron-left" />
                                        </template>
                                        Button
                                    </AppButton>
                                    <AppButton
                                        :type="type"
                                        :size="size"
                                        :shape="shape"
                                        disabled
                                        @click="clickMap.get(type)!()"
                                    >
                                        <template #prepend>
                                            <SVGIcon name="chevron-left" />
                                        </template>
                                        Button
                                    </AppButton>
                                </grid-col>
                                <grid-col class="d-flex gap-4 flex-grow-0">
                                    <AppButton
                                        :type="type"
                                        :size="size"
                                        :shape="shape"
                                        @click="clickMap.get(type)!()"
                                    >
                                        Button
                                        <template #append>
                                            <SVGIcon name="chevron-right" />
                                        </template>
                                    </AppButton>
                                    <AppButton
                                        :type="type"
                                        :size="size"
                                        :shape="shape"
                                        disabled
                                        @click="clickMap.get(type)!()"
                                    >
                                        Button
                                        <template #append>
                                            <SVGIcon name="chevron-right" />
                                        </template>
                                    </AppButton>
                                </grid-col>
                                <grid-col class="d-flex gap-4 flex-grow-0">
                                    <AppButton
                                        :type="type"
                                        :size="size"
                                        :shape="shape"
                                        @click="clickMap.get(type)!()"
                                    >
                                        Button
                                    </AppButton>
                                    <AppButton
                                        :type="type"
                                        :size="size"
                                        :shape="shape"
                                        disabled
                                        @click="clickMap.get(type)!()"
                                    >
                                        Button
                                    </AppButton>
                                </grid-col>
                                <grid-col class="d-flex gap-4 flex-grow-0">
                                    <AppButton
                                        :type="type"
                                        :size="size"
                                        :shape="shape"
                                        @click="clickMap.get(type)!()"
                                    >
                                        <template #prepend>
                                            <SVGIcon name="chevron-left" />
                                        </template>
                                    </AppButton>
                                    <AppButton
                                        :type="type"
                                        :size="size"
                                        :shape="shape"
                                        disabled
                                        @click="clickMap.get(type)!()"
                                    >
                                        <template #prepend>
                                            <SVGIcon name="chevron-left" />
                                        </template>
                                    </AppButton>
                                </grid-col>
                            </grid-row>
                        </template>
                        <grid-spacer />
                    </template>
                    <grid-spacer />
                </template>
            </grid-col>
        </grid-row>
    </PageLayout>
</template>

<script setup lang="ts">
import { ButtonShapes, ButtonTypes, Sizes } from '@/@enums';
import { useToastsStore } from '@/stores';
import AppButton from '@/components/button/AppButton.vue';
import SVGIcon from '@/components/icons/SVGIcon.vue';
import GridCol from '@/components/layout/grid/GridCol.vue';
import GridRow from '@/components/layout/grid/GridRow.vue';
import GridSpacer from '@/components/layout/grid/GridSpacer.vue';
import PageLayout from '@/components/layout/structural/PageLayout.vue';

const { showSuccessToast, showErrorToast, showWarningToast, showInfoToast } = useToastsStore();

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
