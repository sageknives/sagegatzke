import { Breakpoint } from '@mui/material'

export type SpacingType =
  | '--space0125'
  | '--space025'
  | '--space050'
  | '--space075'
  | '--space100'
  | '--space150'
  | '--space200'
  | '--space250'
  | '--space300'
  | '--space400'

type ResponsiveValue = {
  [key in Breakpoint]?: `${number}rem`
}
type ResponsiveCssVariable = {
  [key in SpacingType]: ResponsiveValue
}

export const spacing: ResponsiveCssVariable = {
  '--space0125': { xs: '.125rem', sm: '.125rem' },
  '--space025': { xs: '.25rem', sm: '.25rem' },
  '--space050': { xs: '.50rem', sm: '.50rem' },
  '--space075': { xs: '.75rem', sm: '.75rem' },
  '--space100': { xs: '1rem', sm: '1rem' },
  '--space150': { xs: '1.5rem', sm: '1.5rem' },
  '--space200': { xs: '2rem', sm: '2rem' },
  '--space250': { xs: '2.5rem', sm: '2.5rem' },
  '--space300': { xs: '3rem', sm: '3rem' },
  '--space400': { xs: '4rem', sm: '4rem' },
}
