import * as CSS from "csstype";
import { SpacingProps } from "@mui/system/spacing";

type Spacing =
  | "var(--space0125)"
  | "var(--space025)"
  | "var(--space050)"
  | "var(--space075)"
  | "var(--space100)"
  | "var(--space150)"
  | "var(--space200)"
  | "var(--space250)"
  | "var(--space300)"
  | "var(--space400)"
  | `${number}px`
  | `${number}rem`
  | `${number}%`
  | `${number}vh`
  | `${number}vw`
  | 0
  | `calc(${string})`
  | "inherit"
  | "initial"
  | "unset";

type DeclarativeSpacing = {
  [K in keyof SpacingProps]: Spacing
}
declare module "csstype" {
  interface PropertiesFallback extends DeclarativeSpacing { }
}
