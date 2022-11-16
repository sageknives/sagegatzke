import { Box, useMediaQuery, useTheme } from "@mui/material";
import { FunctionComponent, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";

const drawerWidth = "200px";

export const CodePage: FunctionComponent = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if (isDesktop) {
      console.log("isDesktop");
    }
  });

  return (
    <Box component="main" display="flex" flexDirection={{ sm: "row" }}>
      {isDesktop && (
        <Box bgcolor="olive" width={drawerWidth} minWidth={drawerWidth}>
          <SideBar sidebar />
        </Box>
      )}
      <Box px="var(--space300)">
        <Outlet />
      </Box>
    </Box>
  );
};

CodePage.displayName = "Code";
