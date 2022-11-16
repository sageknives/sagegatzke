import { FunctionComponent } from "react";
import {
  CodePage,
  Context,
  RootPage,
  AboutPage,
  ContactPage,
  ExperiencePage,
} from "../pages";
import { Components } from "../pages/CodePage/Components";
import { Ideas } from "../pages/CodePage/Ideas";
import { SideBar } from "../pages/CodePage/SideBar";
import { Typescript } from "../pages/CodePage/Typescript";

interface Section {
  label?: string;
  path: string;
  component: FunctionComponent;
}

const categories = ["Stores", "Typescript", "Components", "Ideas"] as const;

export interface Page {
  index?: boolean;
  label?: string;
  path?: string;
  component: FunctionComponent;
  pages?: Page[];
  sections?: Section[];
  category?: typeof categories[number];
}

export const Pages: { [x: string]: Page } = {
  home: {
    index: true,
    label: RootPage.displayName,
    path: "/",
    component: RootPage,
    sections: [
      {
        label: AboutPage.displayName,
        path: `#${AboutPage.displayName}`,
        component: AboutPage,
      },
      {
        label: ExperiencePage.displayName,
        path: `#${ExperiencePage.displayName}`,
        component: ExperiencePage,
      },
      {
        label: ContactPage.displayName,
        path: `#${ContactPage.displayName}`,
        component: ContactPage,
      },
    ],
  },
  code: {
    path: "code",
    component: CodePage,
    label: CodePage.displayName,
    pages: [
      {
        index: true,
        path: "",
        component: SideBar,
        label: SideBar.displayName,
      },
      {
        path: Context.displayName?.toLowerCase(),
        component: Context,
        label: Context.displayName,
        category: "Stores",
      },
      {
        path: Typescript.displayName?.toLowerCase(),
        component: Typescript,
        label: Typescript.displayName,
        category: "Typescript",
      },
      {
        path: Components.displayName?.toLowerCase(),
        component: Components,
        label: Components.displayName,
        category: "Components",
      },
      {
        path: Ideas.displayName?.toLowerCase(),
        component: Ideas,
        label: Ideas.displayName,
        category: "Ideas",
      },
    ],
  },
};
export const globalNavigation = [...(Pages.home.sections || []), Pages.code];

export const codeSections = categories.map((item) => ({
  title: item,
  examples: Pages.code.pages
    ?.filter(({ category }) => category === item)
    .map(({ path }) => path) as string[],
}));
