<template>
    <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
const { msg } = defineProps<{ msg: string }>();
</script>
