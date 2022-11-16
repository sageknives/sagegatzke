import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListSubheader,
} from "@mui/material";
import { FunctionComponent } from "react";
import { Page, Link } from "../../components";
import { codeSections } from "../../constants";

export const SideBar: FunctionComponent<{
  onClose?: () => void;
  sidebar?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
}> = ({ onClose = () => {}, sidebar = false }) => (
  <Page p={0} mt="var(--space100)">
    <List
      sx={{
        flex: "1 1 auto",
        overflow: "scroll",
      }}
      disablePadding
    >
      <Box display="flex" flexDirection="column" gap="var(--space100)">
        {codeSections.map(({ title, examples }) => (
          <div key={title}>
            <ListSubheader sx={{ backgroundColor: "inherit", fontWeight: 700 }}>
              <Typography
                variant="button"
                sx={{ textDecoration: "underline", lineHeight: 0 }}
              >
                {title}
              </Typography>
            </ListSubheader>
            <li key={title}>
              <Box
                component="ul"
                my={0}
                mx={0}
                sx={{ listStyleType: "none", paddingInlineStart: 0 }}
              >
                {examples?.map((example) => (
                  <ListItem
                    key={example}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    button
                    component={Link}
                    to={`/code/${example.toLowerCase()}`}
                    onClick={onClose}
                  >
                    <ListItemText
                      primary={example}
                      sx={{
                        color: sidebar ? "#D5D7CE" : "inherit",
                      }}
                    />
                  </ListItem>
                ))}
              </Box>
            </li>
          </div>
        ))}
      </Box>
    </List>
  </Page>
);
