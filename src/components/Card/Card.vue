<template>
  <div v-if="isLoading" class="flex w-full p-2 rounded-md bg-gray-100 animate-pulse dark:bg-gray-600">
    <div class="bg-gray-300 flex-none h-20 w-20 rounded-md dark:bg-gray-400"/>
    <div class="px-2 flex-1">
      <div class="bg-gray-300 h-3 w-full my-3 rounded-md dark:bg-gray-400"></div>
      <div class="bg-gray-300 h-3 w-full my-3 rounded-md dark:bg-gray-400"></div>
      <div class="bg-gray-300 h-3 w-full my-3 rounded-md dark:bg-gray-400"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>
