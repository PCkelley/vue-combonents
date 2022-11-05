<template>
  <div
    v-if="isLoading"
    tabindex="0"
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
