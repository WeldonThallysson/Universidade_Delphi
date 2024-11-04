import { Box, Button, CircularProgress, Icon, Typography } from "@mui/material";
import { Containers } from "../../../components/UI/Containers"; 
import {useForm} from 'react-hook-form'
import { useTheme } from "../../../hooks/useTheme/useTheme"; 
import Logo from '../../../assets/logo.png'
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "../../../components/UI/Inputs"; 
import { z } from "zod";
 
import { useAuth } from "../../../hooks/hookPage/Auth/useAuth"; 
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/paths";
import { schemaRecoverPassword } from "../../../constants/schemas/schemaRecoverPassword";
import { useRecoverPassword } from "../../../services/service.auth";
import { usePassword } from "../../../hooks/hookPage/Auth/usePassword";




const RecoverPassword = () => {
  type formRecoverPasswordSchema = z.infer<typeof schemaRecoverPassword>
    const {theme} = useTheme()
    const {register, handleSubmit, formState: {errors}} = useForm<formRecoverPasswordSchema>({
      resolver: zodResolver(schemaRecoverPassword)
    })
    const {handleRecoverPassword,loading} = usePassword()

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
               <form onSubmit={handleSubmit(handleRecoverPassword)} style={{display:"contents", width:"100%"}}>
                    <Inputs.Default
                      register={register}
                      name={"email"}
                      placeholder={"Email"}
                      colorFocused={ theme.colors.terciary}
                      backgroundFieldFocused={theme.colors.redDark}
                      background={theme.colors.secondary}
                      error={errors.email?.message?.toString()}
                    />

                    <Button type="submit" sx={{
                        "&:hover": {
                            background: 'crimson',
                        },
                        padding: "0.55rem 2rem",
                        background: theme.colors.primary,color: theme.colors.secondary}}>
                         {loading ? <CircularProgress size={25} sx={{color:theme.colors.secondary

                         }}/> : "Solicitar"} 
                        </Button>
                  
                </form>
                <Link 
                to={ROUTES.LOGIN}
                style={{ color: theme.colors.secondary}}>
                  <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    marginLeft: -1.5,
                    gap: 0.7,
                    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",

                    "&:hover": {
                      transform: "scale(1.04)",
                      transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",

                    }
                  }}>
                    <Icon style={{fontSize: 15}}>arrow_back</Icon>  
                    <Typography >Lembrou da sua senha, faça o login !</Typography>
                  </Box>
               
                  
                </Link>
               </Box>
              
            </Box>

        </Box>
   </Containers.DefaultAnimated>
 );
}

export default RecoverPassword