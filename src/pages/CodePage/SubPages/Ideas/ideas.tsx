import { FunctionComponent } from 'react'

export const Ideas: FunctionComponent = () => (
  <ul>
    <li>
      Sidebar and main code page should share the examples but display them differently and add a
      back button
    </li>
    <li>Aliasing the root folders would be nice</li>
    <li>upgrade react</li>
    <li>get a better linter</li>
    <li>
      Declarative Mui
      <ul>
        <li>Responsive css variables?</li>
        <li>do $variables work</li>
        <li>get all props to work for sizing</li>
      </ul>
    </li>
    <li>
      Code Preview
      <ul>
        <li>Show Code</li>
        <li>Edit Code</li>
      </ul>
    </li>
    <li>
      Clean up
      <ul>
        <li>navigation is a disaster, state is everywhere</li>
      </ul>
    </li>
  </ul>
)

Ideas.displayName = 'Ideas'
