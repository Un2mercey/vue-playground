<template>
    <div class="toast-list">
        <transition-group name="slide-fade-top-bottom">
            <template
                v-for="toast in toasts"
                :key="toast.id"
            >
                <ToastItem :toast="toast" />
            </template>
        </transition-group>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useToastsStore } from '@/stores';
import ToastItem from './ToastItem.vue';

const { toasts } = storeToRefs(useToastsStore());
</script>

<style lang="scss" scoped>
.toast-list {
    position: fixed;
    left: 50%;
    display: flex;
    flex-direction: column;
    z-index: 2401;
    bottom: 0;
    transform: translate(-50%, -16px);
}
</style>
