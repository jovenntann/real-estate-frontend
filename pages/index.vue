<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const redirectToDashboard = () => {
  router.push('/dashboard')
}
redirectToDashboard()
</script>
<template>
</template>