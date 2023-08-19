import { AsyncDataOptions } from "nuxt/app";
import { KeysOf, PickFrom, _AsyncData } from "nuxt/dist/app/composables/asyncData";
import {$Fetch} from "ofetch"

class HttpFactory {
    private $fetch: $Fetch;
  
    constructor(fetcher: $Fetch) {
      this.$fetch = fetcher;
    }
  
    /** 
      * method - GET, POST, PUT
      * URL
    **/
    async call <T> (method: string, url: string, data?: object, extras = {}): Promise<T> {
      const $res = await this.$fetch(url, { method, body: data, ...extras });
      return $res;
    }

    async callData<T>(method:string, url:string, data?:object, asyncDataOptions?: AsyncDataOptions<T>, extras={},)
    :Promise< _AsyncData<PickFrom<T, KeysOf<T>> | null, any | null> >{
      const res = await useAsyncData('api', ()=>{
        return this.$fetch(url, { method, body: data, ...extras });
      }, asyncDataOptions);
      return res;
    }
  }
  
  export default HttpFactory;