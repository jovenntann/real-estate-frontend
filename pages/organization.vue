<script setup lang="ts">
import { OrganizationProfile } from 'vue-clerk'

definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div class="grid h-full place-items-center">
    <OrganizationProfile />
  </div>
</template>