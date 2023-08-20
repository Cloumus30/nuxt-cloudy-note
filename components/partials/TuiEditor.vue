<script setup>
    import '@toast-ui/editor/dist/toastui-editor.css';
    
    onMounted(async ()=>{
        if(!process.server){
            const {Editor}  = await import('@toast-ui/editor');

            const editorTui = new Editor({
                el: document.querySelector('#editor'),
                initialEditType: 'wysiwyg',
            });

            editorTui.getMarkdown();
        }
        
    })

</script>

<template>
    <div>
        <ClientOnly>
            <div id="editor">

            </div>
        </ClientOnly>
    </div>
</template>