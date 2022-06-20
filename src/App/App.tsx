import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { FunctionComponent } from "react";
import { pages } from "../pages";
import "./App.css";
import { AppNavigationBar } from "./AppNavigationBar";
import { theme } from "../theme";
import { BrowserRouter } from "react-router-dom";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <CssBaseline />
          <AppNavigationBar />
          <Box component="main" px={3}>
            {pages.map(({ content, label }) => (
              <div key={label}>{content}</div>
            ))}
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};
