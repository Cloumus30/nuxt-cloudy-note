<script setup>
    import {PartialsNavbar} from "#components";
    const menu = [
            {
                'name' : 'Home',
                'url' : '/'
            },
            {
                'name' : 'Login',
                'url' : '/auth/login'
            },
            {
                'name' : 'Register',
                'url' : '/auth/register'
            }
        ];

    

    onMounted(()=>{
        const loading = useLoad();
        loading.value = false;
    })
</script>

<template>
    <div>
        <PartialsSpinnerPage></PartialsSpinnerPage>
        <PartialsNavbar :data="menu" />
        <slot />
    </div>
    
</template>