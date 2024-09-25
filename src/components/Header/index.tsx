import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Button, Typography, Popover, MenuItem, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import Logo from '../../assets/logo.png'; // Sua imagem de logo
import { itemsMenu } from '../../constants/mocks/mocksMenu/mocks';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <header>
      <AppBar  sx={{ background: '#121821',padding:"0.2rem 1rem" }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
           
              <Box sx={{
                display:"flex",
                width: 100,
              }}>
              <img src={Logo} alt="Logo" width={"100%"} height={"100%"} />
              </Box>
          

          </Box>
          {/* Menu para telas grandes */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 4 }}>
            <Button
              color="inherit"
              endIcon={<ChevronDownIcon />}
              onClick={handleMenuOpen}
            >
              Cursos
            </Button>
            <Button color="inherit">Lives</Button>
            <Button color="inherit">Comunidade</Button>
            <Button color="inherit">Preciso de Ajuda</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Button color="inherit">
              Log in &rarr;
            </Button>
          </Box>
          {/* Menu para mobile */}
          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Popover - Painel de cursos */}
      <Popover
       
        open={isMenuOpen}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
  
      >
        <Box sx={{ p: 2 }}>
          <List>
            {itemsMenu.map((item) => (
              <ListItem button key={item.name}>
                <ListItemIcon>
                  <item.icon aria-hidden="true" size={22}/>
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
    </header>
  );
}
