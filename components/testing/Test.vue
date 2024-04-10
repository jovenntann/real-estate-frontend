<script setup lang="ts">
// Importing the filters store from the store directory
import { useFiltersStore } from '~/store/filters'

// Importing the storeToRefs function from pinia
import { storeToRefs } from 'pinia'

// Using the filters store
const filtersStore = useFiltersStore()

// Using the storeToRefs function to get the filters list from the filters store
const { filtersList } = storeToRefs(filtersStore)
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <!-- Rendering the filters list -->
    <ul class="p-4 bg-white rounded shadow-md w-64">
      <li v-for="filter in filtersList" :key="filter" class="text-gray-700 mb-2">{{ filter }}</li>
    </ul>
  </div>
</template>
