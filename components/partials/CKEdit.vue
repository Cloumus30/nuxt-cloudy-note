<script setup>
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import CKEditor from "@ckeditor/ckeditor5-vue";
const CKEditor = await import('@ckeditor/ckeditor5-vue')
console.log(CKEditor);
const editor = ref('')
if(!process.server){
    // const CKEditor = await import('@ckeditor/ckeditor5-vue')
    editor.value = await import('@ckeditor/ckeditor5-build-classic')
}


onMounted(async ()=>{
    // if(!process.server){
    //     const CKEditor = await import('@ckeditor/ckeditor5-vue')
    //     editor.value = await import('@ckeditor/ckeditor5-build-classic')
    //     console.log(editor.value)
    // }
})

</script>

<template>
    <div>
        <ClientOnly>
            <h1>Coba</h1>
            <Ckeditor :editor="editor"></Ckeditor>
        </ClientOnly>
        
    </div>
</template>