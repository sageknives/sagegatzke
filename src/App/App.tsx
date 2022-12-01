import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { FunctionComponent } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppNavigationBar } from './AppNavigationBar'
import { theme } from '../theme'
import { routes } from '../routes'
import { GlobalStylesOverride } from './GlobalStylesOverride'

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Box>
        <CssBaseline />
        <GlobalStylesOverride />
        <AppNavigationBar />
        <Routes>
          {routes.map(route => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <Route
              key={route.path ?? 'index'}
              index={route.index}
              path={route.path}
              element={route.element}
            >
              {route.routes?.map(subRoute => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <Route
                  key={subRoute.path || 'index'}
                  index={subRoute.index}
                  path={subRoute.path}
                  element={subRoute.element}
                >
                  {subRoute.routes?.map(subSubRoute => (
                    <Route
                      key={subSubRoute.path || 'index'}
                      index={subSubRoute.index}
                      path={subSubRoute.path}
                      element={subSubRoute.element}
                    />
                  ))}
                </Route>
              ))}
            </Route>
          ))}
        </Routes>
      </Box>
    </BrowserRouter>
  </ThemeProvider>
)
