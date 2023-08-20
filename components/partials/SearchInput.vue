<script setup lang="ts">
    const props = defineProps({
        modelValue: {
            type: String,
        }
    })

    const emit = defineEmits(['update:modelValue', 'searchact'])

    function updateVal(e:any){
        emit('update:modelValue', e.target.value);
    }
</script>

<template>

    <form>   
        <slot>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon name="material-symbols:search" size="25" color="#ffffff"></Icon>
                </div>
                <input :value="modelValue" @input="updateVal" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-white border border-gray-400 rounded-lg bg-dark1 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Notes" required>
                <button type="submit" @click.prevent="emit('searchact')" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </slot>
    </form>

</template>