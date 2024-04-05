<template>
  <!-- This is triggered by await useFetch -->
  <NuxtLoadingIndicator color="#005b96" :height=6 /> 
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */
</style>