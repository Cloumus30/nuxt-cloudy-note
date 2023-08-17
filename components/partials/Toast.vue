<script setup>
const notifState = useNotifState();

watch(notifState, async(newVal, oldVal) =>{
    if(notifState.value.type){
        if(notifState.value.type == 'info'){
            return useNuxtApp().$toast.info(notifState.value.message)
        }
        if(notifState.value.type == 'error'){
            return useNuxtApp().$toast.error(notifState.value.message)
        }
        if(notifState.value.type == 'success'){
            return useNuxtApp().$toast.success(notifState.value.message)
        }
    }
    return useNuxtApp().$toast.info(notifState.value.message)
})
</script>

<template>
    
</template>