import { Box, Button, Icon, Typography } from "@mui/material";
import bannerImage from "../../assets/Banner.png"; // Importando a imagem
import { Carrousel } from "../../components/Carrousel";
import {
  optionsFirstCarrouselCard,
  optionsSecondCarrouselCard,
  optionsThirdCarrouselCard,
} from "../../constants/mocks/CarrouselCards";
import { homeOptions } from "../../constants/mocks/HomeOptions";
import { useTheme } from "../../hooks/useTheme/useTheme";
import { YouTube } from "@mui/icons-material";
import { Containers } from "../../components/UI/Containers";
import { useCustomNavigation } from "../../hooks/useCustomNavigation/useCustomNavigation";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  const { theme } = useTheme();
  const { handleNavigation } = useCustomNavigation();
  return (
    <Containers.DefaultAnimated>
       <Helmet>
          <title>Universidade Delphi | Do zero ao Profissional</title>
         <link rel="canonical" href="https://www.universidadedelphi.com.br" />
       </Helmet>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        
          position: "relative",
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover", // Para cobrir toda a tela
          backgroundPosition:{
            xs: "65% 100%",
            sm: "75% 100%"
          }, // Centralizar a imagem
          backgroundRepeat: "no-repeat", // Evitar que a imagem se repita
          backgroundAttachment: "fixed",
          width: "100%", // Largura total da viewport
          height: {
            xs: "calc(100vh - 55vh)",
            sm: "calc(100vh - 48vh)",
            md: "calc(100vh - 35vh)",
            lg: "calc(100vh - 40vh)",
            xl: "calc(100vh - 30vh)"
          }, // Altura total da viewport
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -1,
            left: 0,
            right: 0,
            zIndex: 20,
            height: "110%", // Altura do gradiente
            background: {
              xs:  "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1))", 
              sm:  "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1))", 
              md:  "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1))", 
              lg:  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))", 
            }// Gradiente que conecta à cor do fundo
          },
        }}
      >
        <Box
          sx={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            width:"100%",
            zIndex:30, 
            padding: {
              xs:  "3rem 2rem 0 2rem",
              sm:  "3rem 6rem 0 6rem",
              lg:  "3rem 10rem 0 10rem",
            }
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column",gap:0}}>
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: '2rem',
                  lg: "3rem",
                 
                },
                height: {
                  lg: 60,
                }, 
                fontFamily: "Poppins",
                padding: 0,
                fontWeight:"400",
                color: theme.colors.secondary,
              }}
            >
              Do Zero
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: '3rem',
                  lg: "4rem"
                },
                fontFamily: "Poppins",
                fontWeight:" 600",
                padding: 0,
                color: theme.colors.secondary,
                marginTop: "-0.5rem",
              }}
            >
              Ao Profissional
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "0.90rem",
              fontFamily: "Open Sans",
              color: theme.colors.secondary,
            }}
          >
            Desperte seu potencial com nossos cursos e conteúdos gratuitos!
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          padding: "1.2rem 0",
          background: "linear-gradient(135deg, #a52c2c, #e8413b, #8b233d)", // Degradê
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
           
          }}
        >
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection:{
              xs: "column",
              md: "row",
            },
            gap: {
              xs: 5,
              sm: 5,
              lg: 10
            },
          }}> 
          
          {homeOptions.map((item) => (
            <Box key={item.id} sx={{ display: "flex", gap: 1 }}>
              <Icon sx={{ color: theme.colors.secondary }}>{item.icon}</Icon>
              <Typography
                sx={{ fontSize:  {
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1rem",
                  lg: '1.2rem'
                }, color: theme.colors.secondary }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}

          </Box>
        
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: {
             xs: "4rem 2rem 1rem 2rem",
             sm: "5rem 4rem 1rem 4rem",
             lg: "3rem 10rem",
          },
          gap: 3,
        }}
      >
        {optionsFirstCarrouselCard.map((item) => (
          <Box
            key={item.id}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 25,
                }}
              >
                {item.title}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Carrousel.Card
                spaceBeetWeenItens={25}
                optionsCards={item.data}
                handleActionCard={(item) => {
                  handleNavigation(item.path);
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: "1rem 2em 1rem 2rem",
            sm: "1rem 4rem 1rem 4rem",
            lg: "3rem 10rem",
         },
         gap: 3,
    
        }}
      >
        {optionsSecondCarrouselCard.map((item) => (
          <Box
            key={item.id}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 25,
                }}
              >
                {item.title}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Carrousel.Card
                spaceBeetWeenItens={25}
            
                optionsCards={item.data}
                handleActionCard={(item) => {
                  handleNavigation(item.path);
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: "1rem 2em 4rem 2rem",
            sm: "1rem 4rem 5rem 4rem",
            lg: "3rem 10rem 12rem 10rem",
         },
         gap: 3,
        }}
      >
        {optionsThirdCarrouselCard.map((item) => (
          <Box
            key={item.id}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 25,
                }}
              >
                {item.title}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Carrousel.Card
                spaceBeetWeenItens={25}
              
                optionsCards={item.data}
                handleActionCard={(item) => {
                  handleNavigation(item.path);
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          background: "#ac1221",
          padding: "3rem 0",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '1rem',
                sm: "1.2rem"
              },
              fontFamily: "Open Sans",
              color: theme.colors.secondary,
              height: 25,
            }}
          >
            Quer explorar mais ?
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: '0.8rem',
                sm: "1.5rem"
              },
              fontFamily: "Open Sans",
              color: theme.colors.secondary,
            }}
          >
            Conheça também nosso canal no Youtube
          </Typography>
          <Button
            sx={{
              fontSize: {xs:"0.7rem",sm: "1rem"},
              fontFamily: "Open Sans",
              color: theme.colors.secondary,
              background: theme.colors.terciary,
              borderRadius: 10,
              gap: 1,
              padding: "0.5rem 1rem",
            }}
            href="https://www.youtube.com/@LandersonGomes6"
            target="_blank"
          >
            <YouTube />
            Inscreva-se
          </Button>
        </Box>
      </Box>
    </Containers.DefaultAnimated>
  );
};
