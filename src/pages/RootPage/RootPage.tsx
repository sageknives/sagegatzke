import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { Pages } from "../../constants";

export const RootPage: FunctionComponent = () => (
  <Box component="main">
    {Pages.home?.sections?.map(({ component: Component, label }) => (
      <div key={label}>
        <Component />
      </div>
    ))}
  </Box>
);

RootPage.displayName = "Root";
