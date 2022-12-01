import { Box } from '@mui/material'
import { FunctionComponent } from 'react'
import { Pages } from '../../constants'
import * as Views from './Sections'

export const RootPage: FunctionComponent = () => (
  <Box component="main">
    {Pages.home?.sections?.map(({ component }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const Section = Views[component]
      return (
        <div key={component}>
          <Section />
        </div>
      )
    })}
  </Box>
)

RootPage.displayName = 'Root'
