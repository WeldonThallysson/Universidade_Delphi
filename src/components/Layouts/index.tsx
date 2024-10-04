import { Box } from "@mui/material"
import { Outlet, useLocation } from "react-router"
import Header from "../Header"
import { Footer } from "../Footer"
import { useEffect } from "react"


export const Layouts = () => {
    const { pathname } = useLocation();

    useEffect(() => {
    
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",   
            height: "100vh"
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