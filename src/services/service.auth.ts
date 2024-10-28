import { useMutation } from "@tanstack/react-query";
import { api } from "../config/axiosConfig";
import { IParamsAuth, IResponseAuth } from "../interface/Services/interface.auth.services";

export const auth = async (args: IParamsAuth) => {
    const {email,password} = args

    const data = {
        email,
        password
    }

    return await api.post<IResponseAuth>('/login', data)

}


export const useAuthentication = () => 
    useMutation({
        mutationFn: (args: IParamsAuth) =>  auth(args).then((res) => res.data)
    })