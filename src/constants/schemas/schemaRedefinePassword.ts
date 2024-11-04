import { z } from "zod";

export const schemaRedefinePassword = z.object({
  password: z.string().min(1, { message: "Preencha o campo de senha" }),
  confirmPassword: z.string().min(1, { message: "Preencha o campo de senha" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"], // Marca o erro no campo `confirmPassword`
});