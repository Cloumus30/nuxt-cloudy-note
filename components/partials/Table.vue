<script setup>

const props = defineProps(['data']);

</script>

<template>
    <div class="relative overflow-x-auto mx-7">
        <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-white uppercase bg-blue-700 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Username
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Phone
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dat in props.data" class="even:bg-blue-100 odd:bg-blue-200 border-b">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ dat.name }}
                    </th>
                    <td class="px-6 py-4 text-gray-700">
                        {{dat.username}}
                    </td>
                    <td class="px-6 py-4 text-gray-700">
                        {{dat.email}}
                    </td>
                    <td class="px-6 py-4 text-gray-700">
                        {{dat.phone}}
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>