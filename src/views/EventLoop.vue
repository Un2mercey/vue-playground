<template>
    <PageLayout>
        <grid-row>
            <grid-col class="d-flex flex-column gap-8">
                <grid-row
                    v-for="block in 32"
                    :key="`${block}-${getTime(new Date())}`"
                >
                    <grid-col>
                        <AnimatedBlock :id="block" />
                    </grid-col>
                </grid-row>
            </grid-col>
        </grid-row>
    </PageLayout>
</template>

<script setup lang="ts">
import { getTime } from 'date-fns';
import AnimatedBlock from '@/components/animated-block';
import { GridCol, GridRow } from '@/components/layout/grid';
import PageLayout from '@/components/layout/structural/PageLayout.vue';
</script>
