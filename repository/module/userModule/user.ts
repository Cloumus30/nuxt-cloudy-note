import HttpFactory from "~/repository/factory";
import { UserResponse } from "./user-type";
import { AsyncDataOptions } from "#app";

class UserModule extends HttpFactory{
    async getCollection(useAsynOptions?:AsyncDataOptions<UserResponse[]>){
        const res = await useAsyncData('user', () => {
                    return this.call<UserResponse[]>('GET', '/users');
                },
                useAsynOptions
            );
        return res;
    }
}

export default UserModule;