import { RouteProps } from 'react-router-dom'
import { Typography } from '@mui/material'
import { Pages, Page } from '../constants'
import * as Views from '../pages'
import * as SubViews from '../pages/RootPage/Sections'
import * as SubPages from '../pages/CodePage/SubPages'

const AllViews = { ...Views, ...SubViews, ...SubPages }
type Route = RouteProps & {
  routes?: Route[]
}

const createRoute = ({ pages, component, index, label, category }: Page): Route => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Element = AllViews[component] || <Typography>Not Found</Typography>
  return {
    path: `${label.toLocaleLowerCase() ?? ''}${pages != null && !category ? '' : ''}`,
    element: <Element />,
    routes: pages?.map(createRoute),
    index,
  }
}

export const routes = Object.values(Pages).map(createRoute)
