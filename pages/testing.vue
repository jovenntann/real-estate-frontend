<script setup lang="ts">

import Test from '@/components/testing/Test.vue'



import { useFiltersStore } from '~/store/filters'

// Importing the storeToRefs function from pinia
import { storeToRefs } from 'pinia'

// Initializing a ref for the input value
const inputVal = ref('')

// Using the filters store
const filtersStore = useFiltersStore()

// Destructuring the addValueToFilterList function from the filters store
const { addValueToFilterList, removeValueFromFilterList } = filtersStore

// Using the storeToRefs function to get the filters list from the filters store
const { filtersList } = storeToRefs(filtersStore)
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-4 bg-white rounded shadow-md w-64">
      <ul class="mb-8   ">
        <li v-for="filter in filtersList" :key="filter" class="text-gray-700">{{ filter }}</li>
      </ul>
      <div class="flex items-center">
        <input v-model="inputVal" class="flex-grow p-2 border rounded mr-2" />
        <button @click="addValueToFilterList(inputVal)" class="p-2 bg-blue-500 text-white rounded mr-2">+</button>
        <button @click="removeValueFromFilterList(inputVal)" class="p-2 bg-red-500 text-white rounded">-</button>
      </div>
    </div>
    <div class="p-4 bg-white rounded shadow-md w-64">
      <Test />
    </div>
  </div>
</template>
