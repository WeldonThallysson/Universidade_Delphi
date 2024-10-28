import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { KeyStorage } from "../../constants/keys/key.localstorage";




export const unauthorizedResponse = (error: AxiosError ) => {
     const navigate = useNavigate()

     if(error.status === 401){
        navigate('/')
        localStorage.removeItem(KeyStorage.AuthTokenStorage)
     }
}
