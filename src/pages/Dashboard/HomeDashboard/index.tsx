import { Box, Typography, Grid2, Card, CardContent, Icon, Divider, CircularProgress } from "@mui/material";
import { useTheme } from "../../../hooks/useTheme/useTheme";
import { Link } from "react-router-dom";

import { useDashboard } from "../../../hooks/hookPage/Dashboard/useDashboard";
import { useEffect } from "react";

const HomeDashboard = () => {
 
  const {
     loading,
    dataDashboardFormated,
    handleDashboard,
    handleSelectTab

  } = useDashboard()
  const { theme } = useTheme();

  useEffect(() => {
     handleDashboard()
  },[])
  

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Bem-vindo à Dashboard
      </Typography>
      <Typography style={{fontSize: 15,}}>
        Confira abaixo um resumo dos dados mais relevantes para você.
      </Typography>
      {loading ? (
        <Box>
          <CircularProgress size={25} sx={{color:theme.colors.secondary}}/>
          </Box>
      ) : (
           <Grid2 container spacing={2} sx={{ marginTop: 2 }}>
           {dataDashboardFormated.map((item) => (
             <Grid2 size={{ xs: 12, sm:6, md:3   }} key={item.id}>
                 <Card sx={{ backgroundColor: item.color, color: "#fff" }}>
                 <CardContent sx={{ display: "flex", alignItems: "center", gap: 2,padding: "1.5rem 1rem" }}>
                   <Icon sx={{ fontSize: 40 }}>{item.icon}</Icon>
                   <Box>
                     <Typography variant="h5">{item.value}</Typography>
                     <Typography variant="subtitle1">{item.label}</Typography>
                   </Box>
                
                 </CardContent>
                 <Divider/>
                 <Box sx={{display:"flex", justifyContent:"center", padding: 1}}>
                     <Link to={item.path} onClick={() => { handleSelectTab(item.path)}}>
                         Acesse
                     </Link>
                   </Box>
               </Card>
           
             </Grid2>
           ))}
         </Grid2>
      )}
  
    </Box>
  );
};

export default HomeDashboard;
