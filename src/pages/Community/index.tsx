import { Box, Typography } from "@mui/material";
import { Containers } from "../../components/UI/Containers";
import { useTheme } from "../../hooks/useTheme/useTheme";
import comunnityBanner from '../../assets/community.png'
import { Helmet } from "react-helmet-async";

const Community = () => {
  const { theme } = useTheme();
  
  return (
    <Containers.DefaultAnimated>
       <Helmet>
          <title>Comunidade | Universidade Delphi </title>
          <link rel="canonical" href="https://www.universidadedelphi.com.br/comunidade" />
       </Helmet>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: `url(${comunnityBanner}) no-repeat center/cover`, // Define o banner como fundo
          width: "100%",
          height: "40vh",
          backgroundAttachment:"fixed",
          backgroundPosition:"20% 180%"
          
        }}
      >
        {/* Camada preta transparente */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Camada preta com 50% de transparência
            zIndex: 1,
          }}
        />

        {/* Conteúdo sobre o banner e a camada preta */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            position: "relative",
            zIndex: 2, // Certifica-se de que o conteúdo esteja acima da camada preta
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontFamily: "Poppins",
                fontWeight: "800",
                padding: 0,
                height: 60,
                color: theme.colors.secondary,
                marginTop: "-0.5rem",
              }}
            >
              Comunidade
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Seção com o texto abaixo do banner */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: "5rem 2rem",
            sm: "5rem 5rem",
            lg: "5rem 20rem",
          },
          gap: 10,
        }}
      >
        <Box sx={{display:"flex",flexDirection:"column",gap: 1}}>
            <Typography 
                sx={{
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                    },
                    fontFamily: "Poppins",
                    fontWeight: "800",
                    padding: 0,
                    color: theme.colors.secondary,
                }}
            >
               Nossa Comunidade
            </Typography>
            <Typography 
                sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "1.2rem",
                    },
                    fontFamily: "Poppins",
                    fontWeight: "300",
                    padding: 0,
                    color: theme.colors.secondary,
                }}
            >
                A comunidade Delphi é vasta e está em constante evolução, sempre trazendo inovações e melhorias. Pensando nesse potencial, criamos este espaço dedicado para compartilhar as últimas novidades, atualizações e tendências que estão movimentando o universo Delphi. Fique por dentro de tudo que está acontecendo e participe ativamente dessa comunidade vibrante!
            </Typography>
        </Box>
           
        <Box sx={{display:"flex",flexDirection:"column",gap: 1}}>
            <Typography 
                sx={{
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                    },
                    fontFamily: "Poppins",
                    fontWeight: "800",
                    padding: 0,
                    color: theme.colors.secondary,
                }}
            >
           Univerdade Delphi
            </Typography>
            <Typography 
                sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "1.2rem",
                    },
                    fontFamily: "Poppins",
                    fontWeight: "300",
                    padding: 0,
                    color: theme.colors.secondary,
                }}
            >
                A Universidade Delphi é o seu portal de acesso a uma vasta gama de cursos gratuitos, todos focados no universo do Delphi. Nossa missão é proporcionar aprendizado de qualidade e acessível, capacitando desenvolvedores de todos os níveis com conteúdos atualizados e alinhados às tendências mais recentes da tecnologia. Na Universidade Delphi, você encontrará desde conceitos fundamentais até temas avançados, sempre com foco em inovação e excelência. Aproveite essa oportunidade única de aprimorar suas habilidades e se manter à frente no desenvolvimento com Delphi!
            </Typography>
        </Box>
      </Box>
    </Containers.DefaultAnimated>
  );
};

export default Community;
