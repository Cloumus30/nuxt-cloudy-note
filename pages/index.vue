
<script setup>
    import { PartialsTable } from '#components'

    definePageMeta({
        layout: 'layout1',
        middleware:['auth'],
    })

    useHead({
        title:"Cloudy Notes"
    });

    const { $api } = useNuxtApp();

    const {data:dataUser, error} = await $api.user.getCollection({server:true, lazy:true});
    const notifState = useNotifState();
    const authState = useAuthState();

    if(authState.value.isAuthenticated){
        console.log('Authenticated');
    }

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
