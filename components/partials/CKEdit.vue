<script setup>

onMounted(async ()=>{
    if(!process.server){
        // const CKEditor = await import('@ckeditor/ckeditor5-vue')
        const editor = await import('@ckeditor/ckeditor5-build-classic')
        console.log(document.getElementById('editorCk'))
        editor.default.create(document.getElementById('editorCk')).catch((err) =>{
            console.log(err)
        })
    }
})

</script>

<template>
    <div>
        <ClientOnly>
            
            <div class="bg-dark1 text-black coba">
                <div class="ck-content" id="editorCk"></div>
            </div>
        
            
        </ClientOnly>
        
    </div>
</template>