import { Done } from '@mui/icons-material'
import { Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { FunctionComponent } from 'react'
import { Experience } from '../types/experience'

export const ExperienceItem: FunctionComponent<Experience> = ({ title, accomplishments }) => (
  <>
    <Typography component="p" mt="var(--space150)" variant="overline">
      {title}
    </Typography>
    <Divider />
    <List>
      {accomplishments.map(({ description }) => (
        <ListItem key={description}>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <ListItemText>{description}</ListItemText>
        </ListItem>
      ))}
    </List>
  </>
)
