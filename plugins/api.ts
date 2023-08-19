import { FetchOptions, $fetch } from "ofetch"
import AuthModule from "~/repository/module/authModule/auth";
import UserModule from "~/repository/module/userModule/user";

interface ApiInstance{
    user: UserModule,
    auth: AuthModule,
}

export default defineNuxtPlugin((nuxtApp)=>{
    const config = useRuntimeConfig();

    const fetchOptions: FetchOptions = {
        baseURL: config.public.API_BASE_URL,
    }
    
    const apiFetcher = $fetch.create(fetchOptions);

    const modules: ApiInstance ={
        user: new UserModule(apiFetcher),
        auth: new AuthModule(apiFetcher),
    }

    return {
            provide: {
            api:modules
        }
    }
})