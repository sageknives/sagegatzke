import { Box, List, ListItem, ListItemText, Typography, ListSubheader, Button } from '@mui/material'
import { FunctionComponent } from 'react'
import { Page, Link } from '../../components'
import { Pages } from '../../constants/navigation'

export const SideBar: FunctionComponent = () => (
  <Page p={0} mt="var(--space100)">
    <List
      sx={{
        flex: '1 1 auto',
        overflow: 'scroll',
      }}
      disablePadding
    >
      <ListSubheader
        sx={{ backgroundColor: 'inherit', fontWeight: 700 }}
        component={Link}
        to="/code"
      >
        <Typography variant="button" sx={{ textDecoration: 'underline', lineHeight: 0 }}>
          Table of Contents
        </Typography>
      </ListSubheader>
      <Box display="flex" flexDirection="column" gap="var(--space100)">
        {Pages.code.pages?.map(({ label, index, pages }) =>
          index ? null : (
            <div key={label || 'index'}>
              <ListSubheader
                sx={{ backgroundColor: 'inherit', fontWeight: 700 }}
                component={Link}
                to={`/code/${label.toLocaleLowerCase()}`}
              >
                <Typography variant="button" sx={{ textDecoration: 'underline', lineHeight: 0 }}>
                  {label}
                </Typography>
              </ListSubheader>
              <li key={label}>
                <Box
                  component="ul"
                  my={0}
                  mx={0}
                  sx={{ listStyleType: 'none', paddingInlineStart: 0 }}
                >
                  {pages?.map(({ label: subLabel }) => (
                    <ListItem
                      key={subLabel}
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      button
                      component={Link}
                      to={`/code/${label.toLocaleLowerCase()}/${subLabel.toLocaleLowerCase()}`}
                    >
                      <ListItemText
                        primary={subLabel}
                        sx={{
                          color: '#D5D7CE',
                        }}
                      />
                    </ListItem>
                  ))}
                </Box>
              </li>
            </div>
          )
        )}
      </Box>
    </List>
  </Page>
)
