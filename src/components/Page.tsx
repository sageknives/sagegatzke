import { Typography, Box, Toolbar } from "@mui/material";
import { FunctionComponent } from "react";

export interface PageProps {
  title: string;
  children: React.ReactNode;
}

export const Page: FunctionComponent<PageProps> = ({ title, children }) => (
  <Box id={`${title}`} minHeight="100vh" pt={2}>
    <Toolbar
      sx={(theme) => ({
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      })}
    />
    <Typography variant="h4">{title}</Typography>
    {children}
    <Toolbar
      sx={(theme) => ({
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      })}
    />
  </Box>
);
