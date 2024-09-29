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

export const Home = () => {
  const { theme } = useTheme();
  const { handleNavigation } = useCustomNavigation();
  return (
    <Containers.DefaultAnimated>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover", // Para cobrir toda a tela
          backgroundPosition: "100% 120%", // Centralizar a imagem
          backgroundRepeat: "no-repeat", // Evitar que a imagem se repita
          backgroundAttachment: "fixed",
          width: "100%", // Largura total da viewport
          height: "75vh", // Altura total da viewport
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "10%", // Altura do gradiente
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))", // Gradiente que conecta à cor do fundo
          },
        }}
      >
        <Box
          sx={{
            padding: "3rem 10rem 0",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: "4rem",
                fontFamily: "Poppins",
                padding: 0,
                height: 80,
                fontWeight:"400",
                color: theme.colors.secondary,
              }}
            >
              Do Zero
            </Typography>
            <Typography
              sx={{
                fontSize: "5rem",
                fontFamily: "Poppins",
                fontWeight:" 600",
                padding: 0,
                height: 110,
                color: theme.colors.secondary,
                marginTop: "-0.5rem",
              }}
            >
              Ao Profissional
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "1.1rem",
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
            gap: 10,
          }}
        >
          {homeOptions.map((item) => (
            <Box key={item.id} sx={{ display: "flex", gap: 1 }}>
              <Icon sx={{ color: theme.colors.secondary }}>{item.icon}</Icon>
              <Typography
                sx={{ fontSize: "1.2rem", color: theme.colors.secondary }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "3rem 10rem",
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
                slidesPerView={5}
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
          padding: "3rem 10rem",
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
                slidesPerView={5}
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
          padding: "3rem 10rem 12rem 10rem",
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
                slidesPerView={5}
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
              fontSize: "1.2rem",
              fontFamily: "Open Sans",
              color: theme.colors.secondary,
              height: 25,
            }}
          >
            Quer explorar mais ?
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontFamily: "Open Sans",
              color: theme.colors.secondary,
            }}
          >
            Conheça também nosso canal no Youtube
          </Typography>
          <Button
            sx={{
              fontSize: "1rem",
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
