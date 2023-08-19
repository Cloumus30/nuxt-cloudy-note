export async function logout(){
    const sub = useCookie('sub', {maxAge:0});
    sub.value = ""

    return await navigateTo('/auth/login');
}