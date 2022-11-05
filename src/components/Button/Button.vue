<template>
  <div
    v-if="isLoading"
    tabindex="0"
    role="progressbar"
    class="w-28 h-12 rounded-full bg-gray-300 animate-pulse text-center dark:bg-gray-400"/>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: true
  }
})
</script>
