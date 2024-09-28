import { Box } from "@mui/material"
import { Outlet } from "react-router"
import Header from "../Header"


export const Layouts = () => {
    return (
        <Box sx={{
            display:"flex",
            flexDirection:"column"
        }}>
            <Header/>
            <Outlet/>
            {/**
             *   <Footer/>
             */}
          
        </Box>
    )
}