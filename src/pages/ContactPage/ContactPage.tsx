import { Box, Typography } from '@mui/material'
import { FunctionComponent } from 'react'
import { Page } from '../../components/Page'

export const ContactPage: FunctionComponent = () => (
  <Page title="Contact">
    <Box textAlign="center" py={2}>
      <Typography>Sage Gatzke</Typography>
      <Typography>Seattle, WA 98105</Typography>
      <Typography>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sage-gatzke-86041292"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </Typography>
    </Box>
  </Page>
)

ContactPage.displayName = 'Contact'
