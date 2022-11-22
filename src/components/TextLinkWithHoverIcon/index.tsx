import React from "react";

import { Box } from "@mui/material";

import { StyledLink } from "./styled";

type Props = {
  children: React.ReactNode;
  href: string;
  hoverIcon: React.ReactNode;
};

const TextLinkWithHoverIcon = ({ children, href, hoverIcon }: Props) => {
  const [hover, setHover] = React.useState(false);

  return (
    <StyledLink
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {hover && (
        <Box
          sx={{
            width: "24px",
            height: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#506473",
            borderRadius: "50%",
          }}
        >
          {hoverIcon}
        </Box>
      )}
    </StyledLink>
  );
};

export default TextLinkWithHoverIcon;
