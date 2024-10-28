import { Box, Typography, Link, Divider } from "@mui/material";
import { itemsMenu } from "../../constants/mocks/mocksMenu/mocks";
import { useCustomNavigation } from "../../hooks/useCustomNavigation/useCustomNavigation";
import LogoFooter from "../../assets/logo.png";
import Grid from "@mui/material/Grid2";
import { livesUniversidadeDelphi } from "../../constants/mocks/Lives";
import { ROUTES } from "../../routes/paths";
import { Login } from "@mui/icons-material";

export const Footer = () => {
  const { handleNavigation } = useCustomNavigation();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyItems: "center",
        flexDirection: "column",
        backgroundColor: "#17151d",
        color: "#fff",
        py: 6,
        px: {
          xs: 3,
          sm: 5,
          md: 6,
          lg: 25,
        },
        gap: 2,
      }}
    >
      <Grid container spacing={3} sx={{ flexWrap: "wrap" }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Cursos
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {itemsMenu.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => {
                  handleNavigation(item.href);
                }}
              >
                <item.icon />
                <Link sx={{ display: "flex", color: "#fff" }}>{item.name}</Link>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Lives
          </Typography>

          {livesUniversidadeDelphi.map((item) => {
            return item.id <= 3 && (
              <Box key={item.id}>
                <Link href={`/lives/${item.id}`} sx={{ display: "flex", color: "#fff", mb: 1 }}>
                   {item.title}
                </Link>
             </Box>
            )
          })}
         
        </Grid>
 
     
    
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Apoiadores
          </Typography>
          <Box>
            <Link target="_blank" href="https://www.instagram.com/landersondelphi/" sx={{ display: "flex", color: "#fff", mb: 1 }}>
              Landerson Gomes
            </Link>
            <Link target="_blank" href="https://www.instagram.com/s.mukadavid/" sx={{ display: "flex", color: "#fff", mb: 1 }}>
              Samuel David
            </Link>
            <Link target="_blank" href="https://www.instagram.com/weldon_dev/" sx={{ display: "flex", color: "#fff", mb: 1 }}>
              Weldon Thallysson
            </Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Área do Admin
          </Typography>
          <Box sx={{display:"flex",flexDirection:"row",}}>
    
            <Link onClick={() => handleNavigation(ROUTES.LOGIN)} sx={{ display: "flex",cursor:"pointer", color: "#fff", mb: 1, gap:0.5 }}>
              Acessar <Login sx={{fontSize: 20, marginTop:0.4}}/>  
            </Link>
         
          </Box>
        </Grid>
        
      </Grid>

      <Divider sx={{ background: "#fff" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          mt: 1,
          gap:1
       
        }}
      >
        <Box
          sx={{
            width: 140,
            height: 60,
            "&:hover": {
              cursor:'pointer'
            }
          }}
          onClick={() => handleNavigation('/')}
        >
          <img
            src={LogoFooter}
            alt="logo do rodapé"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            Universidade Delphi Inc. V1. &copy; Copyright 2024. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
