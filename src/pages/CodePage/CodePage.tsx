import { Box, useMediaQuery, useTheme } from '@mui/material'
import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'

const drawerWidth = '200px'

export const CodePage: FunctionComponent = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box component="main" display="flex" flexDirection={{ sm: 'row' }}>
      {isDesktop && (
        <Box bgcolor="olive" width={drawerWidth} minWidth={drawerWidth}>
          <SideBar />
        </Box>
      )}
      <Box>
        <Outlet />
      </Box>
    </Box>
  )
}

CodePage.displayName = 'Code'
