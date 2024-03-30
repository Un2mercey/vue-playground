<template>
    <main>
        <div class="main-section">
            <section>
                <slot />
            </section>
        </div>
        <SVGContainer />
    </main>
</template>

<script setup lang="ts">
import SVGContainer from '@/components/icons/SVGContainer.vue';
</script>

<style scoped lang="scss">
main {
    padding-left: var(--padding-left);
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    flex: 1 0 auto;

    .main-section {
        display: flex;
        height: 100%;

        section {
            padding: 1rem;
            flex: 1 0;
        }
    }
}
</style>
