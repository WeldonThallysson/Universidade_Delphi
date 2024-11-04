import { Box, Toolbar } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import Header from "../../Header";
import { Footer } from "../../Footer";
import { useEffect } from "react";
import { DashboardMenu } from "../../DashboadMenu";
import { useTheme } from "../../../hooks/useTheme/useTheme";

export const LayoutDashboard = () => {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: theme.colors.terciary,
        height: "100vh",
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
          height: {xs: 'auto',sm:"100vh"},
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
