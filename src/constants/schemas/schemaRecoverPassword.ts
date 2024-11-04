import { z } from "zod";



export const schemaRecoverPassword = z.object({
    email: z.string().min(1,{message:"Preencha o campo de email"}).email("Email inválido"),
    
})