<script setup lang="ts">
    const props = defineProps({
        isLoadSubmit:{
            type: Boolean,
            required:false,
            default: false
        }
    })
</script>

<template>
    <div>
        <button v-if="!isLoadSubmit" type="submit" @click="$emit('submit')" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3 mr-2 mb-2 focus:outline-none">
                    Login
        </button>
        <button disabled v-if="isLoadSubmit" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3 mr-2 mb-2 focus:outline-none">
            <PartialsSpinner></PartialsSpinner>
        </button>
    </div>
</template>