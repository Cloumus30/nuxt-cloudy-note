<script setup>
    onMounted(()=>{
        const loading = useLoad();
        loading.value = false;
    })
</script>

<template>
    <div class="bg-dark2">
        <PartialsSpinnerPage></PartialsSpinnerPage>
        <PartialsSideNav></PartialsSideNav>
        <div class="p-4 sm:ml-64 text-white max-h-screen overflow-auto">
            <slot />
        </div>
    </div>
    
</template>