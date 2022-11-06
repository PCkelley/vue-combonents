<template>
  <div
    v-if="isLoading"
    role="progressbar"
    class="w-full h-full bg-gray-200 animate-pulse dark:bg-gray-600">
  </div>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: true
  }
})
</script>
