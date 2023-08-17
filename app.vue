<template>
  <ClientOnly>
    <PartialsToast/>
  </ClientOnly>
  
  
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { PartialsToast } from '#components'
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>

