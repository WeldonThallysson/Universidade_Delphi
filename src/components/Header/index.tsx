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

  
  return (
    <header>
      <AppBar sx={{ elevation: 0,boxShadow:"none",   background: "linear-gradient(to right, #000000dd, #000000e8,#000000e6, #000000d8)",backgroundSize:"100%", padding: "0.2rem 1rem" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                width: 100,
              }}
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

          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 4 }}>
            {menuDefault.map((item) => (
              <>
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
              </>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            {/*
             <a style={{textDecoration:"none", padding:0}} href="#">
                <IconButton >
                <LinkedIn sx={{color: theme.colors.secondary}}/>
                      
                </IconButton>
                </a>

                <a style={{textDecoration:"none"}} href="#">
                  <IconButton>
                    <Instagram sx={{color: theme.colors.secondary}}/>
                  </IconButton>
                </a>
            */}
            <Button color="inherit" disabled></Button>
          </Box>
          {/* Menu para mobile */}
          <Box sx={{ display: { xs: "block", lg: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
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
                onClick={() => handleNavigation(item.href)}
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
