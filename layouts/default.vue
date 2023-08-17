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
</script>

<template>
    <div>
        <PartialsNavbar :data="menu" />
        <slot />
    </div>
    
</template>