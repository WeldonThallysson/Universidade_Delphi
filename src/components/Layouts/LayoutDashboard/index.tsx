import { Box, Toolbar } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import Header from "../../Header";
import { Footer } from "../../Footer";
import { useEffect } from "react";
import { DashboardMenu } from "../../DashboadMenu";
import { useTheme } from "../../../hooks/useTheme/useTheme";
import { useMyAccount } from "../../../hooks/hookPage/MyAccount/useMyAccount";
import { useStorage } from "../../../hooks/useStorage/useStorage";
import { KeyStorage } from "../../../constants/keys/key.localstorage";
import { useCustomNavigation } from "../../../hooks/useCustomNavigation/useCustomNavigation";
import { ROUTES } from "../../../routes/paths";

export const LayoutDashboard = () => {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const {handleGetDetailsAccount} = useMyAccount()
  const {handleNavigation} = useCustomNavigation()
  const {handleGetStorage} = useStorage()

  useEffect(() => {
    const storageAuth = handleGetStorage(KeyStorage.AuthTokenStorage)
    if(!storageAuth.token) {
      handleNavigation(ROUTES.LOGIN)
    }
    else { 
      handleNavigation(ROUTES.DASHBOARD)
      handleGetDetailsAccount({
          idUsers: storageAuth.id
      })
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: theme.colors.terciary,
        height: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          
        }}
      >
        <DashboardMenu />
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: "3rem 2rem",
          width: "100%",
          height: '100vh',
          background:theme.colors.secondary
        }}
      >
         <Toolbar />
          <Outlet />
        </Box>

      </Box>
    </Box>
  );
};
