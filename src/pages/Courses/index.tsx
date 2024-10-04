import { Box, Typography } from "@mui/material";
import { Containers } from "../../components/UI/Containers";

import { useTheme } from "../../hooks/useTheme/useTheme";
import { Carrousel } from "../../components/Carrousel";
import { useCustomNavigation } from "../../hooks/useCustomNavigation/useCustomNavigation";

import { Helmet } from "react-helmet-async";
import { Trails } from "../../constants/mocks/Trilhas";

const Courses = () => {
  const { theme } = useTheme();
  const { handleNavigation } = useCustomNavigation();
  console.log(Trails);
  return (
    <Containers.DefaultAnimated>
      <Helmet>
        <title>Cursos | Universidade Delphi </title>
        <link
          rel="canonical"
          href="https://www.universidadedelphi.com.br/cursos"
        />
      </Helmet>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: "1rem 1.5rem",
            sm: "1rem 5rem 1.5rem 5rem",
            lg: "1rem 10rem 1.5rem",
            xl: "1rem 15rem 2rem",
          },
          background: "linear-gradient(135deg, #752121, #e8413b, #8b233d)",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 18,
              sm: 35,
              lg: 45,
            },
            mt: {
              xs: 2,
              sm: 5
            },
            color: theme.colors.secondary,
            fontFamily: "Open Sans",
            fontWeight: "700",
            height: {
              sm: 50,
              md: 50,
              lg: 60
            },
          }}
        >
          Cursos
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: 18,
              sm: 20,
              lg: 20,
            },
            color: theme.colors.secondary,
            fontFamily: "Open Sans",
            fontWeight: "400",
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
            xl: "5rem 15rem",
          },
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 5 }}>
          {Trails.map((item) => (
            <Box
              key={item.id}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
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
                {item.title}{" "}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box>
                  <Carrousel.Card
                    spaceBeetWeenItens={18}
                    slidesPerView={4.2}
                    optionsCards={item.classrooms}
                    handleActionCard={(items) => {
                      if (items.idCourse) {
                        const redirect = `/cursos/${items.idCourse}/${items.id}`;
                        handleNavigation(redirect);
                      } else if (items.id && !items.idCourse) {
                        const redirect = `/aulas/${items.category}/${items.id}`;
                        handleNavigation(redirect);
                      }
                    }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Containers.DefaultAnimated>
  );
};

export default Courses;
