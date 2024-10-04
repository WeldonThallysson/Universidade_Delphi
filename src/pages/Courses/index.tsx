import { Box, Divider, Typography } from "@mui/material";
import { Containers } from "../../components/UI/Containers";
import { Player } from "../../components/Player";
import { useParams } from "react-router";
import { useTheme } from "../../hooks/useTheme/useTheme";
import { Carrousel } from "../../components/Carrousel";
import { useCustomNavigation } from "../../hooks/useCustomNavigation/useCustomNavigation";
 
import { Helmet } from "react-helmet-async";
import { Trails } from "../../constants/mocks/Trilhas";

const Courses = () => {
  const { theme } = useTheme();
  
 
  const { handleNavigation } = useCustomNavigation();
 

  console.log(Trails)

  return (
    <Containers.DefaultAnimated>
      <Helmet>
        <title>Cursos | Universidade Delphi </title>
        <link
          rel="canonical"
          href="https://www.universidadedelphi.com.br/cursos"
        />
      </Helmet>

      <Box sx={{display:"flex",flexDirection:"column", padding: "3rem 20rem",background: "linear-gradient(135deg, #752121, #e8413b, #8b233d)", }}>
          <Typography
            sx={{
              fontSize: {
                xs: 18,
                sm: 25,
                lg: 45,
              },
              mt: 5,
              color: theme.colors.secondary,
              fontFamily: "Open Sans",
              fontWeight: "700",
              height: 60
            }}
          >
            Cursos
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: 18,
                sm: 25,
                lg: 20,
              },
              color: theme.colors.secondary,
              fontFamily: "Open Sans",
              fontWeight: "400"
            }}
          >
            Conheça nossas trilhas e cursos e aproveite o máximo ! 
          </Typography>
        </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: "2rem 1.5rem",
            sm: "5rem 5rem",
            lg: "5rem 10rem",
            xl: "5rem 20rem",
          },
          gap: 2,
        }}
      >
        <Box>
          {Trails.map((item) => (
             <Box key={item.id} sx={{display:"flex", flexDirection:"column", gap: 5}}>
              <Typography
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 25,
                    },
                    color: theme.colors.secondary,
                    fontFamily: "Open Sans",
                  }}
                >
                  {item.title} {" "}
                </Typography>

                  <Carrousel.Card
                    spaceBeetWeenItens={18}
                    slidesPerView={4.2}
                    optionsCards={item.classrooms}
                    handleActionCard={(item) => {
                      if(item.idCourse){
                        const redirect = `/cursos/${item.idCourse}/${item.id}`;
                        handleNavigation(redirect);
                      }else if(item.id && !item.idCourse) {
                        const redirect = `/aulas/${item.id}`;
                        handleNavigation(redirect);
                      }
                    }}
                  />
             
             </Box>
            
          ))}
        </Box>
      </Box>
    </Containers.DefaultAnimated>
  );
};

export default Courses;
