import { Box, Typography } from "@mui/material";
import bannerImage from "../../assets/Banner.png"; // Importando a imagem
import { Cards } from "../../components/Cards";
import { Carrousel } from "../../components/Carrousel";
import { optionsFirstCarrouselCard } from "../../constants/mocks/CarrouselCards";

export const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
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
            height: "20%", // Altura do gradiente
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))", // Gradiente que conecta à cor do fundo
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          position: "relative",
          background: "linear-gradient(to bottom, rgba(0,0,0,0), #000000)",
          backgroundSize: "cover", // Para cobrir toda a tela
          backgroundPosition: "center", // Centralizar a imagem
          backgroundRepeat: "no-repeat", // Evitar que a imagem se repita
          backgroundAttachment: "fixed",
          width: "100%", // Largura total da viewport
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "10%", // Altura do gradiente

            background: "linear-gradient(to bottom, rgba(0,0,0,0), #141414)",
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "3rem 10rem",
          gap: 3,
        }}
      >
        {optionsFirstCarrouselCard.map((item) => (
          <Box key={item.id} sx={{display:"flex",flexDirection:"column",gap: 2,}}>
            <Box >
              <Typography
                sx={{
                  color: "white",
                  fontSize: 25,
                }}
              >
                Delphi e IntraWeb
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
                optionsCards={item.data}
                handleBtnSecond={(item) => console.log(item)}
                handleBtnPrimary={(item) => console.log(item)}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
