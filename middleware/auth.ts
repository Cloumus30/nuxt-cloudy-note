export default defineNuxtRouteMiddleware((to, from) => {
    // skip middleware on server
    if (process.server) return
    const sub = useCookie('sub');

    if(!sub.value){
        return navigateTo({
            path: '/auth/login'
        });    
    }
})