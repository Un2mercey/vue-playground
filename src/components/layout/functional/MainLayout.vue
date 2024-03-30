<template>
    <div class="application">
        <div class="application__wrap">
            <slot name="nav" />
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.application {
    display: flex;
    direction: ltr;

    &__wrap {
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        max-width: 100%;
        min-height: 100dvh;
        position: relative;
    }
}
</style>
