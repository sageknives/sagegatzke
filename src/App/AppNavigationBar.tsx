import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
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

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const pages = [
  {
    label: "home",
    href: "#home",
  },
  {
    label: "about",
    href: "#about",
  },
  {
    label: "contact",
    href: "#contact",
  },
];

export const AppNavigationBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery("sm");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      height="75vh"
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h6" sx={{ my: 2 }} flex="none">
        Sage Gatzke
      </Typography>
      <Divider />
      <List sx={{ flex: "1 1 auto", overflow: "scroll" }}>
        {pages.map(({ label, href }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              LinkComponent="a"
              href={href}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // <Box sx={{ display: "flex", height: '100%' }}>
    <>
      <AppBar
        component="nav"
        sx={(theme) => ({
          position: "sticky",
          top: 0,
          minHeight: 0,
          [theme.breakpoints.down("sm")]: {
            position: 'fixed',
            top: "auto",
            bottom: 0,
          },
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Sage Gatzke
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map(({ label, href }) => (
              <Button
                key={label}
                sx={{ color: "#fff" }}
                LinkComponent="a"
                href={href}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
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
    // </Box>
  );
};
