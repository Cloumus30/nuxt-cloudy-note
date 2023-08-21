<template>
    <NuxtLayout name="dashboard">
         <ClientOnly>
            <h1>QUILL EDITOR</h1>
            <PartialsQuill></PartialsQuill>
            
            <br>
            <br>

            <h1>TUI EDITOR</h1>
            <PartialsTuiEditor></PartialsTuiEditor>

            <br>
            <br>

            <h1>CK Editor</h1>
            <PartialsCKEdit></PartialsCKEdit>

         </ClientOnly>
        
         
    </NuxtLayout>
</template>