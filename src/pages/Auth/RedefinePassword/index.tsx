import { Box, Button, CircularProgress, } from "@mui/material";
import { Containers } from "../../../components/UI/Containers";
import {useForm} from 'react-hook-form'
import { useTheme } from "../../../hooks/useTheme/useTheme"; 
import Logo from '../../../assets/logo.png'
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "../../../components/UI/Inputs"; 
import { z } from "zod";
 

import { schemaRedefinePassword } from "../../../constants/schemas/schemaRedefinePassword";
import { usePassword } from "../../../hooks/hookPage/Auth/usePassword";




const RedefinePassword = () => {
  type formRedefinePasswordSchema = z.infer<typeof schemaRedefinePassword>
    const {theme} = useTheme()
    const {register, handleSubmit, formState: {errors}} = useForm<formRedefinePasswordSchema>({
      resolver: zodResolver(schemaRedefinePassword)
    })
    const {handleRedefinePassword,loading} = usePassword()

 return (
   <Containers.DefaultAnimated >    
        <Box sx={{
            alignItems:"center", 
            display:"flex",
            flexDirection: 'column',
            height:"100vh",
            justifyContent:"center",
            width:"100%",
            
        }}>

            <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", width: 440, gap:3}}> 
                <Box sx={{display:"flex", width:"100%",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
                    <Box sx={{display:"flex", width:180}}> 
                        <img src={Logo} style={{display:"flex", width:"100%", height:"100%", objectFit:"fill"}} alt="logo da universidade delphi no menu de login"/>
                    </Box>
                </Box>
                
               <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", width: 440, gap:2}}>
               <form onSubmit={handleSubmit(handleRedefinePassword)} style={{display:"contents", width:"100%"}}>
              

                    <Inputs.Password
                      register={register}
                      name={"password"}
                      placeholder={"Senha"}
                      colorFocused={ theme.colors.terciary}
                      backgroundFieldFocused={theme.colors.redDark}
                      background={theme.colors.secondary}
                      error={errors.password?.message?.toString()}
                    />

                  <Inputs.Password
                      register={register}
                      name={"confirmPassword"}
                      placeholder={"Confirmar senha"}
                      colorFocused={ theme.colors.terciary}
                      backgroundFieldFocused={theme.colors.redDark}
                      background={theme.colors.secondary}
                      error={errors.confirmPassword?.message?.toString()}
                    />
              
              
                    <Button type="submit" sx={{
                        "&:hover": {
                            background: 'crimson',
                        },
                        padding: "0.55rem 2rem",
                        background: theme.colors.primary,color: theme.colors.secondary}}>
                         {loading ? <CircularProgress size={25} sx={{color:theme.colors.secondary}}/> : "Confirmar"} 
                        </Button>
                </form>
               </Box>
              
            </Box>

        </Box>
   </Containers.DefaultAnimated>
 );
}

export default RedefinePassword