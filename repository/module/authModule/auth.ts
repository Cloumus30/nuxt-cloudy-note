import { AsyncData, AsyncDataOptions } from "nuxt/app";
import { LoginRequest, LoginResponse } from "./auth-type";
import HttpFactory from "~/repository/factory";
import { _AsyncData } from "nuxt/dist/app/composables/asyncData";


class AuthModule extends HttpFactory{
    async login(req:LoginRequest ,AsyncDataOptions?: AsyncDataOptions<LoginResponse>)
    :Promise<_AsyncData<LoginResponse, any | null>>{
        const data = await this.callData<LoginResponse>('POST', '/auth/login', req, {server:false})

        return data;
    }   
}

export default AuthModule;