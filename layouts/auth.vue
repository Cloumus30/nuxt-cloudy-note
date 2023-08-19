<script setup lang="ts">
    onMounted(()=>{
        const loading = useLoad();
        loading.value = false;
    })
</script>

<template>
    <div>
        <PartialsSpinnerPage></PartialsSpinnerPage>
        <div class="bg-dark1 bg-no-repeat bg-cover h-screen w-screen flex justify-center">
            <div class="self-center text-white  rounded p-7 md:w-1/4 w-3/4 bg-gray-600">
                <slot />
            </div>
        </div>
    </div>
    
</template>