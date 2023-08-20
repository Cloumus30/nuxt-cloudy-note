<script setup>
    // import EditorJS from '@editorjs/editorjs';
    useHead({
        script: ['https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest']
    })
    onMounted(() =>{
        const el = document.createElement('div');
        console.log(el)
        // if(process.client){
            const editor = new EditorJS({
                holder: 'editor',
                placeholder: 'Input Your Text Here'
            });
            console.log(editor);
        // }
        
        
        
        
    })

</script>

<template>
    <div class="m-20">
        <div id="editor">

        </div>
    </div>
</template>