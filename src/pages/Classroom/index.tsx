import { Box, Divider, Typography } from "@mui/material"
import { Containers } from "../../components/UI/Containers"
import { Player } from "../../components/Player"
import { useParams } from "react-router"
import { useTheme } from "../../hooks/useTheme/useTheme"
import { Carrousel } from "../../components/Carrousel"
import { useEffect } from "react" 
import { useClassRoom } from "../../hooks/hookPage/ClassRoom/useClassRoom"
import { Helmet } from "react-helmet-async"



const ClassRoom = () => {
    const {theme} = useTheme()
    const {idAula} = useParams()
    const {
        handleFilterClassSelected,
        handleFilterAllClass,
        allClass,
        classSelected,
        handleNavigation} = useClassRoom()

 

    useEffect(() => {
        if(idAula){
            const data = {
                idAula: Number(idAula),
            }
            
            handleFilterClassSelected(data)
            handleFilterAllClass(data)
        }
    },[idAula])

    
    return (
        <Containers.DefaultAnimated>
            <Helmet>
              <title>Aulas | {classSelected?.title? `${classSelected?.title}` : 'Aulas'} | Universidade Delphi </title> 
              <link rel="canonical" href={`https://www.universidadedelphi.com.br/aulas/${classSelected?.id}`} />
            </Helmet>

            <Box sx={{display:"flex",flexDirection:"column", padding: {
                xs:  "2rem 1.5rem",
                sm: "5rem 5rem",
                lg: "5rem 10rem",
                 xl: "5rem 20rem"
            }, gap:2,}}>
                <Box>
                   <Typography sx={{fontSize: {
                    xs: 18,
                    sm: 25
                   }, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>{classSelected?.title} </Typography>
                </Box>
                <Box >
                  <Player videoUrl={classSelected?.linkVideo ?? ''}/>
                </Box>

                <Box sx={{display:"flex", flexDirection: "column",padding: "1rem 1.5rem", background: "#1a1b29", borderRadius: 1,gap:2}}>
            
                    <Typography sx={{fontSize: {
                        xs: 16,
                        sm:25
                    }, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>{classSelected?.tag} </Typography>
                    <Typography sx={{fontSize: {
                        xs: 12,
                        sm:14,
                        lg: 18
                    }, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>{classSelected?.description}</Typography>
                </Box> 
                <Divider sx={{background:theme.colors.secondary}}/>

                <Box sx={{display:"flex", flexDirection:"column",  gap: 1, mt: 5}}>
                    <Typography sx={{fontSize: 20, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>Continue assistindo...</Typography>
                   <Box>
                         <Carrousel.Card
                          spaceBeetWeenItens={18}
                          slidesPerView={4.2}
                          optionsCards={allClass}
                          handleActionCard={(item ) => {
                            const redirect = `/aulas/${item.id}`;
                            handleNavigation(redirect)

                        }}
                         />
                   </Box>
                </Box>
                
            </Box>
        </Containers.DefaultAnimated>
    )
}


export default ClassRoom