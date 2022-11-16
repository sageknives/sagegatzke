import { FunctionComponent } from 'react'
import { Page, ExperienceItem } from '../../components'
import { experiences } from '../../constants/experiences'

export const ExperiencePage: FunctionComponent = () => (
  <Page title="Experience">
    {experiences.map(({ title, accomplishments }) => (
      <ExperienceItem
        key={title}
        title={title}
        accomplishments={accomplishments}
      />
    ))}
    {/* ​​2015 - 2016​Software developer– Puget Works
+ Created an Ionic 1 app prototype for client.
​​2014 - 2015​IT Intern – Trupanion LLC
+ Created an MVC C#, JS Web-App. Updated settings for different environments.
+ Created a WPF application that used Jira web services to save information for compliance reports.
 
​​2013 - 2014​Web developer and tester – Ososlo LLC
+ JavaScript, PHP, Magento.
+ Installed and tested plugins for a Magento ecommerce website.
 
​​2013 – 2014​Teacher Assistant/Tutor – Seattle Central College
+ Java, Android, PHP, C#, JavaScript, ASP.NET, WordPress, Theory of Design.
+ Helped create lesson plans, provided tutoring.
 
​​2013 - 2013​C# Programmer – World Health Organization
+ Created a ClickOnce app that interacted & updated specific WHO applications.
 
​​2008 - 2012​Lead/Assistant Manager– Health Solutions Network
+ Customer Support, Lead Fraud Prevention Agent.
    </Typography> */}
  </Page>
)

ExperiencePage.displayName = 'Experience'
