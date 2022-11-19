import { GlobalStyles, Breakpoint } from '@mui/material'
import { FunctionComponent } from 'react'
import { spacing } from '../constants'
import { SpacingType } from '../types/css'

const calculateCSSVariableSpacing = (x: Breakpoint) =>
  (Object.keys(spacing) as SpacingType[]).reduce<{
    [key in SpacingType]?: string
  }>((acc, key) => {
    acc[key] = spacing[key][x] ?? undefined
    return acc
  }, {} as { [key in SpacingType]?: string })

export const GlobalStylesOverride: FunctionComponent = () => (
  <GlobalStyles
    styles={{
      ':root': {
        ...calculateCSSVariableSpacing('xs'),
      },
      '@media(max-width: 600px)': {
        ':root': {
          ...calculateCSSVariableSpacing('sm'),
        },
      },
      '@keyframes render1': {
        '0%': { backgroundColor: 'transparent' },
        '50%': { ' backgroundColor': '#d8b43dd4' },
        '100%': { backgroundCsolor: 'inherit' },
      },
      '@keyframes render2': {
        '0%': { backgroundColor: 'initial' },
        '50%': { ' backgroundColor': '#d8b43dd4' },
        '100%': { backgroundCsolor: 'inherit' },
      },
    }}
  />
)
