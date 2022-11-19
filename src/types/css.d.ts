import { MarginProps, PaddingProps, GridProps } from '@mui/system'

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

type SetKey<T extends string> = `var(${T})`
type VarSpacing = SetKey<SpacingType>

type AllowedNumbers =
  | `${number}px`
  | `${number}rem`
  | `${number}%`
  | `${number}vh`
  | `${number}vw`
  | 0
  | `calc(${string})`

type AllowedStrings = 'inherit' | 'initial' | 'unset'

type Spacing = VarSpacing | AllowedNumbers | AllowedStrings

type SpacingProps = MarginProps & PaddingProps & GridProps

type DeclarativeSpacing = {
  [K in keyof SpacingProps]: Spacing
}

declare module '@mui/system/styleFunctionSx/OverwriteCSSProperties' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface OverwriteCSSProperties extends DeclarativeSpacing {}
}
