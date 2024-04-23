<script setup lang="ts">

/* Custom Layout */

definePageMeta({
  layout: 'authenticated'
})

import Mail from '../components/pages/messages/Mail.vue'
import { accounts, mails } from '../components/pages/messages/data/mails'

</script>

<template>
  <main>
    <div class="hidden flex-col md:flex h-full">
      <Mail
        :accounts="accounts"
        :mails="mails"
        :nav-collapsed-size="4"
      />
    </div>
</main>
</template>
