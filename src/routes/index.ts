import { FunctionComponent } from 'react'
import { Pages, Page } from '../constants'

interface Route {
  index?: boolean
  path?: string
  component: FunctionComponent
  routes?: Route[]
}

const createRoute = (page: Page): Route => ({
  index: Boolean(page?.index),
  path: `${page.path}${page.pages ? '/*' : ''}`,
  component: page.component,
  routes: page.pages?.map(createRoute),
})

export const routes = Object.values(Pages).map(createRoute)
