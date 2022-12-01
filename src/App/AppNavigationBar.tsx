import { Close, Menu } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { forwardRef, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from '../components'
import { globalNavigation } from '../constants'

export const AppNavigationBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const { hash } = useLocation()
  const selectedRoute = hash ? hash.slice(1) : 'code'
  useEffect(() => {
    const timeout = setTimeout(() => {
      const element = document.querySelector(`#${selectedRoute}`)
      if (element) {
        const topPos = element.getBoundingClientRect().top + window.pageYOffset

        window.scrollTo({
          top: topPos, // scroll so that the element is at the top of the view
          behavior: 'smooth', // smooth scroll
        })
      }
    }, 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [selectedRoute])

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
      maxHeight="75vh"
      display="flex"
      flexDirection="column"
    >
      <Toolbar
        sx={{
          background: '#404923',
          borderTop: '1px solid black',
          display: 'flex',
          justifyContent: 'space-between',
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
          sx={{ mr: 2, display: { sm: 'none' }, color: '#D5D7CE' }}
        >
          <Close />
        </IconButton>
      </Toolbar>
      <List sx={{ flex: '1 1 auto', overflow: 'scroll' }} disablePadding>
        {globalNavigation.map(item => {
          const link = `./${'pages' in item ? '' : '#'}${item.label.toLocaleLowerCase()}`
          return (
            <ListItem
              key={item.label}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              button
              component={Link}
              to={link}
              sx={{
                borderTop: '1px solid black',
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  color: selectedRoute === item.label.toLocaleLowerCase() ? 'white' : '#D5D7CE',
                }}
              />
            </ListItem>
          )
        })}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        component="nav"
        sx={theme => ({
          top: 0,
          minHeight: 0,
          [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            top: 'auto',
            bottom: 0,
          },
        })}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            Sage Gatzke
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#D5D7CE' }}
          >
            <Menu />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {globalNavigation.map(item => {
              const link = `./${'pages' in item ? '' : '#'}${item.label.toLocaleLowerCase()}`
              return (
                <Button
                  key={item.label}
                  sx={{
                    color: selectedRoute === item.label.toLocaleLowerCase() ? 'white' : '#D5D7CE',
                  }}
                  /** @TODO fix this */
                  // eslint-disable-next-line react/no-unstable-nested-components
                  LinkComponent={forwardRef((props, ref) => (
                    <Link ref={ref} {...props} to={link} />
                  ))}
                  href={link}
                >
                  {item.label}
                </Button>
              )
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="bottom"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}
