import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axiosConfig";
import { IParamsAuth, IParamsRecoverPassword, IParamsRedefinePassword, IResponseAuth } from "../interface/Services/interface.auth.services";
import { IResponseApi } from "../interface/Services/interface.api.services";

export const auth = async (args: IParamsAuth) => {
    const {email,password} = args

    const data = {
        email,
        password
    }

    return await api.post<IResponseAuth>('/login', data)

}

export const recoverPassword = async (args: IParamsRecoverPassword) => {
    const {email} = args

    const data = {
        email,
    }

    return await api.post<IResponseApi>('/auth/recoverpassword', data)

}

export const redefinePassword = async (args: IParamsRedefinePassword) => {
    const {tokenPassword,newPassword} = args

    const data = {
        tokenPassword,
        newPassword
    }

    return await api.post<IResponseApi>('/auth/redefinepassword', data)

}


export const useAuthentication = () => 
    useMutation({
        mutationFn: (args: IParamsAuth) =>  auth(args).then((res) => res.data)
    })

export const useRecoverPassword = () => 
        useMutation({
            mutationFn: (args: IParamsRecoverPassword) =>  recoverPassword(args).then((res) => res.data)
        })

export const useRefinePassword = () => 
            useMutation({
                mutationFn: (args: IParamsRedefinePassword) =>  redefinePassword(args).then((res) => res.data)
            })       