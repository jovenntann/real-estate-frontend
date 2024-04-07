<script setup lang="ts">

/* Custom Layout */

definePageMeta({
  layout: 'authenticated'
})

import Mail from '../components/pages/mail/Mail.vue'
import { accounts, mails } from '../components/pages/mail/data/mails'

</script>

<template>
  <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
    <div class="hidden flex-col md:flex h-full">
      <Mail
        :accounts="accounts"
        :mails="mails"
        :nav-collapsed-size="4"
      />
    </div>
</main>
</template>
