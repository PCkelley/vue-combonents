<template>
  <div
    v-if="isLoading"
    class="m-2 w-28 h-12 rounded-full bg-gray-300 animate-pulse dark:bg-gray-400"/>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>
