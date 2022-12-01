interface Section {
  component: string
  label: string
}

const categories = ['Stores', 'Typescript', 'Components', 'Ideas'] as const

export interface Page {
  label: string
  index?: boolean
  component: string
  pages?: Page[]
  sections?: Section[]
  category?: typeof categories[number]
  description?: string
}

type RootPages = 'home' | 'code'

export const Pages: { [key in RootPages]: Page } = {
  home: {
    index: true,
    label: '',
    component: 'RootPage',
    sections: [
      {
        component: 'AboutPage',
        label: 'About',
      },
      {
        component: 'ExperiencePage',
        label: 'Experience',
      },
      {
        component: 'ContactPage',
        label: 'Contact',
      },
    ],
  },
  code: {
    label: 'Code',
    component: 'CodePage',
    pages: [
      {
        index: true,
        label: '',
        component: 'TableOfContents',
      },
      {
        label: 'Stores',
        description: 'Data Stores',
        component: 'TableOfContents',
        pages: [
          {
            label: 'Context',
            description: 'Fast context example',
            component: 'Context',
          },
        ],
      },
      {
        label: 'Typescript',
        description: 'Typescript Examples',
        component: 'TableOfContents',
        pages: [
          {
            label: 'Typescript',
            description: 'Coming Soon',
            component: 'Typescript',
          },
        ],
      },
      {
        label: 'Components',
        description: 'Component Examples',
        component: 'TableOfContents',
        pages: [
          {
            label: 'Components',
            description: 'Coming Soon',
            component: 'Components',
          },
        ],
      },
      {
        label: 'Ideas',
        description: 'Idea Stuff',
        component: 'TableOfContents',
        pages: [
          {
            label: 'Ideas',
            description: 'Todo list',
            component: 'Ideas',
          },
        ],
      },
      // {
      //   label: 'Typescript',
      //   description: 'Typescript stuff',
      //   component: 'Typescript',
      //   category: 'Typescript',
      // },
      // {
      //   label: 'Components',
      //   description: 'Component stuff',
      //   component: 'Components',
      //   category: 'Components',
      // },
      // {
      //   label: 'Ideas',
      //   description: 'Idea Stuff',
      //   component: 'Ideas',
      //   category: 'Ideas',
      // },
    ],
  },
}
export const globalNavigation: Array<Section | Page> = [...(Pages.home.sections || []), Pages.code]

export const codeSections = categories.map(item => ({
  title: item,
  examples: Pages.code.pages
    ?.filter(({ category }) => category === item)
    .map(section => section.component) as string[],
}))
