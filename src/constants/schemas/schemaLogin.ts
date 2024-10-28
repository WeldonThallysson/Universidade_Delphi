import { z } from "zod";



export const schemaLogin = z.object({
    email: z.string().min(1,{message:"Preencha o campo de email"}).email("Email inválido"),
    password: z.string().min(1,{message:"Preencha o campo de senha"})
})