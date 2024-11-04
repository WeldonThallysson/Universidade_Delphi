import { z } from "zod"
import { useRecoverPassword, useRefinePassword } from "../../../services/service.auth"
import { toast } from "react-toastify"

import { useCustomNavigation } from "../../useCustomNavigation/useCustomNavigation"

import { schemaRecoverPassword } from "../../../constants/schemas/schemaRecoverPassword"
import { schemaRedefinePassword } from "../../../constants/schemas/schemaRedefinePassword"
import { useParams } from "react-router"
import { ROUTES } from "../../../routes/paths"
import { useLoading } from "../../../store/loading"



export const usePassword = () => {
    const {token} = useParams()
    type formRecoverPasswordSchema = z.infer<typeof schemaRecoverPassword>
    type formRedefinePasswordSchema = z.infer<typeof schemaRedefinePassword>
    const {loading,handleActiveLoading,handleInactiveLoading} = useLoading()
    const {handleNavigation} = useCustomNavigation()
    const {mutate: recoverPassword} = useRecoverPassword()
    const {mutate: redefinePassword} = useRefinePassword()
    const handleRecoverPassword = (item: formRecoverPasswordSchema) => {
        
        const data = {
            email: item.email,
        }
        handleActiveLoading()
        recoverPassword(data, {
            onSuccess: (res) => {
                handleInactiveLoading()
                handleNavigation(ROUTES.LOGIN)
                toast.success(res.message)

            },
            onError: (err) => {
                handleInactiveLoading()
                toast.error(err.message)
                console.log(err)
            }
        })
        console.log(item)

    }

    const handleRedefinePassword = (item: formRedefinePasswordSchema) => {
        
        const data = {
           newPassword: item.password,
           tokenPassword: token
        }
        handleActiveLoading()
        redefinePassword(data, {
            onSuccess: (res) => {
                handleInactiveLoading()
                handleNavigation(ROUTES.LOGIN)
                toast.success(res.message)
            },
            onError: (err) => {
                handleInactiveLoading()
                toast.error(err.message)
                console.log(err)
            }
        })
        console.log(item)

    }


    return {
        loading,
        handleRecoverPassword,
        handleRedefinePassword,
        handleNavigation
    }
}