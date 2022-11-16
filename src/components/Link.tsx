import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import { forwardRef, FunctionComponent } from "react";
import { Link as RRDLink, LinkProps as RRDLinkProps } from "react-router-dom";

export const Link: FunctionComponent<MuiLinkProps & RRDLinkProps> = forwardRef(
  ({ underline = "hover", ...props }, ref) => (
    <MuiLink ref={ref} component={RRDLink} {...props} underline={underline} />
  )
);
