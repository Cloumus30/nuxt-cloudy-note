
<script setup>
    import { PartialsTable } from '#components'

    definePageMeta({
        layout: 'default'
    })

    const { $api } = useNuxtApp();
    const {data:dataUser, error} = await $api.user.getCollection({server:true, lazy:true});
    const notifState = useNotifState();

    async function showToast(){
        notifState.value = {
            type:'success',
            message:"Coba"
        }
        
    }
</script>

<template>
    <div>
        <h1 class="text-center text-2xl my-7">
            Landing Page
        </h1>
        <button @click="showToast">
            Coba Toast
        </button>
        <PartialsTable :data="dataUser"/>
        
    </div>
</template>
