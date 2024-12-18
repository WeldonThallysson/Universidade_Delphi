import { Box, Divider, Typography } from "@mui/material"
import { Containers } from "../../components/UI/Containers"
import { Player } from "../../components/Player"
import { useParams } from "react-router"
import { useTheme } from "../../hooks/useTheme/useTheme"
import { Carrousel } from "../../components/Carrousel"
import { useEffect } from "react"
import { useLives } from "../../hooks/hookPage/Lives/useLives"
import { Helmet } from "react-helmet-async"



const Lives = () => {
    const {theme} = useTheme()
    const {idLive} = useParams()
    const {liveSelected,allLives,handleFilterAllLives,handleFilterLiveSelected,handleNavigation} = useLives()

    useEffect(() => {
        if(idLive){
            const data = {
                idLive: Number(idLive),
            }
            
            handleFilterLiveSelected(data)
            handleFilterAllLives(data)
        }
    },[idLive])

    
    return (
        <Containers.DefaultAnimated>
                <Helmet>
                    <title>Lives | {liveSelected?.title ? `${liveSelected?.title}` : 'Lives'} | Universidade Delphi </title>
                    <link rel="canonical" href={`https://www.universidadedelphi.com.br/lives/${liveSelected?.id}`} />
                </Helmet>

            <Box sx={{display:"flex",flexDirection:"column", padding: {
                xs:  "2rem 1.5rem",
                sm: "5rem 5rem",
                lg: "5rem 10rem",
                 xl: "5rem 20rem"
            }, gap:2,}}>
                <Box>
                   <Typography sx={{fontSize: {
                    xs: 15,
                    sm: 25
                   }, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>{liveSelected?.title} </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    width:"100%",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                  <Player videoUrl={liveSelected?.linkVideo ?? ''}/>
                </Box>

                <Box sx={{display:"flex", flexDirection: "column",padding: "1rem 1.5rem", background: "#1a1b29", borderRadius: 1,gap:1}}>
            
                    <Typography sx={{fontSize: {
                          xs: 16,
                        sm:25
                    }, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>{liveSelected?.tag} </Typography>
                    <Typography sx={{fontSize: {
                        xs: 14,
                        sm:14,
                        lg: 18
                    }, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>{liveSelected?.description}</Typography>
                </Box> 
                <Divider sx={{background:theme.colors.secondary}}/>

                <Box sx={{display:"flex", flexDirection:"column",  gap: 1, mt: 5}}>
                    <Typography sx={{fontSize: 20, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>Continue assistindo...</Typography>
                   <Box>
                         <Carrousel.Card
                          spaceBeetWeenItens={18}
                          slidesPerView={4.2}
                          optionsCards={allLives}
                          handleActionCard={(item ) => {
                            const redirect = `/lives/${item.id}`;
                            handleNavigation(redirect)

                        }}
                         />
                   </Box>
                </Box>
                
            </Box>
        </Containers.DefaultAnimated>
    )
}


export default Lives