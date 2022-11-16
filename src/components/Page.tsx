import { Typography, Box, Toolbar, BoxProps } from "@mui/material";
import { FunctionComponent } from "react";

export interface PageProps extends BoxProps {
  title?: string;
}

export const Page: FunctionComponent<PageProps> = ({ title, children, ...props }) => (
  <Box id={`${title}`} minHeight="100vh" px={3} pt={2} {...props}>
    <Toolbar
      sx={(theme) => ({
        display: { xs: "none", sm: "inherit" },
        height: theme.mixins.toolbar.minHeight,
      })}
    />
    {title && <Typography variant="h4">{title}</Typography>}
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
