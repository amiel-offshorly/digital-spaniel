import React from "react";

import { StyledLink } from "./styled";

type Props = {
  children: React.ReactNode;
  href: string;
};

const TextLink = ({ children, href }: Props) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

export default TextLink;
