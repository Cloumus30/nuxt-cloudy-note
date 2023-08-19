<template>
  <NuxtLayout>
    
    <div v-if="true" class="fixed left-0 top-0 h-0.5 w-full z-50 bg-blue-500" >

    </div>
    <ClientOnly>
      <PartialsToast/>
    </ClientOnly>
    <!-- <NuxtLoadingIndicator /> -->
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

