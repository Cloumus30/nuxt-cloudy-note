<script setup lang="ts">

    const search = ref('');

    function clickSearch(){
        console.log(search);
    }
</script>

<template>
    <NuxtLayout name="dashboard">
        <h1>Dahsboard</h1>

        <PartialsSearchInput @searchact="clickSearch" v-model="search" class="my-4 bg-dark1"></PartialsSearchInput>

        <div class="grid grid-cols-3 justify-start m-7 gap-5">
            <PartialsNoteCard></PartialsNoteCard>
            <PartialsNoteCard></PartialsNoteCard>
            <PartialsNoteCard></PartialsNoteCard>
            <PartialsNoteCard></PartialsNoteCard>
        </div>
    </NuxtLayout>
    
</template>