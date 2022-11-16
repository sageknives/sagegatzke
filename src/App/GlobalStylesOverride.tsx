/* eslint-disable @typescript-eslint/no-explicit-any */
import { GlobalStyles } from '@mui/material'
import { FunctionComponent } from 'react'

const desktopSpacingArray = [
  { key: '--space0125', value: '.125rem' },
  { key: '--space025', value: '.025rem' },
  { key: '--space050', value: '.50rem' },
  { key: '--space075', value: '.75rem' },
  { key: '--space100', value: '1rem' },
  { key: '--space150', value: '1.5rem' },
  { key: '--space200', value: '2rem' },
  { key: '--space250', value: '2.5rem' },
  { key: '--space300', value: '3rem' },
  { key: '--space400', value: '4rem' },
]
const mobileSpacingArray = [
  { key: '--space0125', value: '.125rem' },
  { key: '--space025', value: '.025rem' },
  { key: '--space050', value: '.50rem' },
  { key: '--space075', value: '.75rem' },
  { key: '--space100', value: '1rem' },
  { key: '--space150', value: '1.5rem' },
  { key: '--space200', value: '2rem' },
  { key: '--space250', value: '2.5rem' },
  { key: '--space300', value: '3rem' },
  { key: '--space400', value: '4rem' },
]
const desktopSpacing = desktopSpacingArray.reduce((acc, { key, value }) => {
  acc[`${key}`] = value
  return acc
}, {} as any)

const mobileSpacing = mobileSpacingArray.reduce((acc, { key, value }) => {
  acc[`${key}`] = value
  return acc
}, {} as any)

export const GlobalStylesOverride: FunctionComponent = () => (
  <GlobalStyles
    styles={{
      ':root': {
        ...mobileSpacing,
      },
      '@media(max-width: 600px)': {
        ':root': {
          ...desktopSpacing,
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
