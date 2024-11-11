import { Box } from "@mui/material"
import { Outlet, useLocation } from "react-router"
import Header from "../Header"
import { Footer } from "../Footer"
import { useEffect } from "react"
import { useCustomNavigation } from "../../hooks/useCustomNavigation/useCustomNavigation"
import { useMyAccount } from "../../hooks/hookPage/MyAccount/useMyAccount"
import { useStorage } from "../../hooks/useStorage/useStorage"
import { KeyStorage } from "../../constants/keys/key.localstorage"
import { ROUTES } from "../../routes/paths"


export const Layouts = () => {
    const { pathname } = useLocation();
    const {handleGetDetailsAccount} = useMyAccount()
    const {handleNavigation} = useCustomNavigation()
    const {handleGetStorage} = useStorage()
  
    useEffect(() => {
      const storageAuth = handleGetStorage(KeyStorage.AuthTokenStorage)
      
      if (!storageAuth?.token) {
        handleNavigation(ROUTES.HOME)
      }
      else { 
        handleNavigation(ROUTES.DASHBOARD)
        handleGetDetailsAccount({
            idUsers: storageAuth.id
        })
      }
    
    }, []);

    useEffect(() => {

      window.scrollTo(0, 0);
    },[pathname])
    return (
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",   
            height: "auto"
        }}>
            <Box sx={{
                mb: {
                    xs: 15,
                    lg: 8
                }
            }}>
              <Header/>
            </Box>
          
            <Box sx={{
               flexGrow: 1
            }}>
            <Outlet/>
            </Box>
           
            
            <Footer/>
            
          
        </Box>
    )
}