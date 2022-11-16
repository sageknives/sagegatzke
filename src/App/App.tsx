import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { FunctionComponent } from 'react'
import './App.css'
import { AppNavigationBar } from './AppNavigationBar'
import { theme } from '../theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '../routes'
import { GlobalStylesOverride } from './GlobalStylesOverride'

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <CssBaseline />
          <GlobalStylesOverride />
          <AppNavigationBar />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path || 'index'}
                index={route.index}
                path={route.path}
                element={<route.component />}
              >
                {route.routes?.map((subRoute) => (
                  <Route
                    key={subRoute.path || 'index'}
                    index={subRoute.index}
                    path={subRoute.path}
                    element={<subRoute.component />}
                  />
                ))}
              </Route>
            ))}
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}
