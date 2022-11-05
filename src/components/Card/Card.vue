<template>
  <div
    v-if="isLoading"
    tabindex="0"
    role="progressbar"
    class="flex w-full p-2 rounded-md bg-gray-100 animate-pulse dark:bg-gray-600">
    <div class=" flex-none h-20 w-20 rounded-md bg-gray-300 dark:bg-gray-400"/>
    <div class="px-2 flex-1">
      <div class="h-3 w-full my-3 rounded-md bg-gray-300 dark:bg-gray-400"></div>
      <div class="h-3 w-full my-3 rounded-md bg-gray-300 dark:bg-gray-400"></div>
      <div class="h-3 w-full my-3 rounded-md bg-gray-300 dark:bg-gray-400"></div>
    </div>
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
