import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { IMenuDrawerDefault } from "../../../interface/InterfaceMenu/interface.menu";
import { useTheme } from "../../../hooks/useTheme/useTheme";
import Logo from "../../../assets/logo.png";
//import Instagram from "@mui/icons-material/Instagram";

type DrawerMobile = {
  openDrawer: boolean;
  optionsMenu: IMenuDrawerDefault[];
  handleCloseDrawer: () => void;
  handleDrawer: () => void;
  handleActionItemDrawer: (item: string) => void;
};

export const DrawerMobile = ({
  optionsMenu,
  openDrawer,
  handleDrawer,
  handleCloseDrawer,
  handleActionItemDrawer,
}: DrawerMobile) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const { theme } = useTheme();
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={handleCloseDrawer}
      sx={{
        display: {
          lg: "none",
        },
      }}
    >
      <Box
        role="presentation"
        sx={{
          display: "flex",
          width: 260,
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          bgcolor: "#f7f7f7",
        }} // Fundo mais suave
      >
        <Box>
          <Box sx={{ background: theme.colors.terciary, padding: "1rem 0" }}>
            <Box
              sx={{ display: "flex", width: "100%", justifyContent: "center" }}
            >
              <Box sx={{ display: "flex", width: "50%" }}>
                <img
                  src={Logo}
                  alt="logo"
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                />
              </Box>
            </Box>
          </Box>

          <List sx={{ p: 0 }}>
            {optionsMenu.map((item) => (
              <div key={item.name}>
                <ListItem
                  onClick={() => {
                    if (item.id === 1) {
                      handleToggleDropdown();
                    } else {
                      handleActionItemDrawer(item.href);
                    }
                  }}
                  sx={{
                    bgcolor:
                      openDropdown && item.id === 1
                        ? theme.colors.primary
                        : "transparent",
                    color:
                      openDropdown && item.id === 1
                        ? theme.colors.secondary
                        : theme.colors.terciary,

                    "&:hover": {
                      bgcolor:
                        openDropdown && item.id === 1 ? "#b81929" : "#e0e0e0",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  />
                  {item.id === 1 ? (
                    openDropdown ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItem>

                {item.id === 1 && (
                  <Collapse in={openDropdown} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.items?.map((subItem: any) => (
                        <ListItem
                          key={subItem.name}
                          onClick={() => handleActionItemDrawer(subItem.href)}
                          sx={{
                            pl: 3, // Indentação para subitens
                            "&:hover": {
                              bgcolor: "#e0e0e0",
                            },
                            gap: 1.5,
                          }}
                        >
                          <subItem.icon style={{ fontSize: "1.5rem" }} />
                          <ListItemText
                            primary={subItem.name}
                            primaryTypographyProps={{
                              fontSize: 14,
                              color: "text.secondary",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </List>
        </Box>

        {/*
         <Box sx={{padding:"0.2rem 0"}}>
           <a style={{textDecoration:"none"}} href="#">
             <IconButton >
                   <Instagram />
              
            </IconButton>
            </a>
        </Box>
        
        */}
      </Box>
    </Drawer>
  );
};
