<template>
    <main>
        <div class="d-flex h-100">
            <section>
                <div class="d-flex flex-column gap-6 h-100">
                    <grid-row>
                        <grid-col>
                            <h1>
                                <slot name="title">
                                    {{ title }}
                                </slot>
                            </h1>
                        </grid-col>
                    </grid-row>
                    <slot />
                </div>
            </section>
        </div>
        <ToastList />
        <SVGContainer />
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SVGContainer from '@/components/icons/SVGContainer.vue';
import GridCol from '@/components/layout/grid/GridCol.vue';
import GridRow from '@/components/layout/grid/GridRow.vue';
import ToastList from '@/components/toast/ToastList.vue';

const route = useRoute();
const title = computed(() => route.meta.title || 'Playground');
</script>

<style scoped lang="scss">
@import '@/styles/typography';

main {
    padding-left: var(--padding-left);
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    flex: 1 0 auto;

    section {
        padding: 1rem;
        flex: 1 0;

        h1 {
            @extend .text-primary;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
        }
    }
}
</style>
