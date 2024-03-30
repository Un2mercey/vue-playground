<template>
    <PageLayout>
        <SVGIcon
            name="chevron-right"
            fill="red"
            :width="Sizes.XXL"
            :height="Sizes.XXL"
        />
    </PageLayout>
</template>

<script setup lang="ts">
import { Sizes } from '@/@enums';
import SVGIcon from '@/components/icons/SVGIcon.vue';
import PageLayout from '@/components/layout/structural/PageLayout.vue';
</script>
