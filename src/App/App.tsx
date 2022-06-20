import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { FunctionComponent } from "react";
import { pages } from "../pages";
import "./App.css";
import { AppNavigationBar } from "./AppNavigationBar";
import { theme } from '../theme'

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <AppNavigationBar />
        <Box component="main" px={3}>
          {pages.map(({ content }) => content)}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
