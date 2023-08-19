export default defineNuxtRouteMiddleware((to, from) => {
    // skip middleware on server
    if (process.server) return
    const sub = useCookie('sub');

    const authState = useAuthState();

    if(!sub.value){
        authState.value = {
            isAuthenticated:false,
            key: ""
        }

        return navigateTo({
            path: '/auth/login'
        });    
    }

    authState.value = {
        isAuthenticated:true,
        key: sub.value
    }
})