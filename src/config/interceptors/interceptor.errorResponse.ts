import { AxiosError } from "axios";
import { unauthorizedResponse} from './interceptor.unauthorizedResponse'


type IErrorData = {
    error: boolean;
    message: string;
    items?: any
}

export type ICustomError = {
    error: boolean;
    message: string;
    data?: any;
    status?: number;
}

export const errorResponse = (error: AxiosError<IErrorData>): Promise<ICustomError> => {
    if(error.response){
        if(error.response.status === 401){
            unauthorizedResponse(error)
        }

        if(error.response.status === 500){
            return Promise.reject({
                error: true, 
                message: `Erro de servidor interno: ${error.response.data?.message || 'Sem mensagem' } `,
                status: 500
            })
        }

        if(error.response.status === 422){
            return Promise.reject({
                error: true,
                message: error.response.data.message,
                status: 422
            })
        }

        if(error.response.data ){
            return Promise.reject({
                error: true,
                data: error.response.data.items,
                message: error.response.data.message
            })
        }
   
    }

    return Promise.reject({
        error: true,
        message: 'Error desconhecido'
    })
}