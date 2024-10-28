import { AxiosHeaders, AxiosRequestConfig } from "axios";
import { KeyStorage } from "../../constants/keys/key.localstorage";


export interface InternalAxiosRequestConfig extends AxiosRequestConfig {
    headers: AxiosHeaders
}


export const authRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const AuthStorage = localStorage.getItem(KeyStorage.AuthTokenStorage)

    if(!config?.headers){
        config.headers = {} as AxiosHeaders;
    }

    if(AuthStorage){
        config.headers.Authorization = `Bearer ${JSON.parse(AuthStorage)}`
  
        return config
    }

    return config;
}