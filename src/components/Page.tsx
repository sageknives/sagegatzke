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
    <Typography
      variant="h4"
      // sx={(theme) => ({
      //   position: "sticky",
      //   background: theme.palette.background.default,
      //   marginX: -3,
      //   marginTop: -2,
      //   paddingX: 3,
      //   zIndex: 3,
      //   boxShadow: theme.shadows[1],
      //   top: 0,
      //   [theme.breakpoints.up("sm")]:{
      //     top: `${
      //       (Number.parseInt((theme.mixins.toolbar.minHeight || '').toString(), 10) || 0) + 8
      //     }px`,
      //   }
      // })}
    >
      {title}
    </Typography>
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
