import { Box, Typography } from '@mui/material'
import { FunctionComponent } from 'react'

export const TableOfContents: FunctionComponent<{
  items: Array<{ title: string; description: string }>
}> = ({ items }) => {
  return (
    <Box>
      {items.map(({ title, description }) => (
        <Box>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
      ))}
    </Box>
  )
}
