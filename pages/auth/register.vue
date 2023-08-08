<script setup>
import { ref } from 'vue'
definePageMeta({
    layout: 'auth'
})

const passEye = ref('ph:eye-closed-fill')
const passConf = ref('ph:eye-closed-fill')
const passType = ref('password')
const passConfType = ref('password')

// Toggle Visible Pass
function togglePass() {
    if(passEye.value == 'mdi:eye'){
        passEye.value = 'ph:eye-closed-fill'
        passType.value = 'password'
    }else{
        passEye.value = 'mdi:eye'
        passType.value = 'text'
    }
    
}

// Toggle Visible Pass Confirm
function toggleConfPass(){
    if(passConf.value == 'mdi:eye'){
        passConf.value = 'ph:eye-closed-fill'
        passConfType.value = 'password'
    }else{
        passConf.value = 'mdi:eye'
        passConfType.value = 'text'
    }
}
</script>

<template>
    <div>
        <h1 class="text-center">Halaman Daftar</h1>

        <form action="" class="mt-10 w-full">
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="email" class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Alamat Email
                </label>
            </div>

            <div class="flex">
                <div class="relative z-0 w-full mb-6 group">
                    <input :type="passType" name="password" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="password" class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                </div>
                <label :onclick="togglePass" for="id" class="hover:cursor-pointer flex mb-0.5">
                    <Icon :name="passEye" size="20" class="self-center pb-0.5 border-b-2 border-black"/>
                    <!-- <Icon name="ph:eye-closed-fill"/> -->
                </label>
            </div>
            
            <div class="flex">
                <div class="relative z-0 w-full mb-6 group">
                    <input :type="passConfType" name="password_confirm" id="password_confirm" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="password_confirm" class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Konfirmasi Password
                    </label>
                </div>
                <label :onclick="toggleConfPass" for="id" class="hover:cursor-pointer flex mb-0.5">
                    <Icon :name="passConf" size="20" class="self-center pb-0.5 border-b-2 border-black"/>
                    <!-- <Icon name="ph:eye-closed-fill"/> -->
                </label>
            </div>
            

            <div class="mb-6 w-full flex justify-center">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3 mr-2 mb-2 focus:outline-none">
                    Daftar
                </button>
            </div>

            <div class="mb-6 text-center text-xs">
                <p>Sudah Punya Akun? 
                    <NuxtLink class="hover:text-blue-700 hover:cursor-pointer underline" to="/auth/login">
                        Login Disini
                    </NuxtLink>
                </p>
            </div>
        </form>
    </div>
</template>