import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  itemsMenu,
  itemsMenuDrawer,
  menuDefault,
} from "../../constants/mocks/mocksMenu/mocks";
import { DrawerMobile } from "./Mobile/DrawerMobile";
import { useCustomNavigation } from "../../hooks/useCustomNavigation/useCustomNavigation";
import { useTheme } from "../../hooks/useTheme/useTheme";
import { ROUTES } from "../../routes/paths";
import SearchInputAutocomplete from "../UI/Inputs";


import { aulasApiRestHorse } from "../../constants/mocks/Aulas/ApiRestHorse"
import { aulasWebinarsUniversidadeDelphi } from "../../constants/mocks/Aulas/AulasPrincipais"
import { aulasMaratonaIntraWeb } from "../../constants/mocks/Aulas/MaratonaIntraWeb"
import { desvendandoDebugDelphi } from "../../constants/mocks/Aulas/MiniCursoDebugDelphi"
import { delphiPoo } from "../../constants/mocks/Aulas/MiniCursoDelphiPoo"
import { minicursoDesktop } from "../../constants/mocks/Aulas/MiniCursoDesenvolvimentoDesktop"
import { criandoPrimeiraAplicacao } from "../../constants/mocks/Aulas/CriandoPrimeiraAplicacao"

export default function Header() {
  const { theme } = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const { handleNavigation } = useCustomNavigation();
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };


 
  const allClasses = [
    ...criandoPrimeiraAplicacao,
    ...aulasWebinarsUniversidadeDelphi,
    ...aulasApiRestHorse,
    ...aulasMaratonaIntraWeb,
    ...desvendandoDebugDelphi,
    ...minicursoDesktop,
    ...delphiPoo
  ];
  
  const searchOptions = allClasses
    .filter((item, index, self) => 
      index === self.findIndex((t) => t.title === item.title)
    )
    .map((item: any) => ({
      id: item.id,
      idCourse: item?.idCourse,
      title: item.title,
      category: item.category,
      description: item.description,
    }));


  return (
    <header>
      <AppBar
        position="fixed"
        sx={{
          elevation: 0,
          boxShadow: "none",
          background:
            "linear-gradient(to right, #000000dd, #000000e8,#000000e6, #000000d8)",
          backgroundSize: "100%",
          padding: {
            xs: "0.3rem 0.4rem",
            sm: "0.3rem 1rem"
          },
        }}
      >
        <Toolbar sx={{display:"flex", justifyContent: "space-between", flexGrow: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                width: 100,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => handleNavigation(ROUTES.HOME)}
            >
              <img
                src={Logo}
                alt="Logo"
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "fill" }}
              />
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3 }}>
            {menuDefault.map((item) => (
              <Box key={item.id}>
                <Button
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    fontSize: 15.8,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  endIcon={item.id === 1 && <ChevronDownIcon />}
                  onClick={(e) => {
                    if (item.id === 1) {
                      handleMenuOpen(e);
                    } else {
                      handleNavigation(item.href);
                    }
                  }}
                >
                  {item.name}
                </Button>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" }, ml: -10 }}>
            <SearchInputAutocomplete
              options={searchOptions} 
              onSearch={(value) => {
                if (value?.idCourse) {
                  const redirect = `/cursos/${value.idCourse}/${value.id}`;
                  handleNavigation(redirect);
                } else if (value?.id && !value?.idCourse) {
                  const redirect = `/aulas/${value.category}/${value.id}`;
                  handleNavigation(redirect);
                }
            
              }} // Função de pesquisa
            />
          </Box>
          {/* Menu para mobile */}
          <Box sx={{ display: { xs: "flex", lg: "none" }, gap: 2 }}>
            
            <Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            </Box>
          
          </Box>
        </Toolbar>
        <Box sx={{ display: { xs: "flex", lg: "none" }, padding: "0.5rem 1rem"}}>
              <SearchInputAutocomplete
                options={searchOptions} 
                onSearch={(value) => {
                  if (value?.idCourse) {
                    const redirect = `/cursos/${value.idCourse}/${value.id}`;
                    handleNavigation(redirect);
                  } else if (value?.id && !value?.idCourse) {
                    const redirect = `/aulas/${value.category}/${value.id}`;
                    handleNavigation(redirect);
                  }
              
                }} // Função de pesquisa
              />
            </Box>
      </AppBar>

      <Popover
        open={isMenuOpen}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            style: {
              borderRadius: "1.2rem", // Ajuste este valor conforme necessário
              boxShadow: "1px 1px 25px",
            },
          },
        }}
      >
        <Box sx={{ p: "1rem 1rem" }}>
          <List>
            {itemsMenu.map((item) => (
              <ListItem
                key={item.name}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    background: theme.colors.secondary,
                    "& .icon": {
                      color: theme.colors.primary,
                    },
                  },
                }}
                onClick={() => {
                  handleNavigation(item.href);
                  handleMenuClose();
                }}
              >
                <ListItemIcon>
                  <item.icon className="icon" aria-hidden="true" size={25} />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  secondary={item.description}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>

      <DrawerMobile
        openDrawer={drawerOpen}
        optionsMenu={itemsMenuDrawer}
        handleDrawer={toggleDrawer(false)}
        handleCloseDrawer={toggleDrawer(false)}
        handleActionItemDrawer={(item) => {
          handleNavigation(item);
        }}
      />
  
    </header>
  );
}
