<template>
    <PageLayout>
        <SVGIcon
            name="chevron-right"
            fill="red"
            :width="Sizes.XXL"
            :height="Sizes.XXL"
        />

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse magnam non numquam perferendis quam, qui!
        Aliquam, aliquid commodi cumque, eaque eos ipsa ipsum nulla officiis repellat veritatis vitae voluptas!
    </PageLayout>
</template>

<script setup lang="ts">
import { Sizes } from '@/@enums';
import SVGIcon from '@/components/icons/SVGIcon.vue';
import PageLayout from '@/components/layout/structural/PageLayout.vue';
</script>

<style scoped></style>
