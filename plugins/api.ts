import { FetchOptions, $fetch } from "ofetch"
import UserModule from "~/repository/module/userModule/user";

interface ApiInstance{
    user: UserModule,
}

export default defineNuxtPlugin((nuxtApp)=>{
    const config = useRuntimeConfig();

    const fetchOptions: FetchOptions = {
        baseURL: config.public.API_BASE_URL,
    }
    
    const apiFetcher = $fetch.create(fetchOptions);

    const modules: ApiInstance ={
        user: new UserModule(apiFetcher),
    }

    return {
            provide: {
            api:modules
        }
    }
})