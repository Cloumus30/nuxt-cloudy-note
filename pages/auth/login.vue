<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
    layout: false,
})

useHead({
    title: 'Login',
    meta:[
        {name: 'description', content: 'Short Qr Login Page'},
        {name: 'author', content: 'Cloudias Imani Pradana'}
    ]
})

// Check If Logged In
const sub = useCookie('sub');
if(sub.value){
    // console.log('Login Authenticated')
    await navigateTo('/')
}

const passEye = ref('ph:eye-closed-fill')
const passType = ref('password')

const email = ref("");
const password = ref("");

const isLoadSubmit = ref(false);


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

const {$api} = useNuxtApp();

// Submit Login
async function submitLogin(){
    const body = {
        email: email.value,
        password: password.value,
    }
    isLoadSubmit.value = true;
    const {data, error} = await $api.auth.login(body);
    if(error.value){
        notifParse('error', error.value.data.message, error.value.statusCode);
    }
    if(data.value){
        const sub = useCookie('sub', {maxAge:60*60*24, sameSite:true});
        sub.value = data.value.data.access_key;
        await navigateTo('/')
        notifParse('success', "Success Login", 200)
    }
    isLoadSubmit.value = false;
}

</script>

<template>
    <NuxtLayout name="auth">
        <h1 class="text-center">Halaman Login</h1>

        <form action="" class="mt-10 w-full" @click.prevent="">
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" name="email" id="email" v-model="email" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="email" class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Alamat Email
                </label>
            </div>

            <div class="flex">
                <div class="relative z-0 w-full mb-6 group">
                    <input :type="passType" name="password" id="password" v-model="password" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="password" class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                </div>
                <label @click="togglePass" for="id" class="hover:cursor-pointer flex mb-0.5">
                    <Icon :name="passEye" size="20" class="self-center pb-0.5 border-b-2 border-white"/>
                    <!-- <Icon name="ph:eye-closed-fill"/> -->
                </label>
            </div>

            <div class="mb-6 w-full flex justify-end">
                <a class="hover:text-blue-700 hover:cursor-pointer text-sm" href="">Forgot Password?</a>
            </div>
            
            <div class="mb-6 w-full flex justify-center">
                <PartialsButtonSubmit :isLoadSubmit="isLoadSubmit" @submit="submitLogin"></PartialsButtonSubmit>
            </div>

            <div class="mb-6 text-center text-xs">
                <p>Don't Have Account? 
                    <NuxtLink class="hover:text-blue-700 hover:cursor-pointer underline" to="/auth/register">
                        Register Here
                    </NuxtLink>
                </p>
            </div>
        </form>
    </NuxtLayout>
    
</template>