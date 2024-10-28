import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "../../hooks/useTheme/useTheme";
import { useState } from "react";
import { menuDashboard } from "../../constants/mocks/MenuDashboard/mocks";
import { useCustomNavigation } from "../../hooks/useCustomNavigation/useCustomNavigation";
import Logo from '../../assets/logo.png'
const drawerWidth = 240;

export const DashboardMenu = () => {
  const { theme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { handleNavigation } = useCustomNavigation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [tabSelected,setTabSelected] = useState<number>(1)

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        backgroundColor: theme.colors.terciary,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Espaço entre os itens
        padding: 1,

      }}
    >
      {/* Itens do menu principal */}
      <List sx={{display:"flex",flexDirection:'column', gap: 0.5  }}>
        {menuDashboard.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => {
              setTabSelected(item.id)
              handleNavigation(item.path)
            }}
            sx={{
              bgcolor: item.id === tabSelected ? theme.colors.primary : "transparent",
              color: item.id === tabSelected ? theme.colors.secondary : theme.colors.terciary,
              transition: "ease-in-out 0.2s",
              
              "&:hover": {
                cursor:"pointer",
                transition: "ease-in-out 0.2s",
                bgcolor: item.id === tabSelected ? "#b81929" : "#6e1d1d",
              },
              gap: 1,
              borderRadius: 1
            }}
          >
            <Icon sx={{ color: "white" }}>{item.icon}</Icon>
            <ListItemText
              primary={item.label}
           
              sx={{ color: theme.colors.secondary }}
            />
          </ListItem>
        ))}
      </List>
  
      {/* Botão de Logout */}
      <ListItem
       
        sx={{
          bgcolor: "transparent",
          color: theme.colors.terciary,
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          borderRadius: 1,
          "&:hover": {
            cursor:"pointer",
            transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
            transform: "scale(1.01)",
        
          },
          marginTop: "auto", // Alinha ao final da lista
          gap: 1,
        
      
        }}
        onClick={() => handleNavigation("/")}
      >
        <Icon sx={{ color: "white" }}>logout</Icon>
        <ListItemText primary="Logout" sx={{ color: theme.colors.secondary }} />
      </ListItem>
    </Box>
  );
  

  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.colors.primary,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Menu lateral */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              
            },
          }}
        >
           <Box sx={{display:"flex",justifyContent:"center",padding: "1rem",alignItems:"center",background: theme.colors.terciary, }}>
            <Box sx={{width: 120, height: 55}}>
                <img src={Logo} style={{width: "100%", height: "100%"}} alt="logo da dashboard"/>
            </Box>            
          </Box>
          <Divider />
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            margin: 0,
         
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none",
            },
          }}
          open
        >
          <Box sx={{display:"flex",justifyContent:"center",padding: "1.2rem",alignItems:"center",background: theme.colors.terciary, }}>
            <Box sx={{width: 100, height: 45}}>
                <img src={Logo} style={{width: "100%", height: "100%"}} alt="logo da dashboard"/>
            </Box>            
          </Box>
          <Divider />
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
