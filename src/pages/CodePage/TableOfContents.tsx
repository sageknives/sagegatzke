import { Box, Typography, Button } from '@mui/material'
import { FunctionComponent, useMemo, PropsWithChildren } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Page, Link } from '../../components'
import { Pages } from '../../constants'

const Back: FunctionComponent<PropsWithChildren<{ path: string }>> = ({ path, children }) => (
  <Box display="flex" flexDirection="column">
    <Button variant="text" component={Link} to={path}>
      Back
    </Button>
    {children}
  </Box>
)

export const TableOfContents: FunctionComponent = () => {
  const { pathname } = useLocation()
  const [, root, subRoot, story] = pathname.split('/')
  const contents = useMemo(() => {
    const innerContent = !subRoot
      ? Pages.code.pages
      : Pages.code.pages?.find(p => p.label.toLocaleLowerCase() === subRoot)?.pages
    return innerContent?.filter(p => p.label) || []
  }, [root, subRoot])

  // if (story) {
  //   return (
  //     <Back path={`/${root}/${subRoot}`}>
  //       <Outlet />
  //     </Back>
  //   )
  // }

  const back = useMemo(() => {
    if (story) {
      return `/${root}/${subRoot}`
    }
    if (subRoot) {
      return `/${root}`
    }
    return ''
  }, [root, story, subRoot])

  return (
    <Page title={story ?? 'Table of Contents'} back={back}>
      {story ? (
        <Outlet />
      ) : (
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap="var(--space100)">
          {contents.map(({ label, description }) => (
            <Box
              key={label}
              component={Link}
              to={label.toLocaleLowerCase()}
              width="calc(50% - var(--space100))"
            >
              <Typography variant="h5">{label}!</Typography>
              <Typography variant="body1">{description}?</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Page>
  )
}
