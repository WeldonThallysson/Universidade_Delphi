import { z } from "zod"
import { schemaLogin } from "../../../constants/schemas/schemaLogin"
import { useAuthentication } from "../../../services/service.auth"
import { toast } from "react-toastify"
import { useStorage } from "../../useStorage/useStorage"
import { KeyStorage } from "../../../constants/keys/key.localstorage"
import { useCustomNavigation } from "../../useCustomNavigation/useCustomNavigation"
import { ROUTES } from "../../../routes/paths"



export const useAuth = () => {
   
    type formAuthenticationSchema = z.infer<typeof schemaLogin>
    const {handleSaveStorage} = useStorage()
    const {handleNavigation} = useCustomNavigation()
    const {mutate: authentication} = useAuthentication()

    const handleLogin = (item: formAuthenticationSchema) => {
        
        const data = {
            email: item.email,
            password: item.password
        }
        authentication(data, {
            onSuccess: (res) => {
               
                handleSaveStorage({name: KeyStorage.AuthTokenStorage, data: res.token})
                toast.success(`Bem vindo ${res.name}`)
                handleNavigation(ROUTES.DASHBOARD)

            },
            onError: (err) => {
                toast.error(err.message)
                console.log(err)
            }
        })
        console.log(item)

    }


    return {
        handleLogin
    }
}