<template>
  <div
    v-if="isLoading"
    class="bg-gray-200 animate-pulse w-full h-full dark:bg-gray-600"/>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>
