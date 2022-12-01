import { Typography, Box, Toolbar, BoxProps, IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { FunctionComponent } from 'react'
import { Link } from './Link'

export interface PageProps extends BoxProps {
  // eslint-disable-next-line react/require-default-props
  title?: string
  back?: string
}

export const Page: FunctionComponent<PageProps> = ({ title, back, children, ...props }) => (
  <Box
    id={`${title?.toLocaleLowerCase()}`}
    minHeight="100vh"
    px="var(--space300)"
    pt="var(--space200)"
    {...props}
  >
    <Toolbar
      /** @TODO fix this sx typescript problem  height? */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sx={theme => ({
        display: { xs: 'none', sm: 'inherit' },
        height: theme.mixins.toolbar.minHeight,
      })}
    />
    {back && !title && (
      <IconButton component={Link} to={back}>
        <ArrowBack />
      </IconButton>
    )}
    {title && (
      <Typography variant="h4" textTransform="capitalize">
        {back && (
          <IconButton component={Link} to={back}>
            <ArrowBack />
          </IconButton>
        )}
        {title}
      </Typography>
    )}
    {children}
    <Toolbar
      sx={theme => ({
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      })}
    />
  </Box>
)
