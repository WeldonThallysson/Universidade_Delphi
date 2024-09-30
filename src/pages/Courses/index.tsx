import { Box, Divider, Typography } from "@mui/material"
import { Containers } from "../../components/UI/Containers"
import { Player } from "../../components/Player"
import { useParams } from "react-router"
import { useTheme } from "../../hooks/useTheme/useTheme"
import { Carrousel } from "../../components/Carrousel"
import { useCustomNavigation } from "../../hooks/useCustomNavigation/useCustomNavigation"
import { useEffect } from "react" 
import { useCourses } from "../../hooks/hookPage/Courses/useCourses"



const Courses = () => {
    const {theme} = useTheme()
    const {idCurso,idAula} = useParams()
    const {
        classSelected,
        courseSelected,
        allClass,
        handleFilterAllCourses,
        handleFilterCourseSelected,
    } = useCourses()
    const { handleNavigation} = useCustomNavigation()
    console.log(idCurso)
    console.log(idAula)


    useEffect(() => {
        if(idCurso && idAula){
            const data = {
                idCourse: Number(idCurso),
                idClassRoom: Number(idAula)
            }
            handleFilterAllCourses(data)
            handleFilterCourseSelected(data)
        }
    },[idCurso,idAula])

    
    return (
        <Containers.DefaultAnimated>
            <Box sx={{display:"flex",flexDirection:"column", padding: {
                sm: "5rem 5rem",
                lg: "5rem 20rem"
            }, gap:2,}}>
                <Box>
                   <Typography sx={{fontSize: 25, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>{classSelected?.title} </Typography>
                </Box>
                <Box >
                  <Player videoUrl={classSelected?.linkVideo ?? ''}/>
                </Box>

                <Box sx={{display:"flex", flexDirection: "column",padding: "1rem 1.5rem", background: "#1a1b29", borderRadius: 1,gap:2}}>
            
                    <Typography sx={{fontSize: 25, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>{classSelected?.tag} </Typography>
                    <Typography sx={{fontSize: 18, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>{classSelected?.description}</Typography>
                </Box> 
                <Divider sx={{background:theme.colors.secondary}}/>

                <Box sx={{display:"flex", flexDirection:"column",  gap: 1, mt: 5}}>
                    <Typography sx={{fontSize: 20, color: theme.colors.secondary, fontFamily: 'Open Sans' }}>Continue assistindo...</Typography>
                   <Box>
                        <Carrousel.Card
                            spaceBeetWeenItens={18}
                            slidesPerView={4}
                            optionsCards={allClass}
                            handleActionCard={(item ) => {

                                const redirect = `/cursos/${item.idCourse}/${item.id}`;
                                handleNavigation(redirect)

                            }}
                        />    
                   </Box>
                </Box>
                
            </Box>
        </Containers.DefaultAnimated>
    )
}


export default Courses