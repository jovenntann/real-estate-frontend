<script setup lang="ts">

/* Custom Layout */

definePageMeta({
  layout: 'authenticated'
})

</script>

<template>
  <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <div class="flex flex-col items-start">
      <h1 class="text-lg font-semibold md:text-2xl">
        Orders
      </h1>
      <p class="text-sm leading-none mt-2 text-gray-500">
        Here's what's going on today.
      </p>
    </div>
  </main>
</template>

