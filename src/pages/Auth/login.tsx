import { Box, Button, Icon, Typography } from "@mui/material";
import { Containers } from "../../components/UI/Containers";
import {useForm} from 'react-hook-form'
import { useTheme } from "../../hooks/useTheme/useTheme";
import Logo from '../../assets/logo.png'
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaLogin } from "../../constants/schemas/schemaLogin";
import { Inputs } from "../../components/UI/Inputs";
import { z } from "zod";
 
import { useAuth } from "../../hooks/hookPage/Auth/useAuth";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/paths";




const Login = () => {
  type formAuthenticationSchema = z.infer<typeof schemaLogin>
    const {theme} = useTheme()
    const {register, handleSubmit, formState: {errors}} = useForm<formAuthenticationSchema>({
      resolver: zodResolver(schemaLogin)
    })
    const {handleLogin} = useAuth()

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
                    <Box sx={{display:"flex", width:220}}> 
                        <img src={Logo} style={{display:"flex", width:"100%", height:"100%", objectFit:"fill"}} alt="logo da universidade delphi no menu de login"/>
                    </Box>
                </Box>
                
               <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", width: 440, gap:2}}>
               <form onSubmit={handleSubmit(handleLogin)} style={{display:"contents", width:"100%"}}>
                    <Inputs.Default
                      register={register}
                      name={"email"}
                      placeholder={"Email"}
                      colorFocused={ theme.colors.terciary}
                      backgroundFieldFocused={theme.colors.redDark}
                      background={theme.colors.secondary}
                      error={errors.email?.message?.toString()}
                    />

                    <Inputs.Default
                      register={register}
                      name={"password"}
                      placeholder={"Senha"}
                      colorFocused={ theme.colors.terciary}
                      backgroundFieldFocused={theme.colors.redDark}
                      background={theme.colors.secondary}
                      error={errors.password?.message?.toString()}
                    />
              

                    <Button type="submit" sx={{
                        "&:hover": {
                            background: 'crimson',
                        },
                        background: theme.colors.primary,color: theme.colors.secondary}}>Entrar</Button>
                  
                </form>
                <Link 
                to={ROUTES.HOME}
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
                    <Typography >Voltar para o Portal</Typography>
                  </Box>
               
                  
                </Link>
               </Box>
              
            </Box>

        </Box>
   </Containers.DefaultAnimated>
 );
}

export default Login