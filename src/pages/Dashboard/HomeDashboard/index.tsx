import { Box, Typography, Grid, Card, CardContent, Icon, Divider } from "@mui/material";
import { useTheme } from "../../../hooks/useTheme/useTheme";
import SchoolIcon from '@mui/icons-material/School';  // Exemplo de ícone
import CategoryIcon from '@mui/icons-material/Category';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/paths";

const data = [
  { id: 1, path: ROUTES.CATEGORIES_DASHBOARD, label: "Categorias", value: 15, icon: <CategoryIcon />, color: "#4caf50" },
  { id: 2, path: ROUTES.COURSES_DASHBOARD,label: "Cursos", value: 25, icon: <SchoolIcon />, color: "#ff9800" },
  { id: 3,path: ROUTES.CLASS_DASHBOARD, label: "Aulas", value: 45, icon: <PlayCircleFilledIcon />, color: "#2196f3" },
  { id: 4, path: ROUTES.LIVES_DASHBOARD,label: "Lives", value: 5, icon: <LiveTvIcon />, color: "#f44336" },
];

const HomeDashboard = () => {
 
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Bem-vindo à Dashboard
      </Typography>
      <Typography>
        Confira abaixo um resumo dos dados mais relevantes para você.
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card sx={{ backgroundColor: item.color, color: "#fff" }}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Icon sx={{ fontSize: 40 }}>{item.icon}</Icon>
                <Box>
                  <Typography variant="h5">{item.value}</Typography>
                  <Typography variant="subtitle1">{item.label}</Typography>
                </Box>
             
              </CardContent>
              <Divider/>
              <Box sx={{display:"flex", justifyContent:"center", padding: 1}}>
                  <Link to={item.path}>
                      Acesse
                  </Link>
                </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeDashboard;
