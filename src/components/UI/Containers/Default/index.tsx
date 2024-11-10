import { Box } from "@mui/material";
import React from "react";

interface IDefault {
  children: React.ReactNode;
  flexDirection?: Record<string, string> | string;
  justifyContent?: string | null;
  alignItems?: string | null;
  padding?: Record<string, string> | string;
  margin?: Record<string, string> | string;
  width?: Record<string, string | number> | string | number;
  height?: Record<string, string | number> | string | number;
  gap?: Record<string, string | number> | string | number;
  background?: string | null;
}

export const Default = ({
  children,
  width,
  height,
  flexDirection,
  gap,
  justifyContent,
  alignItems,
  padding,
  margin,
  background,
}: IDefault) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: flexDirection ?? "row",
        justifyContent: justifyContent ?? "flex-start",
        alignItems: alignItems ?? "flex-start",
        padding: padding ?? "none",
        margin: margin ?? "flex-start",
        width: width ?? "auto",
        height: height ?? "auto",
        gap: gap ?? 0,
        background: background ?? "transparent",
      }}
    >
      {children}
    </Box>
  );
};
