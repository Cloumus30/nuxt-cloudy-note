<script setup>
import '@vueup/vue-quill/dist/vue-quill.snow.css';

if(!process.server){
    const { QuillEditor } = await import('@vueup/vue-quill');

    const { vueApp } = useNuxtApp();
     if (!vueApp._context.components.QuillEditor) vueApp.component('QuillEditor', QuillEditor);
}

onMounted(async () =>{

})


</script>

<template>
    
    <div>
        <QuillEditor
            theme="snow"
        />
    </div>

    
</template>