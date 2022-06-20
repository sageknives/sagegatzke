import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import { ExperiencePage } from "./Experience";

export const pages = [
  {
    label: AboutPage.displayName,
    content: <AboutPage />,
  },
  {
    label: ExperiencePage.displayName,
    content: <ExperiencePage />,
  },
  {
    label: ContactPage.displayName,
    content: <ContactPage />,
  },
];