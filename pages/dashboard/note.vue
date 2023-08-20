<template>
    <NuxtLayout name="dashboard">
         <ClientOnly>
            <h1>QUILL EDITOR</h1>
            <PartialsQuill></PartialsQuill>
            
            <br>
            <br>

            <h1>TUI EDITOR</h1>
            <PartialsTuiEditor></PartialsTuiEditor>
         </ClientOnly>
        
         
    </NuxtLayout>
</template>