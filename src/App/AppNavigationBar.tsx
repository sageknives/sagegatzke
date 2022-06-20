import { Close, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { pages } from "../pages";

export const AppNavigationBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("sm");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { hash } = useLocation();
  const selectedRoute = hash ? hash.slice(1) : 'About';
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      maxHeight="75vh"
      display="flex"
      flexDirection="column"
    >
      <Toolbar
        sx={{
          background: "#404923",
          borderTop: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="div" color="#D5D7CE">
          Sage Gatzke
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" }, color: "#D5D7CE" }}
        >
          <Close />
        </IconButton>
      </Toolbar>
      <List sx={{ flex: "1 1 auto", overflow: "scroll" }} disablePadding>
        {pages.map(({ label }) => (
          <ListItem
            key={label}
            disablePadding
            sx={{
              borderTop: "1px solid black",
            }}
          >
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
              LinkComponent="a"
              href={`#${label}`}
            >
              <ListItemText
                primary={label}
                sx={{
                  textTransform: "capitalize",
                  color: selectedRoute === label ? "white" : "#D5D7CE",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={(theme) => ({
          top: 0,
          minHeight: 0,
          [theme.breakpoints.down("sm")]: {
            position: "fixed",
            top: "auto",
            bottom: 0,
          },
        })}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            Sage Gatzke
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#D5D7CE" }}
          >
            <Menu />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map(({ label }) => (
              <Button
                key={label}
                sx={{ color: selectedRoute === label ? "white" : "#D5D7CE" }}
                LinkComponent="a"
                href={`#${label}`}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor={isDesktop ? "left" : "bottom"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
