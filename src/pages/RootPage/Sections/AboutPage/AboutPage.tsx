import { Typography, Box } from '@mui/material'
import { FunctionComponent } from 'react'
import { Gallery } from '../../../../components/Gallery'
import { Page } from '../../../../components/Page'
import { gallery } from '../../../../constants/gallery'

export const AboutPage: FunctionComponent = () => (
  <Page title="About">
    <Box display="flex" flexDirection="column" gap="var(--space200)" pt="var(--space200)">
      <Gallery gallery={gallery} />
      <Box>
        <Typography>{`I live to program and figure out life's puzzles.`}</Typography>
        <Typography>Programmer, husband, planner, bassist, drummer, communicator.</Typography>
      </Box>
    </Box>
  </Page>
)

AboutPage.displayName = 'About'
