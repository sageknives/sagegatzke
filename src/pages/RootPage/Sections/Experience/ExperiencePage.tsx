import { FunctionComponent } from 'react'
import { Page, ExperienceItem } from '../../../../components'
import { experiences } from '../../../../constants/experiences'

export const ExperiencePage: FunctionComponent = () => (
  <Page title="Experience">
    {experiences.map(({ title, accomplishments }) => (
      <ExperienceItem key={title} title={title} accomplishments={accomplishments} />
    ))}
  </Page>
)

ExperiencePage.displayName = 'Experience'
